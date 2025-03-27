import React from "react";
import { images } from "@/constants/images";
import Image from "next/image";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const galleryImages = [
  images.follow1,
  images.follow2,
  images.follow3,
  images.follow4,
  images.follow5,
  images.follow6,
];

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const Follow = () => {
  return (
    <section className="py-36 bg-white space-y-24">
      <div className="space-y-5 max-w-[95vw] sm:max-w-[614px] mx-auto">
        <h3 className="text-[#484848] text-2xl sm:text-[43px] md:text-[46px] xl:text-[38px] 2xl:text-[46px] leading-[100%] text-center font-volkhov">
          Follow Us On Instagram
        </h3>
        <p className="text-xs md:text-base/[26px] text-center text-[#8A8A8A] font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>
      </div>

      <div className="mx-auto">
        <InfiniteMovingCards
          items={galleryImages}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default Follow;
