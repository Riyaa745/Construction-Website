import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Mainservice() {
    const projects = [
        {
            location: "Jharia, Jharkhand",
            title: "Coal Mine Reclamation",
            image: "coal-mine.jpg",
        },
        {
            location: "Pune, Maharashtra",
            title: "Mula River Bridge",
            image: "pune-bridge.jpg",
        },
        {
            location: "Shimla, Himachal Pradesh",
            title: "Mountain Waste Management",
            image: "waste-expansion.jpg",
        },
    ];

    const project1 = [
        {
            title: "Water/Wastewater",
            desc: "Our Water/Wastewater work program specializes in: Transmission, Storage, and Treatment.",
            link: "View Water/Wastewater Projects",
        },
        {
            title: "Land Development",
            desc: "Our Land Development work program specializes in: Publicly-Owned Infrastructure, Commercial/Industrial Site Development, and Landfills.",
            link: "View Land Development Projects",
        },
        {
            title: "Transportation",
            desc: "Our Transportation work program specializes in: Roads, Bridges, Rail, and Complex Pedestrian Access Projects.",
            link: "View Transportation Projects",
        },
        {
            title: "Mining",
            desc: "BHUMIJ’s Mining work program specializes in: Reclamation, Expansion, Decommissioning, and Environmental Controls.",
            link: "View Mining Projects",
        },
    ];
    const sectors = [
        {
            title: "Smart Education",
            desc:"Innovative spaces for schools, charter institutions, and higher education.",
            link: "View Education Project",
        },
        {
            title: "Civic Development",
            desc:
                "Municipal projects for public safety, parks, and urban infrastructure.",
            link: "View Municipal Project",
        },
        {
            title: "Residential Units",
            desc:
                "Affordable housing, senior living, and modern multi-use residential spaces.",
            link: "View Residential Project",
        },
        {
            title: "Corporate Spaces",
            desc:
                "Commercial construction for both public and private enterprises.",
            link: "View Commercial Project",
        },
    ];


    return (
        <div className="px-4 sm:px-8 md:px-12 py-10 sm:py-12 mx-auto mt-8 sm:mt-10 lg:mt-[2rem]">
            {/* Breadcrumb */}
            <nav className="text-sm sm:text-base md:text-lg gap-2 sm:gap-3 flex font-bold text-gray-600 mb-5 sm:mb-7">
                <span>Home</span> <span className="text-yellow-500">&gt;</span> <span>Services</span>
            </nav>

            {/* Title and Description */}
            <div className="flex flex-col lg:flex-row justify-between items-start mb-[1.3rem]">
                <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[rgb(19,85,137)] font-bold mb-4">
                        Doing the Right Thing — Always
                    </h1>
                    <p className="text-gray-700 mb-6 sm:mb-10 text-sm sm:text-md md:text-lg max-w-4xl mt-5">
                        At BHUMIJ INFRA, we don’t just construct buildings — we build communities, infrastructure, and lasting relationships.
                    </p>
                </div>
                <button className="text-sm  sm:text-md hover:bg-yellow-400 transition px-4 py-3 border-2 border-yellow-400 font-semibold flex items-center gap-2 shadow-lg mt-8 lg:mt-[2rem] mr-0 lg:mr-[3rem]">
                    Get in Touch →
                </button>
            </div>

            {/* Image Section */}
            <div className="border-t pt-8 ">
                <img
                    src="/man2.png"
                    alt="Infrastructure"
                    className="w-full h-auto sm:h-[24rem] md:h-[28rem] lg:h-[30rem] rounded shadow object-cover"
                />
            </div>

            {/* Unified Execution Approach */}
            <section className="bg-white text-gray-800 px-4 sm:px-8 md:px-14 mt-12 md:mt-[6rem] flex flex-col lg:flex-row justify-between gap-6 lg:gap-[2rem]">
                <div className="max-w-full lg:max-w-2xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[rgb(19,85,137)] mb-6">
                        Unified Execution Approach
                    </h2>
                    <p className="text-base sm:text-lg mb-4">
                        At BHUMIJ INFRA, our Unified Execution Approach bridges strategy, design, and construction into a streamlined process that drives excellence. We don’t just build structures—we build value, trust, and long-term impact.
                    </p>
                    <p className="text-base sm:text-lg mb-4">
                        This approach ensures that each stakeholder, from client to subcontractor, is aligned from day one. We believe in transparent communication, proactive planning, and continuous collaboration across disciplines.
                    </p>
                </div>
                <div className="w-full lg:w-[40rem] h-auto">
                    <img
                        src="/Sunset.jpg"
                        alt="Infrastructure"
                        className="w-full h-auto lg:h-[25rem] rounded shadow object-cover"
                    />
                </div>
            </section>

            {/* Infrastructure Section */}
            <div className="bg-white p-4 sm:p-6 md:p-10 flex flex-col lg:flex-row justify-between gap-8 md:gap-10 mt-10 lg:mt-[4rem]">
                <div className="w-full lg:w-1/2">
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-[rgb(55,57,58)]">
                        Infrastructure
                    </h2>
                    <p className="mt-4 text-sm sm:text-base lg:text-lg">
                        Every successful community is built on a foundation of reliable infrastructure — supporting how we live, learn, work, and play. BHUMIJ’s Infrastructure division focuses on Water/Wastewater, Large-Scale Land Development, Transportation, and Mining.
                    </p>
                    <button className="text-md sm:text-md hover:bg-yellow-400 transition px-4 py-3 border-2 border-yellow-400 font-semibold flex items-center gap-2 shadow-lg mt-6 lg:mt-[2rem]">
                        See Our Infrastructure Project →
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">
                    {project1.map((project1, idx) => (
                        <div key={idx} className="bg-[rgb(55,57,58)] text-white p-6 sm:p-8 rounded-xl shadow-lg">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">{project1.title}</h3>
                            <p className="text-gray-300 text-sm sm:text-base mb-6">{project1.desc}</p>
                            <hr className="border-yellow-500 mb-4" />
                            <a href="#" className="flex items-center text-white font-bold">
                                {project1.link}
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 hover:-translate-x-1" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Projects Section */}
            <div className="mt-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 sm:p-6 bg-gray-50">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 sm:h-56 md:h-60 object-cover"
                            />
                            <div className="p-6">
                                <p className="text-gray-600 text-sm">{project.location}</p>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-2">{project.title}</h3>
                                <div className="mt-4 flex items-center gap-2 group">
                                    <span className="text-yellow-500 w-10 h-1 bg-yellow-500 block rounded-full group-hover:w-16 transition-all"></span>
                                    <a href="#" className="text-black font-semibold text-sm sm:text-base">View Project</a>
                                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center">
                    <button className="text-md sm:text-md hover:bg-yellow-400 transition px-4 py-3 border-2 border-yellow-400 font-semibold flex items-center gap-2 shadow-lg mt-8">
                        See our All Project →
                    </button>
                </div>
            </div>

            {/*card last  */}
           <div className="bg-white p-4 sm:p-6 md:p-10 flex flex-col lg:flex-row justify-between gap-8 md:gap-10 mt-10 lg:mt-[4rem]">
                <div className="w-full lg:w-1/2">
                    <h2 className="text-5xl sm:text-4xl font-bold text-gray-800 mb-4">
                    Infrastructure Excellence
                </h2>
                   <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-4xl mb-8">
                    At BHUMIJ INFRA, we shape the future with impactful infrastructure
                    projects—spanning education, civic, housing, and commercial sectors.
                </p>
                    <button className="text-md sm:text-md hover:bg-yellow-400 transition px-4 py-3 border-2 border-yellow-400 font-semibold flex items-center gap-2 shadow-lg mt-6 lg:mt-[2rem]">
                        See Our Infrastructure Project →
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">
                    {sectors.map((sectors, idx) => (
                        <div key={idx} className="bg-[rgb(55,57,58)] text-white p-6 sm:p-8 rounded-xl shadow-lg">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">{sectors.title}</h3>
                            <p className="text-gray-300 text-sm sm:text-base mb-6">{sectors.desc}</p>
                            <hr className="border-yellow-500 mb-4" />
                            <a href="#" className="flex items-center text-white font-bold">
                                {sectors.link}
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 hover:-translate-x-1" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
