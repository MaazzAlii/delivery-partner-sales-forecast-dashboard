"use client";

import { useEffect, useState } from "react";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ReferenceArea,
} from "recharts";
import { Sparkles, Calendar, BarChart3, Info } from "lucide-react";

interface KPIFeed {
  disclaimer: string;
  championModel: string;
  orderMapePct: number;
  revenueMapePct: number;
}

interface ForecastRecord {
  month: string;
  actualOrders: number | null;
  predictedOrders: number | null;
  actualRevenue: number | null;
  predictedRevenue: number | null;
}

export default function ForecastPage() {
  const [metric, setMetric] = useState<"orders" | "revenue">("orders");
  const [forecast, setForecast] = useState<ForecastRecord[]>([]);
  const [kpis, setKpis] = useState<KPIFeed | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [kpiRes, forecastRes] = await Promise.all([
          fetch("/data/kpis.json"),
          fetch("/data/forecast.json"),
        ]);
        const kpiData = await kpiRes.json();
        const forecastData = await forecastRes.json();

        setKpis(kpiData);
        setForecast(forecastData.forecast || []);
      } catch (err) {
        console.error("Failed to load forecast data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading || !kpis) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-slate-400">
        <div className="animate-pulse flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-medium">Loading forecast visualization...</p>
        </div>
      </div>
    );
  }

  // Format data for chart
  const chartData = forecast.map((item) => ({
    month: item.month,
    Actual: metric === "orders" ? item.actualOrders : item.actualRevenue ? item.actualRevenue / 1e6 : null,
    Predicted: metric === "orders" ? item.predictedOrders : item.predictedRevenue ? item.predictedRevenue / 1e6 : null,
    isFuture: item.actualOrders === null,
  }));

  const futureRecords = forecast.filter((item) => item.actualOrders === null);

  return (
    <div className="space-y-8">
      {/* Disclaimer Banner */}
      <DisclaimerBanner text={kpis.disclaimer} />

      {/* Header & Metric Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
            Sales & Order Demand Forecast
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            24-Month Historical Trajectory vs Multiple Linear Regression Predictions & 3-Month Forward Forecast
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="bg-slate-900 border border-slate-800 p-1 rounded-xl flex items-center gap-1 self-start sm:self-auto">
          <button
            onClick={() => setMetric("orders")}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              metric === "orders"
                ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/20"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Order Volume View
          </button>
          <button
            onClick={() => setMetric("revenue")}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              metric === "revenue"
                ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/20"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Revenue (Millions PKR)
          </button>
        </div>
      </div>

      {/* Main Interactive Recharts Line Chart */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
            <BarChart3 className="w-5 h-5 text-indigo-400" />
            <span>
              {metric === "orders" ? "Monthly Orders (Actual vs Model)" : "Monthly Revenue in Millions PKR (Actual vs Model)"}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
              <span className="text-slate-300">Actual Historical</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500 border border-dashed border-amber-300"></span>
              <span className="text-amber-400 font-semibold">Model / Forward Forecast</span>
            </div>
          </div>
        </div>

        <div className="h-80 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
              <XAxis dataKey="month" stroke="#64748B" fontSize={11} tickLine={false} />
              <YAxis stroke="#64748B" fontSize={11} tickLine={false} domain={["auto", "auto"]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0F172A",
                  borderColor: "#334155",
                  borderRadius: "0.75rem",
                  color: "#F8FAFC",
                  fontSize: "12px",
                }}
                formatter={(val: any, name: any) => [
                  metric === "orders"
                    ? `${Math.round(Number(val) || 0).toLocaleString()} orders`
                    : `PKR ${(Number(val) || 0).toFixed(2)}M`,
                  name === "Actual" ? "Actual Data" : "Model Prediction",
                ]}
              />
              <Legend wrapperStyle={{ paddingTop: "15px", fontSize: "12px" }} />
              {/* Highlight 3-Month Forward Forecast Region */}
              <ReferenceArea
                x1="2026-09"
                x2="2026-11"
                strokeOpacity={0.3}
                fill="#6366F1"
                fillOpacity={0.08}
              />
              <Line
                type="monotone"
                dataKey="Actual"
                stroke="#6366F1"
                strokeWidth={3}
                dot={{ fill: "#6366F1", r: 4 }}
                activeDot={{ r: 6 }}
                connectNulls={false}
              />
              <Line
                type="monotone"
                dataKey="Predicted"
                stroke="#FF8C00"
                strokeWidth={2.5}
                strokeDasharray="5 5"
                dot={{ fill: "#FF8C00", r: 3 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Forward 3-Month Projection Table & Accuracy Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Table Column (2 cols wide) */}
        <div className="lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              3-Month Forward Projection Detail
            </h3>
            <span className="text-xs text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md">
              Sept 2026 – Nov 2026
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-xs uppercase tracking-wider text-slate-400 bg-slate-950/50">
                  <th className="py-3 px-4">Forecast Month</th>
                  <th className="py-3 px-4 text-right">Predicted Orders</th>
                  <th className="py-3 px-4 text-right">Predicted Revenue (PKR)</th>
                  <th className="py-3 px-4">Key Demand Drivers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {futureRecords.map((item, idx) => (
                  <tr key={item.month} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-200 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-indigo-400" />
                      {item.month}
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-indigo-400">
                      {Math.round(item.predictedOrders || 0).toLocaleString()}
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-slate-200">
                      PKR {Math.round(item.predictedRevenue || 0).toLocaleString()}
                    </td>
                    <td className="py-3.5 px-4 text-xs text-slate-400">
                      {idx === 0
                        ? "Post-monsoon transition, steady promo baseline (8 days)"
                        : idx === 1
                        ? "Autumn stability, normal weather patterns"
                        : "Pre-winter demand ramp-up, evening delivery surge"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Model Accuracy Explanation Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
              <Info className="w-5 h-5" />
              <span>Model Accuracy Benchmark</span>
            </div>
            <h4 className="text-base font-bold text-slate-100">
              {kpis.championModel}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Our champion <strong>Multiple Linear Regression</strong> model was selected over baseline moving averages after rigorous 6-month out-of-sample backtesting.
            </p>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Order Volume Error Rate (MAPE):</span>
                <span className="font-bold text-indigo-400">{kpis.orderMapePct}%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Revenue Error Rate (MAPE):</span>
                <span className="font-bold text-indigo-400">{kpis.revenueMapePct}%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Average Order Variance:</span>
                <span className="font-bold text-slate-200">±51 orders / mo</span>
              </div>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 italic">
            In plain language: Forecasts are typically accurate within ~2.75% of actual monthly order counts.
          </p>
        </div>
      </div>
    </div>
  );
}
