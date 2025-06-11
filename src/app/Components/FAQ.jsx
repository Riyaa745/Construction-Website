'use client';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// Icon component for building
const BuildingIcon = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 52V36H28V52" stroke="#f7a600" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 52V28H36V52" stroke="#f7a600" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M36 52V18H44V52" stroke="#f7a600" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 52V42H20V52" stroke="#f7a600" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M44 52V26H52V52" stroke="#f7a600" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Reusable FAQ item
const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen(!open)}
      className="border-t border-gray-300 pt-4 cursor-pointer transition-all duration-500 ease-in-out group"
    >
      <div className="flex justify-between items-center text-lg font-semibold text-[#1d2b4f]">
        <p className="group-hover:text-yellow-500 transition-colors duration-300">{question}</p>
        <ChevronDown className={`w-5 h-5 transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </div>
      <div
        className={`text-gray-600 mt-2 transition-all duration-500 ease-in-out overflow-hidden ${
          open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default function FAQSection() {
  return (
    <section className="bg-[#eaf6ff] py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-yellow-500 font-bold uppercase text-2xl mb-2">FAQs</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1d2b4f] mb-4">
          Got questions? we've got answers
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          We specialize in a wide range of construction services, including residential, commercial, and industrial projects.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Left: Images (Updated 2x2 grid layout) */}
        <div className="relative w-full max-w-md mx-auto grid grid-cols-2 grid-rows-2 gap-4">
          {['/faq1.jpg', '/faq2.jpg', '/faq3.jpg', '/faq4.jpg'].map((src, index) => (
            <div key={index} className="rounded-2xl overflow-hidden aspect-square relative">
              <Image
                src={src}
                alt={`faq${index + 1}`}
                fill
                className="rounded-2xl object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}

          {/* Center Circular Icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
            <BuildingIcon />
          </div>
        </div>

        {/* Right: FAQs */}
        <div className="flex flex-col gap-6 text-left">
          <FAQItem
            question="What services do you offer?"
            answer="We offer preconstruction, project management, general contracting, and post-construction services."
          />
          <FAQItem
            question="What types of projects do you specialize in?"
            answer="We specialize in residential buildings, commercial complexes, and industrial infrastructure projects."
          />
          <FAQItem
            question="Do you offer a free, no-obligation quotation?"
            answer="Yes, we provide free, no-obligation quotes after evaluating your project needs and site."
          />
          <FAQItem
            question="How long does a typical project take?"
            answer="The duration depends on the project scope, but we provide a detailed timeline after planning."
          />
          <FAQItem
            question="Are your services insured and certified?"
            answer="Absolutely! All our work is fully insured and we hold all the necessary certifications."
          />
        </div>
      </div>
    </section>
  );
}
