import { Squares } from "../components/ui/squares-background"

export default function SquaresDemo() {
  return (
    <div className="relative mb-20 md:mb-40">
      <div className="h-screen">
        <Squares 
          direction="diagonal"
          speed={0.01}
          squareSize={20}
          borderColor="#333" 
          hoverFillColor="#777"
        />
      </div>
      <div className="absolute inset-0 flex md:items-center justify-center ">
        <img 
            src= 'animatedmaci.gif' 
            alt="Remote GIF"
            className="h-72 w-72"
        />
      </div>
    </div>
  )
}