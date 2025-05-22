'use client';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  {
    label: 'About Us',
    dropdown: ['Our Team', 'Culture', 'News', 'History'],
  },
  {
    label: 'Services',
    dropdown: ['Preconstruction', 'Design-Build', 'General Contracting'],
  },
  {
    label: 'Projects',
    dropdown: ['Commercial', 'Education', 'Healthcare'],
  },
  {
    label: 'Contact',
    dropdown: ['Head Office', 'Inquiries'],
  },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="bg-[#37393A] text-white relative z-50 py-2">
      <div className="container mx-auto px-4 flex justify-between items-center py-4" onMouseLeave={() => setActiveDropdown(null)}>
        {/* Logo */}
        <div className="text-white font-bold text-3xl flex items-center space-x-1">
          <span className="font-serif tracking-widest">JHL</span>
          <span className="text-sm font-extrabold tracking-wider block">CONSTRUCTORS</span>
        </div>

        {/* Menu */}
        <div className="flex space-x-6 items-center font-semibold relative">
          {menuItems.map(({ label, dropdown }) => (
            <div
              key={label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(label)}
             
            >
              {/* Nav Item */}
              <div className="flex items-center cursor-pointer">
                <span className={`transition ${activeDropdown === label ? 'underline underline-offset-4' : ''}`}>
                  {label}
                </span>
                <ChevronDown
                  size={16}
                  className={`ml-1 text-yellow-400 transition-transform duration-200 ${
                    activeDropdown === label ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {/* Dropdown */}
              {activeDropdown === label && (
                <div
                  className="absolute top-full left-0 mt-7 w-52 bg-gray-100 text-black border border-gray-200 shadow-md z-20"
                >
                  {/* Yellow line */}
                  <div className="h-1 bg-yellow-400"></div>
                  {dropdown.map((item, i) => (
                    <div
                      key={i}
                      className="px-4 py-3 border-b border-gray-200 hover:bg-gray-200 cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Careers */}
          <div className="cursor-pointer hover:underline hover:underline-offset-4 transition">Careers</div>
          
        </div>
      </div>
    </nav>
  );
}
