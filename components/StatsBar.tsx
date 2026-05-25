const stats = [
  {
    icon: "🍗",
    number: "60+",
    label: "YEARS OF FAMILY RECIPES",
  },
  {
    icon: "🌽",
    number: "100%",
    label: "HORMONE-FREE CHICKEN",
  },
  {
    icon: "✋",
    number: "0",
    label: "FREEZERS IN OUR KITCHEN",
  },
  {
    icon: "⭐",
    number: "#1",
    label: "NATIVE WOMAN OWNED QSR",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-brand-footer px-4 py-6 lg:py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center px-4 text-center ${
              index > 0 ? "lg:border-l lg:border-white/20" : ""
            } ${index % 2 === 1 ? "max-lg:border-l max-lg:border-white/20" : ""}`}
          >
            <span className="text-[36px] leading-none">{stat.icon}</span>
            <span className="font-oswald mt-2 text-[36px] font-bold leading-none text-brand-gold lg:text-[48px]">
              {stat.number}
            </span>
            <span className="font-oswald mt-2 text-xs tracking-wider text-white">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
