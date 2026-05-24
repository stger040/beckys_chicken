"use client";

import Image from "next/image";
import Sparkle from "./Sparkle";
import NativeBorder from "./NativeBorder";

export default function Hero() {
  const scrollToNotify = () => {
    document.getElementById("notify")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-brand-blue px-4 py-16 hero-gradient">
        <div className="relative mx-auto flex w-full max-w-[800px] flex-col items-center text-center">
          <div className="relative mb-8">
            <Sparkle className="-left-6 -top-4 md:-left-10 md:-top-6" />
            <Sparkle className="-right-6 -top-4 md:-right-10 md:-top-6" />
            <Sparkle className="-bottom-4 -left-6 md:-bottom-6 md:-left-10" />
            <Sparkle className="-bottom-4 -right-6 md:-bottom-6 md:-right-10" />

            <Image
              src="/images/logo-heart.jpg"
              alt="Becky's Chicken — Heavenly Chicken Tenders"
              width={500}
              height={400}
              priority
              className="mx-auto h-auto w-full max-w-[500px] drop-shadow-[0_4px_12px_rgba(204,0,0,0.6)]"
            />
          </div>

          <h1 className="font-pacifico text-[clamp(2.5rem,8vw,4.5rem)] leading-tight text-brand-red text-shadow-red">
            Becky&apos;s Chicken
          </h1>

          <p className="font-dancing mt-2 text-[clamp(1.75rem,5vw,3rem)] text-brand-gold text-shadow-gold">
            Heavenly Chicken Tenders
          </p>

          <p className="mt-4 max-w-lg font-sans text-lg italic text-white opacity-90 md:text-xl">
            Making the world a happier, tastier place!&trade;
          </p>

          <div className="mt-8 rounded-full border-2 border-brand-gold bg-brand-red px-6 py-2 font-oswald text-sm uppercase tracking-wide text-white">
            🇺🇸 Proud to be a Native American Woman Owned Minority Small
            Business
          </div>

          <button
            type="button"
            onClick={scrollToNotify}
            className="mt-10 min-h-[48px] rounded-full bg-brand-gold px-8 py-4 font-oswald text-lg font-bold text-[#1A1A1A] transition-all duration-300 hover:bg-brand-red hover:text-white"
          >
            Be First to Know When We Open
          </button>
        </div>
      </section>
      <NativeBorder />
    </>
  );
}
