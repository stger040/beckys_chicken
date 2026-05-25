"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Sparkle from "./Sparkle";
import { getHexagonPattern } from "@/lib/patterns";

type Slide = {
  headline: string;
  headlineClass: string;
  sub: string;
  subClass: string;
  tagline: string;
  cta: string;
  scrollTarget: string;
};

const slides: Slide[] = [
  {
    headline: "Becky's Chicken",
    headlineClass:
      "font-pacifico text-[clamp(2.5rem,8vw,4.5rem)] lg:text-[110px] leading-tight text-brand-red text-shadow-red",
    sub: "Heavenly Chicken Tenders",
    subClass:
      "font-dancing text-[clamp(1.75rem,5vw,3rem)] lg:text-[64px] text-brand-gold text-shadow-gold",
    tagline: "Making the world a happier, tastier place!™",
    cta: "Be First to Know When We Open",
    scrollTarget: "notify",
  },
  {
    headline: "An All American First",
    headlineClass:
      "font-oswald text-[clamp(2rem,6vw,3rem)] lg:text-[56px] font-bold uppercase tracking-wide text-white text-shadow-white",
    sub: "The First Native American Woman Owned Restaurant Company",
    subClass:
      "font-dancing text-[clamp(1.5rem,4vw,2.5rem)] lg:text-[40px] text-brand-gold text-shadow-gold",
    tagline: "Rooted in family. Raised on love.",
    cta: "Read Our Story",
    scrollTarget: "story",
  },
  {
    headline: "Opening in Hayward",
    headlineClass:
      "font-oswald text-[clamp(2rem,6vw,3rem)] lg:text-[56px] font-bold uppercase tracking-wide text-white text-shadow-white",
    sub: "Northwoods Wisconsin's Heavenly Chicken Tenders",
    subClass:
      "font-dancing text-[clamp(1.5rem,4vw,2.5rem)] lg:text-[40px] text-brand-gold text-shadow-gold",
    tagline: "Coming soon to the heart of lake country.",
    cta: "Get Notified",
    scrollTarget: "notify",
  },
];

const heroBackground = `
  radial-gradient(ellipse 80% 60% at 50% 30%, #1a3a9e 0%, transparent 70%),
  radial-gradient(ellipse 40% 40% at 20% 80%, rgba(204,0,0,0.15) 0%, transparent 60%),
  radial-gradient(ellipse 40% 40% at 80% 80%, rgba(204,0,0,0.15) 0%, transparent 60%),
  #0A1F6E
`;

export default function HeroCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, watchDrag: false }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSlide = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-brand-blue px-4 py-16">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: heroBackground }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={getHexagonPattern()}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <div className="relative mb-8">
          <Sparkle className="-left-6 -top-4 md:-left-10 md:-top-6" />
          <Sparkle className="-right-6 -top-4 md:-right-10 md:-top-6" />
          <Sparkle className="-bottom-4 -left-6 md:-bottom-6 md:-left-10" />
          <Sparkle className="-bottom-4 -right-6 md:-bottom-6 md:-right-10" />

          <Image
            src="/images/logo-heart.jpg"
            alt="Becky's Chicken — Heavenly Chicken Tenders"
            width={620}
            height={496}
            priority
            className="mx-auto h-auto w-full max-w-[500px] drop-shadow-[0_4px_12px_rgba(204,0,0,0.6)] lg:max-w-[620px]"
          />
        </div>

        <div
          ref={emblaRef}
          className="pointer-events-none absolute h-0 w-full overflow-hidden opacity-0"
          aria-hidden="true"
        >
          <div className="flex">
            {slides.map((slide) => (
              <div
                key={slide.headline}
                className="h-px min-w-0 flex-[0_0_100%]"
              />
            ))}
          </div>
        </div>

        <div className="relative min-h-[280px] w-full sm:min-h-[300px] lg:min-h-[320px]">
          {slides.map((slide, index) => (
            <div
              key={slide.headline}
              className={`absolute inset-0 flex flex-col items-center transition-opacity duration-700 ease-in-out ${
                index === selectedIndex
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              <h1 className={slide.headlineClass}>{slide.headline}</h1>
              <p className={`mt-2 ${slide.subClass}`}>{slide.sub}</p>
              <p className="mt-4 max-w-lg font-sans text-lg italic text-white opacity-90 lg:text-[18px] lg:leading-[1.8]">
                {slide.tagline}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-full border-2 border-brand-gold bg-brand-red px-6 py-2 font-oswald text-sm uppercase tracking-wide text-white">
          ★ PROUD TO BE A NATIVE AMERICAN WOMAN OWNED MINORITY SMALL
          BUSINESS ★
        </div>

        <button
          type="button"
          onClick={() => scrollTo(slides[selectedIndex].scrollTarget)}
          className="relative z-10 mt-10 min-h-[48px] rounded-full bg-brand-gold px-8 py-4 font-oswald text-lg font-bold text-[#1A1A1A] transition-all duration-300 hover:bg-brand-red hover:text-white"
        >
          {slides[selectedIndex].cta}
        </button>

        <div className="mt-8 flex items-center justify-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.headline}
              type="button"
              onClick={() => scrollToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-3 w-3 rounded-full transition-all duration-200 ${
                index === selectedIndex
                  ? "scale-110 bg-brand-gold"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
