'use client';

import Image from 'next/image';

export default function ProductPage() {
  return (
    <div className="bg-black min-h-screen  text-white">
      <div className=' pb-20 pl-10  text-4xl'>
        <h1 >Silhouette No. 1 – Vermilion</h1>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-0 min-h-screen">
        {/* Left: Main Product Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full aspect-[3/4]">
            <Image
              src="/girl.png"
              alt="Product Image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-1/2 bg-white text-black p-5 flex flex-col justify-between">
          {/* Top content */}
          <div className="space-y-5">
            {/* Description */}
            <p className="text-base md:text-lg pt-5 leading-relaxed">
              A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force. Worn here in the stillness of a city in motion.
            </p>

            {/* 3 Images in a Row */}
            <div className="flex space-x-3">
              <div className="w-1/3 aspect-square relative">
                <Image
                  src="/girl1.png"
                  alt="Variant 1"
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="w-1/3 aspect-square relative">
                <Image
                  src="/girl2.png"
                  alt="Variant 2"
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="w-1/3 aspect-square relative">
                <Image
                  src="/girl3.png"
                  alt="Variant 3"
                  fill
                  className="object-cover rounded"
                />
              </div>
            </div>

            {/* Price */}
            <div>
              <p className="text-xl pt-5 font-semibold">₹7999/-</p>
              <p className="text-xs text-gray-500">MRP (inclusive of all taxes)</p>
            </div>

            {/* Size Selection */}
            <div className="space-y-2 pt-5">
              <div className="flex items-center space-x-3">
                <p className="text-sm">Please select size:</p>
                <button className="text-xs underline">Size Chart</button>
              </div>
              <div className="flex pt-5 flex-wrap gap-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    className="border border-gray-400 bg-gray-200 px-4 py-2 text-sm hover:bg-black hover:text-white transition"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons at bottom */}
          <div className="flex space-x-4 pt-6 mt-6">
            <button className="flex-1 bg-white border border-black text-black py-3 rounded hover:bg-gray-100 transition">
              Add to Cart
            </button>
            <button className="flex-1 bg-black text-white py-3 rounded hover:bg-gray-800 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
