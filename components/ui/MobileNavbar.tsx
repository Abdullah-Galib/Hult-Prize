'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NavItem } from '../../types';

interface MobileNavbarProps {
  navItems: NavItem[];
}

export default function MobileNavbar({ navItems }: MobileNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-900 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg flex flex-col p-6 z-40">
          <nav className="flex flex-col gap-4 mb-6">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="text-lg font-medium text-gray-800 hover:text-[#E6007F]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link 
            href="/sponsor" 
            onClick={() => setIsOpen(false)}
            className="text-center bg-[#E6007F] text-white px-5 py-3 rounded font-bold hover:bg-[#A30A7B]"
          >
            Become a Sponsor
          </Link>
        </div>
      )}
    </div>
  );
}