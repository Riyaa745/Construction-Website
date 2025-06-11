import React from 'react'

function choose() {
  return (
    <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <p className="text-2xl font-semibold text-yellow-500 uppercase mb-2">
      Why Choose Us?
    </p>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Why we're your best choice
    </h2>
    <p className="text-gray-900 max-w-2xl mx-auto mb-12">
      Backed by decades of industry experience, we combine innovation, expertise, and dedication to deliver excellence on every construction project.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* Card 1 */}
      <div className="border rounded-xl p-6 text-left shadow-sm hover:shadow-md transition">
        <div className="text-yellow-500 mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="font-semibold text-yellow-600 text-lg mb-2">Innovative Solutions</h3>
        <p className="text-gray-600 text-sm mb-4">
          We apply modern construction techniques and smart planning to deliver unique, durable structures tailored to your needs.
        </p>
        <hr className="mb-4" />
        <p className="text-2xl font-bold text-gray-800">100+</p>
        <p className="text-sm text-gray-500">Projects Completed</p>
      </div>

      {/* Card 2 – Image */}
      <div className="rounded-xl overflow-hidden">
        <img
          src="/choose.jpg" // Replace with your actual image path
          alt="Construction site"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card 3 */}
      <div className="border rounded-xl p-6 text-left shadow-sm hover:shadow-md transition">
        <div className="text-yellow-500 mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 8c-2.28 0-4.14 1.72-4.46 3.96l-.05.27A2 2 0 009 15h6a2 2 0 001.5-3.27l-.05-.27A4.5 4.5 0 0012 8z" />
          </svg>
        </div>
        <h3 className="font-semibold text-yellow-600 text-lg mb-2">Quality Craftsmanship</h3>
        <p className="text-gray-600 text-sm mb-4">
          Every project is built with precision and high standards to ensure durability, safety, and satisfaction.
        </p>
        <hr className="mb-4" />
        <p className="text-2xl font-bold text-gray-800">100+</p>
        <p className="text-sm text-gray-500">Projects Completed</p>
      </div>

      {/* Card 4 – Image */}
      <div className="rounded-xl overflow-hidden">
        <img
          src="/choose1.jpg" // Replace with your actual image path
          alt="Construction work"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card 5 */}
      <div className="border rounded-xl p-6 text-left shadow-sm hover:shadow-md transition">
        <div className="text-yellow-500 mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
          </svg>
        </div>
        <h3 className="font-semibold text-yellow-600 text-lg mb-2">Expertise & Experience</h3>
        <p className="text-gray-600 text-sm mb-4">
          Our skilled team brings decades of hands-on construction experience, delivering reliable results every time.
        </p>
        <hr className="mb-4" />
        <p className="text-2xl font-bold text-gray-800">100+</p>
        <p className="text-sm text-gray-500">Projects Completed</p>
      </div>

      {/* Card 6 – Image */}
      <div className="rounded-xl overflow-hidden">
        <img
          src="/choose2.jpg" // Replace with your actual image path
          alt="High-rise buildings"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>

  )
}

export default choose