import { images } from "@/constants/images";
import Image, { StaticImageData } from "next/image";
import React from "react";

const categories = [
  "Men's Fashion",
  "Women's Fashion",
  "Women Accessories",
  "Men Accessories",
  "Discount Deals",
];

const products: {
  name: string;
  brand: string;
  price: string;
  image: StaticImageData;
}[] = [
  {
    name: "Shiny Dress",
    brand: "Al Karam",
    price: "$95.50",
    image: images.arrival1,
  },
  {
    name: "Long Dress",
    brand: "Al Karam",
    price: "$95.50",
    image: images.arrival3,
  },
  {
    name: "Full Sweater",
    brand: "Al Karam",
    price: "$95.50",
    image: images.arrival5,
  },
  {
    name: "White Dress",
    brand: "Al Karam",
    price: "$95.50",
    image: images.arrival2,
  },
  {
    name: "Colorful Dress",
    brand: "Al Karam",
    price: "$95.50",
    image: images.arrival4,
  },
  {
    name: "White Shirt",
    brand: "Al Karam",
    price: "$95.50",
    image: images.arrival6,
  },
];

const Stars = () => (
  <div className="flex items-center gap-0.5" aria-label="5 star rating">
    {Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.6646 7.12771L9.5 0L7.33536 7.12771H0L5.93479 11.742L3.73214 19L9.5 14.5146L15.2679 19L13.0652 11.742L19 7.12771H11.6646Z"
          fill="#FCA120"
        />
      </svg>
    ))}
  </div>
);

const ProductCard = ({ product }: { product: (typeof products)[number] }) => (
  <article className="bg-white rounded-[10px] p-4 md:p-6 shadow-[0px_40px_90px_0px_#0000000F]">
    <div className="relative overflow-hidden rounded-[10px] bg-[#F7F7F7] h-[244px]">
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 336px"
        className="object-cover"
        quality={100}
      />
    </div>

    <div className="mt-4 md:mt-6 font-poppins">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[#484848] text-xl font-medium">
            {product.name}
          </h3>
          <p className="text-[#8A8A8A] text-xs font-medium mt-1">
            {product.brand}
          </p>
        </div>
        <Stars />
      </div>

      <p className="text-[#484848] text-xs font-medium mt-5">
        (4.1k) Customer Reviews
      </p>

      <div className="flex items-center justify-between gap-4 mt-5">
        <p className="text-[#484848] text-2xl font-medium tracking-[-0.24px]">
          {product.price}
        </p>
        <p className="text-[#FF4646] text-xs tracking-[-0.12px]">
          Almost Sold Out
        </p>
      </div>
    </div>
  </article>
);

const NewArrivals = () => {
  return (
    <section
      id="new-arrivals"
      className="scroll-mt-28 bg-white py-16 lg:scroll-mt-32 lg:py-28"
    >
      <div className="max-w-[95vw] 2xl:max-w-[1280px] mx-auto">
        <div className="max-w-[614px] mx-auto text-center space-y-5">
          <h2 className="font-volkhov text-[#484848] text-4xl md:text-[46px] leading-tight">
            New Arrivals
          </h2>
          <p className="font-poppins text-[#8A8A8A] text-sm md:text-base/[26px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis
            ultrices sollicitudin
          </p>
        </div>

        <div className="mt-12 flex gap-4 md:gap-7 overflow-x-auto pb-3 lg:justify-center">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`shrink-0 w-[207px] h-14 rounded-[10px] font-poppins text-sm md:text-base ${
                index === 1
                  ? "bg-black text-white shadow-[0px_20px_35px_0px_#00000026]"
                  : "bg-[#FAFAFA] text-[#8A8A8A]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            style={{ boxShadow: "0px 20px 35px 0px #00000026" }}
            className="bg-black text-white font-poppins rounded-[10px] px-16 py-5"
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
