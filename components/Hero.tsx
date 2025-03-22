import { heroBottom, heroLeft, heroRight, heroTop } from "@/constants/images";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-screen max-w-[95vw] 2xl:max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-9 mt-14 mb-7">
      {/* Left Image (Hidden on Mobile) */}
      <Image
        src={heroLeft}
        alt="Hero Image"
        width={756}
        height={392}
        quality={100}
        priority
        className="w-full h-auto hidden lg:block"
      />

      {/* Center Content */}
      <div className="space-y-6 lg:space-y-9 flex flex-col justify-between max-w-[426px] lg:max-w-full mx-auto">
        {/* Top Image */}
        <Image
          src={heroTop}
          alt="Hero Image"
          width={756}
          height={392}
          quality={100}
          priority
          className="w-full h-auto"
        />

        {/* Text Content */}
        <div className="w-full font-poppins flex flex-col items-center">
          <p
            className="uppercase text-[#484848] text-[75px] md:text-[91px] lg:text-[63px] xl:text-[87px] text-center font-medium leading-none"
            style={{ textShadow: "0px 4px 4px 0px #00000040" }}
          >
            ultimate
          </p>
          <p
            className="text-transparent text-[157px] md:text-[191px] lg:text-[133px] xl:text-[183px] text-center uppercase font-medium leading-none"
            style={{
              WebkitTextStroke: "2px #484848", // Adds a border around the text
            }}
          >
            sale
          </p>
          <p className="text-xl md:text-2xl uppercase text-center mt-4">
            new collection
          </p>
          <button
            style={{ boxShadow: "0px 20px 35px 0px #00000026" }}
            className="uppercase bg-black text-xl rounded-[10px] py-4 px-8 md:px-14 mt-6"
          >
            <p className="text-white">shop now</p>
          </button>
        </div>

        {/* Bottom Image */}
        <Image
          src={heroBottom}
          alt="Hero Image"
          width={756}
          height={392}
          quality={100}
          priority
          className="w-full h-auto"
        />
      </div>

      {/* Right Image (Hidden on Mobile) */}
      <Image
        src={heroRight}
        alt=""
        height={392}
        width={756}
        quality={100}
        className="w-full h-auto hidden lg:block"
        priority
      />
    </section>
  );
};

export default Hero;
