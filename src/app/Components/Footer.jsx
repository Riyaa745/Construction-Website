import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#2d2f31] text-white relative">
            <div className=" mx-auto px-20 py-10 border-t border-yellow-600">
                <div className="border-[#f5a800] border-b-1 ">
                    <div className="mb-10 md:mb-9 ">
                        <div className="flex gap-24 items-center mb-4">
                            <img src="./logo.svg" alt="codewareit" />
                            <p className="text-white font-semibold italic text-lg mt-2">
                                Building Colorado's Future
                            </p>
                        </div>

                        <div className="absolute top-10 right-20">
                            <button className="border-2 border-[#f5a800] text-white hover:text-black font-bold px-6 py-2 rounded hover:bg-[#f5a800]">
                                Let's Work Together
                            </button>
                        </div>
                    </div>
                </div>


                <div className="mt-10 flex flex-col md:flex-row justify-between">
                    <div className="text-sm">
                        <p>9100 E. Panorama Drive, Suite 300</p>
                        <p>Englewood, CO 80112</p>
                        <p>303.741.6116</p>
                        <a href="mailto:jhlinfo@jhlconstructors.com" className="underline text-white block">
                            jhlinfo@jhlconstructors.com
                        </a>
                        <div className="flex space-x-4 text-2xl mt-4">
                            <a href="#" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                            <a href="#" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-8">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
                            <div>
                                <h3 className="font-bold mb-2">About Us</h3>
                                <ul className="space-y-1">
                                    <li>Our Team</li>
                                    <li>Culture</li>
                                    <li className="font-bold text-white">News</li>
                                    <li>History</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">Services</h3>
                                <ul className="space-y-1">
                                    <li>Infrastructure</li>
                                    <li>Building</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">Projects</h3>
                                <ul className="space-y-1">
                                    <li>Our Experience</li>
                                    <li>All Projects</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">Contact</h3>
                                <ul className="space-y-1">
                                    <li>Trade Partners</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">Careers</h3>
                            </div>
                        </div>

                        <div className="text-md text-white mt-6 md:mt-0 flex gap-1 items-end">
                            <p className="italic">
                                &copy; 2024 JHL Constructors. All Rights Reserved.
                            </p>
                            <Link href="#" className="underline  mt-1">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}
