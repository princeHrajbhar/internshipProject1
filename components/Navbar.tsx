'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-black shadow-md">
      {/* Left side: Logo */}
      <div className="flex items-center pl-4 md:pl-8 flex-shrink-0">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </Link>
      </div>

      {/* Right side: Navigation Links */}
      <div className="flex items-center text-white font-medium pr-4 md:pr-8 space-x-6 sm:space-x-10 md:space-x-20 flex-wrap">
        <Link href="/" className="hover:text-blue-400 whitespace-nowrap">About</Link>
        <Link href="/wishlist" className="hover:text-blue-400 whitespace-nowrap">Wishlist</Link>
        <Link href="/cart" className="hover:text-blue-400 whitespace-nowrap">Cart</Link>
        <Link
          href="/buy"
          className="bg-white text-black px-4 py-2 rounded-md hover:bg-blue-600 whitespace-nowrap"
        >
          Buy
        </Link>
      </div>
    </nav>
  );
}
