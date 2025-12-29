"use client";

import { useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const spring = {
  stiffness: 150,
  damping: 20,
  mass: 0.8,
};

export default function TiltedCard({
  children,
  rotateAmplitude = 10,
  scaleOnHover = 1.04,
  className = "",
}) {
  const ref = useRef(null);

  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);
  const scale = useSpring(1, spring);

  function handleMouseMove(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rX = -((y - midY) / midY) * rotateAmplitude;
    const rY = ((x - midX) / midX) * rotateAmplitude;

    rotateX.set(rX);
    rotateY.set(rY);
  }

  function reset() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      onMouseEnter={() => scale.set(scaleOnHover)}
      className="perspective-[900px] h-full"
    >
      <motion.div
        style={{ rotateX, rotateY, scale }}
        className={`will-change-transform transform-gpu h-full ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
