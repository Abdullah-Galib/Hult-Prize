import Link from 'next/link';
import DeveloperCredit from './DeveloperCredit';

export default function Footer() {
  return (
    <footer className="bg-[#080D18] border-t border-white/10 text-slate-400 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8">
        
        {/* Brand & Socials Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Removed whitespace-nowrap to prevent overlap */}
          <h3 className="font-bold text-2xl text-white leading-snug pr-4">
            Hult Prize <span className="text-[#E6007F]">at</span> <br className="hidden sm:block" />
            Green University of Bangladesh
          </h3>
          <p className="text-sm leading-relaxed max-w-sm">
            Empowering student changemakers through innovation and social entrepreneurship.
          </p>
          
          {/* Expanded Social Icons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="https://linkedin.com/company/hult-prize-at-green-university-of-bangladesh" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all hover:scale-110">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://facebook.com/hultprizegub" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all hover:scale-110">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="mailto:contact@hultprizegub.org" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E6007F] hover:border-[#E6007F] hover:text-white transition-all hover:scale-110">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
            </a>
            <a href="https://instagram.com/hultprizegub" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:border-transparent hover:text-white transition-all hover:scale-110">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://youtube.com/@hultprizegub" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white transition-all hover:scale-110">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Green+University+of+Bangladesh+Permanent+Campus+Dhaka" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#34A853] hover:border-[#34A853] hover:text-white transition-all hover:scale-110">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
            </a>
          </div>
          
          <div className="text-sm space-y-1 pt-4 border-t border-white/10">
            <a href="https://green.edu.bd" target="_blank" rel="noopener noreferrer" className="text-[#E6007F] font-semibold hover:underline inline-flex items-center gap-1">
              Green University of Bangladesh 
            </a>
            <p className="text-slate-500">Permanent Campus: Purbachal American City, Kanchpur, Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Links Column 1: Quick Links (Shifted to the right using lg:col-start-7) */}
        <div className="lg:col-span-2 lg:col-start-7 md:col-span-1">
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-[#E6007F] transition-colors">About Us</Link></li>
            <li><Link href="/impact" className="hover:text-[#E6007F] transition-colors">Our Impact</Link></li>
            <li><Link href="/events" className="hover:text-[#E6007F] transition-colors">Events Archive</Link></li>
            <li><Link href="/sponsorship" className="hover:text-[#E6007F] transition-colors">Sponsorship</Link></li>
            <li>
              <a href="https://www.hultprize.org/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFDA00] transition-colors flex items-center gap-1 font-medium">
                EF Hult Prize Global 
              </a>
            </li>
          </ul>
        </div>

        {/* Links Column 2: Legal */}
        <div className="lg:col-span-2 md:col-span-1">
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/privacy" className="hover:text-[#E6007F] transition-colors">Privacy Notice</Link></li>
            <li><Link href="/terms" className="hover:text-[#E6007F] transition-colors">Terms of Use</Link></li>
            <li><Link href="/contact" className="hover:text-[#E6007F] transition-colors">Contact Center</Link></li>
          </ul>
        </div>

        {/* Links Column 3: Resources */}
        <div className="lg:col-span-2 md:col-span-2">
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Resources</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/sponsor#pitch" className="hover:text-[#E6007F] transition-colors">Pitch Deck (Official)</Link></li>
            <li><Link href="/gallery" className="hover:text-[#E6007F] transition-colors">Media Gallery</Link></li>
            <li><Link href="#" className="hover:text-[#E6007F] transition-colors">Pitch Tutorials</Link></li>
            <li><Link href="#" className="hover:text-[#E6007F] transition-colors">Brand Guidelines</Link></li>
          </ul>
        </div>

      </div>

      {/* Developer Credit */}
      <DeveloperCredit />
    </footer>
  );
}