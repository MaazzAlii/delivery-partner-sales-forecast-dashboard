import type { Metadata } from "next";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import { Lock, Mail, CheckCircle2, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Internal Outreach Tracker — SafeX Internship Evidence",
  description: "Internal process evidence log tracking organization outreach.",
  robots: {
    index: false,
    follow: false,
  },
};

interface OutreachLog {
  organization: string;
  platform: string;
  contactRole: string;
  dateContacted: string;
  responseStatus: string;
  followUpNeeded: string;
  notes: string;
}

export default async function InternalOutreachPage() {
  const outreachLogs: OutreachLog[] = [
    {
      organization: "Islamabad Chamber of Commerce & Industry (ICCI) - Small Business Committee",
      platform: "LinkedIn / Official Email",
      contactRole: "Mr. Tanveer Ahmed (SME Committee Convenor)",
      dateContacted: "2026-08-27",
      responseStatus: "Awaiting Response",
      followUpNeeded: "Yes (Due 2026-09-02)",
      notes: "Drafted introduction memo sharing Careem partner forecasting framework for local restaurant members.",
    },
    {
      organization: "Rawalpindi Food Merchants Association (RFMA)",
      platform: "Direct Email / Contact Form",
      contactRole: "Secretary Office",
      dateContacted: "2026-08-28",
      responseStatus: "Response Received - Interested",
      followUpNeeded: "Yes (Schedule Call)",
      notes: "Requested copy of business recommendation memo for local food delivery partners.",
    },
    {
      organization: "National Incubation Center (NIC) Islamabad - FoodTech Incubator",
      platform: "LinkedIn InMail",
      contactRole: "Program Officer (Retail & FoodTech)",
      dateContacted: "2026-08-28",
      responseStatus: "Awaiting Response",
      followUpNeeded: "Yes (Due 2026-09-03)",
      notes: "Shared portfolio link demonstrating predictive analytics for small-scale Careem partners.",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Disclaimer Banner */}
      <DisclaimerBanner />

      {/* Internal Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
          <Lock className="w-3.5 h-3.5" />
          <span>Internal Internship Process Evidence • Private Route</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
          Organization Outreach Tracker
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Evidence Log of Professional & Academic Outreach to Islamabad/Rawalpindi Target Organizations
        </p>
      </div>

      {/* Outreach Log Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-xs uppercase tracking-wider text-slate-400 bg-slate-950">
                <th className="py-3.5 px-4 font-semibold">Target Organization</th>
                <th className="py-3.5 px-4 font-semibold">Channel / Platform</th>
                <th className="py-3.5 px-4 font-semibold">Contact Role</th>
                <th className="py-3.5 px-4 font-semibold">Date Contacted</th>
                <th className="py-3.5 px-4 font-semibold">Response Status</th>
                <th className="py-3.5 px-4 font-semibold">Follow-up Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {outreachLogs.map((log, idx) => {
                const isInterested = log.responseStatus.includes("Interested");
                return (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-4 font-semibold text-slate-200">
                      <div>{log.organization}</div>
                      <div className="text-xs text-slate-400 font-normal mt-0.5">{log.notes}</div>
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-300 flex items-center gap-1.5 mt-2 sm:mt-0">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      {log.platform}
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-300">{log.contactRole}</td>
                    <td className="py-4 px-4 text-xs text-slate-400 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {log.dateContacted}
                      </div>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      {isInterested ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          <CheckCircle2 className="w-3 h-3" />
                          {log.responseStatus}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          <Clock className="w-3 h-3" />
                          {log.responseStatus}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-300 font-medium whitespace-nowrap">
                      {log.followUpNeeded}
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
