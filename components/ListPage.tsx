'use client';

import { useState } from 'react';
import { ArrowDown } from 'lucide-react';

export default function Page() {
  const sections: string[] = [
    'Size & Fit',
    'Delivery & Returns',
    'How This Was Made',
  ];

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="bg-black text-white py-1 w-full px-5">
      {sections.map((title) => (
        <div key={title}>
          {/* Header Row */}
          <div
            className="flex items-center justify-between cursor-pointer py-10"
            onClick={() => toggleSection(title)}
          >
            <p className="text-base font-medium">{title}</p>
            <ArrowDown
              className={`h-5 w-5 transition-transform duration-300 ${
                openSections[title] ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </div>

          {/* Expandable content */}
          {openSections[title] && (
            <div className="pb-5 text-sm text-gray-400">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget.</p>
            </div>
          )}

          {/* Separator */}
          <div className="border-b border-gray-800"></div>
        </div>
      ))}
    </div>
  );
}
