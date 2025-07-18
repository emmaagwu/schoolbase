'use client';

import { Megaphone } from 'lucide-react';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const messages = [
  '📢 Register now for the 2025/2026 Academic Session!',
  '🎉 Entrance exams hold July 30th – Apply early and get 10% off tuition!'
];

export default function Announcements() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-md my-8">
      <div className="flex items-center gap-3 px-4 py-2 overflow-hidden relative h-14">
        <Megaphone className="text-blue-600 w-5 h-5 shrink-0 animate-pulse" />

        <div className="relative w-full h-full overflow-hidden">
          {messages.map((message, index) => (
            <div
              key={index}
              className={clsx(
                'absolute left-0 top-0 w-full h-full transition-opacity duration-1000 flex items-center text-sm sm:text-base font-medium text-blue-800',
                {
                  'opacity-100': index === currentIndex,
                  'opacity-0': index !== currentIndex,
                }
              )}
            >
              {message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
