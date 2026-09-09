import type { Viewport } from 'next';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@/styles/globals.css';
import NavbarShell from '@/components/navigation/NavbarShell';
import Footer from '@/components/footer/Footer';
import { constructMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site';

export const metadata = constructMetadata();

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8FAFC' },
    { media: '(prefers-color-scheme: dark)', color: '#0B1221' },
  ],
};

/**
 * Applies the saved (or system) theme class before first paint, preventing the
 * dark-mode flash. Runs as a parser-blocking inline script at the top of body.
 */
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  email: siteConfig.email,
  logo: `${siteConfig.url}/icon.svg`,
  sameAs: [siteConfig.social.facebook, siteConfig.social.linkedin],
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address,
    addressLocality: 'Dhaka',
    addressCountry: 'BD',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900 antialiased transition-colors duration-300 dark:bg-navy dark:text-slate-100">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <NavbarShell />
        <main className="relative z-10 w-full flex-grow">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-full -translate-x-1/2 rounded-full bg-brand-pink/5 blur-[120px] dark:bg-brand-pink/10" />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
