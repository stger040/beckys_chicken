import Hero from "@/components/Hero";
import Story from "@/components/Story";
import StatsBar from "@/components/StatsBar";
import RealDealFeelGood from "@/components/RealDealFeelGood";
import TheFood from "@/components/TheFood";
import MarqueeTicker from "@/components/MarqueeTicker";
import NativeBorder from "@/components/NativeBorder";
import AlsoFeaturing from "@/components/AlsoFeaturing";
import Notify from "@/components/Notify";
import Footer from "@/components/Footer";

const FOOD_MARQUEE_TEXT =
  "BUTTERMILK MARINATED  ✦  HORMONE FREE  ✦  SMALL BATCH FRESH  ✦  NO BULK COOKING  ✦  BECKY'S AMAZING SAUCE  ✦  CRISPY  •  CRUNCHY  •  DELICIOUS  ✦  ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <StatsBar />
      <RealDealFeelGood />
      <TheFood />
      <MarqueeTicker variant="gold" duration={24} text={FOOD_MARQUEE_TEXT} />
      <NativeBorder />
      <AlsoFeaturing />
      <Notify />
      <Footer />
    </main>
  );
}
