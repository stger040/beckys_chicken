import HeroCarousel from "./HeroCarousel";
import MarqueeTicker from "./MarqueeTicker";
import NativeBorder from "./NativeBorder";

const HERO_MARQUEE_TEXT =
  "HEAVENLY CHICKEN TENDERS  ✦  MADE FROM SCRATCH  ✦  NATIVE AMERICAN WOMAN OWNED  ✦  HAYWARD WISCONSIN  ✦  BECKY'S CHICKEN  ✦  OPENING SOON  ✦  ";

export default function Hero() {
  return (
    <>
      <HeroCarousel />
      <MarqueeTicker variant="red" duration={28} text={HERO_MARQUEE_TEXT} />
      <NativeBorder />
    </>
  );
}
