"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const boxes = document.querySelectorAll(".border-glow-wrapper");
      const listeners = [];

      boxes.forEach((box) => {
        const border = box.querySelector(".border-glow");
        if (!border) return;

        const handleMouseMove = (e) => {
          const rect = box.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          border.style.setProperty("--x", `${x}px`);
          border.style.setProperty("--y", `${y}px`);
        };

        const handleMouseLeave = () => {
          border.style.setProperty("--x", `-200px`);
          border.style.setProperty("--y", `-200px`);
        };

        box.addEventListener("mousemove", handleMouseMove);
        box.addEventListener("mouseleave", handleMouseLeave);

        listeners.push({ box, handleMouseMove, handleMouseLeave });
      });

      // Cleanup function to remove listeners
      const cleanup = () => {
        listeners.forEach(({ box, handleMouseMove, handleMouseLeave }) => {
          box.removeEventListener("mousemove", handleMouseMove);
          box.removeEventListener("mouseleave", handleMouseLeave);
        });
      };
    }, 2000); // 100ms delay (adjust as necessary)

    return () => {
      clearTimeout(timeout);
      if (typeof cleanup === "function") cleanup();
    };
  }, [pathname]);

  return null; // this component does not render UI
}
