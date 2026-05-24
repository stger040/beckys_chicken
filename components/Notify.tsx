"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import NativeBorder from "./NativeBorder";

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
        className="relative overflow-hidden px-4 py-20 md:py-28"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/building.jpg"
            alt=""
            fill
            className="object-cover opacity-15 blur-sm"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-brand-blue/90" />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="font-oswald text-3xl font-bold uppercase tracking-wide text-white md:text-5xl">
            Coming Soon
          </h2>
          <p className="font-dancing mt-4 text-3xl text-brand-gold text-shadow-gold md:text-4xl">
            Hayward, Wisconsin
          </p>
          <p className="mx-auto mt-6 max-w-[560px] font-sans text-lg text-white">
            Becky&apos;s Chicken is preparing to open its first location in the
            heart of Northwoods Wisconsin. Be the first to know when we open our
            doors — and get an exclusive offer just for signing up.
          </p>

          {status === "success" ? (
            <div className="mt-10 flex items-center justify-center gap-2 font-sans text-xl text-brand-gold">
              <span className="text-2xl">✦</span>
              <span>You&apos;re on the list! We&apos;ll see you at the counter.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 max-w-[480px] space-y-4"
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
                {status === "loading" ? "SUBMITTING..." : "NOTIFY ME WHEN WE OPEN"}
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
      </section>
      <NativeBorder />
    </>
  );
}
