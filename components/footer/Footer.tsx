import Link from 'next/link';
import DeveloperCredit from './DeveloperCredit';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const { social, email, address, university, parentOrganization } = siteConfig;

  return (
    <footer className="relative z-10 mt-auto border-t border-white/10 bg-navy-dark text-slate-400">
      <div className="mx-auto grid grid-cols-1 gap-10 px-6 py-14 md:grid-cols-12">

        {/* Brand & Socials Column */}
        <div className="space-y-6 md:col-span-5">
          <h3 className="whitespace-nowrap text-2xl font-bold text-white">
            Hult Prize <span className="text-brand-pink">at</span> Green University of Bangladesh
          </h3>
          <p className="max-w-sm text-sm leading-relaxed">
            Empowering student changemakers through innovation and social entrepreneurship.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-2">
            <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:scale-110 hover:bg-[#0077b5] hover:text-white">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href={social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:scale-110 hover:bg-[#1877F2] hover:text-white">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href={`mailto:${email}`} aria-label="Email" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:scale-110 hover:bg-brand-pink hover:text-white">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
            </a>
          </div>

          <div className="space-y-1 border-t border-white/10 pt-4 text-sm">
            <a href={university.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-brand-pink hover:underline">
              {university.name} ↗
            </a>
            <p className="text-slate-500">Permanent Campus: {address}</p>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="md:col-span-3 md:col-start-7">
          <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="transition-colors hover:text-brand-pink">About Us</Link></li>
            <li><Link href="/impact" className="transition-colors hover:text-brand-pink">Our Impact</Link></li>
            <li><Link href="/events" className="transition-colors hover:text-brand-pink">Events Archive</Link></li>
            <li><Link href="/sponsorship" className="transition-colors hover:text-brand-pink">Sponsorship</Link></li>
            <li>
              <a href={parentOrganization.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-medium transition-colors hover:text-brand-yellow">
                {parentOrganization.name} ↗
              </a>
            </li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="md:col-span-3">
          <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/privacy" className="transition-colors hover:text-brand-pink">Privacy Notice</Link></li>
            <li><Link href="/terms" className="transition-colors hover:text-brand-pink">Terms of Use</Link></li>
            <li><Link href="/contact" className="transition-colors hover:text-brand-pink">Contact Center</Link></li>
          </ul>
        </div>
      </div>

      <DeveloperCredit />
    </footer>
  );
}
