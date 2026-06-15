import { images } from "@/constants/images";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const countdown = [
  { value: "02", label: "Days" },
  { value: "06", label: "Hr" },
  { value: "05", label: "Mins" },
  { value: "30", label: "Sec" },
];

const dealImages = [images.deal1, images.deal2, images.deal3];

const Deals = () => {
  return (
    <section
      id="deals"
      className="py-16 lg:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)",
      }}
    >
      <div className="max-w-[95vw] 2xl:max-w-[1280px] mx-auto grid lg:grid-cols-[0.9fr_1.5fr] gap-12 xl:gap-16 items-center">
        <div className="text-[#484848]">
          <div className="space-y-5 max-w-[444px]">
            <h2 className="font-volkhov text-4xl md:text-[46px] leading-tight">
              Deals Of The Month
            </h2>
            <p className="font-poppins text-[#8A8A8A] text-sm md:text-base/[26px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin
            </p>
            <button
              style={{ boxShadow: "0px 20px 35px 0px #00000026" }}
              className="bg-black text-white font-poppins rounded-[10px] px-16 py-5"
            >
              Buy Now
            </button>
          </div>

          <div className="mt-12">
            <h3 className="font-poppins font-medium text-2xl md:text-[28px]">
              Hurry, Before It&apos;s Too Late!
            </h3>
            <div className="mt-6 grid grid-cols-4 gap-3 md:gap-7 max-w-[394px]">
              {countdown.map((item) => (
                <div key={item.label} className="text-center">
                  <div
                    className="bg-white rounded-[10px] w-16 h-16 md:w-[76px] md:h-[76px] flex items-center justify-center mx-auto"
                    style={{ boxShadow: "0px 4px 14px 1px #00000029" }}
                  >
                    <p className="font-poppins text-2xl md:text-[32px] leading-none">
                      {item.value}
                    </p>
                  </div>
                  <p className="font-poppins text-sm md:text-2xl mt-3">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
            {dealImages.map((image, index) => (
              <div
                key={index}
                className={`relative shrink-0 snap-start overflow-hidden bg-[#F1F1F1] ${
                  index === 0
                    ? "w-[280px] md:w-[404px] h-[404px] md:h-[582px]"
                    : "w-[250px] md:w-[372px] h-[350px] md:h-[486px]"
                }`}
              >
                <Image
                  src={image}
                  alt={`Deal product ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 280px, 404px"
                  className="object-cover"
                  quality={100}
                />
                {index === 0 && (
                  <div className="absolute left-6 bottom-6 bg-white/90 backdrop-blur-sm px-6 py-7 min-w-[217px]">
                    <div className="flex items-center gap-2 font-poppins text-[#484848]">
                      <span>01</span>
                      <span className="h-px w-7 bg-[#484848]" />
                      <span>Spring Sale</span>
                    </div>
                    <p className="font-poppins text-[#484848] text-[28px] mt-3">
                      30% OFF
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between max-w-[684px]">
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0px_4px_14px_1px_#00000029]">
                <ChevronLeft size={18} />
              </button>
              <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0px_4px_14px_1px_#00000029]">
                <ChevronRight size={18} />
              </button>
            </div>
            <div className="hidden md:flex items-center gap-5">
              <span className="w-[27px] h-[27px] rounded-full border border-black flex items-center justify-center">
                <span className="w-[11px] h-[11px] rounded-full bg-black" />
              </span>
              <span className="w-[11px] h-[11px] rounded-full bg-[#B6B6B6]" />
              <span className="w-[11px] h-[11px] rounded-full bg-[#B6B6B6]" />
              <span className="w-[11px] h-[11px] rounded-full bg-[#B6B6B6]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;
