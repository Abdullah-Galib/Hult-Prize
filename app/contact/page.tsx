import ContactForm from '@/components/forms/ContactForm';
import { constructMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site';

export const metadata = constructMetadata({
  title: 'Contact Us',
  description: 'Get in touch with the organizing team.',
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="mb-12 text-4xl font-bold text-slate-900 dark:text-white">Contact Us</h1>

      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Get in Touch</h2>
          <p className="mb-8 text-slate-600 dark:text-slate-300">
            Whether you are a student looking to participate, a potential mentor, or media personnel, we would love to hear from you.
          </p>

          <div className="space-y-4 text-slate-600 dark:text-slate-300">
            <p>
              <strong className="text-slate-900 dark:text-white">Email:</strong>{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-brand-pink hover:underline">{siteConfig.email}</a>
            </p>
            <p>
              <strong className="text-slate-900 dark:text-white">Address:</strong><br />
              {siteConfig.university.name}<br />
              {siteConfig.address}
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
