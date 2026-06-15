import React from "react";
import { images } from "@/constants/images";
import Image, { StaticImageData } from "next/image";

const galleryImages: { image: StaticImageData; className: string }[] = [
  { image: images.instagram1, className: "lg:h-[308px] lg:w-[320px]" },
  { image: images.instagram2, className: "lg:h-[380px] lg:w-[256px]" },
  { image: images.instagram3, className: "lg:h-[308px] lg:w-[256px]" },
  { image: images.instagram4, className: "lg:h-[380px] lg:w-[256px]" },
  { image: images.instagram5, className: "lg:h-[308px] lg:w-[256px]" },
  { image: images.instagram6, className: "lg:h-[380px] lg:w-[256px]" },
  { image: images.instagram7, className: "lg:h-[308px] lg:w-[320px]" },
];

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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-nowrap items-center justify-center">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className={`relative h-[260px] sm:h-[320px] ${item.className}`}
            >
              <Image
                src={item.image}
                alt={`Instagram post ${index + 1}`}
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
