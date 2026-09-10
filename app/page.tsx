import Link from 'next/link';
import { eventsData } from '@/data/events';
import EventCard from '@/components/events/EventCard';
import TypewriterText from '@/components/ui/TypewriterText';

export const metadata = {
  title: 'Hult Prize at Green University of Bangladesh',
  description: 'Empowering Student Changemakers',
};

export default function HomePage() {
  const quickLinks = [
    { 
      label: 'Register', 
      href: '/register',
      svg: <svg className="w-7 h-7 mb-3 text-slate-600 dark:text-slate-300 group-hover:text-[#E6007F] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
    },
    { 
      label: 'Sponsors', 
      href: '/sponsor',
      svg: <svg className="w-7 h-7 mb-3 text-slate-600 dark:text-slate-300 group-hover:text-[#FFDA00] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
    { 
      label: 'Pitch Deck', 
      href: '/sponsor#pitch',
      svg: <svg className="w-7 h-7 mb-3 text-slate-600 dark:text-slate-300 group-hover:text-[#E6007F] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
    },
    { 
      label: 'Gallery', 
      href: '/gallery',
      svg: <svg className="w-7 h-7 mb-3 text-slate-600 dark:text-slate-300 group-hover:text-[#FFDA00] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    },
    { 
      label: 'Team', 
      href: '/team',
      svg: <svg className="w-7 h-7 mb-3 text-slate-600 dark:text-slate-300 group-hover:text-[#E6007F] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    },
    { 
      label: 'Report Issue', 
      href: '/contact',
      svg: <svg className="w-7 h-7 mb-3 text-slate-600 dark:text-slate-300 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    },
  ];

  return (
    <div className="w-full flex flex-col gap-20 pb-20 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center pt-32 pb-16">
        <div className="absolute inset-0 bg-[#0B1221] dark:bg-[#050810] -z-20"></div>
        <div className="absolute inset-0 bg-[url('/images/branding/hero-bg.jpg')] bg-cover bg-center opacity-30 -z-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1221] via-[#0B1221]/90 to-transparent -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          
          {/* Centered Typewriter at the very top */}
          <div className="w-full mb-12 lg:mb-20">
            <TypewriterText text="Hult Prize at GUB" />
          </div>

          <div className="grid xl:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="xl:col-span-7 space-y-6">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1]">
                A community that <br />
                advances <span className="text-[#FFDA00]">with you</span>
              </h1>
              <p className="text-lg text-slate-300 max-w-xl font-medium leading-relaxed">
                Stay informed, pitch your ideas, and participate in social entrepreneurship in all simplicity.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link href="/about" className="bg-[#E6007F] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#A30A7B] transition-all hover:scale-105 shadow-lg flex items-center gap-2">
                  Discover the Movement <span className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center">&rarr;</span>
                </Link>
                <Link href="/contact" className="bg-white text-slate-900 px-8 py-3.5 rounded-full font-bold hover:bg-slate-200 transition-all">
                  Contact Us
                </Link>
              </div>
            </div>
            
            {/* Right Widget with Glassmorphism Cards */}
            <div className="xl:col-span-5 bg-white/10 dark:bg-white/5 backdrop-blur-3xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6">What are you looking for?</h3>
              <div className="relative mb-8">
                <input type="text" placeholder="Search events, resources..." className="w-full bg-white/90 text-slate-900 placeholder-slate-500 rounded-full py-3.5 pl-5 pr-12 outline-none focus:ring-2 focus:ring-[#E6007F] shadow-inner" />
                <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#E6007F] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#A30A7B] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {quickLinks.map((item) => (
                  <Link 
                    key={item.label} 
                    href={item.href} 
                    className="group relative bg-white/40 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(230,0,127,0.25)]"
                  >
                    {item.svg}
                    <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors uppercase tracking-wider">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Section */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="bg-white dark:bg-[#0B1221] border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-2xl">
          <div className="space-y-6 max-w-lg">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Welcome to our digital space!
            </h2>
            <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
              We have designed this space to offer you quick access to all information and to access our services online seamlessly.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 bg-[#E6007F] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#A30A7B] transition-all text-sm mt-2 shadow-md">
              Learn More
            </Link>
          </div>
          <div className="relative w-full max-w-lg aspect-video bg-gradient-to-br from-[#E6007F]/10 to-[#FFDA00]/10 rounded-3xl border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-inner">
             <div className="text-center opacity-50">
               <svg className="w-12 h-12 mx-auto text-slate-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
               <p className="text-slate-500 text-sm font-bold">[Device Mockups Placeholder]</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Events Grid */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            At your <span className="text-[#E6007F]">Agendas</span>
          </h2>
          <Link href="/events" className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-[#E6007F] flex items-center gap-1 uppercase tracking-wider transition-colors">
            See all events &rarr;
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventsData.slice(0, 4).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* 4. Quick Access Banner */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="bg-[#0B1221] rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E6007F]/20 blur-[80px] rounded-full pointer-events-none"></div>
          <h2 className="text-2xl font-extrabold text-white mb-10">
            Quick <span className="text-[#FFDA00]">access</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { title: 'Contact Directory', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
              { title: 'Associations', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
              { title: 'Mentorship', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
              { title: 'Professionals', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
              { title: 'Publications', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
              { title: 'Reports', icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
            ].map((item, i) => (
              <Link key={i} href="#" className="flex flex-col items-center justify-center gap-4 text-center group">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-[#FFDA00] group-hover:bg-[#FFDA00] group-hover:text-[#0B1221] transition-all">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                </div>
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ & Guidelines Section */}
      <section className="max-w-7xl mx-auto px-6 w-full mb-10">
        <div className="bg-white/60 dark:bg-[#131B2F]/60 backdrop-blur-xl rounded-[2.5rem] p-10 lg:p-16 border border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-12 relative shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-2xl">
          
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              FAQ & <span className="text-[#E6007F]">Guidelines</span>
            </h2>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
              Got questions? <br /> We've got answers.
            </h3>
            <p className="text-slate-600 dark:text-slate-400 font-medium max-w-md">
              Read the official Hult Prize rulebook, eligibility criteria, and frequently asked questions to prepare your startup idea.
            </p>
            <Link href="#" className="inline-block bg-[#E6007F] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#A30A7B] transition-all shadow-md">
              READ GUIDELINES
            </Link>
          </div>

          <div className="flex-1 flex justify-center relative">
            <div className="w-64 h-80 bg-slate-50 dark:bg-[#0B1221] border border-slate-200 dark:border-white/10 shadow-2xl rounded-2xl -rotate-3 hover:rotate-0 transition-transform duration-500 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
               <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-[#E6007F] to-[#FFDA00]"></div>
               <svg className="w-16 h-16 text-[#E6007F] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
               <h4 className="font-bold text-slate-900 dark:text-white text-xl uppercase tracking-widest">Rulebook</h4>
               <p className="text-xs text-slate-500 mt-2 font-medium">Season 2025-2026<br/>Official Guidelines</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6 w-full max-w-xs">
            <Link href="#" className="flex items-center gap-5 text-slate-700 dark:text-slate-300 hover:text-[#E6007F] font-bold group">
              <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-[#E6007F] group-hover:text-white group-hover:border-transparent transition-all shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              GENERAL FAQS
            </Link>
            <Link href="#" className="flex items-center gap-5 text-slate-700 dark:text-slate-300 hover:text-[#E6007F] font-bold group">
              <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-[#E6007F] group-hover:text-white group-hover:border-transparent transition-all shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              ELIGIBILITY
            </Link>
            <Link href="/contact" className="flex items-center gap-5 text-slate-700 dark:text-slate-300 hover:text-[#E6007F] font-bold group">
              <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-[#E6007F] group-hover:text-white group-hover:border-transparent transition-all shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              CONTACT SUPPORT
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}