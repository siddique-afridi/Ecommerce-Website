import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex relative flex-col sm:flex-row border-gray-400 ">
      {/* hero left */}
      <div className="w-full absolute top-52 left-16 flex sm:w-1/2 items-center justify-center py-10 sm:py-0 bg-grad\ent-to-l from-red-100 to-transparent">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="stylish-font w-full text-center pb-2 tracking-widest text-sm md:text-2xl">
              Discover Your Perfect Style
            </p>
          </div>
          <h1 className=" text-3xl sm:py-6 lg:text-6xl stylish-font font-light leading-relaxed ">
            Elevate Your Look
          </h1>
          <div className="flex items-center gap-2 pt-2 tracking-widest">
            <p className=" w-full text-center stylish-font text-sm md:text-2xl">
              Explore Now
            </p>
          </div>
        </div>
      </div>

      {/* hero right side */}
      <div className="w-screen h-[80vh] rounded-lg">
        <img
          src={assets.ecom}
          className="w-full h-full object-fill rounded-xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
