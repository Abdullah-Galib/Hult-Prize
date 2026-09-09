import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: "Advisor's Message",
  description: 'A message from the Faculty Advisor of Hult Prize at Green University.',
});

export default function AdvisorPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="mb-12 text-4xl font-bold text-slate-900 dark:text-white">Advisor&apos;s Message</h1>

      <div className="flex flex-col items-start gap-10 md:flex-row">
        <div className="flex h-48 w-48 shrink-0 items-center justify-center rounded-md bg-slate-200 text-slate-400 dark:bg-slate-800">
          [Portrait Placeholder]
        </div>

        <div>
          <blockquote className="mb-6 text-xl italic text-slate-700 dark:text-slate-300">
            &quot;[Placeholder for the final approved English copy of the Advisor&apos;s message.
            This statement should encapsulate the university&apos;s commitment to social innovation
            and student empowerment through the Hult Prize framework.]&quot;
          </blockquote>

          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">[Advisor Name Placeholder]</h3>
            <p className="font-medium text-brand-pink">[Official Designation Placeholder]</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Green University of Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
}
