import Brands from "@/components/home/Brands";
import Deals from "@/components/home/Deals";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/Newsletter";
import CustomerReviews from "@/components/home/CustomerReviews";
import Features from "@/components/home/Features";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Brands />
      <Deals />
      <Features />
      <CustomerReviews />
      <Newsletter />
      <Footer />
    </main>
  );
}
