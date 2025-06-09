'use client';
import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-16 px-6 md:px-18 bg-white text-[#37393A]">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Doing the Right <br /> Thing - Always
          </h2>
          <p className="text-lg text-gray-700">
            We are a driven{' '}
            <span className="text-black font-medium border-b-2 border-yellow-400">team</span>{' '}
            thriving in the relentless pursuit of exceptional experiences and enduring
            relationships.
          </p>
        </div>

        {/* Right Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              title: 'Culture',
              description:
                'The culture at JHL sets us apart. We are doing things differently from others in the Region.',
              link: 'See What Makes Our Company Culture Unique',
            },
            {
              title: 'Careers',
              description:
                'Are you smart, hungry, and humble? If so, there may be a future for you at JHL.',
              link: 'Discover Exciting Career Opportunities at JHL',
            },
            {
              title: 'News',
              description:
                'Our team is doing great work. Check out some of our recent achievements.',
              link: 'Get the Latest News from JHL',
            },
            {
              title: 'History',
              description:
                'Every company has a history. Ours is something we’re building on every day.',
              link: 'Explore Our History',
            },
          ].map((item, index) => (
            <div key={index} className="bg-[#37393A] text-white p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="mb-4 text-sm text-gray-300">{item.description}</p>
              <hr className="border-yellow-500 mb-2" />
              <a
                href="#"
                className="group flex justify-between items-center text-white font-semibold transition-all"
              >
                {item.link}
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
