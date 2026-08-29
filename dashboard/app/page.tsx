"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  TrendingDown,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Calendar,
  AlertTriangle,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface KPIFeed {
  disclaimer: string;
  latestMonth: string;
  latestActualOrders: number;
  latestActualRevenue: number;
  momGrowthPct: number;
  nextMonth: string;
  nextMonthForecastOrders: number;
  nextMonthForecastRevenue: number;
  championModel: string;
  orderMapePct: number;
  revenueMapePct: number;
  totalHistoricalMonths: number;
  totalForecastMonths: number;
}

interface ForecastRecord {
  month: string;
  actualOrders: number | null;
  predictedOrders: number | null;
  actualRevenue: number | null;
  predictedRevenue: number | null;
}

export default function OverviewPage() {
  const [kpis, setKpis] = useState<KPIFeed | null>(null);
  const [forecast, setForecast] = useState<ForecastRecord[]>([]);
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
        console.error("Failed to load dashboard data:", err);
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
          <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-medium">Loading partner analytics...</p>
        </div>
      </div>
    );
  }

  // Slice last 6 actual months + 3 forecast months for preview chart
  const previewData = forecast.slice(18, 27).map((item) => ({
    month: item.month,
    Orders: item.actualOrders ?? item.predictedOrders,
    isForecast: item.actualOrders === null,
  }));

  const isGrowthPositive = kpis.momGrowthPct >= 0;

  return (
    <div className="space-y-8">
      {/* Non-dismissible Synthetic Data Banner */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex items-start gap-3 text-amber-300 text-sm">
        <AlertTriangle className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
        <div>
          <h4 className="font-semibold text-amber-200">Educational Simulation Disclaimer</h4>
          <p className="text-xs text-amber-300/90 mt-0.5">{kpis.disclaimer}</p>
        </div>
      </div>

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
            Partner Business Overview
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Rawalpindi / Islamabad Careem NOW Restaurant Partner Performance & 3-Month Demand Outlook
          </p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto text-xs bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300">
          <Calendar className="w-4 h-4 text-emerald-400" />
          <span>Active Period: Sept 2024 – Nov 2026</span>
        </div>
      </div>

      {/* 4 Primary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1: Latest Actual Volume */}
        <div className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all rounded-xl p-5 space-y-3 relative overflow-hidden group">
          <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-500/5 rounded-full group-hover:scale-125 transition-transform" />
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Latest Month Volume ({kpis.latestMonth})
            </span>
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <ShoppingBag className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-black text-slate-100">
              {kpis.latestActualOrders.toLocaleString()}{" "}
              <span className="text-sm font-normal text-slate-400">orders</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Revenue: <strong className="text-slate-200">PKR {kpis.latestActualRevenue.toLocaleString()}</strong>
            </p>
          </div>
        </div>

        {/* Card 2: MoM % Growth */}
        <div className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all rounded-xl p-5 space-y-3 relative overflow-hidden group">
          <div
            className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full group-hover:scale-125 transition-transform ${
              isGrowthPositive ? "bg-emerald-500/5" : "bg-rose-500/5"
            }`}
          />
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              MoM Order Growth
            </span>
            <div
              className={`p-2 rounded-lg ${
                isGrowthPositive ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"
              }`}
            >
              {isGrowthPositive ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <div
                className={`text-3xl font-black ${
                  isGrowthPositive ? "text-emerald-400" : "text-rose-400"
                }`}
              >
                {isGrowthPositive ? `+${kpis.momGrowthPct}%` : `${kpis.momGrowthPct}%`}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-1">Vs prior month operational volume</p>
          </div>
        </div>

        {/* Card 3: Next Month Forecast */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 border border-emerald-500/30 rounded-xl p-5 space-y-3 relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Next Month Forecast ({kpis.nextMonth})
            </span>
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-black text-emerald-300">
              {Math.round(kpis.nextMonthForecastOrders).toLocaleString()}{" "}
              <span className="text-sm font-normal text-emerald-400/80">orders</span>
            </div>
            <p className="text-xs text-emerald-400/90 mt-1">
              Est. Revenue: <strong className="text-emerald-200">PKR {Math.round(kpis.nextMonthForecastRevenue).toLocaleString()}</strong>
            </p>
          </div>
        </div>

        {/* Card 4: Model Accuracy Benchmark */}
        <div className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all rounded-xl p-5 space-y-3 relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Forecast Accuracy
            </span>
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-black text-blue-400">
              {(100 - kpis.orderMapePct).toFixed(1)}%
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {kpis.championModel} (Error ~{kpis.orderMapePct}%)
            </p>
          </div>
        </div>
      </div>

      {/* Main Preview Chart Section */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              Recent Demand Trajectory & 3-Month Projection
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Showing last 6 historical actual months (March–Aug 2026) + 3 forward predicted months (Sept–Nov 2026)
            </p>
          </div>
          <Link
            href="/forecast"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 px-3.5 py-2 rounded-lg transition-all self-start sm:self-auto"
          >
            <span>View Full Interactive Chart</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="h-72 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={previewData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="orderGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00B14F" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#00B14F" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
              <XAxis dataKey="month" stroke="#64748B" fontSize={12} tickLine={false} />
              <YAxis stroke="#64748B" fontSize={12} tickLine={false} domain={["auto", "auto"]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0F172A",
                  borderColor: "#334155",
                  borderRadius: "0.75rem",
                  color: "#F8FAFC",
                  fontSize: "12px",
                }}
                formatter={(val: any) => [`${Math.round(Number(val) || 0).toLocaleString()} orders`, "Volume"]}
              />
              <Area
                type="monotone"
                dataKey="Orders"
                stroke="#00B14F"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#orderGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
