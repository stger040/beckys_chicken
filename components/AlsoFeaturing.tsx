import NativeBorder from "./NativeBorder";

const features = [
  {
    title: "Wisconsin Dairyland Mac & Cheese",
    body: "Made with award-winning Wisconsin cheese from the state's finest dairies. Creamy, rich, and unforgettable.",
  },
  {
    title: "Farm Fresh Salads",
    body: "Life-inspired salads with the freshest produce, fruits, nuts, and our housemade Blueberry White Balsamic Vinaigrette.",
  },
  {
    title: '"The Home of Wine Slushies!"',
    body: "Real fruit juices blended with artisan wines. Zesty Peach Mango, Cool Watermelon Strawberry, or Jammy Forest Berries. A deliciously refreshing something special.",
  },
];

export default function AlsoFeaturing() {
  return (
    <>
      <section className="bg-brand-blue px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-brand-gold/30 bg-brand-blue-card p-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-[1.02]"
            >
              <h3 className="font-oswald text-lg font-bold uppercase tracking-wide text-brand-gold md:text-xl lg:text-[20px]">
                {feature.title}
              </h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-brand-cream md:text-base lg:text-[18px] lg:leading-[1.8]">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </section>
      <NativeBorder />
    </>
  );
}
