import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Privacy Notice',
  description: 'How Hult Prize at GUB collects and handles your data.',
});

export default function PrivacyPage() {
  return (
    <div className="prose prose-slate mx-auto max-w-3xl px-6 py-20 dark:prose-invert">
      <h1 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Privacy Notice</h1>
      <p>Last updated: September 2026</p>
      <p>This privacy notice covers the collection of analytics and contact data on the Hult Prize at Green University website. We maintain minimal collection of personal data and utilize server-side validation to ensure security.</p>
      <p>[Full privacy policy text to be drafted and approved in Phase 8.]</p>
    </div>
  );
}
