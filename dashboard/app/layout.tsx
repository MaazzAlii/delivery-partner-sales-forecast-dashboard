"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, ShieldAlert } from "lucide-react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Overview" },
    { href: "/forecast", label: "Forecast" },
    { href: "/data", label: "Data Explorer" },
    { href: "/recommendations", label: "Recommendations" },
    { href: "/about", label: "Methodology" },
  ];

  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans antialiased selection:bg-indigo-500 selection:text-slate-950">
        {/* Top Disclaimer Banner */}
        <div className="bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-amber-500/20 border-b border-amber-500/30 px-4 py-2 text-center text-xs text-amber-300 font-medium flex items-center justify-center gap-2">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>
            <strong>SIMULATED DATA DISCLAIMER:</strong> Educational case study for SafeX Solutions Internship (Week 4, Group 56). Independent student project; not affiliated with Careem.
          </span>
        </div>

        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-xl border-b border-slate-800 px-4 sm:px-6 py-3.5">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-all">
                D
              </div>
              <div>
                <h1 className="font-extrabold text-base sm:text-lg text-slate-100 tracking-tight flex items-center gap-2">
                  Delivery Partner Sales Forecast{" "}
                  <span className="text-indigo-400 text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30">
                    Case Study
                  </span>
                </h1>
                <p className="text-[11px] text-slate-400 font-medium">Predictive Demand & Revenue Analytics</p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1.5 text-xs font-semibold">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3.5 py-2 rounded-lg transition-all ${
                      isActive
                        ? "bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 shadow-sm"
                        : "text-slate-300 hover:text-indigo-400 hover:bg-slate-800/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/internal/outreach"
                className="ml-2 px-3 py-1.5 rounded-lg text-amber-400 hover:bg-amber-500/10 border border-amber-500/20 transition-all text-[11px] font-bold flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Outreach Log 🔒</span>
              </Link>
            </nav>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-800 text-slate-200 hover:text-indigo-400 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Collapsible Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-3 border-t border-slate-800 mt-3 space-y-1.5 animate-fadeIn">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-indigo-500/15 text-indigo-400 border border-indigo-500/30"
                        : "text-slate-300 hover:bg-slate-800/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/internal/outreach"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20"
              >
                Outreach Log 🔒 (Internal Process Evidence)
              </Link>
            </div>
          )}
        </header>

        {/* Main Application Canvas */}
        <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800/80 bg-slate-900/60 py-6 px-6 text-center text-xs text-slate-500">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 Delivery Partner Sales Forecast — Case Study • Group 56 (SafeX Solutions Internship)</p>
            <p className="text-slate-400">100% Synthetic Educational Simulation • Independent Student Project</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
