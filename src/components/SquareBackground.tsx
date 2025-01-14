import { Squares } from "../components/ui/squares-background";
import { BorderTrail } from "./ui/border-trail";


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
    <div className="relative mb-20 md:mb-40  rounded-3xl">
      <div className="h-screen">
        <Squares 
          direction="diagonal"
          speed={0.01}
          squareSize={20}
          borderColor="#333" 
          hoverFillColor="#777"
        />
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