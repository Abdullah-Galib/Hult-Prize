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
    // Fetches Abdullah Md Galib's data
    fetch('https://api.github.com/users/Abdullah-Galib')
      .then((res) => res.json())
      .then((data) => {
        if (data.login) setProfile(data);
      })
      .catch((err) => console.error('GitHub fetch failed:', err));
  }, []);

  if (!profile) return null;

  return (
    <div className="border-t border-white/5 bg-[#050810] py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Hult Prize at Green University of Bangladesh. All rights reserved.
        </p>
        
        <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
          <a href={profile.html_url} target="_blank" rel="noopener noreferrer" className="relative w-8 h-8 rounded-full overflow-hidden border border-[#E6007F]">
            <Image src={profile.avatar_url} alt={profile.name || profile.login} fill sizes="32px" className="object-cover" />
          </a>
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider">Developed By</span>
            <a href={profile.html_url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-white hover:text-[#E6007F] transition-colors">
              {profile.name || profile.login}
            </a>
            <span className="text-[10px] text-[#FFDA00]">GUB Sponsorship Management Team</span>
          </div>
        </div>
      </div>
    </div>
  );
}