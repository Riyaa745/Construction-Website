"use client";
import Image from "next/image";

const projects = [
  {
    city: "Aurora, CO",
    title: "Prairie Waters 60-inch Water Line Installation",
    image: "/p1.jpg",
  },
  {
    city: "Confidential Location, CO",
    title: "2022 – 2023 VLF2 Phase III",
    image: "/p2.jpg",
  },
  {
    city: "Aurora, CO",
    title: "Griswold WPF Raw Water Structure Improvements",
    image: "/p3.jpg",
  },
];

export default function ProjectCards() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-200"
            >
              <div className="relative w-full h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-2">{project.city}</p>
                <h3 className="text-xl font-bold text-gray-900 leading-snug mb-6">
                  {project.title}
                </h3>
                <div className="border-b-2 border-yellow-500 w-12 mb-3" />
                <a
                  href="#"
                  className="text-black font-medium inline-flex items-center hover:underline"
                >
                  View Project
                  <span className="ml-2 text-lg">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="border border-yellow-500 px-6 py-3 font-semibold text-black rounded hover:bg-yellow-500 hover:text-white transition">
            See All Projects <span className="ml-2 text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
