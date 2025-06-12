'use client';
import React from 'react';
import { ArrowRight, Phone, CheckCircle, Target, Eye, Gem } from "lucide-react";
import Image from 'next/image';

export default function About() {
    const items = [
        {
            icon: <Target className="w-10 h-10 text-yellow-500" />,
            title: "Our Mission",
            desc: "To create environments where safety, integrity, and reliability guide every action, empowering our people to return home safely each day.",
        },
        {
            icon: <Eye className="w-10 h-10 text-yellow-500" />,
            title: "Our Vision",
            desc: "To be a leader in sustainable infrastructure by setting the standard for safe, efficient, and community-driven construction practices.",
        },
        {
            icon: <Gem className="w-10 h-10 text-yellow-500" />,
            title: "Our Values",
            desc: "Integrity, innovation, and accountability drive us to deliver quality results while fostering trust with every client and partner.",
        },
    ];

    const stats = [
        { value: '99%', label: 'Building Plan Approvals Secured Across India' },
        { value: '320+', label: 'Active Construction Sites Managed Nationwide' },
        { value: '50+', label: 'High-Quality Projects Delivered Annually' },
        { value: '₹4,253 Cr', label: 'Revenue Achieved in FY 2020-21' },
    ];

    return (
        <div className="px-4 sm:px-8 md:px-12 py-10 md:py-12 mx-auto sm:mt-[0] bg-white">
            {/* Breadcrumb */}
            <nav className="text-base sm:text-lg gap-2 sm:gap-3 flex font-bold text-gray-600 mb-5 sm:mb-7">
                <span>Home</span> <span className="text-yellow-500">&gt;</span> <span>About Us</span>
            </nav>

            {/* Hero Section */}
            <section className="flex flex-col lg:flex-row items-center justify-between py-12 px-4 sm:px-6 md:px-10 bg-white">
                <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
                    <Image
                        src="/about1.jpg"
                        alt="Construction Experts"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>

                <div className="w-full lg:w-1/2 lg:pl-10 mt-8 lg:mt-0">
                    <h4 className="text-yellow-500 text-2xl sm:text-[30px] font-semibold uppercase mb-1">About Us</h4>
                    <h2 className="text-3xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 mt-2 leading-snug">
                        Building Dreams, Structuring Future
                    </h2>
                    <p className="text-gray-600 text-md mb-5 leading-relaxed">
                        At <strong>BHUMIJ INFRA</strong>, we are committed to transforming your vision into lasting structures.
                        Based in the heart of Dehradun, we specialize in residential and commercial construction,
                        property dealing, and infrastructure development.
                    </p>

                    <div className="bg-blue-50 p-4 sm:p-5 rounded-md mb-5">
                        <ul className="space-y-2 text-md text-gray-800">
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
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-3 sm:py-4 rounded-full text-md font-medium">
                            Get Free Quote
                        </button>
                        <div className="flex items-center space-x-2 text-md">
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

            {/* Our Legacy */}
            <section className="bg-white py-16 px-4 sm:px-10 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="relative w-full md:w-1/2">
                    <Image
                        src="/silhouette.avif"
                        alt="Construction Site"
                        width={600}
                        height={400}
                        className="rounded-3xl shadow-lg w-full object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 space-y-6 mt-[1.3rem]">
                    <h4 className="text-yellow-500 text-2xl sm:text-3xl font-semibold uppercase tracking-wider">
                        Our Legacy
                    </h4>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Building the Future with Unshakable Foundations
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg">
                        With decades of experience across residential, commercial, and industrial sectors, we deliver infrastructure that stands the test of time.
                    </p>
                    <p className="text-gray-600">
                        We believe construction is more than just building — it’s about creating value, ensuring safety, and exceeding expectations every step of the way.
                    </p>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="py-16 bg-white px-4 sm:px-6 md:px-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300"
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-md">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Who We Are */}
            <section className="bg-white py-16 px-4 sm:px-6 md:px-10 lg:px-20 flex items-center justify-center">
                <div className="w-full max-w-5xl text-center space-y-6">
                    <h4 className="text-yellow-500 text-2xl sm:text-3xl font-semibold uppercase tracking-wider">
                        Who We Are
                    </h4>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Engineering Excellence for a Stronger Tomorrow
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                        We specialize in a wide range of construction services, including residential, commercial, and industrial projects.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 px-2 sm:px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#0b1b3b] text-white rounded-3xl py-10 px-6 text-center flex flex-col justify-center items-center shadow-md"
                        >
                            <div className="text-4xl font-bold mb-2">{item.value}</div>
                            <div className="text-lg text-gray-300 leading-snug max-w-[200px]">{item.label}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
