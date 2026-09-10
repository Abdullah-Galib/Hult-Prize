'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface GithubUser {
  name: string;
  avatar_url: string;
  html_url: string;
  login: string;
}

export default function DeveloperCredit() {
  const [profile, setProfile] = useState<GithubUser | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Abdullah-Galib')
      .then((res) => res.json())
      .then((data) => {
        if (data.login) setProfile(data);
      })
      .catch((err) => console.error('GitHub fetch failed:', err));
  }, []);

  if (!profile) return null;

  return (
    <div className="border-t border-white/5 bg-[#04060C] py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        
        <p className="text-[11px] text-slate-500 font-medium">
          © {new Date().getFullYear()} Hult Prize at GUB. All rights reserved.
        </p>
        
        <a 
          href={profile.html_url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2.5 group opacity-80 hover:opacity-100 transition-opacity"
        >
          <span className="text-[10px] text-slate-500 uppercase tracking-widest group-hover:text-[#E6007F] transition-colors">
            Developed By
          </span>
          <div className="flex items-center gap-2">
            <div className="relative w-5 h-5 rounded-full overflow-hidden border border-[#E6007F]/30 group-hover:border-[#E6007F] transition-colors shadow-sm">
              <Image src={profile.avatar_url} alt={profile.name || profile.login} fill sizes="20px" className="object-cover" />
            </div>
            <span className="text-[11px] font-bold text-slate-400 group-hover:text-white transition-colors">
              {profile.name || profile.login}
            </span>
          </div>
        </a>
        
      </div>
    </div>
  );
}