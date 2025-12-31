// components/Home/WorkProtocol.js
"use client";

import ScrollStack, { ScrollStackItem } from "../ui/ScrollStack";

const STEPS = [
  {
    number: "01",
    title: "Discovery & Fit Call",
    description:
      "We start with a focused conversation to understand your business, where time and effort are being wasted, and whether AI is actually the right lever for you right now.",
  },
  {
    number: "02",
    title: "Alignment & Engagement",
    description:
      "Once we agree to move forward, we align on scope, stakeholders, access, and expectations. Clear ownership, clear timelines.",
  },
  {
    number: "03",
    title: "AI Transformation Audit",
    description:
      "We step inside the business to understand how work actually flows today. Creates clarity on what should be automated.",
  },
  {
    number: "04",
    title: "Roadmap & Execution Plan",
    description:
      "Translate findings into a clear execution plan. Know what's being deployed and how success will be measured.",
  },
  {
    number: "05",
    title: "Build & Deployment",
    description:
      "Build and deploy AI Employees into your real systems and workflows. End-to-end without disrupting operations.",
  },
  {
    number: "06",
    title: "Testing & Go-Live",
    description:
      "Test using real scenarios, edge cases, and failure conditions. Go live only when outputs meet quality standards.",
  },
  {
    number: "07",
    title: "Handover & Enablement",
    description:
      "Clear documentation, usage SOPs, and walkthroughs so your team works confidently with AI Employees.",
  },
  {
    number: "08",
    title: "Ongoing Management & Optimization",
    description:
      "Active management and improvement of AI Workforce — performance reviews, fixes, upgrades, optimizations.",
  },
];

export default function WorkProtocol() {
  return (
    <section className="relative w-full py-8 bg-bg overflow-hidden">
      <div className="mx-auto max-w-348 px-4 ">
        {/* Header */}
        <div className="text-center mb-10">
          <h1>How our Work Protocol</h1>
          <p className="h3-text text-dark mt-4 mb-8">
            How We Work With Clients
          </p>
        </div>

        {/* ScrollStack */}
        <ScrollStack
          className="max-w-348 mx-auto"
          itemDistance={100}
          itemStackDistance={30}
          stackPosition="20%"
          baseScale={0.85}
          useWindowScroll={true}
        >
          {STEPS.map((step, index) => (
            <ScrollStackItem
              key={step.number}
              itemClassName="bg-light border border-border/50 hover:border-green/80 shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:shadow-[0_35px_100px_rgba(10,142,110,0.2)] transition-all duration-300 group"
            >
              <div className="flex items-start gap-6 h-full p-8 lg:p-10">
                {/* Number badge */}
                <div className="flex flex-col items-center flex-shrink-0 pt-4">
                  <div className="h-20 w-20 lg:h-24 lg:w-24 flex items-center justify-center bg-gradient-to-br from-green to-accent-spring text-light text-2xl lg:text-3xl font-bold rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-h-0">
                  <h3 className="h3-text text-dark font-semibold mb-4 group-hover:text-green transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="base-text text-dark-2 leading-relaxed line-clamp-4 lg:line-clamp-5">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
