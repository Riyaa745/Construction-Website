import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#2d2f31] text-white relative">
            <div className="mx-auto px-6 md:px-20 py-10 border-t border-yellow-600">
                <div className="border-[#f5a800] border-b-1">
                    <div className="mb-10 md:mb-9">
                        <div className="flex flex-col md:flex-row md:gap-2 items-start md:items-center mb-4 space-y-3 md:space-y-0">
                            <img src="./logo1.png" alt="codewareit" className="w-40" />
                            <p className="text-white font-semibold italic text-lg mt-2">
                                Building the Future
                            </p>
                        </div>

                        <div className="md:absolute md:top-10 md:right-20 mt-4 md:mt-0">
                            <button className="border-2 border-[#f5a800] text-white hover:text-black font-bold px-6 py-2 rounded hover:bg-[#f5a800]">
                                Let's Work Together
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
                    {/* Address + Email + Socials */}
                    <div className="text-sm space-y-3">
                        {/* Address */}
                        <div className="flex items-start gap-2">
                            <FaMapMarkerAlt className="text-yellow-500 mt-1" />
                            <div>
                                <p>Lord Krishna Arcade 4</p>
                                <p>Mayfair Business Park Near</p>
                                <p>Hotel Galaxy, Majra</p>
                                <p>Dehradun 248001</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-2 ">
                            <FaEnvelope className="text-yellow-500" />
                            <a href="mailto:info@bhumijinfra.com" className="underline text-white hover:text-yellow-500 transition-colors duration-200">
                                info@bhumijinfra.com
                            </a>
                        </div>

                        {/* Social Media */}
                        <p className="mt-2 font-semibold text-white text-[16px] pl-4">Follow Us:</p>
                        <div className="flex space-x-4 text-2xl mt-2 pl-4">
                            <a href="#" aria-label="LinkedIn" className="hover:text-yellow-500 transition-colors duration-200">
                                <FaLinkedinIn />
                            </a>
                            <a href="#" aria-label="Facebook" className="hover:text-yellow-500 transition-colors duration-200">
                                <FaFacebookF />
                            </a>
                            <a href="#" aria-label="Instagram" className="hover:text-yellow-500 transition-colors duration-200">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Footer Nav */}
                    <div className="flex flex-col items-start gap-8">
                        <div className="grid grid-cols-2 gap-x-10 gap-y-6 md:grid-cols-5 md:gap-8 text-md">
                            <div>
                                <h3 className="font-bold mb-2">
                                    <Link href="/about" className="hover:text-yellow-500 transition-colors duration-200">About</Link>
                                </h3>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">
                                    <Link href="/services" className="hover:text-yellow-500 transition-colors duration-200">Services</Link>
                                </h3>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">
                                    <Link href="/projects" className="hover:text-yellow-500 transition-colors duration-200">Projects</Link>
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
                                &copy; 2024 JHL Constructors. All Rights Reserved. <span className="underline mt-1 hover:text-yellow-500 transition-colors duration-200">
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
