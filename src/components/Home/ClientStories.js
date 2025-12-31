"use client";

import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { LuUsers } from "react-icons/lu";
import ShimmerText from "../kokonutui/shimmer-text";
import { FaQuoteRight } from "react-icons/fa";
import { ArrowButton } from "../ui/ArrowButton";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const CASE_STUDIES = [
  { company: "EAFO", person: "Name", logo: "/logos/EAFO.png" },
  { company: "Health-Direct.info", person: "Name", logo: "/logos/HD.png" },
  { company: "Sophos Clinic", person: "Name", logo: "/logos/sophos.png" },
  { company: "Ayushma yoga", person: "Name", logo: "/logos/ayushma.png" },
  { company: "FIRMST.tech", person: "Name", logo: "/logos/FIRMST.png" },
  { company: "Language School", person: "Name", logo: "/logos/language.png" },
  { company: "Aviakul", person: "Name", logo: "/logos/aviakul.png" },
  { company: "CSO", person: "Name", logo: "/logos/CSO.svg" },
  {
    company: "National Aviation Olympiad",
    person: "Name",
    logo: "/logos/NAO.png",
  },
  { company: "Pasovit", person: "Name", logo: "/logos/pasovit.png" },
];

export default function ClientStories() {
  const slides = useMemo(() => CASE_STUDIES, []);

  return (
    <section className="  py-8  bg-dark text-fg">
      {/* Header */}
      <div className="mx-auto max-w-348 px-4">
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Badge */}
          <div className="inline-flex items-center text-green gap-2 rounded-full bg-green/30 px-3 py-1 mb-4">
            {" "}
            <LuUsers />
            <span className="small-text font-medium ">
              Clients Success Stories
            </span>
          </div>

          {/* Heading + copy */}
          <div className=" h1-text">
            <span className="text-white"> Real Stories,</span>
            <span className="text-green"> Real Results</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="mt-10  relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            centeredSlides
            loop
            speed={600}
            spaceBetween={24}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={2.6}
            navigation={{
              nextEl: ".client-stories-next",
              prevEl: ".client-stories-prev",
            }}
            pagination={{
              clickable: true,
              el: ".client-stories-pagination",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.15,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1.6,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 2.2, // 👈 two full + two halves
                spaceBetween: 18,
              },
              1280: {
                slidesPerView: 2.6, // 👈 two full + two halves
                spaceBetween: 24,
              },
            }}
            className="overflow-visible group"
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>
                <article className="relative h-full rounded-xl border border-border bg-light text-dark px-6 py-8 md:px-8 md:py-10 shadow-sm">
                  {/* Company logo / name placeholder */}
                  <header className="mb-5">
                    <div className="relative h-12 w-40 md:w-60">
                      <Image
                        src={item.logo}
                        alt={`${item.company} logo`}
                        fill
                        className="object-contain w-fit!"
                        sizes="(max-width: 640px) 160px, 192px"
                      />
                    </div>
                  </header>

                  {/* Quote text */}
                  <div className=" relative base-text text-dark-2 max-w-xl">
                    <p>
                      {" "}
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed euismod, nisl sit amet laoreet faucibus, nisi sapien
                      ullamcorper justo, non facilisis ipsum leo non nunc."
                    </p>

                    <FaQuoteRight className="absolute text-green -top-4 right-2 text-6xl opacity-50" />
                  </div>

                  {/* Footer */}
                  <footer className=" mt-4 md:mt-10 flex flex-col-reverse md:flex-row  items-end justify-between gap-6 md:gap-4">
                    {" "}
                    <ArrowButton
                      btnStyle="w-full"
                      customStyle="w-full md:w-fit"
                    >
                      Read Case Study
                    </ArrowButton>
                    <div className=" flex flex-col items-end  text-right">
                      <p className="small-text font-medium text-dark">
                        {item.person}
                      </p>
                      <p className="micro-text text-muted-foreground">
                        Founder, {item.company}
                      </p>
                    </div>
                  </footer>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation arrows */}
          <button className="client-stories-prev absolute left-1 md:-left-5 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-light-2 text-dark shadow-sm transition-all duration-300 cursor-pointer hover:bg-light active:scale-95">
            <FiChevronLeft />
          </button>
          <button className="client-stories-next absolute right-1 md:-right-5 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-light-2 text-dark shadow-sm transition-all duration-300 cursor-pointer hover:bg-light active:scale-95">
            <FiChevronRight />
          </button>

          {/* Pagination dots */}
          <div className="client-stories-pagination mt-6 flex justify-center gap-2" />
        </div>
      </div>
    </section>
  );
}
