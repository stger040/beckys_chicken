"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import NativeBorder from "./NativeBorder";
import { getHexagonPattern } from "@/lib/patterns";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Notify() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section
        id="notify"
        className="relative bg-brand-blue px-4 py-20 md:py-28"
        style={getHexagonPattern()}
      >
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[60%_40%]">
          <div className="text-center lg:text-left">
            <h2 className="font-oswald text-3xl font-bold uppercase tracking-wide text-white md:text-5xl lg:text-[80px]">
              Coming Soon
            </h2>
            <p className="font-dancing mt-4 text-3xl text-brand-gold text-shadow-gold md:text-4xl lg:text-[52px]">
              Hayward, Wisconsin
            </p>
            <p className="mx-auto mt-6 max-w-[560px] font-sans text-lg text-white lg:mx-0 lg:text-[18px] lg:leading-[1.8]">
              Becky&apos;s Chicken is preparing to open its first location in the
              heart of Northwoods Wisconsin. Be the first to know when we open
              our doors — and get an exclusive offer just for signing up.
            </p>

            {status === "success" ? (
              <div className="mt-10 flex items-center justify-center gap-2 font-sans text-xl text-brand-gold lg:justify-start">
                <span className="text-2xl">✦</span>
                <span>
                  You&apos;re on the list! We&apos;ll see you at the counter.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-10 max-w-[480px] space-y-4 lg:mx-0"
              >
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  disabled={status === "loading"}
                  className="min-h-[48px] w-full rounded-full bg-white px-6 py-4 text-gray-900 placeholder:text-gray-500 disabled:opacity-70"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="min-h-[48px] w-full rounded-full bg-brand-red px-10 py-4 font-oswald text-base font-bold text-white transition-all duration-300 hover:bg-brand-gold hover:text-[#1A1A1A] disabled:opacity-70 md:text-lg"
                >
                  {status === "loading"
                    ? "SUBMITTING..."
                    : "NOTIFY ME WHEN WE OPEN"}
                </button>
                {status === "error" && (
                  <p className="font-sans text-brand-red text-shadow-white">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}

            <p className="mt-8 font-sans text-sm text-white opacity-60">
              No spam. Just the good stuff. We promise. ✦
            </p>
          </div>

          <div className="hidden lg:block">
            <Image
              src="/images/building.jpg"
              alt="Becky's Chicken — Coming to Hayward, Wisconsin"
              width={600}
              height={450}
              className="w-full rounded-2xl border-4 border-brand-gold object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>
      <NativeBorder />
    </>
  );
}
