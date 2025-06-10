import React from "react";

export default function ContactSection() {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-10 sm:py-12 bg-gradient-to-br from-blue-50 to-white flex flex-col items-center">
      <div className="w-full max-w-7xl">

        {/* Breadcrumb + Heading */}
        <div>
          <nav className="text-sm sm:text-base lg:text-lg gap-2 sm:gap-3 flex font-bold text-gray-600 mb-4 sm:mb-6">
            Home <span className="text-yellow-400"> &gt; </span>
            <span className="font-bold">Contact us</span>
          </nav>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl text-[rgb(19,85,137)] font-bold mb-4">
            Let's Get the Conversation Started
          </h2>
          <p className="text-gray-700 mb-8 text-base sm:text-lg">
            Let’s build something incredible together. Reach out to us.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="flex flex-col lg:flex-row justify-between mt-10 sm:mt-16 gap-10">
          
          {/* Contact Info */}
          <div className="space-y-6 w-full lg:w-[25rem]">
            <div className="flex items-center space-x-4 p-4 bg-white shadow-lg rounded-xl border-l-4 border-blue-600 hover:scale-105 transition">
              <div className="text-2xl sm:text-3xl">📞</div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600 text-sm sm:text-md">+91 9837218345</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white shadow-lg rounded-xl border-l-4 border-blue-600 hover:scale-105 transition">
              <div className="text-2xl sm:text-3xl">✉️</div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-800">Email</h4>
                <p className="text-blue-700 text-sm sm:text-md">
                  <a href="mailto:bhumijinfra@gmail.com">bhumijinfra@gmail.com</a>
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-10 sm:mt-16">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[rgb(41,51,119)] font-bold mb-4">
                Our Location
              </h3>
              <div className="w-full sm:w-[30rem] md:w-[35rem] lg:w-[40rem] h-[18rem] sm:h-[20rem] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.921076291755!2d78.00034687535509!3d30.296308374797764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b8e219c0245%3A0x2a726396090b3eb3!2sBhumij%20Infra!5e0!3m2!1sen!2sin!4v1749279455891!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bhumij Infra Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/60 backdrop-blur-xl shadow-xl rounded-2xl p-6 sm:p-8 border border-blue-200 w-full lg:w-[34rem]">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-6">Send a Message</h3>
            <form className="space-y-5">
              <div>
                <label className="block mb-1 font-medium text-gray-700 text-sm sm:text-base">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700 text-sm sm:text-base">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700 text-sm sm:text-base">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
