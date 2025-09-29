import React, { useState, useEffect, useContext } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center py-8 border-t border-gray-200">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 mt-[8px] flex flex-col md:flex-row gap-16">
        <img
          className="w-[400px] h-[400px] object-cover mx-auto md:w-[400px]"
          src={assets.about_img}
          alt="..."
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
         <b className="text-gray-800">Our Story at Haven Stitch</b>
          <p>
            Haven Stitch was founded on a simple belief: that clothing should be
            both **beautifully crafted** and a source of **unrivaled comfort**. Our
            journey began not in a marketplace, but with the quiet appreciation
            for the perfect thread and the quality that defines a true wardrobe
            staple. We set out to create an online sanctuary where you can slow
            down and discover timeless pieces designed to feel like home.
          </p>
          <p>
            Since our inception, we have meticulously curated a selection that
            prioritizes **sustainable quality** and **enduring style** over fleeting trends. 
          </p>
          <b className="text-gray-800"> Our Mission </b>
          <p>
            Our mission at Haven Stitch is to provide a **haven for effortless
            style**. We are dedicated to delivering a seamless, stress-free
            shopping experience, empowering you with the confidence that comes
            from owning thoughtfully made, comfortable clothing. We promise
            quality that lasts, from the first time you wear it, to every moment
            thereafter.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-10">
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
