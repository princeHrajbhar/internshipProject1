'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen text-white px-5 pt-30 space-y-8">
      {/* Text Block with 5px Left Margin */}
      <div className="space-y-6 ml-5">
        <p className="text-3xl font-light leading-relaxed">
          Rooted in a philosophy of quiet luxury,
          our <br/> garments are designed to speak softly
          in <br/> cut, in movement, in presence.
        </p>

        {/* Learn More */}
        <div className="flex items-center space-x-2 border-b border-white pt-10 pb-1 w-fit cursor-pointer hover:text-blue-400">
          <span className="text-base">Learn more about Eclypse</span>
          <ArrowRight size={18} />
        </div>
      </div>

      {/* Image Grid */}
      <div className="space-y-5 mx-5 pt-20">
        {/* Row 1 */}
        <div className="flex space-x-5">
          <div className="w-[60%] aspect-[3/2] relative">
            <Image
              src="/Frame 3.png"
              alt="Image 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-[40%] aspect-[3/2] relative">
            <Image
              src="/Frame 18.png"
              alt="Image 2"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex space-x-5">
          <div className="w-1/3 aspect-[3/2] relative">
            <Image
              src="/Frame 18 (1).png"
              alt="Image 3"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-1/3 aspect-[3/2] relative">
            <Image
              src="/Frame 18 (2).png"
              alt="Image 4"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-1/3 aspect-[3/2] relative">
            <Image
              src="/Frame 19.png"
              alt="Image 5"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
