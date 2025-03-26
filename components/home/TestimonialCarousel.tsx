"use client";

import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { person1, person2, person3 } from "@/constants/images";
import Image, { StaticImageData } from "next/image";

interface Testimonial {
  id: number;
  image: StaticImageData;
  text: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: person1,
    text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    author: "James K.",
    role: "Traveler",
  },
  {
    id: 2,
    image: person2,
    text: "Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.",
    author: "n W.",
    role: "Customer",
  },
  {
    id: 3,
    image: person3,
    text: "Items that I ordered were the best investment I ever made. I can't say enough about your quality service.",
    author: "Donn W.",
    role: "Customer",
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = testimonials.length;

  const navigate = (direction: "prev" | "next") => {
    setActiveIndex((prev) =>
      direction === "prev" ? (prev - 1 + total) % total : (prev + 1) % total
    );
  };

  return (
    <div className="mt-16 relative overflow-hidden">
      <div className="relative h-[350px] lg:h-[500px]">
        {/* Navigation Arrows */}
        <button
          onClick={() => navigate("prev")}
          className="absolute left-[35vw] sm:left-[38vw] md:left-[39vw] lg:left-[43vw] xl:left-[46.75%] bottom-0 -translate-y-1/2 z-20 p-3 bg-white rounded-full cursor-pointer transition-all"
          style={{ boxShadow: "0px 4px 14px 1px #00000029" }}
        >
          <FaChevronLeft className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => navigate("next")}
          className="absolute right-[35vw] sm:right-[38vw] md:right-[39vw] lg:right-[43vw] xl:right-[46.75%] bottom-0 -translate-y-1/2 z-20 p-3 bg-white rounded-full cursor-pointer transition-all"
          style={{ boxShadow: "0px 4px 14px 1px #00000029" }}
        >
          <FaChevronRight className="w-3.5 h-3.5" />
        </button>

        {testimonials.map((testimonial, index) => {
          const position = (((index - activeIndex) % total) + total) % total;
          const isActive = position === 0;
          const isPrev = position === total - 1;
          const isNext = position === 1;

          return (
            <motion.div
              key={testimonial.id}
              className="absolute top-0 w-full max-w-[95vw] lg:max-w-[864px]"
              initial={false}
              animate={{
                left: isPrev ? "25%" : isActive ? "50%" : "75%",
                x: "-50%",
                scale: isActive ? 1 : 0.7,
                opacity: isActive ? 1 : isPrev || isNext ? 0.8 : 0,
                zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div
                className={`${
                  isNext && "shadow-[0px_15px_45px_0px_#2E213D14]"
                } ${isPrev && "shadow-[0px_14.95px_44.86px_0px_#2E213D14]"} ${
                  isActive && "shadow-[0px_20px_60px_0px_#2E213D14]"
                } bg-white h-auto lg:h-[25rem] pl-[1.625rem] sm:pl-8 md:pl-11 lg:pl-[4.25rem] px-1.5 sm:px-3 md:px-6 lg:px-12 py-8 lg:py-16 rounded-[0.625rem] transform transition-all duration-300 flex items-center gap-5 md:gap-10 lg:gap-20`}
              >
                <div className="relative w-2xs lg:w-[484px]">
                  <Image
                    src={testimonial.image}
                    alt=""
                    width={484}
                    height={484}
                    quality={100}
                    priority
                    className="w-full h-auto"
                  />
                  <div className="absolute bg-[#D9D9D9] -left-2.5 lg:-left-5 -bottom-2.5 lg:-bottom-5 w-full h-full -z-10"></div>
                </div>
                <div>
                  <div className="space-y-3.5 md:space-y-7">
                    <p className="text-[#484848] text-sm md:text-base leading-relaxed font-poppins">
                      &apos;{testimonial.text}&apos;
                    </p>
                    <div className="flex gap-1 text-yellow-400 text-base md:text-xl">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.6646 7.12771L9.5 0L7.33536 7.12771H0L5.93479 11.742L3.73214 19L9.5 14.5146L15.2679 19L13.0652 11.742L19 7.12771H11.6646Z"
                            fill="#FCA120"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <div className="w-[50%] h-[1px] bg-[#484848] mt-4 md:mt-8 mb-2 md:mb-4"></div>

                  <div className="space-y-1.5 lg:space-y-3">
                    <h4 className="text-2xl lg:text-3xl leading-normal font-volkhov text-[#484848]">
                      {testimonial.author}
                    </h4>
                    <p className="text-[#484848] font-poppins text-sm lg:text-base">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
