import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative h-full w-full">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full min-h-[50vh] sm:h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-end pt-[31rem] sm:pt-[32.99rem]">
        <div className="px-8 md:px-20 ">
          <h1 className="text-4xl md:text-6xl font-bold italic mb-4 text-white">
            Building Colorado's Future
          </h1>
        </div>

        {/* Full-width Black Background Section */}
        <div className="w-full bg-[#030303] text-white px-8 md:px-20 py-10">
          <div className="grid md:grid-cols-2 gap-10 w-full">
            <div>
              <div className="h-0.5 bg-yellow-400 mb-5"></div>
              <h2 className="text-2xl font-semibold mb-2">Building</h2>
              <p>
                Building Colorado’s future is our founding responsibility, rooted in a
                commitment to providing the absolute best for generations to come.
              </p>
            </div>
            <div>
              <div className="h-0.5 bg-yellow-400 mb-5"></div>
              <h2 className="text-2xl font-semibold mb-2">Infrastructure</h2>
              <p>
                Bringing critical infrastructure to our communities is essential to social
                well-being, and delivering ‘Best in Class’ horizontal infrastructure has
                become a core focus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
