'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-12 px-4 bg-white mt-0">
      {/* Left Image */}
      <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
        <Image
          src="/about1.jpg"
          alt="Construction Experts"
          width={800} // approximate full width
          height={600} // match your original image aspect
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 lg:pl-10 mt-8 lg:mt-0">
        <h4 className="text-yellow-500 text-2xl font-semibold uppercase mb-1">About Us</h4>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-snug">
          Building Dreams, Structuring Future
        </h2>
        <p className="text-gray-600 text-sm mb-5 leading-relaxed">
          At <strong>BHUMIJ INFRA</strong>, we are committed to transforming your vision into lasting structures.
          Based in the heart of Dehradun, we specialize in residential and commercial construction,
          property dealing, and infrastructure development. Our focus is on quality craftsmanship,
          sustainable practices, and customer satisfaction—ensuring every project stands the test of time.
        </p>

        <div className="bg-blue-50 p-4 rounded-md mb-5">
          <ul className="space-y-2 text-sm text-gray-800">
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2 text-base">✔</span>
              End-to-End Construction Services
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2 text-base">✔</span>
              Trusted Property Dealing Experts
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2 text-base">✔</span>
              Local Knowledge. Global Standards.
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link href='/contact'>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-full text-sm font-medium">
              Get Free Quote
            </button>
          </Link>
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-yellow-500 text-lg">📞</span>
            <div>
              <p className="text-gray-500">Call us 24/7</p>
              <a href="tel:+919634508816" className="font-bold text-gray-800 hover:underline">
                +91 9634508816
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
