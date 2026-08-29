"use client";

import { useEffect, useState } from "react";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import {
  Lightbulb,
  CheckCircle2,
  TrendingUp,
  Boxes,
  Users,
  Megaphone,
} from "lucide-react";

interface Recommendation {
  id: string;
  category: string;
  title: string;
  targetMetric: string;
  rationale: string;
  actionItems: string[];
}

interface RecData {
  disclaimer: string;
  recommendations: Recommendation[];
}

export default function RecommendationsPage() {
  const [data, setData] = useState<RecData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/content/recommendations.json");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setData({
          disclaimer:
            "SYNTHETIC DATA — Independent student project analyzing a hypothetical delivery-partner business for SafeX Solutions Internship (Week 4, Group 56). Not affiliated with Careem.",
          recommendations: [
            {
              id: "rec-1",
              category: "Inventory & Supply Chain",
              title: "Pre-Winter Bulk Inventory & Packaging Procurement",
              targetMetric: "November 2026 Forecast: 2,136 Orders (+10.8% Growth)",
              rationale:
                "Monthly order volume is projected to ramp from 1,927 orders in September to 2,136 orders in November 2026 (+10.8% growth / +209 orders/month) as winter demand takes effect across Rawalpindi and Islamabad. Spot purchasing packaging in November risks stockouts and emergency procurement costs.",
              actionItems: [
                "Negotiate bulk supply contracts for eco-friendly packaging and dry spices by October 15 to lock in 5-8% volume discounts.",
                "Establish a mandatory 4-day safety stock buffer of high-demand packaging items starting November 1.",
                "Set up backup local produce suppliers to prevent delivery cancellations during peak winter demand surges.",
              ],
            },
            {
              id: "rec-2",
              category: "Kitchen Operations & Staffing",
              title: "Optimized Shift Scheduling for Peak Weekend Demand",
              targetMetric: "October & November Forecast: >2,000 Orders / Month",
              rationale:
                "Monthly order volume is forecast to break the 2,000 orders/month threshold in October (2,014 orders) and reach 2,136 orders in November, increasing kitchen dispatch pressure during weekend peak hours (7:00 PM – 10:00 PM).",
              actionItems: [
                "Add 2 part-time prep cooks for Friday through Sunday dinner shifts starting October 1.",
                "Cross-train front-of-house packaging staff on kitchen dispatch procedures to keep prep SLAs strictly under 20 minutes.",
                "Streamline high-margin combo meals to accelerate kitchen throughput during peak order bursts.",
              ],
            },
            {
              id: "rec-3",
              category: "Marketing & Platform Promo Timing",
              title: "Targeted Off-Peak & Rainy-Day Marketing Promotions",
              targetMetric: "September 2026 Transition: 1,927 Orders",
              rationale:
                "September represents a post-monsoon transition period with lower organic volume (1,927 orders). Regression coefficients show that active promo days (+11.75 orders/day) and rainy weather (+21.32 orders/day) significantly boost delivery demand.",
              actionItems: [
                "Schedule 8 targeted delivery platform banner promotions during September weekday afternoons (2:00 PM – 5:00 PM).",
                "Co-fund automated 'Rainy Day Free Delivery' campaigns during monsoon showers in Islamabad/Rawalpindi.",
                "Analyze customer re-order rates following promo redemptions to optimize marketing ROI.",
              ],
            },
          ],
        });
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const getCategoryIcon = (category: string) => {
    if (category.includes("Inventory")) return <Boxes className="w-5 h-5 text-amber-400" />;
    if (category.includes("Staffing") || category.includes("Operations")) return <Users className="w-5 h-5 text-blue-400" />;
    return <Megaphone className="w-5 h-5 text-indigo-400" />;
  };

  if (loading || !data) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-slate-400">
        <div className="animate-pulse flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-medium">Loading recommendations...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Disclaimer Banner */}
      <DisclaimerBanner text={data.disclaimer} />

      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight flex items-center gap-3">
          <Lightbulb className="w-7 h-7 text-amber-400" />
          Strategic Business Action Plan
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Operational Strategies & Action Items Derived Directly from Our Champion Forecast Model
        </p>
      </div>

      {/* 3 Actionable Recommendation Cards */}
      <div className="space-y-6">
        {data.recommendations.map((rec, idx) => (
          <div
            key={rec.id}
            className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-5 shadow-lg relative overflow-hidden"
          >
            {/* Recommendation Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  {getCategoryIcon(rec.category)}
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Recommendation #{idx + 1} • {rec.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-100 mt-0.5">{rec.title}</h3>
                </div>
              </div>

              <div className="self-start sm:self-auto bg-slate-950 border border-indigo-500/30 px-3 py-1.5 rounded-lg text-xs font-medium text-indigo-400 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-indigo-400" />
                <span>{rec.targetMetric}</span>
              </div>
            </div>

            {/* Forecast Rationale */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Data-Driven Rationale
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/60">
                {rec.rationale}
              </p>
            </div>

            {/* Owner Action Items Checklist */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Action Checklist for Restaurant Owner
              </h4>
              <div className="space-y-2.5">
                {rec.actionItems.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="flex items-start gap-3 bg-slate-950/40 p-3 rounded-lg border border-slate-800/40 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
