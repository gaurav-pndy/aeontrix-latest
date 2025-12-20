// src/components/StepCards.js
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { FiX, FiChevronDown } from "react-icons/fi";
import { LuShield } from "react-icons/lu";
import { MdOutlineInfo } from "react-icons/md";
import {
  FaArrowRight,
  FaRegCalendarCheck,
  FaRegClock,
  FaRegFileAlt,
} from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { RiRobot2Line } from "react-icons/ri";
import { GrLineChart } from "react-icons/gr";

const STEPS = [
  {
    id: 1,
    stepLabel: "STEP 1",
    title: "AI Transformation Audit",
    summary:
      "A structured deep-dive that maps how your business runs today, finds the highest-value AI opportunities, and delivers a complete plan to transform operations with AI Employees.",
    tags: [
      "AI Opportunity Matrix",
      "Blueprint Pack",
      "Implementation Roadmap",
      "Executive Walkthrough",
    ],
    priceGlobal: "$5,000 – $20,000",
    priceIndia: "₹3,00,000 – ₹16,00,000",
    details: {
      stepBadge: "Step 1",
      sections: [
        {
          id: "what-we-do",
          label: "What we do",
          defaultOpen: false,
          items: [
            "Stakeholder interviews (Leadership + Process owners).",
            "Workflow mapping across Sales, Support, Ops, Marketing, Admin, etc.",
            "Tool + data readiness review (What AI can safely use).",
          ],
        },
        {
          id: "what-you-get",
          label: "What you get",
          defaultOpen: true, // open by default for audit
          items: [
            "AI Opportunity Matrix (ranked by impact vs effort).",
            `"AI Employee Blueprint Pack" (implementation-ready designs).`,
            "What it does / doesn’t do.",
            "Inputs and Outputs.",
            "Escalation rules (Human in the Loop).",
            "Test scenarios + Acceptance criteria.",
            "ROI Projections.",
            "Implementation roadmap + KPI tracking plan.",
            "Final executive walkthrough + Q&A.",
          ],
        },
      ],
      guaranteeBox: {
        title: "No-Regret Audit Guarantee",
        body: "If after the Executive Walkthrough you feel the deliverables aren’t clear and implementation-ready, you get a 14-day revision window at no cost. After revisions you still feel it wasn’t worth it, we issue a 30% refund.",
        footnote:
          "Requires scheduled stakeholder sessions + agreed tool/workflow access.",
      },
    },
  },
  {
    id: 2,
    stepLabel: "STEP 2",
    title: "AI Workforce Implementation",
    summary:
      "We build and deploy the AI Employees into your real tools and workflows, test them with real scenarios, then take them live.",
    tags: [
      "Client Portal",
      "Tool Integrations",
      "Real Case Testing",
      "Team Training",
    ],
    priceGlobal: "$10,000 – $50,000",
    priceIndia: "₹8,00,000 – ₹40,00,000",
    details: {
      stepBadge: "Step 2",
      sections: [
        {
          id: "what-you-get",
          label: "What you get",
          defaultOpen: true,
          items: [
            "Onboarding into our Client Portal.",
            "AI Employees built from the AI Audit.",
            "Integrations with your tools (Email, CRM, Helpdesk, Docs, Sheets, HRMS, Billing, Project Management, etc.).",
            "Real cases testing, Edge case and Fallback Handling.",
            "Documentation and Recordings for Team Training.",
            "Cosine Similarity Test (To objectively show quality of AI’s output).",
          ],
        },
      ],
      creditBox: {
        title: "Audit Credit Policy",
        rows: [
          {
            label: "Within 30 days",
            highlight: "100% credit",
            sub: "Full audit credit applied",
            type: "full",
          },
          {
            label: "Within 60 days",
            highlight: "50% credit",
            sub: "Half audit credit applied",
            type: "half",
          },
          {
            label: "After 60 days",
            highlight: "0% credit",
            sub: "No credit available",
            type: "none",
          },
        ],
      },
    },
  },
  {
    id: 3,
    stepLabel: "STEP 3",
    title: "AI Workforce Management",
    summary:
      "Your AI Employees are like staff. Staff need management, improvement, and oversight. We do that for you.",
    tags: [
      "Command Centre",
      "Monthly Performance Review",
      "Priority Support",
      "Continuous Improvements",
    ],
    priceGlobal: "$1,000/AI Employee/month",
    priceIndia: "₹80,000/AI Employee/month",
    details: {
      stepBadge: "Step 3",
      sections: [
        {
          id: "what-you-get",
          label: "What you get",
          defaultOpen: true,
          items: [
            "Access to Aeontrix Command Centre (if you have more than 5 AI Employees) — view your AI Employee’s performance and track KPIs.",
            "Maintenance, bug fixes, workflow repairs.",
            "Software Updates when tools change (APIs, permissions, automations).",
            "Prompt tuning + accuracy improvements.",
            "Monitoring and quality checks.",
            "Priority support with response-time expectations.",
            "Monthly connect – Performance review.",
            "Documentation updates so the system doesn’t rot.",
          ],
        },
      ],
      loopBox: {
        title: "Continuous Visibility Loop",
        steps: [
          {
            icon: <RiRobot2Line />,
            label: "AI Employees",
          },
          {
            icon: <FaRegFileAlt />,
            label: "Work Logs",
          },
          {
            icon: <FaRegCalendarCheck />,
            label: "Weekly Review",
          },
          {
            icon: <GrLineChart />,
            label: "Improvements",
          },
        ],
        caption:
          "Your AI workforce runs continuously. We keep it visible, tuned, and improving.",
      },
    },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.35, ease: "easeOut" },
  }),
};

function AccordionSection({ section }) {
  const [open, setOpen] = useState(section.defaultOpen ?? false);

  return (
    <div className="border-b border-black/10 pb-3 last:border-b-0 last:pb-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full text-fg hover:text-green transition-all duration-300 items-center justify-between cursor-pointer py-2"
      >
        <span className="base-text font-semibold  ">{section.label}</span>
        <FiChevronDown
          className={`text-xl  transition-all duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <ul className="mt-1 space-y-1 base-text text-fg/70">
              {section.items.map((item, idx) => (
                <li key={idx} className="flex">
                  <span className="mr-2 text-green ">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function StepCards({ initialRegion = "global" }) {
  const [selectedStep, setSelectedStep] = useState(null);
  const [region, setRegion] = useState(initialRegion); // ← use prop here

  const prices = useMemo(
    () =>
      selectedStep
        ? region === "global"
          ? selectedStep.priceGlobal
          : selectedStep.priceIndia
        : "",
    [selectedStep, region]
  );

  return (
    <>
      {STEPS.map((step, index) => (
        <motion.div
          key={step.id}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <button
            onClick={() => setSelectedStep(step)}
            className="w-full text-left rounded-xl bg-white px-6 py-6 shadow-sm  hover:shadow-xl hover:scale-101 transition-all! duration-300! cursor-pointer"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green text-white small-text font-semibold">
                {step.id}
              </div>
              <span className="micro-text  text-green">{step.stepLabel}</span>
            </div>

            <h3 className="large-text font-semibold mb-2">{step.title}</h3>

            <p className="small-text text-fg/70 mb-4">{step.summary}</p>

            <div className="mb-4 flex flex-wrap gap-2">
              {step.tags.map((tag) => (
                <span
                  key={tag}
                  className="micro-text rounded-full bg-green/10 font-medium px-3 py-1 text-green"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="micro-text text-[#6b7280]">
              Starting at <br />
              <span className="font-semibold  large-text text-fg">
                {region === "global" ? step.priceGlobal : step.priceIndia}
              </span>
            </p>
            <p className="small-text font-semibold mt-4 text-green">
              View details →
            </p>
          </button>
        </motion.div>
      ))}

      {/* Sidebar dialog */}
      <AnimatePresence>
        {selectedStep && (
          <Dialog.Root
            open
            onOpenChange={(open) => !open && setSelectedStep(null)}
          >
            <Dialog.Portal>
              <Dialog.Overlay asChild>
                <motion.div
                  className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              </Dialog.Overlay>

              <Dialog.Content asChild>
                <motion.aside
                  className="fixed inset-y-0 right-0 z-50 w-full max-w-xl bg-white px-6 py-6 overflow-y-auto"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                >
                  {/* Header */}
                  <div className="mb-4 pb-6 flex items-start border-b border-black/20 justify-between">
                    <div className="space-y-1">
                      <Dialog.Title className="h4-text font-semibold text-[#111827]">
                        {selectedStep.title}
                      </Dialog.Title>
                    </div>
                    <button
                      onClick={() => setSelectedStep(null)}
                      className="inline-flex  items-center justify-center rounded-full cursor-pointer"
                    >
                      <FiX size={24} />
                    </button>
                  </div>

                  <p className="micro-text font-medium bg-green/10 px-3 mb-2 rounded-full w-fit py-1 mt-6 text-green">
                    {selectedStep.details.stepBadge}
                  </p>
                  {/* Summary */}
                  <p className="base-text text-fg/70 mb-6">
                    {selectedStep.summary}
                  </p>

                  {/* Accordions */}
                  <div className="space-y-6 pb-4 border-b border-[#e5e7eb]">
                    {selectedStep.details.sections.map((section) => (
                      <AccordionSection key={section.id} section={section} />
                    ))}
                  </div>

                  {/* Pricing + Global / India toggle */}
                  <section className="mt-6 rounded-lg  bg-green/10  p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <p className="small-text font-medium text-green">
                        Pricing
                      </p>
                    </div>
                    <p className="h3-text font-semibold text-fg">{prices}</p>
                  </section>

                  {/* Step-specific bottom boxes */}
                  {selectedStep.id === 1 &&
                    selectedStep.details.guaranteeBox && (
                      <section className="mt-6 rounded-[18px] border border-[#d1f0df] bg-accent-spring/10 flex flex-col md:flex-row gap-4 lg:gap-6  p-6">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green/20">
                          <LuShield className="text-xl text-green" />
                        </div>
                        <div>
                          <p className="large-text font-semibold text-fg mb-2">
                            {selectedStep.details.guaranteeBox.title}
                          </p>
                          <p className="small-text text-fg/70 mb-6">
                            {selectedStep.details.guaranteeBox.body}
                          </p>
                          <p className="micro-text flex  text-fg/70">
                            <MdOutlineInfo className="mr-2 mt-0.5 text-base" />{" "}
                            <span>
                              {selectedStep.details.guaranteeBox.footnote}
                            </span>
                          </p>
                        </div>
                      </section>
                    )}

                  {selectedStep.id === 2 && selectedStep.details.creditBox && (
                    <section className="mt-6 rounded-[18px] border border-[#d1f0df] bg-accent-spring/10   p-6">
                      <p className="large-text font-semibold text-fg mb-2">
                        Audit Credit Policy
                      </p>
                      <p className="small-text text-fg/70 mb-6">
                        Your audit investment is credited towards implementation
                        if you proceed within the timeframe below.
                      </p>
                      <div className="space-y-2">
                        {selectedStep.details.creditBox.rows.map((row, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div
                              className={`shrink-0 h-6 w-6 rounded-full flex items-center justify-center  ${
                                row.type === "full"
                                  ? "bg-green text-white"
                                  : "bg-[#e5e7eb] text-[#6b7280]"
                              }`}
                            >
                              {row.type === "none" ? (
                                <RxCross1 />
                              ) : row.type === "full" ? (
                                <FaCheck />
                              ) : (
                                <FaRegClock />
                              )}
                            </div>
                            <div>
                              <p className="base-text font-medium text-[#111827]">
                                {row.label} →{" "}
                                <span
                                  className={`small-text font-semibold ${
                                    row.type == "full"
                                      ? "text-green"
                                      : "text-fg/60"
                                  } `}
                                >
                                  {row.highlight}
                                </span>
                              </p>
                              <p className="small-text text-fg/70">{row.sub}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {selectedStep.id === 3 && selectedStep.details.loopBox && (
                    <section className="mt-6 rounded-[18px] bg-box-dark  p-6 text-white">
                      <p className="large-text font-semibold mb-6">
                        {selectedStep.details.loopBox.title}
                      </p>
                      <div className="flex items-center justify-between gap-2 text-center">
                        {selectedStep.details.loopBox.steps.map(
                          (s, idx, arr) => (
                            <div
                              key={s.label}
                              className="flex items-center gap-2"
                            >
                              <div className="flex flex-col gap-2 items-center ">
                                <span className="flex shrink-0 h-12 w-12 items-center justify-center rounded-sm bg-green text-2xl text-white">
                                  {s.icon}
                                </span>
                                <span className="micro-text text-gray-300">
                                  {s.label}
                                </span>
                              </div>
                              {idx < arr.length - 1 && (
                                <FaArrowRight className="text-lg text-green" />
                              )}
                            </div>
                          )
                        )}
                      </div>
                      <p className="small-text text-center mt-8 text-accent-spring">
                        {selectedStep.details.loopBox.caption}
                      </p>
                    </section>
                  )}
                </motion.aside>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        )}
      </AnimatePresence>
    </>
  );
}
