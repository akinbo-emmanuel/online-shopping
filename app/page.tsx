import Brands from "@/components/Brands";
import Deals from "@/components/Deals";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Brands />
      <Deals />
      <Newsletter />
      <Footer />
    </main>
  );
}
