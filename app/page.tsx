import Brands from "@/components/Brands";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="">
      <div className="mt-24 mb-7">
        <Hero />
        <p className="text-2xl font-poppins">Hello World!</p>
        <h1 className="text-2xl font-volkhov">Hello World!</h1>
      </div>
      <Brands />
    </main>
  );
}
