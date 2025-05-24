'use client';

import Image from 'next/image';

export default function CustomerTestimonial() {
  return (
    <div className="bg-black text-white w-full px-5 py-10">
      {/* Section Heading */}
      <h2 className="text-xl font-semibold mb-8 pl-5">OUR CUSTOMERS</h2>

      <div className="flex pl-5 flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="md:w-1/2 -mt-6"> {/* shifted testimonial up */}
          <div className="flex items-start space-x-4">
            <Image
              src="/start.png"
              alt="Customer"
              width={60}
              height={60}
              className="object-cover"
            />
            <div>
              <p className="text-4xl leading-relaxed">
                Understated, but unforgettable. It
                <br />
                feels like it was made for me.
              </p>
              <p className="mt-2 pt-15 font-semibold">Random Woman</p>
              <p className="text-gray-400 text-sm">NY, USA</p>
            </div>
          </div>
        </div>

        {/* Right Image Stack */}
        <div className="md:w-1/2 flex flex-col items-end space-y-4 mt-10 md:mt-0 pr-10">
          <Image
            src="/girl1.png"
            alt="Hero 1"
            width={120}
            height={120}
            className="rounded-full object-cover "
          />
          <Image
            src="/girl2.png"
            alt="Hero 2"
            width={90}
            height={90}
            className="rounded-full object-cover opacity-70"
          />
          <Image
            src="/girl3.png"
            alt="Hero 3"
            width={90}
            height={90}
            className="rounded-full object-cover opacity-50"
          />
        </div>
      </div>
    </div>
  );
}
