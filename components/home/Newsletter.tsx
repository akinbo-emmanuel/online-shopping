import { newsletterLeft, newsletterRight } from "@/constants/images";
import Image from "next/image";
import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-white pt-16 xl:pt-36 pb-12 max-w-[95vw] 2xl:max-w-[1400px] mx-auto flex items-center justify-center xl:justify-between">
      <Image
        src={newsletterLeft}
        alt="Hero Image"
        width={355}
        height={747}
        quality={100}
        priority
        className="hidden xl:block"
      />

      <div className="max-w-[631px] flex flex-col items-center gap-8">
        <div className="space-y-5">
          <h3 className="text-2xl sm:text-[43px] md:text-[46px] xl:text-[38px] 2xl:text-[46px] leading-[100%] text-[#484848] text-center font-volkhov">
            Subscribe To Our Newsletter
          </h3>
          <p className="text-xs md:text-base/[26px] text-center text-[#8A8A8A] font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>
        </div>
        <input
          style={{
            boxShadow:
              "0px 3.02px 3.15px 0px #00000002, " +
              "0px 13.28px 6.52px 0px #00000004, " +
              "0px 32.6px 13px 0px #00000005, " +
              "0px 62.79px 25.48px 0px #00000006, " +
              "0px 105.65px 46.85px 0px #00000008, " +
              "0px 163px 80px 0px #0000000A",
          }}
          type="text"
          placeholder="Enter your email"
          className="p-7 w-full placeholder:text-[#8A8A8A] text-[#484848] lg:text-xl outline-none"
        />
        <button
          style={{ boxShadow: "0px 20px 35px 0px #00000026" }}
          className="bg-black py-5 px-11 rounded-[10px] w-full md:w-auto"
        >
          <p className="text-white font-poppins">Subscribe Now</p>
        </button>
      </div>

      <Image
        src={newsletterRight}
        alt="Hero Image"
        width={337}
        height={747}
        quality={100}
        priority
        className="hidden xl:block"
      />
    </section>
  );
};

export default Newsletter;
