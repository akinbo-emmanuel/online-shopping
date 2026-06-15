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
      className="relative z-10 bg-white py-12 shadow-[0px_28px_42px_-24px_#00000033] lg:py-[72px]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center justify-between gap-x-6 gap-y-8 w-screen max-w-[95vw] 2xl:max-w-[1280px] mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3.5">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={50}
              height={50}
              className="w-[50px] h-[50px] object-contain"
            />
            <div className="text-[#484848] font-poppins space-y-1">
              <h4 className="font-medium text-xl/[100%] capitalize">
                {feature.title}
              </h4>
              <p className="text-xs md:text-base/[26px]">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
