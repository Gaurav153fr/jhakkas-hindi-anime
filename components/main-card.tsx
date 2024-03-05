
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {  buttonVariants } from "./ui/button"
import { PlayIcon } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function AspectRatioCard() {
  return (
    <div className="w-52 dark:bg-slate-900/70 shadow-md p-5">
  <AspectRatio ratio={9 / 13}>
    <img src="https://img.flawlessfiles.com/_r/300x400/100/1f/73/1f73284800eb5cf57c32a8f68120cc82/1f73284800eb5cf57c32a8f68120cc82.jpg" alt="Image" className="rounded-md object-cover" />
  </AspectRatio>
  <h3 className=" font-medium mb-1 ">Demon slayer</h3>
  <Link href={"/watch/1/goku/1"} className={cn(buttonVariants({variant:'secondary'}),"w-full flex justiy-around" )}> <PlayIcon/> <span> Watch</span></Link>


</div>
  )
}
