// src/components/WhatYouGetSlider.js
"use client";

import {
  FiChevronLeft,
  FiChevronRight,
  FiMap,
  FiGrid,
  FiCpu,
  FiFileText,
  FiBook,
  FiTrendingUp,
} from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaRegChartBar, FaRegFileAlt, FaRegMap } from "react-icons/fa";
import { IoMdGrid } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";

const slides = [
  {
    id: 1,
    title: "AI Opportunity Matrix",
    text: "A scored breakdown of where AI can drive the most value across your operations.",
    icon: <IoMdGrid className="" />,
  },
  {
    id: 2,
    title: "Implementation Roadmap",
    text: "A phased plan showing exactly what gets built, when, and why — prioritized by ROI.",
    icon: <FaRegMap className="" />,
  },
  {
    id: 3,
    title: "Blueprint of Each AI Employee",
    text: "Detailed specs for every AI agent: inputs, outputs, integrations, and expected behavior.",
    icon: <FaRegFileAlt className="" />,
  },
  {
    id: 4,
    title: "Access to Client Portal",
    text: "A dedicated workspace to track progress, review deliverables, and collaborate with our team.",
    icon: <MdOutlineDashboard className="" />,
  },
  {
    id: 5,
    title: "Team Training",
    text: "Comprehensive onboarding through documents, recordings, and live Q&A sessions.",
    icon: <LuGraduationCap className="" />,
  },
  {
    id: 6,
    title: "AI Command Centre",
    text: "A central dashboard to monitor, manage, and optimize all your AI Employees.",
    icon: <RiComputerLine className="" />,
  },
];

export default function WhatYouGetSlider() {
  return (
    <section className="mt-6 rounded-xl bg-light px-4 py-5 text-white md:px-6 md:py-6 max-w-[calc(100vw-2rem)] ">
      <div className="mb-4 relative flex items-center justify-between">
        <span className="micro-text text-center w-full font-medium tracking-[0.18em] text-green uppercase">
          What you get
        </span>

        <div className="flex gap-2 absolute top-0 right-0">
          <button className="whatyouget-prev text-fg flex h-7 w-7 items-center justify-center rounded-full bg-light-2 hover:bg-white/80 transition-all duration-300 cursor-pointer">
            <FiChevronLeft />
          </button>
          <button className="whatyouget-next text-fg flex h-7 w-7 items-center justify-center rounded-full bg-light-2 hover:bg-white/80 transition-all duration-300 cursor-pointer">
            <FiChevronRight />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={12}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{ prevEl: ".whatyouget-prev", nextEl: ".whatyouget-next" }}
        pagination={{ el: ".whatyouget-pagination", clickable: true }}
        loop={true}
        speed={450}
        className=" overflow-hidden!"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="w-full!">
            <div className="w-full max-w-full rounded-lg border border-[--color-accent-spring] bg-dark-2 text-[#111827] px-3 py-4 sm:px-4 flex items-center gap-3">
              <div className="flex h-11 w-11 min-w-11 items-center justify-center rounded-sm bg-green text-white text-xl">
                {slide.icon}
              </div>
              <div>
                <h3 className="base-text text-light font-semibold mb-1">
                  {slide.title}
                </h3>
                <p className="small-text text-light-2">{slide.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-4 flex w-fit mx-auto items-center gap-1">
        <div className="whatyouget-pagination flex gap-2 " />
      </div>
    </section>
  );
}
