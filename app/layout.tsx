import '@/styles/globals.css';
import { Poppins } from 'next/font/google';
import NavbarShell from '@/components/navigation/NavbarShell';
import Footer from '@/components/footer/Footer';
import { constructMetadata } from '@/lib/seo';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'], 
  variable: '--font-poppins' 
});

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-slate-50 dark:bg-[#0B1221] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-500">
        <NavbarShell />
        <main className="flex-grow w-full relative z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#E6007F]/5 dark:bg-[#E6007F]/10 blur-[120px] -z-10 pointer-events-none rounded-full"></div>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}