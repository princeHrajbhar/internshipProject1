'use client';

import Image from 'next/image';

export default function HeroPage() {
  return (
    <div className="bg-black min-h-screen text-white p-5 pt-20">
      {/* Top Row: Eclyps e® and © 2024 in same line */}
      <div className="flex justify-between items-end mx-5">
        {/* Left: Eclyps e® */}
        <div className="flex items-end">
          <h1 className="text-5xl font-bold flex items-end">
            Eclyps
            <span className="relative">
              e
              <sup className="text-xs align-super ml-0.5">®</sup>
            </span>
          </h1>
        </div>

        {/* Right: © 2024 */}
        <div className="flex items-end space-x-1 pb-1 mr-2">
          <span className="text-xs">©</span>
          <span className="text-xs">2024</span>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-8 mx-5">
       <Image
  src="/hero_mp4.png"
  alt="Hero Image"
  width={1920}
  height={1080}
  className="w-full "
/>
      </div>
    </div>
  );
}
