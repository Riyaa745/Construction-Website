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
        <source src="/hero1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-end pt-[31rem] sm:pt-[32.99rem]">
        {/* Headline and Subheadline */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-[11rem] -translate-y-[23rem] sm:-translate-x-[25rem] sm:-translate-y-[15rem] text-center z-20 px-4 md:px-20">
          <h1 className="text-6xl font-bold italic text-white mb-4">
            Engineering Excellence, Building Dreams
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            From blueprint to brickwork — we shape the future of infrastructure with trust, quality, and innovation.
          </p>
        </div>

        {/* Full-width Black Background Section */}
        <div className="w-full bg-[#030303] text-white px-8 md:px-20 py-10 mt-[20rem] sm:mt-10">
          <div className="grid md:grid-cols-2 gap-10 w-full">
            <div>
              <div className="h-0.5 bg-yellow-400 mb-5"></div>
              <h2 className="text-2xl font-semibold mb-2">Building</h2>
              <p>
                We don't just build structures — we create spaces where life happens. Our
                commitment lies in crafting durable, aesthetic, and functional buildings that
                stand tall for generations in the heart of Uttarakhand.
              </p>
            </div>
            <div>
              <div className="h-0.5 bg-yellow-400 mb-5"></div>
              <h2 className="text-2xl font-semibold mb-2">Infrastructure</h2>
              <p>
                From solid foundations to seamless connectivity, our infrastructure projects are
                designed to fuel growth, enhance mobility, and support the evolving needs of
                urban and rural communities across the region.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
