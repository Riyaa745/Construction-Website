"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "When I think of your team on this project, the first things that come to mind are attention to detail and unwavering dependability. The entire team takes ownership for the project, no matter if the task should be theirs or not.",
    author: "Michael Bjes",
    company: "Hines",
    logo: "/t1.jpg",
  },
  {
    quote:
      "The team at JHL demonstrated excellence in communication, execution, and attention to detail. It’s rare to work with such a dedicated and proactive crew.",
    author: "Sarah Jordan",
    company: "Confidential Client",
    logo: "/t2.jpg",
  },
  {
    quote:
      "JHL always delivers top-tier results. Their reliability and professionalism make them our top choice for infrastructure projects.",
    author: "David Smith",
    company: "ABC Developers",
    logo: "/t3.webp",
  },
];

export default function TestimonialCarousel() {
  return (
    <section className="bg-white py-20 px-20">
      <div className=" mx-auto text-center relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="w-full"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="px-32 flex gap-10">
                <FaQuoteLeft className="text-yellow-500 text-5xl pb-5 inline-block" />
                <div className="">
                  <p className="text-lg md:text-[16px] font-medium text-gray-900 leading-relaxed mb-6">
                    “{item.quote}”
                  </p>
                  <hr className="border-t-2 border-yellow-500 w-full  mx-auto mb-6" />
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.logo}
                      alt={item.company}
                      width={100}
                      height={40}
                      objectFit="contain"
                    />
                    <p className="text-md font-semibold text-black">{item.author}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
