'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { NavItem } from '../../types';

interface MobileNavbarProps {
  navItems: NavItem[];
}

export default function MobileNavbar({ navItems }: MobileNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape / outside click.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('click', onClick);
    };
  }, [isOpen]);

  return (
    <div className="xl:hidden" ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-slate-900 focus:outline-none dark:text-slate-100"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute left-0 top-20 z-40 flex w-full flex-col border-b border-slate-100 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-navy-light"
        >
          <nav className="mb-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-slate-800 hover:text-brand-pink dark:text-slate-200 dark:hover:text-brand-pink"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/sponsor"
            onClick={() => setIsOpen(false)}
            className="btn-primary px-5 py-3 text-center"
          >
            Become a Sponsor
          </Link>
        </div>
      )}
    </div>
  );
}
