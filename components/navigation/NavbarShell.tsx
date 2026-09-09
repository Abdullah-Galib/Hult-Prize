import Link from 'next/link';
import { globalNavigation } from '@/data/navigation';
import MobileNavbar from '@/components/ui/MobileNavbar';
import ThemeToggle from '@/components/ui/ThemeToggle';

const partnerLinks = [
  { href: '/partners#sponsors', label: 'Title Sponsors' },
  { href: '/partners#food', label: 'Food & Beverage Partner' },
  { href: '/partners#stationary', label: 'Stationary Partner' },
  { href: '/partners#media', label: 'Media Partner' },
];

// Server component: all interactivity lives in ThemeToggle / MobileNavbar.
export default function NavbarShell() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/70 shadow-sm backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-navy/70">
      <div className="relative flex h-20 w-full items-center justify-between px-6 lg:px-12">

        {/* Far Left: Logo */}
        <Link href="/" className="group z-50 flex flex-shrink-0 items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-pink text-xs font-bold text-white shadow-[0_0_15px_rgba(230,0,127,0.4)] transition-transform group-hover:scale-110">HP</div>
          <span>
            <span className="text-brand-pink">HULT PRIZE</span>{' '}
            <span className="text-sm font-medium opacity-80">at</span> GUB
          </span>
        </Link>

        {/* Center: Navigation Links (Absolute Centered) */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 xl:flex" aria-label="Main navigation">
          {globalNavigation.map((item) => {
            if (item.label === 'Partners') {
              return (
                <div key={item.label} className="group relative">
                  <button
                    type="button"
                    aria-haspopup="true"
                    className="flex items-center gap-1 py-8 text-sm font-medium text-slate-600 transition-colors hover:text-brand-pink focus:text-brand-pink focus:outline-none dark:text-slate-300 dark:hover:text-brand-pink"
                  >
                    {item.label} <span className="text-[10px] opacity-60">▼</span>
                  </button>
                  {/* Opens on hover AND keyboard focus (focus-within) */}
                  <div className="invisible absolute left-1/2 top-full flex w-56 -translate-x-1/2 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/95 opacity-0 shadow-2xl backdrop-blur-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 dark:border-white/10 dark:bg-navy-light/95">
                    {partnerLinks.map((link, i) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`px-5 py-3 text-sm text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5 ${
                          i < partnerLinks.length - 1 ? 'border-b border-slate-100 dark:border-white/5' : ''
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-pink dark:text-slate-300 dark:hover:text-brand-pink"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Far Right: CTA & Theme Toggle */}
        <div className="hidden flex-shrink-0 items-center gap-5 xl:flex">
          <ThemeToggle />
          <Link href="/sponsor" className="btn-primary px-7 py-3 shadow-[0_4px_14px_0_rgba(230,0,127,0.39)] hover:scale-105">
            Become a Sponsor
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex flex-shrink-0 items-center gap-3 xl:hidden">
          <ThemeToggle />
          <MobileNavbar navItems={globalNavigation} />
        </div>
      </div>
    </header>
  );
}
