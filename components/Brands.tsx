import { brands } from "@/data/brands";
import Image from "next/image";
import React from "react";

const Brands = () => {
  return (
    <div className="max-w-[1280px] mx-auto flex items-center justify-between my-20">
      {brands.map((brand, index) => (
        <Image
          key={index}
          src={brand.image}
          alt={brand.name}
          width={100}
          height={100}
          className="w-auto h-auto"
        />
      ))}
    </div>
  );
};

export default Brands;
