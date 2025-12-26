// components/Home/HowAIEmployeesWork.js
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ShimmerText from "../kokonutui/shimmer-text";

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

      {/* DESKTOP: 3 columns + connecting line */}
      <div className="relative mt-10 hidden md:grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1.1fr)] gap-8 items-center">
        {/* gradient connector */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.8 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pointer-events-none absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2
                     bg-gradient-to-r from-accent-spring via-green to-accent-spring"
        />

        {/* Systems (left) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-4 bg-dark-2 p-4 rounded-xl max-w-sm z-20"
        >
          <h3 className="large-text font-semibold text-green">Systems</h3>
          <div className="space-y-3">
            {systems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.35 }}
                className="rounded-md bg-dark border border-white/10 px-4 py-2.5 base-text text-light shadow-[0_12px_30px_rgba(15,23,42,0.35)]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Assistants (center) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-4 bg-dark-2 p-4 rounded-xl max-w-sm z-20"
        >
          <h3 className="large-text font-semibold text-green">AI Assistants</h3>
          <div className="space-y-3">
            {assistants.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.35 }}
                className="rounded-md bg-dark border border-white/10 px-4 py-2.5 base-text text-light shadow-[0_12px_30px_rgba(15,23,42,0.35)]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Brain (right) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-center z-20 bg-light-2"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative  w-full aspect-square z-20"
          >
            <Image
              src="/ai-brain.png" // update path
              alt="AI Brain"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* MOBILE: Assistants -> arrow -> Brain -> plus -> Systems */}
      <div className="md:hidden mt-6 space-y-6">
        {/* Assistants */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-3"
        >
          <h3 className="small-text font-semibold text-fg/80">AI Assistants</h3>
          {assistants.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.04 * i, duration: 0.3 }}
              className="rounded-md bg-surface/80 border border-emerald-500/40 px-4 py-2.5 base-text text-fg"
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
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/60 bg-surface/80 text-emerald-300">
            ↓
          </div>
        </motion.div>

        {/* Brain + Systems */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-40 w-40 rounded-2xl bg-emerald-500/5 border border-emerald-400/40 shadow-[0_0_40px_rgba(16,185,129,0.55)]"
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
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/60 bg-surface/80 text-emerald-300">
              +
            </div>
          </div>

          {/* Systems */}
          <div className="space-y-3">
            <h3 className="small-text font-semibold text-fg/80">Systems</h3>
            {systems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.04 * i, duration: 0.3 }}
                className="rounded-md bg-surface/60 border border-white/10 px-4 py-2.5 base-text text-fg/80"
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
