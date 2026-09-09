'use client';

import Link from 'next/link';
import { globalNavigation } from '@/data/navigation';
import MobileNavbar from '@/components/ui/MobileNavbar';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function NavbarShell() {
  return (
    <header className="w-full border-b border-slate-200 dark:border-white/10 bg-white/70 dark:bg-[#0B1221]/70 backdrop-blur-xl sticky top-0 z-50 transition-colors duration-300 shadow-sm">
      <div className="w-full px-6 lg:px-12 h-20 flex items-center justify-between relative">
        
        {/* Far Left: Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900 dark:text-white z-50 group flex-shrink-0">
          <div className="w-9 h-9 rounded-full bg-[#E6007F] flex items-center justify-center text-white text-xs font-bold group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(230,0,127,0.4)]">HP</div>
          <span><span className="text-[#E6007F]">HULT PRIZE</span> <span className="text-sm font-medium opacity-80">at</span> GUB</span>
        </Link>
        
        {/* Center: Navigation Links (Absolute Centered) */}
        <nav className="hidden xl:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
          {globalNavigation.map((item) => {
            if (item.label === 'Partners') {
              return (
                <div key={item.label} className="relative group">
                  <button className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#E6007F] dark:hover:text-[#E6007F] transition-colors py-8 flex items-center gap-1">
                    {item.label} <span className="text-[10px] opacity-60">▼</span>
                  </button>
                  <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-56 bg-white/95 dark:bg-[#131B2F]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full transition-all duration-300 flex flex-col overflow-hidden">
                    <Link href="/partners#sponsors" className="px-5 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors border-b border-slate-100 dark:border-white/5">Title Sponsors</Link>
                    <Link href="/partners#food" className="px-5 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors border-b border-slate-100 dark:border-white/5">Food & Beverage Partner</Link>
                    <Link href="/partners#stationary" className="px-5 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors border-b border-slate-100 dark:border-white/5">Stationary Partner</Link>
                    <Link href="/partners#media" className="px-5 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">Media Partner</Link>
                  </div>
                </div>
              );
            }
            return (
              <Link 
                key={item.label} 
                href={item.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#E6007F] dark:hover:text-[#E6007F] transition-colors"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Far Right: CTA & Theme Toggle */}
        <div className="hidden xl:flex items-center gap-5 flex-shrink-0">
          <ThemeToggle />
          <Link 
            href="/sponsor" 
            className="text-sm font-bold bg-[#E6007F] text-white px-7 py-3 rounded-full hover:bg-[#A30A7B] transition-all hover:scale-105 shadow-[0_4px_14px_0_rgba(230,0,127,0.39)]"
          >
            Become a Sponsor
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex xl:hidden items-center gap-3 flex-shrink-0">
          <ThemeToggle />
          <MobileNavbar navItems={globalNavigation} />
        </div>
      </div>
    </header>
  );
}