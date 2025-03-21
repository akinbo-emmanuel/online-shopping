import { heroBottom, heroLeft, heroRight, heroTop } from "@/constants/images";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="max-w-[95vw] 2xl:max-w-[1280px] mx-auto grid md:grid-cols-3 gap-9 mt-14 mb-7">
      <Image
        src={heroLeft}
        alt="Hero Image"
        width={756} // Set the intrinsic width of the image
        height={392} // Set the intrinsic height of the image
        quality={100} // Set quality to 100 for maximum clarity
        priority // Preload the image for better performance
        className="w-full h-auto hidden md:block" // Ensure the image scales responsively
      />

      <div className="space-y-9">
        <Image
          src={heroTop}
          alt="Hero Image"
          width={756} // Set the intrinsic width of the image
          height={392} // Set the intrinsic height of the image
          quality={100} // Set quality to 100 for maximum clarity
          priority // Preload the image for better performance
          className="w-full h-auto" // Ensure the image scales responsively
        />

        <div className="px-3.5">
          <p
            className="text-center font-poppins uppercase text-[#484848] text-[91px] font-medium"
            style={{ textShadow: "0px 4px 4px 0px #00000040" }}
          >
            ultimate
          </p>
          <p>sale</p>
          <p>new collection</p>
          <button>SHOP</button>
        </div>

        <Image
          src={heroBottom}
          alt="Hero Image"
          width={756} // Set the intrinsic width of the image
          height={392} // Set the intrinsic height of the image
          quality={100} // Set quality to 100 for maximum clarity
          priority // Preload the image for better performance
          className="w-full h-auto" // Ensure the image scales responsively
        />
      </div>

      <Image
        src={heroRight}
        alt=""
        height={392}
        width={756}
        quality={100} // Set quality to 100 for maximum clarity
        className="w-full hidden md:block"
        priority
      />
    </section>
  );
};

export default Hero;
