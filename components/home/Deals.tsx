"use client";

import { images } from "@/constants/images";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type CountdownItem = {
  value: string;
  label: string;
};

const getDealDeadline = (now: Date) => {
  let year = Math.max(2026, now.getFullYear());
  let deadline = new Date(year, 11, 31, 23, 59, 0);

  if (now.getTime() > deadline.getTime()) {
    year += 1;
    deadline = new Date(year, 11, 31, 23, 59, 0);
  }

  return deadline;
};

const getCountdown = (): CountdownItem[] => {
  const now = new Date();
  const deadline = getDealDeadline(now);
  const difference = Math.max(deadline.getTime() - now.getTime(), 0);

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return [
    { value: String(days).padStart(2, "0"), label: "Days" },
    { value: String(hours).padStart(2, "0"), label: "Hr" },
    { value: String(minutes).padStart(2, "0"), label: "Mins" },
    { value: String(seconds).padStart(2, "0"), label: "Sec" },
  ];
};

const initialCountdown: CountdownItem[] = [
  { value: "00", label: "Days" },
  { value: "00", label: "Hr" },
  { value: "00", label: "Mins" },
  { value: "00", label: "Sec" },
];

const dealImages = [
  { image: images.deal1, alt: "Spring sale black dress" },
  { image: images.deal2, alt: "Blue summer dress" },
  { image: images.deal3, alt: "Casual tracksuit outfit" },
];

const carouselVariants = {
  enter: (slideDirection: number) => ({
    opacity: 0,
    x: slideDirection * 80,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (slideDirection: number) => ({
    opacity: 0,
    x: slideDirection * -80,
  }),
};

const Deals = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [countdown, setCountdown] = useState<CountdownItem[]>(initialCountdown);

  useEffect(() => {
    setCountdown(getCountdown());

    const intervalId = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const visibleDeals = dealImages.map((_, index) => {
    const imageIndex = (activeIndex + index) % dealImages.length;

    return dealImages[imageIndex];
  });

  const showPrevious = () => {
    setDirection(-1);
    setActiveIndex(
      (currentIndex) =>
        (currentIndex - 1 + dealImages.length) % dealImages.length
    );
  };

  const showNext = () => {
    setDirection(1);
    setActiveIndex((currentIndex) => (currentIndex + 1) % dealImages.length);
  };

  const showDeal = (index: number) => {
    if (index === activeIndex) return;

    const forwardDistance =
      (index - activeIndex + dealImages.length) % dealImages.length;

    setDirection(forwardDistance <= dealImages.length / 2 ? 1 : -1);
    setActiveIndex(index);
  };

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
                    <p className="font-orbitron font-medium tabular-nums tracking-[0.02em] text-2xl md:text-[32px] leading-none">
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
          <div className="overflow-hidden pb-8">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex gap-6"
              >
                {visibleDeals.map((deal, index) => (
                  <div
                    key={`${deal.alt}-${activeIndex}`}
                    className={`relative shrink-0 overflow-hidden bg-[#F1F1F1] ${
                      index === 0
                        ? "w-[280px] md:w-[404px] h-[404px] md:h-[582px]"
                        : "w-[250px] md:w-[372px] h-[350px] md:h-[486px]"
                    }`}
                  >
                    <Image
                      src={deal.image}
                      alt={deal.alt}
                      fill
                      sizes="(max-width: 768px) 280px, 404px"
                      className={`object-cover ${
                        deal.image === images.deal3
                          ? "object-[55%_center]"
                          : "object-center"
                      }`}
                      quality={100}
                      priority={index === 0}
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
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between max-w-[684px]">
            <div className="flex gap-4">
              <button
                type="button"
                aria-label="Show previous deal"
                onClick={showPrevious}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0px_4px_14px_1px_#00000029] transition-transform hover:scale-105 active:scale-95"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Show next deal"
                onClick={showNext}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0px_4px_14px_1px_#00000029] transition-transform hover:scale-105 active:scale-95"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            <div className="hidden md:flex items-center gap-5">
              {dealImages.map((deal, index) => (
                <button
                  key={deal.alt}
                  type="button"
                  aria-label={`Show deal ${index + 1}`}
                  onClick={() => showDeal(index)}
                  className={`rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-[27px] h-[27px] border border-black flex items-center justify-center"
                      : "w-[11px] h-[11px] bg-[#B6B6B6]"
                  }`}
                >
                  {activeIndex === index && (
                    <span className="w-[11px] h-[11px] rounded-full bg-black" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;
