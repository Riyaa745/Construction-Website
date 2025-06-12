'use client';
import Image from 'next/image';
import Link from "next/link";

const services = [
  {
    title: 'Building Construction',
    image: '/s1.jpg',
    description: 'Our post-construction services give you peace of mind knowing that we are still here for you even after.',
  },
  {
    title: 'Architecture Design',
    image: '/s2.jpg',
    description: 'Creative architectural planning and design tailored to your vision and functionality.',
  },
  {
    title: 'Building Renovation',
    image: '/s3.jpg',
    description: 'Revive and preserve your buildings with our expert renovation and maintenance services.',
  },
  {
    title: 'Infrastructure',
    image: '/s4.jpg',
    description: `We deliver robust infrastructure solutions that enhance growth potential,boost connectivity, and ensure durability.`,

  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-[#eaf6ff] py-20 px-6 text-center overflow-hidden">
      {/* Blueprint Background */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full z-0"
        style={{
          backgroundImage: "url('/servicebg.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top right',
          backgroundSize: '700px auto',
        }}
      ></div>

      <div className="relative z-10">
        <h4 className="text-yellow-500 font-bold uppercase text-2xl mb-2">Our Services</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our construction services
        </h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-10">
          We specialize in a wide range of construction services, including residential, commercial, and industrial projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto text-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer shadow-lg transition-transform"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 z-10 transition-all duration-500 group-hover:bg-black/60" />

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-end px-6 text-white z-20 transition-all duration-500 group-hover:justify-center">
                <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:text-2xl">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link href='/service'>
          <button className="mt-10 bg-yellow-400 text-black px-6 py-2 font-bold rounded-full hover:bg-yellow-500 transition">
            View All Services →
          </button>
        </Link>
      </div>
    </section>
  );
}
