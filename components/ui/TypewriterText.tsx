'use client';

import { useState, useEffect } from 'react';

export default function TypewriterText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < text.length) {
          setDisplayText(text.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 3000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(text.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 40 : 120);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text]);

  return (
    <div className="flex justify-center w-full">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight min-h-[1.2em] whitespace-nowrap text-center">
        <span className="bg-gradient-to-r from-[#E6007F] via-[#A30A7B] to-[#FFDA00] bg-clip-text text-transparent drop-shadow-sm">
          {displayText}
        </span>
        <span className="animate-pulse text-[#E6007F] font-light ml-1">|</span>
      </h1>
    </div>
  );
}