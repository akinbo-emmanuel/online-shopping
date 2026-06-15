import React from "react";
import { images } from "@/constants/images";
import Image, { StaticImageData } from "next/image";

const galleryImages: {
  image: StaticImageData;
  className: string;
}[] = [
  {
    image: images.instagram1,
    className: "h-[220px] w-[230px] sm:h-[280px] sm:w-[300px] lg:h-[308px] lg:w-[320px]",
  },
  {
    image: images.instagram2,
    className: "h-[280px] w-[200px] sm:h-[340px] sm:w-[236px] lg:h-[380px] lg:w-[256px]",
  },
  {
    image: images.instagram3,
    className: "h-[220px] w-[200px] sm:h-[280px] sm:w-[236px] lg:h-[308px] lg:w-[256px]",
  },
  {
    image: images.instagram4,
    className: "h-[280px] w-[200px] sm:h-[340px] sm:w-[236px] lg:h-[380px] lg:w-[256px]",
  },
  {
    image: images.instagram7,
    className: "h-[220px] w-[230px] sm:h-[280px] sm:w-[300px] lg:h-[308px] lg:w-[320px]",
  },
  {
    image: images.instagram6,
    className: "h-[280px] w-[200px] sm:h-[340px] sm:w-[236px] lg:h-[380px] lg:w-[256px]",
  },
  {
    image: images.instagram5,
    className: "h-[220px] w-[200px] sm:h-[280px] sm:w-[236px] lg:h-[308px] lg:w-[256px]",
  },
  {
    image: images.instagram2,
    className: "h-[280px] w-[200px] sm:h-[340px] sm:w-[236px] lg:h-[380px] lg:w-[256px]",
  },
];

const marqueeImages = [...galleryImages, ...galleryImages];

const Follow = () => {
  return (
    <section className="py-16 lg:py-36 bg-white space-y-16 lg:space-y-24">
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

      <div className="w-full overflow-hidden">
        <div className="flex w-max min-w-full flex-nowrap items-center justify-start [--animation-duration:38s] animate-scroll hover:[animation-play-state:paused] lg:[--animation-duration:45s]">
          {marqueeImages.map((item, index) => (
            <div
              key={index}
              className={`relative shrink-0 ${item.className}`}
            >
              <Image
                src={item.image}
                alt={`Instagram post ${(index % galleryImages.length) + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 320px"
                className="object-cover"
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Follow;
