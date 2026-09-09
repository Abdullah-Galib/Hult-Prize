import Image from 'next/image';
import { siteConfig } from '@/config/site';

// Server component: static data from config/site.ts — no runtime GitHub API
// call (the unauthenticated API rate-limits at 60 req/hour per visitor IP and
// made the credit vanish unpredictably).
export default function DeveloperCredit() {
  const developer = siteConfig.developer;

  return (
    <div className="border-t border-white/5 bg-navy-deep py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-colors hover:bg-white/10">
          <a
            href={developer.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-8 w-8 overflow-hidden rounded-full border border-brand-pink"
          >
            <Image src={developer.avatarUrl} alt={developer.name} fill sizes="32px" className="object-cover" />
          </a>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-slate-400">Developed By</span>
            <a
              href={developer.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-white transition-colors hover:text-brand-pink"
            >
              {developer.name}
            </a>
            <span className="text-[10px] text-brand-yellow">{developer.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
