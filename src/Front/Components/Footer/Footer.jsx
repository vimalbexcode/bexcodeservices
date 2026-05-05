// Footer.jsx

import React from "react";
import SubscribeForm from "../Forms/SubscribeForm";

import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative w-full flex items-center pl-6 2xl:pl-14 md:pl-12 pr-6 md:pr-12 py-14 overflow-hidden bg-black text-white">
            <div className="w-full">

                {/* =========================
                    Row 1
                ========================= */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-12 border-b border-white/15">

                    {/* Column 1 */}
                    <div className="">
                        <h3 className="font-['Plus_Jakarta_Sans'] text-[22px] sm:text-[28px] lg:text-[34px] font-medium leading-[1.3] max-w-[420px] mb-[20px]">
                            Subscribe to receive communications from Us.
                        </h3>
                        <SubscribeForm></SubscribeForm>
                    </div>
                    <div className="grid grid-cols-2">
                        {/* Column 2 */}
                        <div className="md:col-span-1">
                            <h4 className="font-['Plus_Jakarta_Sans'] text-[18px] sm:text-[20px] font-medium mb-5">
                                Links
                            </h4>

                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        to="/"
                                        className="text-white/80 hover:text-white transition"
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/services"
                                        className="text-white/80 hover:text-white transition"
                                    >
                                        Services
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/portfolio"
                                        className="text-white/80 hover:text-white transition"
                                    >
                                        Portfolio
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/blogs"
                                        className="text-white/80 hover:text-white transition"
                                    >
                                        Blogs
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div className="md:col-span-1">
                            <h4 className="font-['Plus_Jakarta_Sans'] text-[18px] sm:text-[20px] font-medium mb-5">
                                Support
                            </h4>

                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        to="/contact-us"
                                        className="text-white/80 hover:text-white transition"
                                    >
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* =========================
                    Row 2
                ========================= */}
                <div className="pt-8 flex flex-col lg:flex-row gap-6 lg:gap-4 items-center justify-between">

                    {/* Left Side Links */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-white/80 text-[14px] sm:text-[15px]">
                        <Link to="/terms" className="hover:text-white transition">
                            Terms
                        </Link>

                        <span>.</span>

                        <Link
                            to="/accessibility"
                            className="hover:text-white transition"
                        >
                            Accessibility
                        </Link>

                        <span>.</span>

                        <Link
                            to="/privacy-policy"
                            className="hover:text-white transition"
                        >
                            Privacy & Cookies
                        </Link>
                    </div>

                    {/* Center Copyright */}
                    <div className="text-center text-white text-[14px] sm:text-[15px] font-['Plus_Jakarta_Sans']">
                        © Copyright 2025, Bexcode. All Rights Reserved.
                    </div>

                    {/* Right Social Icons */}
                    <div className="flex items-center gap-4">
                        <Link
                            to="#"
                            className="text-white hover:text-[#EA3C26] transition"
                        >
                            <FaFacebookF size={18} />
                        </Link>

                        <Link
                            to="#"
                            className="text-white hover:text-[#EA3C26] transition"
                        >
                            <FaInstagram size={18} />
                        </Link>

                        <Link
                            to="#"
                            className="text-white hover:text-[#EA3C26] transition"
                        >
                            <FaYoutube size={18} />
                        </Link>

                        <Link
                            to="#"
                            className="text-white hover:text-[#EA3C26] transition"
                        >
                            <FaLinkedinIn size={18} />
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;