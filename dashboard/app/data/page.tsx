"use client";

import { useEffect, useState } from "react";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import { Download, Search, ArrowUpDown, Calendar } from "lucide-react";

interface ForecastRecord {
  month: string;
  actualOrders: number | null;
  predictedOrders: number | null;
  actualRevenue: number | null;
  predictedRevenue: number | null;
}

export default function DataExplorerPage() {
  const [data, setData] = useState<ForecastRecord[]>([]);
  const [disclaimer, setDisclaimer] = useState("");
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<"month" | "actualOrders" | "actualRevenue">("month");
  const [sortAsc, setSortAsc] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/data/forecast.json");
        const json = await res.json();
        setDisclaimer(json.disclaimer || "");
        setData(json.forecast || []);
      } catch (err) {
        console.error("Failed to load forecast data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleSort = (field: "month" | "actualOrders" | "actualRevenue") => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const filteredData = data.filter((row) =>
    row.month.toLowerCase().includes(search.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    let valA = a[sortField] ?? 0;
    let valB = b[sortField] ?? 0;

    if (typeof valA === "string" && typeof valB === "string") {
      return sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
    }
    return sortAsc ? (valA as number) - (valB as number) : (valB as number) - (valA as number);
  });

  const exportCSV = () => {
    if (!data.length) return;
    const headers = [
      "Month",
      "Actual Orders",
      "Predicted Orders",
      "Actual Revenue (PKR)",
      "Predicted Revenue (PKR)",
      "Status",
    ];

    const rows = data.map((item) => [
      item.month,
      item.actualOrders ?? "",
      item.predictedOrders ?? "",
      item.actualRevenue ?? "",
      item.predictedRevenue ?? "",
      item.actualOrders === null ? "3-Month Forecast" : "Historical Actual",
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "delivery_partner_forecast_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-slate-400">
        <div className="animate-pulse flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-medium">Loading dataset table...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Disclaimer Banner */}
      <DisclaimerBanner text={disclaimer} />

      {/* Header & CSV Download */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
            Data Explorer & Raw Metrics Feed
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            24 Historical Actual Months + 3 Out-of-Sample Forecast Months ({data.length} Total Records)
          </p>
        </div>

        <button
          onClick={exportCSV}
          className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg shadow-indigo-500/20 transition-all self-start sm:self-auto"
        >
          <Download className="w-4 h-4" />
          <span>Export Dataset to CSV</span>
        </button>
      </div>

      {/* Controls Bar: Search & Sort Info */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Filter by month (e.g. 2025-03)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span>Sort by:</span>
          <button
            onClick={() => handleSort("month")}
            className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors ${
              sortField === "month"
                ? "bg-slate-800 border-indigo-500/40 text-indigo-400"
                : "border-slate-800 hover:bg-slate-800/50 text-slate-300"
            }`}
          >
            Month <ArrowUpDown className="w-3 h-3" />
          </button>
          <button
            onClick={() => handleSort("actualOrders")}
            className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors ${
              sortField === "actualOrders"
                ? "bg-slate-800 border-indigo-500/40 text-indigo-400"
                : "border-slate-800 hover:bg-slate-800/50 text-slate-300"
            }`}
          >
            Orders <ArrowUpDown className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Dataset Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-xs uppercase tracking-wider text-slate-400 bg-slate-950">
                <th className="py-3.5 px-4 font-semibold">Month</th>
                <th className="py-3.5 px-4 font-semibold text-right">Actual Orders</th>
                <th className="py-3.5 px-4 font-semibold text-right">Predicted Orders</th>
                <th className="py-3.5 px-4 font-semibold text-right">Actual Revenue (PKR)</th>
                <th className="py-3.5 px-4 font-semibold text-right">Predicted Revenue (PKR)</th>
                <th className="py-3.5 px-4 font-semibold text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {sortedData.map((row) => {
                const isFuture = row.actualOrders === null;
                return (
                  <tr
                    key={row.month}
                    className={`transition-colors hover:bg-slate-800/40 ${
                      isFuture ? "bg-indigo-950/20" : ""
                    }`}
                  >
                    <td className="py-3.5 px-4 font-medium text-slate-200 flex items-center gap-2">
                      <Calendar className={`w-4 h-4 ${isFuture ? "text-indigo-400" : "text-slate-500"}`} />
                      {row.month}
                    </td>
                    <td className="py-3.5 px-4 text-right font-semibold text-slate-200">
                      {row.actualOrders !== null ? row.actualOrders.toLocaleString() : "—"}
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-indigo-400">
                      {row.predictedOrders !== null ? Math.round(row.predictedOrders).toLocaleString() : "—"}
                    </td>
                    <td className="py-3.5 px-4 text-right text-slate-300 font-mono text-xs">
                      {row.actualRevenue !== null ? `PKR ${Math.round(row.actualRevenue).toLocaleString()}` : "—"}
                    </td>
                    <td className="py-3.5 px-4 text-right text-slate-300 font-mono text-xs">
                      {row.predictedRevenue !== null ? `PKR ${Math.round(row.predictedRevenue).toLocaleString()}` : "—"}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {isFuture ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                          Forecast
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-800 text-slate-400">
                          Historical
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
