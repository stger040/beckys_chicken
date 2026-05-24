import Image from "next/image";
import NativeBorder from "./NativeBorder";

export default function Story() {
  return (
    <>
      <section className="bg-brand-story px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-oswald text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
              An All American First
            </h2>
            <p className="font-dancing mt-4 text-2xl text-brand-gold text-shadow-gold md:text-3xl">
              The First Native American Woman Owned Restaurant Company
            </p>
            <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-brand-cream md:text-lg">
              <p>
                Boozhoo — Greetings! My name is Dr. Rebecca St. Germaine, and
                this is Becky&apos;s Chicken — a dream that began decades ago
                around a frybread stand at Indian Pow-Wows.
              </p>
              <p>
                I am from the Lac Courte Oreilles Ojibwe Nation of Hayward,
                Wisconsin. My brother is &apos;Famous Dave&apos; Anderson — the
                legendary pitmaster who founded Famous Dave&apos;s BBQ. Together,
                we learned to cook from our parents: our mom Iris, an Ojibwe
                woman from the LCO Reservation, and our dad Jimmie &apos;I&apos;m
                from the Sticks&apos; Anderson, a proud Choctaw Indian from
                Idabel, Oklahoma and a U.S. Army veteran of World War II.
              </p>
              <p>
                They set up that frybread stand in the 60s through the 80s to
                feed their family. Now it&apos;s our turn to feed yours.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Image
                src="/images/logo-tagline.jpg"
                alt="Becky's Chicken — Making the world a happier tastier place"
                width={400}
                height={200}
                className="h-auto w-full rounded-lg"
              />

              <div className="flex aspect-[3/4] items-center justify-center rounded-lg border-2 border-brand-gold bg-[#6B1A00] p-4 text-center">
                <p className="font-dancing text-lg italic text-brand-gold text-shadow-gold md:text-xl">
                  Dr. Rebecca St. Germaine — Portrait Coming Soon
                </p>
              </div>
            </div>

            <p className="font-dancing text-center text-xl italic text-brand-gold text-shadow-gold md:text-2xl">
              Zaagaasigekwe — The Rays of the Sun That Shines Out Lady
            </p>
          </div>
        </div>
      </section>
      <NativeBorder />
    </>
  );
}
