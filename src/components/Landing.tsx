import { Link } from "lucide-react"
import AnimateSvg from "./animatedsvg"
export function Landing() {
    return(
        
            <section className="py-16 md:py-20 px-8 md:px-20 mb-16">
              <h1 className="text-2xl sm:text-4xl font-OnlinePrivileges text-wrap max-w-md mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-lime-500 mt-10">
                Launching your ideas has never been easier
              </h1>
              <p className="text-xl sm:text-2xl text-wrap max-w-md font-OnlinePrivileges mb-5 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                Build and Launch Your MVP in Record Time. 
              </p>
         
              <div className="-z-50 md:absolute md:inset-y-0 md:right-0 md:w-1/2 mb-5 overflow-hidden">
                <AnimateSvg />
              </div>
              <div className="flex flex-col mb-10 sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10">
                <Link to="/features"
                  className="text text-center sm:text-lg font-bold px-6 sm:px-8 py-3 border border-purple-500 rounded-full text-white hover:bg-gray-800 transition-colors transform hover:scale-105 duration-200 ease-in-out">
                  Explore
                </Link>
              </div>
    
            </section>

    
    )    

}
