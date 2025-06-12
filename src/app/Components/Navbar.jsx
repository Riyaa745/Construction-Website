'use client';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-black/60 backdrop-blur-md text-white sticky top-0 z-50 px-0 py-2 transition-all duration-300">
      <div className="container mx-auto px-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="w-30">
            <img src="./logo1.png" alt="codewareit" />
          </div>
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center font-semibold">
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/Aboutus' },
            { label: 'Services', href: '/Service' },
            { label: 'Contact', href: '/Contactpage' }
          ].map(({ label, href }) => (
            <Link key={label} href={href} className="relative group transition">
              <span>{label}</span>
              <div className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden w-full bg-white/90 text-black pb-6 px-4 absolute top-full left-0 z-40 backdrop-blur-md">
          {[
            { label: 'About', href: '#about' },
            { label: 'Services', href: '#services' },
            { label: 'Contact', href: '#contact' }
          ].map(({ label, href }) => (
            <Link key={label} href={href}>
              <div className="border-b border-gray-300 py-4 font-semibold cursor-pointer">
                {label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
