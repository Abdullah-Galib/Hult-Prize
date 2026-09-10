import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Our Team | Hult Prize at GUB',
  description: 'Meet the organizing committee of Hult Prize at Green University of Bangladesh.',
};

// Hierarchical Data Structure with Image Properties
const teamHierarchy = {
  directors: [
    { id: 'd1', name: '[Name]', role: 'Campus Director', image: '' },
    { id: 'd2', name: '[Name]', role: 'Deputy Campus Director', image: '' },
  ],
  departments: [
    {
      id: 'mkt',
      name: 'PR & Marketing Team',
      head: { id: 'm1', name: '[Name]', role: 'Head of PR & Marketing', image: '' },
      members: [
        { id: 'm2', name: '[Name]', role: 'Associate of Marketing', image: '' },
        { id: 'm3', name: '[Name]', role: 'Associate of Marketing', image: '' },
      ]
    },
    {
      id: 'cr',
      name: 'Corporate Relations Team',
      head: { id: 'c1', name: 'Abdullah Md Galib', role: 'Head of Corporate Relations', image: '' },
      members: [
        { id: 'c2', name: '[Name]', role: 'Corporate Relations Executive', image: '' },
        { id: 'c3', name: '[Name]', role: 'Corporate Relations Executive', image: '' },
      ]
    },
    {
      id: 'em',
      name: 'Event Management Team',
      head: { id: 'e1', name: '[Name]', role: 'Head of Event Management', image: '' },
      members: [
        { id: 'e2', name: '[Name]', role: 'Event Executive', image: '' },
        { id: 'e3', name: '[Name]', role: 'Event Executive', image: '' },
      ]
    },
    {
      id: 'log',
      name: 'Logistics Team',
      head: { id: 'l1', name: 'Md. Sharif Miah', role: 'Head of Logistics', image: '' },
      members: [
        { id: 'l2', name: '[Name]', role: 'Logistics Executive', image: '' },
      ]
    },
    {
      id: 'gc',
      name: 'Graphics & Content Team',
      head: { id: 'g1', name: '[Name]', role: 'Head of Graphics & Content', image: '' },
      members: [
        { id: 'g2', name: '[Name]', role: 'Content Writer', image: '' },
        { id: 'g3', name: '[Name]', role: 'Graphics Designer', image: '' },
      ]
    },
    {
      id: 'it',
      name: 'IT & Tech Team',
      head: { id: 'it1', name: 'Abdullah Md Galib', role: 'Head of IT', image: '/images/team/Muhammad.webp' },
      members: [
        { id: 'it2', name: 'Samiha Rahman', role: 'Associate of IT', image: '' },
      ]
    }
  ]
};

// Reusable Glassmorphism Card Component with Image Optimization
const MemberCard = ({ 
  name, 
  role, 
  image, 
  isLead = false 
}: { 
  name: string; 
  role: string; 
  image?: string; 
  isLead?: boolean; 
}) => (
  <div className={`bg-white/60 dark:bg-[#131B2F]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-6 rounded-3xl text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-2xl hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center ${isLead ? 'w-72' : 'w-60'}`}>
    <div className={`relative ${isLead ? 'w-36 h-36' : 'w-28 h-28'} bg-slate-200 dark:bg-slate-800 rounded-full mb-5 overflow-hidden flex items-center justify-center border-4 border-white dark:border-[#0B1221] shadow-inner`}>
      {image ? (
        <Image 
          src={image} 
          alt={name} 
          fill 
          sizes={isLead ? '144px' : '112px'} 
          className="object-cover transition-transform duration-500 hover:scale-110" 
        />
      ) : (
        <svg className={`${isLead ? 'w-12 h-12' : 'w-8 h-8'} text-slate-400 opacity-40`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      )}
    </div>
    <h3 className={`${isLead ? 'text-xl' : 'text-lg'} font-bold text-slate-900 dark:text-white leading-tight mb-1`}>{name}</h3>
    <p className="text-sm text-[#E6007F] font-semibold">{role}</p>
  </div>
);

export default function TeamPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Organizing <span className="text-[#E6007F]">Team</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-4 font-medium">
          The brilliant minds driving the Hult Prize movement at Green University.
        </p>
      </div>

      {/* Tier 1: Top Leadership (Directors) */}
      <div className="flex flex-wrap justify-center gap-8 mb-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E6007F]/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        {teamHierarchy.directors.map((director) => (
          <MemberCard 
            key={director.id} 
            name={director.name} 
            role={director.role} 
            image={director.image} 
            isLead={true} 
          />
        ))}
      </div>

      {/* Tier 2: Departments Hierarchy */}
      <div className="space-y-24">
        {teamHierarchy.departments.map((dept) => (
          <div key={dept.id} className="relative">
            
            {/* Department Title */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-slate-300 dark:to-white/20"></div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 tracking-wide uppercase text-center">
                {dept.name}
              </h2>
              <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-slate-300 dark:to-white/20"></div>
            </div>

            <div className="flex flex-col items-center gap-10">
              {/* Department Head */}
              <div className="relative">
                <MemberCard 
                  name={dept.head.name} 
                  role={dept.head.role} 
                  image={dept.head.image} 
                  isLead={true} 
                />
                
                {/* Vertical Line connecting Head to Associates */}
                {dept.members.length > 0 && (
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-10 w-px h-10 bg-slate-300 dark:bg-white/20"></div>
                )}
              </div>

              {/* Department Associates / Executives */}
              {dept.members.length > 0 && (
                <div className="flex flex-wrap justify-center gap-6 relative">
                  {/* Horizontal connecting line for multiples */}
                  {dept.members.length > 1 && (
                    <div className="hidden md:block absolute -top-px left-[15%] right-[15%] h-px bg-slate-300 dark:bg-white/20"></div>
                  )}
                  
                  {dept.members.map((member) => (
                    <div key={member.id} className="relative pt-0 md:pt-8">
                      {/* Vertical line dropping to each associate */}
                      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-slate-300 dark:bg-white/20"></div>
                      <MemberCard 
                        name={member.name} 
                        role={member.role} 
                        image={member.image} 
                        isLead={false} 
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}