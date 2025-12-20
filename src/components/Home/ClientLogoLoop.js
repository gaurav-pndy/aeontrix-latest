// src/components/ClientLogoLoop.js
"use client";

import Marquee from "react-fast-marquee";

const logos = [
  { name: "EAFO", src: "/logos/EAFO.png" },
  { name: "Health-Direct.info", src: "/logos/HD.png" },
  { name: "Sophos Clinic", src: "/logos/sophos.png" },
  { name: "Ayushma Yoga", src: "/logos/ayushma.png" },
  { name: "FIRMST.tech", src: "/logos/FIRMST.png" },
  { name: "Language School", src: "/logos/language.png" },
  { name: "Aviakul", src: "/logos/aviakul.png" },
  { name: "CSO", src: "/logos/CSO.svg" },
  { name: "National Aviation Olympiad", src: "/logos/NAO.png" },
  { name: "Pasovit", src: "/logos/pasovit.png" },
];

export default function ClientLogoLoop() {
  return (
    <section
      className="relative 
         -mt-20       "
    >
      <div className=" max-w-screen py-6 relative z-10">
        <p className="h4-text font-semibold mb-6 text-center ">
          Trusted by the best:
        </p>

        <Marquee
          speed={40}
          pauseOnHover={true}
          gradient={true}
          gradientColor={[5, 5, 9]} // matches dark top
          gradientWidth={80}
          className="flex items-center"
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="mx-8 flex h-12  items-center justify-center
                          transition"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-full  w-full object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
