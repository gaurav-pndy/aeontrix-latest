// src/components/Hero.js
"use client";

import LetterGlitch from "@/components/ui/LetterGlitch";
import { ArrowButton } from "@/components/ui/ArrowButton";
import TypewriterTitle from "../kokonutui/type-writer";
import ShimmerText from "../kokonutui/shimmer-text";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex  justify-center px-4  min-h-screen"
    >
      {/* Background */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden">
        <LetterGlitch
          glitchSpeed={100}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
        />
      </div> */}

      {/* Main dark overlay */}
      {/* <div className="absolute inset-0 z-5 bg-black/55 md:rounded-b-[0px] md:rounded-t-[62px]" /> */}

      {/* Bottom fade */}
      {/* <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-48
  bg-gradient-to-b
  from-transparent
  via-[#f0f2f4]/30
  to-[#f0f2f4]"
      /> */}

      {/* Content */}
      <div className="relative h-screen flex flex-col   items-center justify-center z-20 max-w-4xl text-center text-dark space-y-6">
        <h1 className="h1-text">
          {/* <ShimmerText className=" from-green tracking-normal via-neutral-200 to-green leading-14"> */}
          Accelerate Growth with a{" "}
          <span className="text-green"> Smart Workforce </span>of AI Employees
          running{" "}
          <TypewriterTitle
            sequences={[
              { text: "Sales", deleteAfter: true },
              { text: "Marketing", deleteAfter: true },
              { text: "Support", deleteAfter: true },
              { text: "Ops", deleteAfter: false },
            ]}
          />
          {/* </ShimmerText> */}
        </h1>

        <p className="base-text text-dark/70 max-w-xl mx-auto">
          Deploy always-on AI teammates that handle leads, close deals, support
          customers, and keep operations flowing while your human team focuses
          on strategy.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <ArrowButton>Get Started</ArrowButton>
          <button className="base-text cursor-pointer rounded-sm border border-green bg-green px-6 py-2 text-white  hover:bg-[#05735a] transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
