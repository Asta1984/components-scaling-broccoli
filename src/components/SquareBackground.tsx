import { Squares } from "../components/ui/squares-background";
import { BorderTrail } from "./ui/border-trail";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../components/ui/card";
import {motion} from "framer-motion";

export default function SquaresDemo() {
  return (
    <>
    <div className=" flex md:items-center justify-center ">
      <img 
        src= 'animatedmaci.gif' 
        alt="Remote GIF"
        className="h-28 w-28 md:h-56 md:w-56 mb-10"
      />
    </div>
    <div className="relative mb-20 md:mb-40 rounded-3xl">
      <div className="relative h-screen">
        <Squares 
          direction="diagonal"
          speed={0.01}
          squareSize={20}
          borderColor="#333" 
          hoverFillColor="#777"
        />
        <div className="absolute inset-0 flex justify-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.9 }} // Trigger when 80% in view, only once
            transition={{ duration: 1, ease: "easeOut" }}
            exit={{ opacity: 0 }}
          >
          <Card className=" w-full bg-transparent border-none ">
          <CardContent className="flex flex-col gap-2 p-6 md:p-20">
            <CardTitle className='text-slate-300 font-OnlinePrivileges text-2xl md:text-4xl'>Exceptional solutions that matters.</CardTitle>
            <CardDescription className='text-emerald-500 font-Type_writer text-xs md:text-sm '>
            You want job to be done, we get it done. 
            </CardDescription>

          </CardContent>
          </Card>
          </motion.div>
        </div>        
      </div>
      <BorderTrail
        style={{
          boxShadow:
            "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
        }}
        size={100}
      />
    </div>
    </>
  )
}