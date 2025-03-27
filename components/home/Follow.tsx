import React from "react";
import { images } from "@/constants/images";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const galleryImages = [
  images.follow1,
  images.follow2,
  images.follow3,
  images.follow4,
  images.follow5,
  images.follow6,
];

const Follow = () => {
  return (
    <section className="py-36 bg-white space-y-24">
      <div className="space-y-5 max-w-[95vw] sm:max-w-[614px] mx-auto">
        <h3 className="text-[#484848] text-2xl sm:text-[43px] md:text-[46px] xl:text-[38px] 2xl:text-[46px] leading-[100%] text-center font-volkhov">
          Follow Us On Instagram
        </h3>
        <p className="text-xs md:text-base/[26px] text-center text-[#8A8A8A] font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>
      </div>

      <div className="mx-auto">
        <InfiniteMovingCards
          items={galleryImages}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default Follow;
