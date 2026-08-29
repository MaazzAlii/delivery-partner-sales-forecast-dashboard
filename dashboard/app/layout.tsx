import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "CaremEats Partner Analytics — Predictive Dashboard",
  description: "Simulated order volume and revenue forecasting dashboard for small Careem NOW restaurant partners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans antialiased">
        {/* Synthetic Data Header Banner */}
        <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2 text-center text-xs text-amber-400 font-medium">
          ⚠️ <strong>SIMULATED DATA DISCLAIMER:</strong> Educational project for SafeX Solutions Internship (Week 4, Group 56). Not real Careem business figures.
        </div>

        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-6 py-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center font-bold text-slate-950 text-lg shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                C
              </div>
              <div>
                <h1 className="font-bold text-lg text-slate-100 tracking-tight flex items-center gap-2">
                  CaremEats <span className="text-emerald-400 text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">Partner Analytics</span>
                </h1>
                <p className="text-xs text-slate-400">Predictive Sales & Volume Forecasting</p>
              </div>
            </Link>

            <nav className="flex items-center gap-1 sm:gap-2 text-sm font-medium overflow-x-auto max-w-full pb-1 sm:pb-0">
              <Link href="/" className="px-3 py-2 rounded-lg text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60 transition-colors">
                Overview
              </Link>
              <Link href="/forecast" className="px-3 py-2 rounded-lg text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60 transition-colors">
                Forecast
              </Link>
              <Link href="/data" className="px-3 py-2 rounded-lg text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60 transition-colors">
                Data Explorer
              </Link>
              <Link href="/recommendations" className="px-3 py-2 rounded-lg text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60 transition-colors">
                Recommendations
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-lg text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60 transition-colors">
                Methodology
              </Link>
              <Link href="/outreach-tracker" className="px-3 py-2 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800/60 transition-colors text-xs border border-slate-800">
                Outreach Log 🔒
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800/80 bg-slate-900/50 py-6 px-6 text-center text-xs text-slate-500">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 CaremEats Partner Analytics • Group 56 (SafeX Solutions Internship)</p>
            <p className="text-slate-400">Data Status: 100% Synthetic & Simulated</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
