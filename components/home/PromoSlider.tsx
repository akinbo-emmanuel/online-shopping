import { images } from "@/constants/images";
import Image from "next/image";
import React from "react";

const PromoSlider = () => {
  return (
    <section className="overflow-hidden bg-[#DADADA]">
      <div className="relative min-h-[570px] bg-[#F8F8F8] lg:h-[570px]">
        <div className="relative min-h-[420px] lg:absolute lg:inset-y-0 lg:left-0 lg:w-[55%]">
          <Image
            src={images.promoPeakyAnnotated}
            alt="Annotated Peaky Blinders outfit"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            quality={100}
            className="object-cover object-center"
          />
        </div>

        <svg
          className="pointer-events-none absolute inset-0 z-20 hidden h-full w-full lg:block"
          aria-hidden="true"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <line
            x1="52.25"
            y1="0"
            x2="41.75"
            y2="100"
            stroke="black"
            strokeWidth="0.18"
          />
        </svg>

        <div className="relative bg-[#DADADA] px-6 py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:flex lg:w-[58.25%] lg:items-center lg:bg-[#DADADA] lg:pl-[17%] lg:pr-[8%] lg:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)] xl:pl-[16%]">
          <div className="relative max-w-[515px] text-[#484848]">
            <p className="font-poppins text-[#767676]">Women Collection</p>
            <h2 className="mt-3 font-volkhov text-4xl leading-tight md:text-[46px]">
              Peaky Blinders
            </h2>
            <p className="mt-5 font-poppins text-black underline">
              DESCRIPTION
            </p>
            <p className="mt-4 font-poppins text-sm leading-relaxed text-[#767676] md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Scelerisque duis.
            </p>

            <div className="mt-5 flex items-center gap-4 font-poppins">
              <span className="text-[#767676]">Size:</span>
              <span className="rounded-[10px] bg-black px-5 py-1 text-white">
                M
              </span>
            </div>

            <p className="mt-5 font-poppins text-3xl font-medium">$100.00</p>

            <button
              style={{ boxShadow: "0px 20px 35px 0px #00000026" }}
              className="mt-5 rounded-[10px] bg-black px-16 py-5 font-poppins text-white"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSlider;
