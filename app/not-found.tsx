import Link from "next/link";

const helpfulLinks = [
  { label: "Deals", href: "/#deals" },
  { label: "New Arrivals", href: "/#new-arrivals" },
  { label: "Packages", href: "/#packages" },
];

export default function NotFound() {
  return (
    <main className="relative isolate min-h-[calc(100vh-126px)] overflow-hidden bg-white px-5 py-16 text-[#484848] sm:px-8 lg:py-24">
      <div className="absolute left-1/2 top-20 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#F1F1F1] blur-3xl sm:h-[560px] sm:w-[560px]" />
      <div className="absolute -left-24 bottom-12 -z-10 h-56 w-56 rounded-full border border-[#DEDFE1]" />
      <div className="absolute -right-16 top-28 -z-10 h-44 w-44 rounded-full border border-[#DEDFE1]" />

      <section className="mx-auto grid w-full max-w-[1180px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative mx-auto flex aspect-[4/5] w-full max-w-[430px] items-center justify-center overflow-hidden rounded-[32px] bg-[#E8E8E8] shadow-[0px_30px_70px_-38px_#00000080]">
          <div className="absolute inset-x-10 top-10 h-24 rounded-full bg-white/55 blur-2xl" />
          <div className="relative text-center">
            <p className="font-orbitron text-[112px] leading-none tracking-[-0.08em] text-[#484848] sm:text-[150px]">
              404
            </p>
            <p className="mt-3 font-poppins text-sm uppercase tracking-[0.5em] text-[#8A8A8A]">
              Not Found
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-[620px] text-center lg:mx-0 lg:text-left">
          <p className="font-poppins text-sm uppercase tracking-[0.45em] text-[#8A8A8A]">
            Lost in the collection
          </p>
          <h1 className="mt-5 font-volkhov text-5xl leading-tight text-[#484848] sm:text-6xl lg:text-7xl">
            This page is out of stock.
          </h1>
          <p className="mt-6 font-poppins text-base leading-8 text-[#8A8A8A] sm:text-lg">
            The link may be broken, moved, or no longer available. Let&apos;s get
            you back to the latest FASCO pieces.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="/"
              className="inline-flex h-[58px] items-center justify-center rounded-[10px] bg-black px-10 font-poppins text-base text-white shadow-[0px_20px_35px_0px_#00000026] transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Back To Homepage
            </Link>
            <Link
              href="/#new-arrivals"
              className="inline-flex h-[58px] items-center justify-center rounded-[10px] border border-[#484848] bg-white px-10 font-poppins text-base text-[#484848] transition-colors hover:bg-[#F8F8F8]"
            >
              Shop New Arrivals
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
            {helpfulLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full border border-[#DEDFE1] px-5 py-2 font-poppins text-sm text-[#484848] transition-colors hover:border-[#484848] hover:bg-[#F8F8F8]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
