import Link from 'next/link';
import DeveloperCredit from './DeveloperCredit';

export default function Footer() {
  return (
    <footer className="bg-[#080D18] border-t border-white/10 text-slate-400 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Brand & Socials Column */}
        <div className="md:col-span-5 space-y-6">
          <h3 className="font-bold text-2xl text-white whitespace-nowrap">
            Hult Prize <span className="text-[#E6007F]">at</span> Green University of Bangladesh
          </h3>
          <p className="text-sm leading-relaxed max-w-sm">
            Empowering student changemakers through innovation and social entrepreneurship.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-2">
            <a href="https://linkedin.com/company/hult-prize-at-green-university-of-bangladesh" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all hover:scale-110">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://facebook.com/hultprizegub" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all hover:scale-110">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="mailto:contact@hultprizegub.org" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E6007F] hover:text-white transition-all hover:scale-110">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
            </a>
          </div>

          <div className="text-sm space-y-1 pt-4 border-t border-white/10">
            <a href="https://green.edu.bd" target="_blank" rel="noopener noreferrer" className="text-[#E6007F] font-semibold hover:underline inline-flex items-center gap-1">
              Green University of Bangladesh ↗
            </a>
            <p className="text-slate-500">Permanent Campus: Purbachal American City, Kanchpur, Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="md:col-span-3 md:col-start-7">
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-[#E6007F] transition-colors">About Us</Link></li>
            <li><Link href="/impact" className="hover:text-[#E6007F] transition-colors">Our Impact</Link></li>
            <li><Link href="/events" className="hover:text-[#E6007F] transition-colors">Events Archive</Link></li>
            <li><Link href="/sponsorship" className="hover:text-[#E6007F] transition-colors">Sponsorship</Link></li>
            <li>
              <a href="https://www.hultprize.org/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFDA00] transition-colors flex items-center gap-1 font-medium">
                EF Hult Prize Global ↗
              </a>
            </li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="md:col-span-3">
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/privacy" className="hover:text-[#E6007F] transition-colors">Privacy Notice</Link></li>
            <li><Link href="/terms" className="hover:text-[#E6007F] transition-colors">Terms of Use</Link></li>
            <li><Link href="/contact" className="hover:text-[#E6007F] transition-colors">Contact Center</Link></li>
          </ul>
        </div>
      </div>

      {/* Developer Credit placed cleanly at the bottom */}
      <DeveloperCredit />
    </footer>
  );
}