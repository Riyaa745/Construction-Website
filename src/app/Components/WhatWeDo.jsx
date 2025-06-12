'use client';
import React from 'react'

export default function WhatWeDo() {
  return (
    <section className="bg-blue-50 py-16 px-4 text-center">
      <h4 className="text-yellow-500 text-xl font-semibold uppercase mb-2">
        What We Do
      </h4>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Building the future on a <br className="hidden md:block" />
        foundation of excellence
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        We specialize in a wide range of construction services, including
        residential, commercial, and industrial projects. From initial design to final inspection, we work closely with our clients to understand their unique needs and vision.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Stat 1 */}
        <div className="bg-[#0F1F3E] text-white px-3 py-15 rounded-4xl">
          <div className="text-3xl font-bold mb-2">99%</div>
          <p className="text-sm font-medium">Buildings Control Approval Rate</p>
        </div>

        {/* Stat 2 */}
        <div className="bg-[#0F1F3E] text-white px-3 py-15 rounded-4xl">
          <div className="text-3xl font-bold mb-2">200+</div>
          <p className="text-sm font-medium">Active Construction Management</p>
        </div>

        {/* Stat 3 */}
        <div className="bg-[#0F1F3E] text-white px-3 py-15 rounded-4xl">
          <div className="text-3xl font-bold mb-2">100+</div>
          <p className="text-sm font-medium">Completed Projects Every Year</p>
        </div>

        {/* Stat 4 */}
        <div className="bg-[#0F1F3E] text-white px-3 py-15 rounded-4xl">
          <div className="text-3xl font-bold mb-2">4.253</div>
          <p className="text-sm font-medium">Million Euros Turnover In The 2020</p>
        </div>
      </div>
    </section>
  )
}
