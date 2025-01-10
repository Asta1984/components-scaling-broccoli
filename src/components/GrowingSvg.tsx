import { motion } from "framer-motion"

export default function GrowingSvg() {
    return (
        <motion.div
            style={box}
            initial={{
              opacity:0
            }}
            whileInView={
              {
                opacity:1,
                scale: 5,
                transition:{
                  duration:2,
                  
                }
              }
            }
            exit={{opacity:0,
                   y:-20,
                   transition: { duration: 0.5, ease: "easeInOut" },
                  }}
        />
    )
}

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#9911ff",
  borderRadius: 5,
}