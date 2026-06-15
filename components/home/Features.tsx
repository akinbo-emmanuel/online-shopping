import { icons } from "@/constants/icons";
import Image from "next/image";
import React from "react";

const features = [
  {
    icon: icons.handHoldingStar,
    title: "high quality",
    description: "Crafted from top materials",
  },
  {
    icon: icons.badge,
    title: "warranty protection",
    description: "Over 2 years",
  },
  {
    icon: icons.box,
    title: "free shipping",
    description: "Order over $150",
  },
  {
    icon: icons.phoneSupport,
    title: "24/7 support",
    description: "Dedicated support",
  },
];

const Features = () => {
  return (
    <section
      id="packages"
      className="relative z-10 scroll-mt-28 bg-white py-12 shadow-[0px_28px_42px_-24px_#00000033] lg:scroll-mt-32 lg:py-[72px]"
    >
      <div className="mx-auto grid w-screen max-w-[95vw] grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 2xl:max-w-[1280px]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-2xl bg-white px-5 py-5 text-left shadow-[0px_14px_35px_-24px_#00000066] lg:rounded-none lg:p-0 lg:shadow-none"
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              width={50}
              height={50}
              className="h-11 w-11 shrink-0 object-contain sm:h-[50px] sm:w-[50px]"
            />
            <div className="min-w-0 space-y-1 font-poppins text-[#484848]">
              <h4 className="text-xl/[1.1] font-medium capitalize">
                {feature.title}
              </h4>
              <p className="text-xs leading-snug md:text-base/[26px]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
