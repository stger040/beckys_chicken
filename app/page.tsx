import Hero from "@/components/Hero";
import Story from "@/components/Story";
import RealDealFeelGood from "@/components/RealDealFeelGood";
import TheFood from "@/components/TheFood";
import AlsoFeaturing from "@/components/AlsoFeaturing";
import Notify from "@/components/Notify";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <RealDealFeelGood />
      <TheFood />
      <AlsoFeaturing />
      <Notify />
      <Footer />
    </main>
  );
}
