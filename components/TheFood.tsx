import Image from "next/image";

const sauces = [
  "Becky's Amazing Sauce",
  "Honey Mustard",
  "Hot Honey",
  "Becky's BBQ Sauce",
  "Naked (Just the Bird)",
];

const qualityBadges = [
  "✓ MADE TO ORDER",
  "✓ NO BULK COOKING",
  "✓ SMALL BATCH FRESH",
  "✓ NO FREEZERS NEEDED",
];

export default function TheFood() {
  return (
    <section className="bg-brand-blue-card px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-oswald text-2xl font-bold uppercase tracking-wide text-white md:text-4xl lg:text-[52px]">
          America&apos;s Tastiest Chicken Tenders
        </h2>
        <p className="font-dancing mt-4 text-3xl text-brand-gold text-shadow-gold md:text-[2.5rem]">
          Love me tender...
        </p>
        <p className="mx-auto mt-6 max-w-[640px] font-sans text-base leading-relaxed text-brand-cream md:text-lg lg:text-[18px] lg:leading-[1.8]">
          We source hormone-free chicken tenders and the world&apos;s best
          flour for our extraordinary buttermilk-marinated recipe. Small batch.
          Made to order. No bulk cooking. No freezers. Just crispy, crunchy,
          heavenly perfection every time.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {sauces.map((sauce) => (
            <span
              key={sauce}
              className="rounded-full bg-brand-red px-4 py-2 font-oswald text-sm font-bold text-white"
            >
              {sauce}
            </span>
          ))}
        </div>

        <div className="relative left-1/2 mt-12 w-screen max-w-none -translate-x-1/2 overflow-hidden lg:mt-16">
          <Image
            src="/images/building.jpg"
            alt="Becky's Chicken — Coming to Hayward, Wisconsin"
            width={1200}
            height={600}
            className="mx-auto rounded-2xl border-4 border-brand-gold shadow-2xl lg:rounded-none lg:border-0 lg:shadow-none"
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {qualityBadges.map((badge) => (
            <span
              key={badge}
              className="cursor-default rounded-full bg-brand-gold px-4 py-2 font-oswald text-sm font-bold text-[#1A1A1A] transition-all duration-200 ease-out hover:bg-brand-red hover:text-white"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
