// components/ui/ShimmerHeading.tsx
"use client";

import { motion } from "framer-motion";

export function ShimmerHeading({ children, className }) {
  return (
    <div className={`relative inline-block ${className ?? ""}`}>
      <motion.span
        className="relative z-10 bg-clip-text text-transparent 
                   bg-gradient-to-r from-[#999999] via-[#ffffff] to-[#999999]"
        animate={{ backgroundPositionX: ["0%", "200%"] }}
        transition={{
          duration: 4, // slowed down
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 100%",
        }}
      >
        {children}
      </motion.span>

      {/* subtle underline */}
      <span className="absolute inset-x-0 -bottom-1 h-px bg-black/10" />
    </div>
  );
}
