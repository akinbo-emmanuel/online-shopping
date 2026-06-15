import Brands from "@/components/home/Brands";
import Deals from "@/components/home/Deals";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/Newsletter";
import CustomerReviews from "@/components/home/CustomerReviews";
import Features from "@/components/home/Features";
import Follow from "@/components/home/Follow";
import NewArrivals from "@/components/home/NewArrivals";
import PromoSlider from "@/components/home/PromoSlider";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Brands />
      <Deals />
      <NewArrivals />
      <PromoSlider />
      <Features />
      <Follow />
      <CustomerReviews />
      <Newsletter />
      <Footer />
    </main>
  );
}
