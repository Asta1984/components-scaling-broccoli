"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function GrowingSvg() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.9 })

    return (
        <div ref={ref} className="h-screen flex items-center justify-center">
            <motion.img
                src="sewantika.svg"
                alt="Sewantika"
                className="w-24 h-24"
                initial={{
                    opacity: 0,
                    scale: 1
                }}
                animate={{
                    opacity: isInView ? 1 : 0,
                    scale: isInView ? 7 : 1,
                    rotate: 70
                }}
                transition={{
                    duration: 5,
                    ease: "easeOut"
                }}
                layout={true}
            />
        </div>
    )
}

