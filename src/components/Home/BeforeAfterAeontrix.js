// components/Home/BeforeAfterAeontrix.js
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BeamsBackground from "../kokonutui/beams-background";
import TiltedCard from "../ui/TiltedCard";
import ShimmerText from "../kokonutui/shimmer-text";
// import { BeamsBackground } from "kokonutui"; // adjust to actual export
// import { TiltedCard } from "reactbits";      // adjust to actual export

const beforePoints = [
  {
    text: "AI feels important, but unclear where to start",
    custom: "md:col-start-2",
  },
  {
    text: "Hiring AI talent is a headache",
    custom: "md:col-start-3",
  },
  {
    text: "AI tools don’t integrate with your systems",
    custom: "md:col-start-1",
  },
  {
    text: "Founders stuck doing repetitive manual work",
    custom: "md:col-start-4",
  },
  {
    text: "Valuable leads missed due to slow follow-ups",
    custom: "md:col-start-1",
  },
  {
    text: "You’re not sure how to integrate AI into your business",
    custom: "md:col-start-4",
  },
  {
    text: "Fear of inaccurate replies & data leaks",
    custom: "md:col-start-2",
  },
  {
    text: "You want reliable systems, not one-off automations",
    custom: "md:col-start-3",
  },
];

const afterPoints = [
  {
    text: "Work gets done 24/7/365 - even while you sleep",
    custom: "md:col-start-2",
  },
  {
    text: "Faster replies → More conversions → More money",
    custom: "md:col-start-3",
  },
  {
    text: "Leads, tickets, and tasks stop piling up",
    custom: "md:col-start-1",
  },
  {
    text: "Follow-ups are automated",
    custom: "md:col-start-4",
  },
  {
    text: "Reporting becomes instant",
    custom: "md:col-start-1",
  },
  {
    text: "Operations run smoother with fewer handoffs",
    custom: "md:col-start-4",
  },
  {
    text: "More Revenue. More time saved. Less Stress",
    custom: "md:col-start-2",
  },
  {
    text: "Lower workload without adding headcount",
    custom: "md:col-start-3",
  },
];

export default function BeforeAfterAeontrix() {
  return (
    <section className="relative mx-auto px-4 py-12">
      {/* Beams background */}
      <div className="absolute inset-0 -z-10">
        <BeamsBackground />
      </div>

      <div className="max-w-5xl  mx-auto">
        {/* BEFORE */}
        <div className="space-y-4">
          <ShimmerText>Before Aeontrix</ShimmerText>

          <div className="relative rounded-3xl mt-10 border border-[#b3282d] bg-black/20 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.65)]">
            {/* pain bubbles */}
            <div className="grid md:grid-cols-4 gap-4 md:gap-8 ">
              {beforePoints.slice(0, 4).map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12, rotateX: -8 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.03 * i, duration: 0.35 }}
                  className={`${point.custom}  md:min-h-32  h-full`}
                >
                  <TiltedCard>
                    <div className="h-full flex items-center rounded-xl border border-[#b3282d] bg-white/5 backdrop-blur-md p-4 lg:p-6 text-center base-text text-light-2">
                      {point.text}
                    </div>
                  </TiltedCard>
                </motion.div>
              ))}
              <div className="md:absolute flex h-60 md:h-96 w-full  -z-10 md:top-1/2 md:left-1/2 md:-translate-1/2 ">
                <Image
                  src="/before.png" // placeholder path
                  alt="Confused business owner"
                  fill
                  className="object-contain relative! h-fit"
                />
              </div>
              {beforePoints.slice(4, 8).map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12, rotateX: -8 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.03 * i, duration: 0.35 }}
                  className={`${point.custom}  md:min-h-32  h-full`}
                >
                  <TiltedCard>
                    <div className="h-full flex items-center rounded-xl border border-[#b3282d] bg-white/5 backdrop-blur-md p-4 lg:p-6 text-center base-text text-light-2">
                      {point.text}
                    </div>
                  </TiltedCard>
                </motion.div>
              ))}
            </div>

            {/* confused businessman placeholder */}
            <div className="pointer-events-none absolute inset-y-6 left-1/2 flex -translate-x-1/2 items-center justify-center"></div>
          </div>
        </div>

        {/* AFTER */}
        <div className="space-y-4 mt-12">
          <ShimmerText>After Aeontrix</ShimmerText>

          <div className="relative rounded-3xl mt-10 border border-green bg-black/20 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.65)]">
            {/* pain bubbles */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 ">
              {afterPoints.slice(0, 4).map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12, rotateX: -8 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.03 * i, duration: 0.35 }}
                  className={`${point.custom}  md:min-h-32  h-full`}
                >
                  <TiltedCard>
                    <div className="h-full flex items-center rounded-xl border border-green bg-white/5 backdrop-blur-md p-4 lg:p-6 text-center base-text text-light-2">
                      {point.text}
                    </div>
                  </TiltedCard>
                </motion.div>
              ))}
              <div className="md:absolute flex h-60 md:h-96 w-full  -z-10 md:top-1/2 md:left-1/2 md:-translate-1/2 ">
                <Image
                  src="/after.png" // placeholder path
                  alt="Confused business owner"
                  fill
                  className="object-contain relative h-fit"
                />
              </div>
              {afterPoints.slice(4, 8).map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12, rotateX: -8 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.03 * i, duration: 0.35 }}
                  className={`${point.custom}  md:min-h-32  h-full`}
                >
                  <TiltedCard>
                    <div className="h-full flex items-center rounded-xl border border-green bg-white/5 backdrop-blur-md p-4 lg:p-6 text-center base-text text-light-2">
                      {point.text}
                    </div>
                  </TiltedCard>
                </motion.div>
              ))}
            </div>

            {/* confused businessman placeholder */}
            <div className="pointer-events-none absolute inset-y-6 left-1/2 flex -translate-x-1/2 items-center justify-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
