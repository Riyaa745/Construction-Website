import Image from 'next/image';
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#2d2f31] text-white relative">
            <div className="mx-auto px-6 md:px-20 py-8 border-t border-yellow-600">

                {/* Centered Layout for Mobile */}
                <div className="flex flex-col items-center justify-center text-center md:hidden border-b border-[#f5a800] pb-8 space-y-4 mb-10">
                    <Image
                        src="/logo1.png"
                        alt="codewareit"
                        width={120}
                        height={40}
                        className="w-40 h-auto"
                    />
                    <p className="text-white font-semibold italic text-lg">
                        Building the Future
                    </p>
                    <Link href="/contact">
                        <button className="border-2 border-[#f5a800] text-white hover:text-black font-bold px-6 py-2 rounded hover:bg-[#f5a800]">
                            Let's Work Together
                        </button>
                    </Link>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex justify-between items-center mb-10 border-b border-[#f5a800] pb-5">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/logo1.png"
                            alt="codewareit"
                            width={120}
                            height={40}
                            className="w-40 h-auto"
                        />
                        <p className="text-white font-semibold italic text-lg">
                            Building the Future
                        </p>
                    </div>

                    <Link href="/contact">
                        <button className="border-2 border-[#f5a800] text-white hover:text-black font-bold px-6 py-2 rounded hover:bg-[#f5a800]">
                            Let's Work Together
                        </button>
                    </Link>
                </div>

                {/* Address + Footer Nav Section */}
                <div className="mt-10 flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
                    {/* Address + Email + Socials */}
                    <div className="text-sm space-y-3 flex flex-row sm:flex-col gap-10 sm:gap-0">
                        <div className="flex items-start gap-2">
                            <FaMapMarkerAlt className="text-yellow-500 mt-1" />
                            <div>
                                <p>Lord Krishna Arcade 4</p>
                                <p>Mayfair Business Park Near</p>
                                <p>Hotel Galaxy, Majra</p>
                                <p>Dehradun 248001</p>
                            </div>
                        </div>
                        {/* Email + Socials Column */}
                        <div className="flex flex-col gap-3">
                            {/* Email */}
                            <div className="flex items-center gap-2">
                                <FaEnvelope className="text-yellow-500" />
                                <a href="mailto:info@bhumijinfra.com" className="underline text-white hover:text-yellow-500 transition-colors duration-200">
                                    info@bhumijinfra.com
                                </a>
                            </div>

                            {/* Follow Us */}
                            <div className="flex flex-col">
                                <span className="font-semibold text-white text-[16px]">Follow Us:</span>
                                <div className="flex space-x-4 text-2xl mt-2">
                                    <a href="#" className="hover:text-yellow-500 transition-colors duration-200"><FaLinkedinIn /></a>
                                    <a href="#" className="hover:text-yellow-500 transition-colors duration-200"><FaFacebookF /></a>
                                    <a href="#" className="hover:text-yellow-500 transition-colors duration-200"><FaInstagram /></a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Footer Nav */}
                    <div className="flex flex-col items-start gap-0 sm:gap-6 text-center">
                        <div className="flex ml-10 sm:ml-0 gap-8 text-md ">
                            <div>
                                <h3 className="font-bold mb-2">
                                    <Link href="/" className="hover:text-yellow-500 transition-colors duration-200">Home</Link>
                                </h3>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">
                                    <Link href="/aboutus" className="hover:text-yellow-500 transition-colors duration-200">About</Link>
                                </h3>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">
                                    <Link href="/service" className="hover:text-yellow-500 transition-colors duration-200">Services</Link>
                                </h3>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">
                                    <Link href="/contact" className="hover:text-yellow-500 transition-colors duration-200">Contact</Link>
                                </h3>
                            </div>
                        </div>

                        <div className="text-md text-white mt-6 md:mt-0 flex gap-1 items-end">
                            <p className="italic">
                                &copy; 2025 <a href="https://codewareit.in/" target='_blank'>Codewareit Pvt Ltd</a>. All Rights Reserved. <span className="underline mt-1 hover:text-yellow-500 transition-colors duration-200">
                                    Privacy Policy
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
