import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <Link to="/">
            <img src={assets.logo} className="w-30 mb-5" alt="..." />
          </Link>
        <p className="w-full md:w-2/3 text-gray-600">
          We believe true style is built on quality, not quantity. Our collection is meticulously hand-picked, ensuring every thread, cut, and fit meets a standard of excellence that lasts far beyond a single season. Discover your next wardrobe staple here.
        </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-row md:flex-col gap-2 md:gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-row md:flex-col gap-2 md:gap-1 text-gray-600">
            <li>+91 6589302049</li>
            <li>havenstitch@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="border-t border-gray-300" />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ HavenStitch.com - All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
