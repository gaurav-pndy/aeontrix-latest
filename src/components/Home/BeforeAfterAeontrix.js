// components/Home/BeforeAfterAeontrix.js
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import BeamsBackground from "../kokonutui/beams-background";
import TiltedCard from "../ui/TiltedCard";

const cardData = [
  {
    before: "AI feels important, but unclear where to start",
    after: "Work gets done 24/7/365 - even while you sleep",
    custom: "md:col-start-2",
  },
  {
    before: "Hiring AI talent is a headache",
    after: "Faster replies → More conversions → More money",
    custom: "md:col-start-3",
  },
  {
    before: "AI tools don't integrate with your systems",
    after: "Leads, tickets, and tasks stop piling up",
    custom: "md:col-start-1",
  },
  {
    before: "Founders stuck doing repetitive manual work",
    after: "Follow-ups are automated",
    custom: "md:col-start-4",
  },
  {
    before: "Valuable leads missed due to slow follow-ups",
    after: "Reporting becomes instant",
    custom: "md:col-start-1",
  },
  {
    before: "You're not sure how to integrate AI into your business",
    after: "Operations run smoother with fewer handoffs",
    custom: "md:col-start-4",
  },
  {
    before: "Fear of inaccurate replies & data leaks",
    after: "More Revenue. More time saved. Less Stress",
    custom: "md:col-start-2",
  },
  {
    before: "You want reliable systems, not one-off automations",
    after: "Lower workload without adding headcount",
    custom: "md:col-start-3",
  },
];

function FlipCard({ card, index, scrollProgress }) {
  // Each card flips based on scroll progress
  // Card 0 flips at 0-0.125, Card 1 at 0.125-0.25, etc.
  const startProgress = index * 0.125;
  const endProgress = startProgress + 0.125;

  const rotateY = useTransform(
    scrollProgress,
    [startProgress, endProgress],
    [0, 180]
  );

  return (
    <motion.div
      className={`${card.custom} md:min-h-32 lg:min-h-24 xl:min-h-32 z-10 h-full`}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full"
      >
        {/* BEFORE side (front) */}
        <motion.div
          style={{
            backfaceVisibility: "hidden",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <TiltedCard>
            <div className="h-full flex items-center rounded-xl border-2 border-[#b3282d] bg-dark font-medium backdrop-blur-md micro-text min-[400px]:small-text md:base-text p-4 lg:p-6 text-center  text-[#b3282d]">
              {card.before}
            </div>
          </TiltedCard>
        </motion.div>

        {/* AFTER side (back) */}
        <motion.div
          style={{
            backfaceVisibility: "hidden",
            position: "absolute",
            width: "100%",
            height: "100%",
            rotateY: 180,
          }}
        >
          <TiltedCard>
            <div className="h-full flex items-center rounded-xl border-2 border-green font-medium bg-light-2 micro-text min-[400px]:small-text md:base-text backdrop-blur-md p-4 lg:p-6 text-center  text-green">
              {card.after}
            </div>
          </TiltedCard>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function BeforeAfterAeontrix() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to 0-1 for card flips
  const flipProgress = useTransform(
    scrollYProgress,
    [0.15, 0.85], // 👈 flip only when fully visible
    [0, 1]
  );

  // Transform progress for image opacity
  const beforeImageOpacity = useTransform(
    flipProgress,
    [0, 0.5, 1],
    [1, 0.5, 0]
  );
  const afterImageOpacity = useTransform(
    flipProgress,
    [0, 0.5, 1],
    [0, 0.5, 1]
  );

  // Transform for container background
  const borderColor = useTransform(
    flipProgress,
    [0, 1],
    ["rgba(179, 40, 45, 1)", "rgba(34, 197, 94, 1)"]
  );

  const backgroundColor = useTransform(
    flipProgress,
    [0, 1],
    ["rgba(51, 51, 51, 1)", "rgba(255, 255, 255, 1)"]
  );

  // Transform for title
  const titleProgress = useTransform(
    flipProgress,
    [0, 0.3, 0.7, 1],
    [0, 0, 1, 1]
  );

  return (
    <section ref={containerRef} className="relative mx-auto px-4">
      <div className="sticky top-0 py-8 pb-12  flex items-center">
        {/* EVERYTHING that flips goes here */}

        {/* Beams background */}
        {/* <div className="absolute inset-0 -z-10">
        <BeamsBackground />
      </div> */}

        <div className="max-w-5xl  w-full mx-auto">
          <div className="">
            {/* Animated Title */}
            <motion.div className="relative  flex items-center justify-center">
              <motion.h1
                // style={{
                //   opacity: useTransform(titleProgress, [0, 0.5], [1, 0]),
                //   position: "absolute",
                // }}
                className="h1-text text-center"
              >
                Before & After Aeontrix
              </motion.h1>
              {/* <motion.h1
                style={{
                  opacity: useTransform(titleProgress, [0.5, 1], [0, 1]),
                  position: "absolute",
                }}
                className="h1-text text-center"
              >
                After Aeontrix
              </motion.h1> */}
            </motion.div>

            <motion.div
              style={{
                borderColor,
                backgroundColor,
              }}
              className="relative h-[85vh] md:h-auto rounded-3xl mt-4 md:mt-10 border-2 shadow-[0_10px_40px_rgba(0,0,0,0.35)] p-4 md:p-6"
            >
              {/* Cards grid */}
              <div className="grid grid-cols-1 h-full md:grid-cols-4 gap-2 md:gap-8 lg:gap-4 xl:gap-8">
                {cardData.slice(0, 4).map((card, i) => (
                  <FlipCard
                    key={i}
                    card={card}
                    index={i}
                    scrollProgress={flipProgress}
                  />
                ))}

                {/* Images - Before and After with crossfade */}
                <div className="md:absolute translate-y-5 min-[400px]:translate-y-7 flex h-24 min-[400px]:h-32  md:h-96 lg:h-60 xl:h-96 w-full  justify-center z-0 md:top-1/2 md:left-1/2 max-w-[calc(100vw-9rem)] mx-auto md:-translate-x-1/2 md:-translate-y-1/2 ">
                  <motion.div
                    style={{ opacity: beforeImageOpacity }}
                    className="absolute   inset-0 "
                  >
                    <Image
                      src="/before.png"
                      alt="Before Aeontrix"
                      fill
                      className="relative! scale-150 -translate-y-3 md:-translate-y-4 md:scale-100 md:absolute object-contain"
                    />
                  </motion.div>
                  <motion.div
                    style={{ opacity: afterImageOpacity }}
                    className="md:absolute inset-0"
                  >
                    <Image
                      src="/after2.png"
                      alt="After Aeontrix"
                      fill
                      className="relative! scale-150 md:scale-100  md:absolute object-contain"
                    />
                  </motion.div>
                </div>

                {cardData.slice(4, 8).map((card, i) => (
                  <FlipCard
                    key={i + 4}
                    card={card}
                    index={i + 4}
                    scrollProgress={flipProgress}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className=" h-screen" />
    </section>
  );
}
