import { brands } from "@/data/brands";
import Image from "next/image";
import React from "react";

const Brands = () => {
  return (
    <div className="max-w-[95vw] 2xl:max-w-[1280px] mx-auto grid grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap gap-x-5 gap-y-10 items-center justify-between my-20 bg-white">
      {brands.map((brand, index) => (
        <Image
          key={index}
          src={brand.image}
          alt={brand.name}
          width={100}
          height={100}
          className="w-auto h-auto object-contain"
        />
      ))}
    </div>
  );
};

export default Brands;
