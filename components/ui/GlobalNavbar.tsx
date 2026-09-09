import Link from 'next/link';
import { globalNavigation } from '../../data/navigation';

export default function GlobalNavbar() {
  return (
    <header className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight text-gray-900">
          <span className="text-[#E6007F]">HULT PRIZE</span> GUB
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center">
          {globalNavigation.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-[#E6007F] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link 
            href="/sponsor" 
            className="text-sm font-semibold bg-[#E6007F] text-white px-5 py-2.5 rounded hover:bg-[#A30A7B] transition-colors"
          >
            Become a Sponsor
          </Link>
        </div>
      </div>
    </header>
  );
}