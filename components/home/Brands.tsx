import { brands } from "@/data/brands";
import Image from "next/image";
import React from "react";

const Brands = () => {
  return (
    <div className="bg-white shadow-[0px_20px_52.29px_0px_#4444440A] my-12 lg:my-7">
      <div className="max-w-[95vw] 2xl:max-w-[1280px] min-h-[160px] lg:min-h-[200px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 items-center justify-items-center">
        {brands.map((brand) => (
          <Image
            key={brand.id}
            src={brand.image}
            alt={brand.name}
            width={196}
            height={36}
            className="max-h-9 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
