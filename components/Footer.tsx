'use client';

import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white px-6 py-10 relative">
      {/* Logo */}
      <div className="text-3xl font-bold mb-6">Eclypse</div>

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row md:space-x-0">
        {/* Column 1 */}
        <div className="md:w-1/2">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="md:w-1/2">
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      {/* Top Arrow Button */}
      <button
        onClick={scrollToTop}
        className="absolute top-8 right-6 p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 text-white" />
      </button>

      {/* Bottom copyright */}
      <div className="text-gray-500 text-sm text-right mt-10">
        © Eclypse 2025
      </div>
    </footer>
  );
}
