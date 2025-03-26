import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";

const CustomerReviews = () => {
  return (
    <section className="pt-24 pb-14 bg-[#FAFAFA]">
      <div className="max-w-[95vw] 2xl:max-w-[1400px] mx-auto px-5 lg:px-0">
        <div className="space-y-5">
          <h3 className="text-[#484848] text-2xl sm:text-[43px] md:text-[46px] xl:text-[38px] 2xl:text-[46px] leading-[100%] text-center font-volkhov">
            This Is What Our Customers Say
          </h3>
          <p className="text-xs md:text-base/[26px] text-center text-[#8A8A8A] font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis
          </p>
        </div>

        <TestimonialCarousel/>
      </div>
    </section>
  );
};

export default CustomerReviews;
