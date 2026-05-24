import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-footer px-4 py-16">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <Image
          src="/images/logo-heart.jpg"
          alt="Becky's Chicken"
          width={180}
          height={144}
          className="h-auto w-[180px]"
        />

        <p className="font-pacifico mt-6 text-2xl text-brand-gold text-shadow-gold">
          Becky&apos;s Chicken
        </p>
        <p className="font-dancing mt-2 text-lg text-white">
          Heavenly Chicken Tenders
        </p>

        <div className="my-8 h-px w-full max-w-xs bg-brand-gold/30" />

        <div className="space-y-2 font-sans text-sm text-white opacity-60">
          <p>&copy; 2025 Becky&apos;s Chicken LLC. All Rights Reserved.</p>
          <p>Native American Woman Owned Minority Small Business</p>
          <p>Hayward, Wisconsin</p>
        </div>

        <a
          href="mailto:hello@beckyschicken.com"
          className="mt-6 font-sans text-sm text-brand-gold transition-colors hover:text-white"
        >
          hello@beckyschicken.com
        </a>
        <p className="mt-2 font-sans text-xs text-white opacity-40">
          beckyschicken.com
        </p>
      </div>
    </footer>
  );
}
