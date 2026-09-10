'use client';

import { useState } from 'react';
import { eventsData } from '@/data/events';
import EventCard from '@/components/events/EventCard';

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Real-time filtering logic based on title or description
  const filteredEvents = eventsData.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      
      {/* Header & Search Bar Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
          Events <span className="text-[#E6007F]">Archive</span>
        </h1>
        
        {/* Premium Glassmorphism Search Input */}
        <div className="relative w-full md:w-96 group">
          <input 
            type="text" 
            placeholder="Search events by name or topic..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/70 dark:bg-[#131B2F]/70 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-full py-3.5 pl-12 pr-5 text-slate-900 dark:text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-[#E6007F] transition-all shadow-sm group-hover:shadow-md"
          />
          <svg 
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#E6007F] transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          
          {/* Clear Button (Shows only when typing) */}
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#E6007F] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        /* Empty State (When no search results match) */
        <div className="text-center py-24 bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-lg">
          <span className="text-5xl mb-4 block">🔍</span>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">No events found</h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            We couldn't find any events matching "<span className="text-[#E6007F]">{searchQuery}</span>". <br/> Try adjusting your search keywords.
          </p>
          <button 
            onClick={() => setSearchQuery('')}
            className="mt-6 bg-[#0B1221] dark:bg-white text-white dark:text-slate-900 px-6 py-2.5 rounded-full font-bold hover:bg-[#E6007F] dark:hover:bg-[#E6007F] hover:text-white transition-colors"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
}