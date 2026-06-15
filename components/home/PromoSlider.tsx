import { images } from "@/constants/images";
import Image from "next/image";
import React from "react";

const labels = [
  { text: "Flat Cap", className: "right-[18%] top-[8%]" },
  { text: "Hugo Boss", className: "right-[24%] top-[38%]" },
  { text: "Santoni", className: "right-[23%] bottom-[10%]" },
  { text: "Suspender", className: "left-[5%] top-[30%]" },
  { text: "Hugo Boss", className: "left-0 bottom-[30%]" },
];

const PromoSlider = () => {
  return (
    <section className="bg-[#DADADA] overflow-hidden">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] min-h-[570px]">
        <div className="relative bg-[#F8F8F8] min-h-[420px] lg:min-h-[570px] flex items-end justify-center">
          <Image
            src={images.promoPeaky}
            alt="Peaky Blinders women collection"
            width={722}
            height={570}
            quality={100}
            className="relative z-10 h-auto max-h-[570px] w-auto object-contain"
          />

          <div className="hidden md:block absolute inset-0 max-w-[760px] mx-auto">
            {labels.map((label) => (
              <div
                key={`${label.text}-${label.className}`}
                className={`absolute ${label.className} z-20`}
              >
                <span className="bg-white/40 backdrop-blur-md border border-black px-5 py-2 font-poppins text-sm lg:text-base">
                  {label.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center px-6 py-16 lg:px-20 xl:px-28">
          <div className="hidden lg:block absolute -left-16 top-0 h-full w-32 bg-[#DADADA] skew-x-[-18deg]" />
          <div className="relative max-w-[515px] text-[#484848]">
            <p className="font-poppins text-[#767676]">Women Collection</p>
            <h2 className="font-volkhov text-4xl md:text-[46px] leading-tight mt-3">
              Peaky Blinders
            </h2>
            <p className="font-poppins underline text-black mt-5">
              DESCRIPTION
            </p>
            <p className="font-poppins text-[#767676] text-sm md:text-base mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Scelerisque duis.
            </p>

            <div className="flex items-center gap-4 mt-5 font-poppins">
              <span className="text-[#767676]">Size:</span>
              <span className="bg-black text-white rounded-[10px] px-5 py-1">
                M
              </span>
            </div>

            <p className="font-poppins font-medium text-3xl mt-5">$100.00</p>

            <button
              style={{ boxShadow: "0px 20px 35px 0px #00000026" }}
              className="bg-black text-white font-poppins rounded-[10px] px-16 py-5 mt-5"
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
