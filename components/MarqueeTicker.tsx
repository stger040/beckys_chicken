type MarqueeTickerProps = {
  variant?: "red" | "gold";
  duration?: number;
  text: string;
};

export default function MarqueeTicker({
  variant = "red",
  duration = 28,
  text,
}: MarqueeTickerProps) {
  const isRed = variant === "red";

  return (
    <div
      className={`overflow-hidden ${
        isRed ? "h-10 bg-brand-red lg:h-12" : "h-10 bg-brand-gold lg:h-12"
      }`}
    >
      <div
        className="flex w-max animate-marquee"
        style={{ animationDuration: `${duration}s` }}
      >
        <span
          className={`whitespace-nowrap px-4 font-oswald text-base font-bold uppercase tracking-[0.1em] ${
            isRed ? "text-white" : "text-[#1A1A1A]"
          }`}
        >
          {text}
        </span>
        <span
          className={`whitespace-nowrap px-4 font-oswald text-base font-bold uppercase tracking-[0.1em] ${
            isRed ? "text-white" : "text-[#1A1A1A]"
          }`}
          aria-hidden="true"
        >
          {text}
        </span>
      </div>
    </div>
  );
}
