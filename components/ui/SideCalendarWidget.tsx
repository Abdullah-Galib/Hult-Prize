'use client';

import { useState, useEffect } from 'react';

export default function SideCalendarWidget() {
  const [time, setTime] = useState(new Date());
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false); // Hydration fix state

  // Future competition dates to highlight
  const highlightedDates = [15, 24, 28]; 

  useEffect(() => {
    setMounted(true); // Component has mounted on the client
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Prevent hydration mismatch by returning null until mounted
  if (!mounted) return null;

  const daysInMonth = new Date(time.getFullYear(), time.getMonth() + 1, 0).getDate();
  const firstDay = new Date(time.getFullYear(), time.getMonth(), 1).getDay();
  const today = time.getDate();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay }, (_, i) => i);

  return (
    <div 
      className={`fixed left-0 top-1/4 z-50 flex items-stretch transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isHovered ? 'translate-x-0' : '-translate-x-[280px]'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glassmorphism Calendar Body */}
      <div 
        className={`w-[280px] bg-white/70 dark:bg-[#0B1221]/70 backdrop-blur-3xl border border-slate-200/50 dark:border-white/10 rounded-r-3xl p-6 text-slate-900 dark:text-white transition-all duration-500 ${
          isHovered ? 'opacity-100 shadow-[10px_0_30px_rgba(0,0,0,0.15)] dark:shadow-[10px_0_30px_rgba(0,0,0,0.5)]' : 'opacity-0 shadow-none'
        }`}
      >
        <div className="text-center mb-5 border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="text-[#E6007F] text-3xl font-extrabold tracking-tight mb-1 font-mono">
            {time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">
            {time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold uppercase tracking-wider mb-3 text-slate-500">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => <div key={day}>{day}</div>)}
        </div>
        
        <div className="grid grid-cols-7 gap-1.5 text-center text-sm font-semibold">
          {blanks.map(blank => <div key={`blank-${blank}`} />)}
          {days.map(day => {
            const isToday = day === today;
            const isHighlighted = highlightedDates.includes(day);
            
            return (
              <div 
                key={day} 
                className={`w-8 h-8 mx-auto flex items-center justify-center rounded-full transition-all duration-300 cursor-default ${
                  isToday 
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md scale-110' 
                    : isHighlighted 
                      ? 'bg-gradient-to-br from-[#E6007F] to-[#C2006B] text-white shadow-[0_4px_10px_rgba(230,0,127,0.4)] scale-105' 
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
                }`}
                title={isHighlighted ? 'Upcoming Event/Competition!' : ''}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>

      {/* Invisible Hover Trigger Area */}
      <div className="w-6 h-[380px] bg-transparent absolute -right-6 top-0 cursor-default"></div>
    </div>
  );
}