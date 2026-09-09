import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Terms of Use',
  description: 'Terms governing the use of the Hult Prize at GUB website.',
});

export default function TermsPage() {
  return (
    <div className="prose prose-slate mx-auto max-w-3xl px-6 py-20 dark:prose-invert">
      <h1 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Terms of Use</h1>
      <p>Last updated: September 2026</p>
      <p>By accessing the Hult Prize at Green University website, you agree to these terms. The official Hult Prize intellectual property, including logos and brand tokens, may not be distorted, altered, or redrawn without authorization.</p>
      <p>[Full terms of service text to be drafted and approved in Phase 8.]</p>
    </div>
  );
}
