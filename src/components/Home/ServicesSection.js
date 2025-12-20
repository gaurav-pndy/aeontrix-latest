// src/components/AIOrganizationTransformation.js
"use client";

import { motion } from "framer-motion";
import StepCards from "./Services/StepCards";
import WhatYouGetSlider from "./Services/WhatYouGetSlider";
import { LuUsers } from "react-icons/lu";
import { ArrowButton } from "../ui/ArrowButton";
import ShimmerText from "../kokonutui/shimmer-text";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServicesSection({ initialRegion }) {
  return (
    <section className="relative mx-auto max-w-348 px-4 pb-24 pt-16 overflow-hidden">
      <div className="grid gap-10 xl:gap-16 md:grid-cols-2 md:items-start">
        {/* Left: sticky content */}
        <motion.div
          className="md:sticky md:top-24 md:self-start space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Badge */}
          <div className="inline-flex items-center text-green gap-2 rounded-full bg-green/30 px-3 py-1">
            {" "}
            <LuUsers />
            <span className="small-text font-medium ">
              AI Organization Transformation
            </span>
          </div>

          {/* Heading + copy */}
          <div className="space-y-3">
            <ShimmerText
              text="Transform your organization
with AI Employees"
            />
            <p className="large-text text-fg/70  max-w-lg">
              A simple 3‑step engagement that takes you from chaos → clarity →
              execution → ongoing performance.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button className="group w-fit flex items-center border border-green justify-center rounded-sm cursor-pointer bg-green px-4 py-2 base-text font-medium text-white shadow-sm hover:bg-[#05735a] transition-all duration-300">
              Book a Call <span className="ml-2 text-lg leading-none">→</span>
            </button>
            <ArrowButton>Learn More</ArrowButton>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#d1d5db] bg-white/70 px-3 py-1">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-60 animate-status-pulse" />
            </span>
            <span className="micro-text text-green">
              Capacity is capped – limited engagements per quarter.
            </span>
          </div>

          {/* Slider stays pinned with heading */}
          <WhatYouGetSlider />
        </motion.div>

        {/* Right: scrolling step cards */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <StepCards initialRegion={initialRegion} />
        </motion.div>
      </div>
    </section>
  );
}
