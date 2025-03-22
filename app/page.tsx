import Brands from "@/components/Brands";
import Deals from "@/components/Deals";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Brands />
      <Deals />
      <Footer />
    </main>
  );
}
