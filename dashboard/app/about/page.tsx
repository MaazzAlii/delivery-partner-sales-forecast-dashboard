"use client";

import DisclaimerBanner from "@/components/DisclaimerBanner";
import {
  BookOpen,
  Cpu,
  TrendingUp,
  AlertTriangle,
  Award,
  Database,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";

export default function MethodologyPage() {
  return (
    <div className="space-y-8">
      {/* Disclaimer Banner */}
      <DisclaimerBanner />

      {/* Explicit Brand Non-Affiliation Box */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2 text-xs text-slate-300">
        <div className="flex items-center gap-2 font-bold text-amber-400 text-sm">
          <ShieldAlert className="w-4 h-4" />
          <span>Independent Student Project Notice</span>
        </div>
        <p className="leading-relaxed font-medium text-slate-200">
          This is an independent student project analyzing a hypothetical delivery-partner business; it is not affiliated with, endorsed by, or produced in partnership with Careem.
        </p>
      </div>

      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight flex items-center gap-3">
          <BookOpen className="w-7 h-7 text-indigo-400" />
          Methodology & Project Specifications
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Technical Breakdown of Dataset Generation, Forecasting Models, Evaluation Metrics, and Scope
        </p>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1: Data Architecture & Disclaimer */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4 shadow-lg">
          <div className="flex items-center gap-2 text-indigo-400 font-bold text-base border-b border-slate-800 pb-3">
            <Database className="w-5 h-5" />
            <span>Dataset Simulation & Architecture</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            This predictive dashboard relies on a 24-month synthetic dataset (Sept 2024 – Aug 2026) simulating monthly order volume, revenue (PKR), active promotion days, rainy weather days, and Ramadan flags for an independent restaurant operating via a delivery platform in the Rawalpindi/Islamabad region.
          </p>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs text-slate-400">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider">Key Data Parameters</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Random Seed: <code className="text-indigo-400">42</code> (100% reproducible)</li>
              <li>Underlying Growth Trend: +22 orders / month</li>
              <li>Winter Demand Elevation: +14% (Nov–Feb)</li>
              <li>Ramadan Order Surge: +18% (March 2025 & March 2026)</li>
              <li>Monsoon / Rain Surge: +1.5% per rainy day</li>
            </ul>
          </div>
        </div>

        {/* Card 2: Algorithms Explained */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4 shadow-lg">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-base border-b border-slate-800 pb-3">
            <Cpu className="w-5 h-5" />
            <span>Forecasting Algorithms in Plain Language</span>
          </div>
          <div className="space-y-3 text-xs text-slate-300">
            <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
              <h4 className="font-bold text-slate-200 text-sm mb-1">Simple Moving Average (SMA-6)</h4>
              <p className="leading-relaxed">
                Calculates future order volume by taking the simple average of the previous 6 months. While simple, it lags behind sudden seasonal spikes like Ramadan because it cannot anticipate future events.
              </p>
            </div>
            <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
              <h4 className="font-bold text-indigo-400 text-sm mb-1">Multiple Linear Regression (Champion)</h4>
              <p className="leading-relaxed">
                Learns mathematical relationships between order volume and specific operational drivers — including time index, calendar month sine/cosine seasonality, active marketing promo days, rainy days, and Ramadan calendar flags.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Model Selection & Accuracy Comparison */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4 shadow-lg">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-base border-b border-slate-800 pb-3">
          <TrendingUp className="w-5 h-5" />
          <span>Why Linear Regression Was Selected</span>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Both models were backtested against the final 6 historical months (March 2026 – August 2026) using chronological train/test splits. Linear Regression achieved a <strong>2.75% MAPE</strong> (~51 orders/month error margin), outperforming the baseline Moving Average (<strong>7.96% MAPE</strong>, ~148 orders/month error) by <strong>65.5%</strong>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-1">
            <span className="text-xs text-slate-400 uppercase tracking-wider">Baseline SMA-6 Error</span>
            <div className="text-2xl font-black text-rose-400">7.96% MAPE</div>
            <p className="text-[11px] text-slate-500">Average error ~148 orders / mo</p>
          </div>
          <div className="bg-indigo-950/20 p-4 rounded-xl border border-indigo-500/30 text-center space-y-1">
            <span className="text-xs text-indigo-400 uppercase tracking-wider">Champion Regression Error</span>
            <div className="text-2xl font-black text-indigo-400">2.75% MAPE</div>
            <p className="text-[11px] text-indigo-300/80">Average error ~51 orders / mo</p>
          </div>
        </div>
      </div>

      {/* Limitations & Internship Credits */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Honest Limitations */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-3">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
            <AlertTriangle className="w-4 h-4" />
            <span>Model & Dataset Limitations</span>
          </div>
          <ul className="list-disc pl-4 text-xs text-slate-300 space-y-2 leading-relaxed">
            <li>
              <strong>Sample Size Constraints:</strong> 24 monthly periods provide a compact time-series baseline; longer multi-year histories refine seasonal precision.
            </li>
            <li>
              <strong>External Shocks:</strong> Synthetic data does not model unexpected local disruptions (e.g. nearby competitor openings, road construction, macro inflation shifts).
            </li>
            <li>
              <strong>Merchant Scope:</strong> Parameters are calibrated specifically for small independent restaurant partners in Rawalpindi/Islamabad.
            </li>
          </ul>
        </div>

        {/* Project Credits */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950/40 border border-indigo-500/30 rounded-xl p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
              <Award className="w-5 h-5" />
              <span>Project Credits & Internship Context</span>
            </div>
            <p className="text-sm font-semibold text-slate-100">
              Delivery Partner Sales Forecast — Case Study
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Developed by <strong>Maaz Ali</strong> as part of the <strong>SafeX Solutions Internship Program</strong> (Week 4 Deliverable, AI & ML Department, Group 56).
            </p>
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Repository License: Educational / Open</span>
            <a
              href="https://github.com/MaazzAlii/delivery-partner-sales-forecast-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-indigo-400 hover:underline font-semibold"
            >
              <span>GitHub Code Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
