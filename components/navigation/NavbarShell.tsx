'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { globalNavigation } from '@/data/navigation';
import MobileNavbar from '@/components/ui/MobileNavbar';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function NavbarShell() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50">
      <header className={`w-full transition-all duration-500 flex items-center justify-between gap-4 px-6 lg:px-12 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 ${
        isScrolled 
          ? 'h-16 bg-white/90 dark:bg-[#0B1221]/90 shadow-md'
          : 'h-20 bg-white/70 dark:bg-[#0B1221]/70'
      }`}>
        
        {/* Logo - shrink-0 ensures it doesn't get squeezed */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight z-50 group shrink-0">
          <div className="w-9 h-9 rounded-full bg-[#E6007F] flex items-center justify-center text-white text-xs font-bold transition-transform group-hover:scale-110 shadow-[0_0_15px_rgba(230,0,127,0.4)]">HP</div>
          <span className="text-slate-900 dark:text-white hidden sm:block whitespace-nowrap">
            <span className="text-[#E6007F]">HULT PRIZE</span> <span className="text-sm font-medium opacity-80">at</span> GUB
          </span>
        </Link>
        
        {/* Navigation Links - Apple-style active state animation */}
        <nav className="hidden xl:flex items-center bg-slate-100/50 dark:bg-white/5 p-1 rounded-full backdrop-blur-md border border-slate-200 dark:border-white/10 absolute left-1/2 -translate-x-1/2">
          <Link 
            href="/"
            className={`text-[13px] whitespace-nowrap px-4 py-1.5 rounded-full transition-all duration-300 ${
              pathname === '/' 
                ? 'bg-gradient-to-b from-[#E6007F] to-[#C2006B] text-white font-bold shadow-[0_4px_12px_rgba(230,0,127,0.5)] scale-105' 
                : 'text-slate-600 dark:text-slate-300 font-medium hover:text-[#E6007F] dark:hover:text-[#E6007F] hover:bg-slate-200/50 dark:hover:bg-white/5'
            }`}
          >
            Home
          </Link>

          {globalNavigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            
            if (item.label === 'Partners') {
              return (
                <div key={item.label} className="relative group">
                  <button className={`text-[13px] whitespace-nowrap px-4 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1 ${
                    isActive 
                      ? 'bg-gradient-to-b from-[#E6007F] to-[#C2006B] text-white font-bold shadow-[0_4px_12px_rgba(230,0,127,0.5)] scale-105' 
                      : 'text-slate-600 dark:text-slate-300 font-medium hover:text-[#E6007F] dark:hover:text-[#E6007F] hover:bg-slate-200/50 dark:hover:bg-white/5'
                  }`}>
                    {item.label} <span className="text-[10px] opacity-60">▼</span>
                  </button>
                  
                  {/* Updated Dropdown */}
                  <div className="absolute top-[45px] left-1/2 -translate-x-1/2 w-56 bg-white/95 dark:bg-[#131B2F]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden">
                    <Link href="/partners/title-sponsors" className="px-5 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors border-b border-slate-100 dark:border-white/5">Title Sponsors</Link>
                    <Link href="/partners/food" className="px-5 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors border-b border-slate-100 dark:border-white/5">Food & Beverage Partner</Link>
                    <Link href="/partners/stationary" className="px-5 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors border-b border-slate-100 dark:border-white/5">Stationary Partner</Link>
                    <Link href="/partners/media" className="px-5 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">Media Partner</Link>
                  </div>
                </div>
              );
            }
            return (
              <Link 
                key={item.label} 
                href={item.href}
                className={`text-[13px] whitespace-nowrap px-4 py-1.5 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-b from-[#E6007F] to-[#C2006B] text-white font-bold shadow-[0_4px_12px_rgba(230,0,127,0.5)] scale-105' 
                    : 'text-slate-600 dark:text-slate-300 font-medium hover:text-[#E6007F] dark:hover:text-[#E6007F] hover:bg-slate-200/50 dark:hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Far Right: CTA & Theme Toggle */}
        <div className="hidden xl:flex items-center gap-4 shrink-0">
          <ThemeToggle />
          <Link 
            href="/sponsor" 
            className="text-[13px] whitespace-nowrap font-bold bg-[#E6007F] text-white px-6 py-2.5 rounded-full hover:bg-[#A30A7B] transition-all hover:scale-105 shadow-[0_4px_14px_0_rgba(230,0,127,0.39)]"
          >
            Become a Sponsor
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex xl:hidden items-center gap-3 shrink-0">
          <ThemeToggle />
          <MobileNavbar navItems={globalNavigation} />
        </div>
      </header>
    </div>
  );
}