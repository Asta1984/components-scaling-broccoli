"use client";

import { RetroGrid } from "../components/ui/retro-grid";
import { motion } from "framer-motion";

export default function InfiniteGrid() {
  return (
    
    <div className="flex flex-col items-center justify-center -mt-32 md:mt-1">
 
        <div className="relative flex h-[500px] w-11/12 flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl">
        
          <motion.span
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.9 }} // Trigger when 80% in view, only once
            transition={{ duration: 1, ease: "easeOut" }}
            className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-3xl md:text-5xl font-Enterpriser leading-none tracking-tighter text-transparent"
          >
            Step into future Unleash potential of AI
          </motion.span>
          <RetroGrid />
        </div>
    </div>

  );
}