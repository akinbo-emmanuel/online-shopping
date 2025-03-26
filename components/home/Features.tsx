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
    <section className="shadow-[0px_20px_52.29px_0px_#4444440A] py-[72px] bg-white">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-wrap items-center justify-between gap-x-2.5 md:gap-x-5 gap-y-5 md:gap-y-10 flex-wrap w-screen max-w-[95vw] 2xl:max-w-[1280px] mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3.5">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={50}
              height={50}
              className="w-10 md:w-auto h-10 md:h-auto object-contain"
            />
            <div className="text-[#484848] font-poppins space-y-1">
              <h4 className="font-medium text-base/[100%] md:text-xl/[100%] capitalize">
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
