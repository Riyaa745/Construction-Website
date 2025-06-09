'use client';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

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
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-[#37393A] text-white sticky top-0 z-50 px-5 transition-all duration-300 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className={` ${isScrolled ? 'w-20' : 'w-60'}`}>
          <img src="./logo.svg" alt="codewareit" />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu for Desktop */}
        <div className="hidden md:flex space-x-6 items-center font-semibold relative">
          {menuItems.map(({ label, dropdown }) => (
            <div
              key={label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(label)}
            >
              <div>
                {/* Nav Item */}
                <div className="flex items-center cursor-pointer select-none">
                  <span className={`transition ${activeDropdown === label ? 'underline underline-offset-4' : ''}`}>
                    {label}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`pl-1 text-yellow-400 transition-transform duration-200 ${activeDropdown === label ? 'rotate-180' : ''}`}
                  />
                </div>

                {/* Dropdown */}
                {activeDropdown === label && (
                  <div
                    className="absolute top-full left-0 mt-7 min-w-[150px] max-w-full bg-gray-100 text-black border border-gray-200 shadow-md z-20 overflow-auto"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {/* Updated underline hover bar */}
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>

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
            </div>
          ))}

          <div className="cursor-pointer hover:underline hover:underline-offset-4 transition select-none">Careers</div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-6 bg-[#F3F3F3] text-black">
          {menuItems.map(({ label, dropdown }) => (
            <div key={label} className="border-b border-gray-300">
              <div
                onClick={() => setActiveDropdown(activeDropdown === label ? null : label)}
                className="flex justify-between items-center py-4 font-semibold cursor-pointer"
              >
                <span>{label}</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${activeDropdown === label ? 'rotate-180' : ''}`}
                />
              </div>
              {activeDropdown === label && (
                <div className="pl-4 pb-2 space-y-2">
                  {dropdown.map((item, i) => (
                    <div key={i} className="py-2 text-gray-600 border-b border-gray-200 cursor-pointer">
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="border-b border-gray-300 py-4 font-semibold cursor-pointer">Careers</div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="border-2 border-yellow-400 px-6 py-2 font-semibold">Careers</button>
            <button className="border-2 border-yellow-400 px-6 py-2 font-semibold">Contact Us</button>
          </div>
        </div>
      )}
    </nav>
  );
}
