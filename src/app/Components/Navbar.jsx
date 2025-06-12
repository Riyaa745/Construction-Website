'use client';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [isHomePage]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-0 py-5 transition-all duration-300 ${
        isHomePage && !isScrolled
          ? 'bg-transparent text-white'
          : 'bg-black/60 backdrop-blur-md text-white'
      }`}
    >
      <div className="container mx-auto px-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="w-30">
            {/* <Image src="/logo1.png" alt="codewareit" width={120} height={40} /> */}
            <h1 className="font-bold">BHUMIJ INFRA</h1>
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
            { label: 'About', href: '/aboutus' },
            { label: 'Service', href: '/service' },
            { label: 'Contact', href: '/contact' },
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
        <div className="md:hidden w-full min-h-screen bg-black text-white pb-6 px-4 absolute top-full left-0 z-40 backdrop-blur-sm rounded-b-xl">
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/aboutus' },
            { label: 'Service', href: '/service' },
            { label: 'Contact', href: '/contact' },
          ].map(({ label, href }) => (
            <Link key={label} href={href} onClick={() => setMobileOpen(false)}>
              <div className="border-b border-gray-600 py-4 font-semibold cursor-pointer hover:text-yellow-400 transition">
                {label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
