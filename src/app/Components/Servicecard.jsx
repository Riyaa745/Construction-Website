import React from 'react'
import Image from 'next/image';

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
    {
        title: 'Building Maintenance',
        image: '/s4.jpg',
        description: 'Reliable upkeep services to extend your building’s life. We handle inspections, repairs, and routine maintenance.',
    },
    {
        title: 'Project Management',
        image: '/s7.jpg',
        description: 'Expert oversight from start to finish. We manage timelines, budgets, and teams for smooth project delivery.',
    }
];
export default function Servicecard() {
    return (
        <section className="py-20 px-8 bg-white text-center">

            <nav className="text-sm sm:text-base lg:text-lg gap-2 sm:gap-3 flex font-bold text-gray-600 mb-4 sm:mb-6">
                Home <span className="text-yellow-400"> &gt; </span>
                <span className="font-bold">Service</span>
            </nav>

            <p className="text-yellow-500 text-xl font-semibold uppercase tracking-widest mb-2">
                Our Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our construction services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                We specialize in a wide range of construction services, including residential, commercial, and industrial projects.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
        </section>
    )
}
