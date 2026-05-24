import type { Metadata } from "next";
import {
  Pacifico,
  Dancing_Script,
  Oswald,
  Open_Sans,
} from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
});

const dancing = Dancing_Script({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

const oswald = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Becky's Chicken — Heavenly Chicken Tenders",
  description:
    "Making the world a happier, tastier place! The First Native American Woman Owned Restaurant Company. Coming soon to Hayward, Wisconsin.",
  openGraph: {
    title: "Becky's Chicken — Heavenly Chicken Tenders",
    description:
      "Making the world a happier, tastier place! Coming soon to Hayward, Wisconsin.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pacifico.variable} ${dancing.variable} ${oswald.variable} ${openSans.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
