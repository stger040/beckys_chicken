import NativeBorder from "./NativeBorder";

const cards = [
  {
    emoji: "🍗",
    label: "Taste",
    body: "Juicy, mouthwatering, made-from-scratch tenders. Crispy outside. Tender inside. Every single time.",
  },
  {
    emoji: "👃",
    label: "Smell",
    body: "Crave-able aromas of frying chicken that stop you in your tracks before you even see the sign.",
  },
  {
    emoji: "✋",
    label: "Touch",
    body: "Food you pick up with your fingers and eat. Simple. Honest. The way good food was always meant to be.",
  },
  {
    emoji: "👁️",
    label: "Sight",
    body: "Vibrant colors, warm lighting, and a place that just feels like coming home.",
  },
  {
    emoji: "🎵",
    label: "Sound",
    body: "Hot country meets jump-blues rock — the kind of music that makes your foot tap and your smile show.",
  },
  {
    emoji: "✨",
    label: "Attitude",
    body: "Good vibes and energy. The real 6th sense. Because how a place makes you feel matters most.",
  },
];

export default function RealDealFeelGood() {
  return (
    <>
      <section className="bg-brand-blue px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-pacifico text-[clamp(2rem,6vw,3.5rem)] text-brand-gold text-shadow-gold">
            Real Deal Feel Good
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] font-sans text-lg text-white">
            We are not corporate slick. We&apos;re your neighborhood Chicken
            Joint that just belongs — a mashup of everything good about
            yesteryear&apos;s good ol&apos; days, today&apos;s country hip, and
            a touch of whimsy that makes you smile.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.label}
                className="rounded-xl border-t-4 border-brand-gold bg-brand-blue-card p-6 shadow-lg"
              >
                <div className="text-5xl">{card.emoji}</div>
                <h3 className="font-oswald mt-4 text-base font-bold uppercase tracking-wide text-brand-gold">
                  {card.label}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <NativeBorder />
    </>
  );
}
