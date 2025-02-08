import { MacbookScroll } from "../components/ui/macbook-scroll"

export default function MacbookScrollDemo() {
  return (
    <div className="dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        }
        
        src={``}
        showGradient={true}
      />
    </div>
  )
}



