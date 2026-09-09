import Link from 'next/link';
import Image from 'next/image';
import { eventsData } from '@/data/events';
import EventCard from '@/components/events/EventCard';

export const metadata = {
  title: 'Hult Prize at Green University of Bangladesh',
  description: 'Empowering Student Changemakers',
};

const quickLinks = [
  { label: 'Register', icon: '📝', href: '/contact' },
  { label: 'Sponsors', icon: '🏢', href: '/sponsor' },
  { label: 'Pitch Deck', icon: '📊', href: '/sponsor#pitch' },
  { label: 'Gallery', icon: '📸', href: '/media/gallery' },
  { label: 'Team', icon: '👥', href: '/team' },
  { label: 'Report Issue', icon: '⚠️', href: '/contact' },
];

const quickAccess = [
  { title: 'Contact Directory', href: '/contact', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
  { title: 'Associations', href: '/team', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
  { title: 'Mentorship', href: '/about', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  { title: 'Professionals', href: '/partners', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { title: 'Publications', href: '/media/news', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
  { title: 'Reports', href: '/impact', icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
];

export default function HomePage() {
  return (
    <div className="flex w-full flex-col gap-20 overflow-hidden pb-20">

      {/* 1. Hero Section */}
      <section className="relative flex min-h-[85vh] w-full items-center pb-16 pt-24">
        {/* Background Overlay */}
        <div className="absolute inset-0 -z-20 bg-navy dark:bg-navy-deep"></div>
        <Image
          src="/images/branding/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-transparent"></div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 xl:grid-cols-12">

          {/* Left Text */}
          <div className="space-y-6 xl:col-span-7">
            <p className="text-2xl font-bold tracking-wide text-white">Hult Prize at GUB</p>
            <h1 className="text-5xl font-extrabold leading-[1.1] text-white md:text-7xl">
              A community that <br />
              advances <span className="text-brand-yellow">with you</span>
            </h1>
            <p className="max-w-xl text-lg font-medium leading-relaxed text-slate-300">
              Stay informed, pitch your ideas, and participate in social entrepreneurship in all simplicity.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/about" className="btn-primary px-8 py-3.5 shadow-lg hover:scale-105">
                Discover the Movement <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">&rarr;</span>
              </Link>
              <Link href="/contact" className="btn-secondary px-8 py-3.5">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Floating Widget */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl dark:bg-white/5 xl:col-span-5">
            <h3 className="mb-6 text-xl font-bold text-white">What are you looking for?</h3>

            {/* Real search: submits to /events, which filters by the query. */}
            <form action="/events" method="get" className="relative mb-6" role="search">
              <label htmlFor="homeSearch" className="sr-only">Search events</label>
              <input type="text" id="homeSearch" name="q" placeholder="Search events, resources..." className="w-full rounded-full bg-white py-3 pl-5 pr-12 text-slate-900 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-brand-pink" />
              <button type="submit" aria-label="Search" className="absolute bottom-1.5 right-1.5 top-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-brand-pink text-white transition-colors hover:bg-brand-magenta">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </form>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {quickLinks.map((item) => (
                <Link key={item.label} href={item.href} className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition-all hover:bg-white/20">
                  <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                  <span className="text-xs font-semibold text-white">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Section */}
      <section className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-12 rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:flex-row lg:p-16 dark:border-white/10 dark:bg-navy dark:shadow-2xl">
          <div className="max-w-lg space-y-6">
            <span className="rounded-full bg-brand-pink/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-pink">
              New Website
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl dark:text-white">
              Welcome to our new digital space!
            </h2>
            <p className="font-medium leading-relaxed text-slate-600 dark:text-slate-300">
              We have designed this space to offer you quick access to all information and to access our services online seamlessly.
            </p>
            <Link href="/about" className="btn-primary mt-2 px-6 py-2.5 text-sm">
              Learn More
            </Link>
          </div>
          {/* 3D Mockup Graphic Placeholder */}
          <div className="relative flex aspect-video w-full max-w-lg items-center justify-center rounded-3xl border border-white/20 bg-gradient-to-br from-brand-pink/10 to-brand-yellow/10">
            <div className="text-center">
              <span className="text-4xl" aria-hidden="true">💻📱</span>
              <p className="mt-2 text-sm font-bold text-slate-500">[Device Mockups Placeholder]</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Events Grid */}
      <section className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl dark:text-white">
            At your <span className="text-brand-pink">Agendas</span>
          </h2>
          <Link href="/events" className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-brand-pink dark:text-slate-300">
            See all events &rarr;
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {eventsData.slice(0, 4).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/events" className="rounded-full bg-navy px-8 py-3.5 font-bold text-white shadow-lg transition-colors hover:bg-brand-pink dark:bg-white dark:text-slate-900 dark:hover:bg-brand-pink dark:hover:text-white">
            VIEW ALL EVENTS
          </Link>
        </div>
      </section>

      {/* 4. Quick Access Banner */}
      <section className="mx-auto w-full max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-navy p-10 shadow-2xl md:p-14">
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-brand-pink/20 blur-[80px]"></div>

          <h2 className="mb-10 text-2xl font-extrabold text-white">
            Quick <span className="text-brand-yellow">access</span>
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {quickAccess.map((item) => (
              <Link key={item.title} href={item.href} className="group flex flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 text-brand-yellow transition-all group-hover:bg-brand-yellow group-hover:text-navy">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                </div>
                <span className="text-sm font-medium text-slate-300 transition-colors group-hover:text-white">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Magazine / Pitch Deck Section */}
      <section className="mx-auto mb-10 w-full max-w-7xl px-6">
        <div className="relative flex flex-col items-center justify-between gap-12 rounded-[2.5rem] border border-slate-200 bg-slate-100 p-10 shadow-lg lg:p-16 md:flex-row dark:border-white/10 dark:bg-white/5">

          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl dark:text-white">
              On <span className="text-brand-pink">Stand</span>
            </h2>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
              The official Pitch Deck <br /> is available!
            </h3>
            <p className="max-w-md font-medium text-slate-600 dark:text-slate-400">
              Stay informed of all the latest partnership opportunities and detailed proposals of Hult Prize GUB.
            </p>
            <Link href="/sponsor#pitch" className="btn-primary inline-block px-8 py-3.5 shadow-md">
              READ THE DECK
            </Link>
          </div>

          {/* Floating Magazine Cover */}
          <div className="relative flex flex-1 justify-center">
            <div className="flex h-80 w-64 -rotate-3 flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-6 text-center shadow-2xl transition-transform duration-500 hover:rotate-0 dark:border-white/20 dark:bg-navy-light">
              <span className="mb-4 text-4xl" aria-hidden="true">📘</span>
              <h4 className="text-xl font-bold uppercase tracking-widest text-slate-900 dark:text-white">Hult Prize</h4>
              <p className="mt-2 text-xs text-slate-500">Partnership Proposal<br />Season 2025-2026</p>
            </div>
          </div>

          {/* Action Buttons Right */}
          <div className="flex w-full max-w-xs flex-1 flex-col gap-6">
            <Link href="/sponsor#pitch" className="group flex items-center gap-4 font-bold text-slate-700 hover:text-brand-pink dark:text-slate-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-brand-pink transition-all group-hover:bg-brand-pink group-hover:text-white dark:border-white/20">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              VIEW LIVE
            </Link>
            <Link href="/sponsorship" className="group flex items-center gap-4 font-bold text-slate-700 hover:text-brand-pink dark:text-slate-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-brand-pink transition-all group-hover:bg-brand-pink group-hover:text-white dark:border-white/20">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </div>
              PACKAGES
            </Link>
            <Link href="/contact" className="group flex items-center gap-4 text-left font-bold text-slate-700 hover:text-brand-pink dark:text-slate-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-brand-pink transition-all group-hover:bg-brand-pink group-hover:text-white dark:border-white/20">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              CONTACT US
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
