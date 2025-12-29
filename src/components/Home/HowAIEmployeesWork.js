// components/Home/HowAIEmployeesWork.js
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ShimmerText from "../kokonutui/shimmer-text";
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";

const systems = [
  "Customer Relationship Management",
  "Human Resources Management",
  "Project Management",
  "Inventory Management",
  "Finance & Billing",
];

const assistants = [
  "Sales AI Assistant",
  "Marketing AI Assistant",
  "Support AI Assistant",
  "Ops AI Assistant",
  "Specialized Custom Assistants",
];

export default function HowAIEmployeesWork() {
  return (
    <section className="relative mx-auto max-w-348 px-4 py-12">
      <ShimmerText>How our AI Employees work</ShimmerText>

      <div className="relative mt-10 hidden lg:block">
        <div className="relative mx-auto rounded-3xl bg-light px-8 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.45)]">
          {/* gradient connector line */}

          <div className="relative grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1.1fr)] gap-8  items-center">
            {/* gradient connector */}

            {/* Systems (left) */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className=" bg-dark-2  border-glow-wrapper p-4 rounded-xl max-w-64 xl:max-w-86 2xl:max-w-sm z-20  relative"
            >
              <div className="border-glow"></div>

              <h3 className="large-text font-semibold text-light-2 mb-4 text-center">
                Systems
              </h3>
              <div className="space-y-2 xl:space-y-3">
                {systems.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.35 }}
                    className="rounded-md bg-dark/80 border border-white/10 px-4 py-2.5 small-text xl:base-text text-light shadow-[0_12px_30px_rgba(15,23,42,0.35)]"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center absolute top-1/2 -translate-y-1/2 -right-12">
                <FaArrowRight className="text-3xl text-accent-spring" />
              </div>
            </motion.div>

            {/* Assistants (center) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className=" relative  border-glow-wrapper bg-light-2 p-4 rounded-xl max-w-64 xl:max-w-86 2xl:max-w-sm  z-20"
            >
              <div className="border-glow"></div>
              <h3 className="large-text font-semibold text-green mb-4 text-center">
                AI Assistants
              </h3>
              <div className=" space-y-2 xl:space-y-3">
                {assistants.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.35 }}
                    className="rounded-md bg-light border border-white/10 px-4 py-2.5 small-text xl:base-text text-dark-2 shadow-[0_12px_30px_rgba(15,23,42,0.15)]"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center absolute top-1/2 -translate-y-1/2 -right-12">
                <FaArrowLeft className="text-3xl text-accent-spring" />
              </div>
            </motion.div>

            {/* Brain (right) */}
            {/* Brain (right) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex   items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative border-glow-wrapper w-full max-w-64 xl:max-w-xs  aspect-square rounded-2xl bg-dark border border-green/40
               shadow-[0_0_60px_rgba(16,185,129,0.55)]"
              >
                {" "}
                <div className="border-glow"></div>
                <Image
                  src="/ai-brain.png"
                  alt="AI Brain"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* MOBILE: Assistants -> arrow -> Brain -> plus -> Systems */}
      <div className="lg:hidden mt-6 space-y-6 relative mx-auto rounded-3xl bg-dark p-6 shadow-[0_24px_80px_rgba(15,23,42,0.45)]">
        {/* Assistants */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-3 bg-dark-2 p-4 rounded-xl"
        >
          <h3 className="small-text font-semibold text-light-2 text-center">
            AI Assistants
          </h3>
          {assistants.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.04 * i, duration: 0.3 }}
              className="rounded-md bg-dark/80 border border-white/10 px-4 py-2.5 base-text text-light shadow-[0_12px_30px_rgba(15,23,42,0.35)]"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/60 bg-surface/80 text-emerald-300">
            <FaArrowDown className="text-2xl" />
          </div>
        </motion.div>

        {/* Brain + Systems */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4 bg-dark-2 p-4 overflow-hidden py-6 rounded-xl"
        >
          <div className="flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-60 w-60 rounded-2xl bg-dark border border-emerald-400/40 shadow-[0_0_40px_rgba(16,185,129,0.55)]"
            >
              <Image
                src="/ai-brain.png"
                alt="AI Brain"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* plus */}
          <div className="flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/60 bg-surface/80 text-emerald-300">
              <FaPlus className="text-2xl" />
            </div>
          </div>

          {/* Systems */}
          <div className="space-y-3 ">
            <h3 className="small-text font-semibold text-light-2 text-center">
              Systems
            </h3>
            {systems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.04 * i, duration: 0.3 }}
                className="rounded-md bg-dark/80 border border-white/10 px-4 py-2.5 base-text text-light shadow-[0_12px_30px_rgba(15,23,42,0.35)]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
