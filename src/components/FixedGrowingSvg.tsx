"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function FixedGrowingSvg() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 15])
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0])

  return (
    <div ref={containerRef} className="relative">
      <div className="h-[300vh]"/>
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <motion.svg
          style={{
            scale,
            opacity,
          }}
          viewBox="0 0 100 100"
          className="w-1/4 h-1/4 max-w-xs max-h-xs"
        >
          {/* Replace this with your own SVG content */}
          <circle cx="50" cy="50" r="40" fill="white" />
        </motion.svg>
      </div>
    </div>
  )
}

