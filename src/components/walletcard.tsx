import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { HoverBorderGradient } from "./ui/hover-border-gradient"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Progress } from "../components/ui/progress"



export function CardWithForm() {
  return (
    <Card className="w-[350px] rounded-3xl bg-zinc-800">
      <CardHeader>
        <CardTitle className="text-2xl font-OnlinePrivileges bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-teal-600 ">Zacro Presale Stage 1</CardTitle>
        <CardDescription className="text font-Enterpriser bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-red-600">1 RXS = $0.150 <br />Next Stage Price = $ 0.175</CardDescription>
        <div>
          <Progress value={78} />
        </div>
        <CardDescription className='text-l font-OnlinePrivileges bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-teal-600'>USD Raised: $31,082,607 / $33,125,000 <br />Tokens Sold: 366,381,767 / 380,000,000</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 ">
            <div className="flex flex-col-3 gap-6 mb-6">
            <Button variant={"outline"} className="text font-Enterpriser bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-900">ETH</Button>
            <Button variant={"outline"} className="text font-Enterpriser bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-green-600">USDT</Button>
            <Button variant={"outline"} className="text font-Enterpriser bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-600">Card</Button>
            </div>
       
            <div className="flex flex-col space-y-3 "> 
              <Label htmlFor="name" className="text font-Enterpriser bg-clip-text text-transparent bg-gradient-to-r from-white to-red-600" >Amount in ETH You Pay</Label>
              <Input id="name" placeholder="Enter Amount"/>
              <Label htmlFor="framework" className="text-s font-Enterpriser bg-clip-text text-transparent bg-gradient-to-r from-white to-red-600">Amount in RXS You Receive</Label>
              <Input id="name" placeholder="0" />
              <div className="mx-20 w-full p-1">
              <HoverBorderGradient>Connect Wallet</HoverBorderGradient>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
