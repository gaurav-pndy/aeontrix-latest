// components/Home/HowAIEmployeesWork.js
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ShimmerText from "../kokonutui/shimmer-text";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaPlus,
  FaDollarSign,
  FaBullhorn,
  FaHeadset,
  FaCogs,
  FaStar,
  FaUsers,
  FaClipboardList,
  FaTasks,
  FaBoxes,
  FaFileInvoiceDollar,
} from "react-icons/fa"; // react-icons set with finance/ops icons [web:19][web:28]

const systems = [
  { label: "Customer Relationship Management", icon: FaUsers },
  { label: "Human Resources Management", icon: FaClipboardList },
  { label: "Project Management", icon: FaTasks },
  { label: "Inventory Management", icon: FaBoxes },
  { label: "Finance & Billing", icon: FaFileInvoiceDollar },
];

const assistants = [
  { label: "Sales AI Assistant", icon: FaDollarSign },
  { label: "Marketing AI Assistant", icon: FaBullhorn },
  { label: "Support AI Assistant", icon: FaHeadset },
  { label: "Ops AI Assistant", icon: FaCogs },
  { label: "Specialized Custom Assistants", icon: FaStar },
];

export default function HowAIEmployeesWork() {
  return (
    <section className="relative mx-auto max-w-348 px-4 py-8">
      <h1 className="h1-text text-center">How our AI Employees work</h1>

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
                {systems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i, duration: 0.35 }}
                      className="group rounded-md bg-dark/80 border border-white/10 px-4 py-2.5 small-text xl:base-text text-light shadow-[0_12px_30px_rgba(15,23,42,0.35)] transition-all duration-300 hover:scale-103 hover:border-green hover:bg-dark hover:text-green"
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-dark-2 text-accent-spring group-hover:bg-green/10 group-hover:text-green transition-colors duration-200">
                          <Icon className="text-sm" />
                        </span>
                        <span>{item.label}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="flex items-center absolute top-1/2 -translate-y-1/2 -right-12">
                <FaArrowRight className="text-3xl text-green" />
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
              <div className="space-y-2 xl:space-y-3">
                {assistants.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i, duration: 0.35 }}
                      className="group rounded-md bg-light border border-white/10 px-4 py-2.5 small-text xl:base-text text-dark-2 shadow-[0_12px_30px_rgba(15,23,42,0.15)] transition-all duration-300 hover:scale-103 hover:border-green hover:bg-light-2 hover:text-green"
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green/20 text-green group-hover:bg-green/40 group-hover:text-green transition-colors duration-200">
                          <Icon className="text-sm" />
                        </span>
                        <span>{item.label}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="flex items-center absolute top-1/2 -translate-y-1/2 -right-12">
                <FaArrowLeft className="text-3xl text-green" />
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
              <motion.div className="relative border-glow-wrapper w-full border-2 border-green max-w-64 xl:max-w-86 overflow-hidden  rounded-2xl bg-transparent ">
                {" "}
                <video
                  src="/Brain_Rotation3.mp4"
                  alt="AI Brain"
                  fill="true"
                  autoPlay
                  loop
                  playsInline
                  muted
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* MOBILE: Assistants -> arrow -> Brain -> plus -> Systems */}
      <div className="lg:hidden mt-6 space-y-6 relative mx-auto rounded-3xl bg-dark p-4 shadow-[0_24px_80px_rgba(15,23,42,0.45)]">
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
          {assistants.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.04 * i, duration: 0.3 }}
                className="group rounded-md bg-dark/80 border border-white/10  p-3 base-text text-light shadow-[0_12px_30px_rgba(15,23,42,0.35)] transition-all duration-200 hover:-translate-y-1 hover:border-green hover:text-green"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-dark-2 text-accent-spring group-hover:bg-green/10 group-hover:text-green transition-colors duration-200">
                    <Icon className="text-xs" />
                  </span>
                  <span>{item.label}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-green/60 bg-surface/80 text-green">
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
            <motion.div className="relative h-60 w-60 rounded-2xl ">
              <video
                src="/Brain_Rotation3.mp4"
                alt="AI Brain"
                fill="true"
                autoPlay
                loop
                playsInline
                muted
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* plus */}
          <div className="flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-green/60 bg-surface/80 text-green">
              <FaPlus className="text-2xl" />
            </div>
          </div>

          {/* Systems */}
          <div className="space-y-3 ">
            <h3 className="small-text font-semibold text-light-2 text-center">
              Systems
            </h3>
            {systems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.04 * i, duration: 0.3 }}
                  className="group rounded-md bg-dark/80 border border-white/10 p-3 base-text text-light shadow-[0_12px_30px_rgba(15,23,42,0.35)] transition-all duration-200 hover:-translate-y-1 hover:border-green hover:text-green"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-dark-2 text-accent-spring group-hover:bg-green/10 group-hover:text-green transition-colors duration-200">
                      <Icon className="text-xs" />
                    </span>
                    <span>{item.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
