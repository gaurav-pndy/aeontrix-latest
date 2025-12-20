// components/ui/ArrowButton.js
"use client";

import { motion } from "framer-motion";

import { FiArrowUpRight } from "react-icons/fi";

export function ArrowButton({ children, onClick, customStyle = "" }) {
  return (
    <motion.button
      whileHover="hover"
      initial="rest"
      animate="rest"
      onClick={onClick}
      className={`group inline-flex cursor-pointer items-center ${customStyle}`}
    >
      {/* Outer box */}
      <div
        className="flex items-center gap-2 rounded-[6px] border
                   border-dark bg-white px-4 py-2
                   transition-colors duration-300
                   group-hover:bg-dark group-hover:border-white"
      >
        <span
          className={`base-text font-medium text-dark
                     transition-colors duration-300
                     group-hover:text-white ${customStyle} `}
        >
          {children}
        </span>

        {/* Inner box with arrow */}
        <span
          className="flex h-5 w-5 items-center justify-center rounded-[3px]
                     bg-dark transition-colors duration-300
                     group-hover:bg-green"
        >
          <motion.span
            variants={{
              rest: { color: "#ffffff", x: 0 },
              hover: { color: "#1f1f1f", x: 2 },
            }}
            className="text-xs text-white "
          >
            <FiArrowUpRight />
          </motion.span>
        </span>
      </div>
    </motion.button>
  );
}
