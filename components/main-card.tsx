
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {  buttonVariants } from "./ui/button"
import { PlayIcon } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface props{
  id:string,
  url:string,
  name:string,
  slug:string,
  story:string
}
export function AspectRatioCard(props:props) {
  return (
    <div className=" dark:bg-slate-900/70 shadow-md p-5 h-full">
  <AspectRatio ratio={4 /5}>
    <img src={props.url} alt="Image" className="rounded-md object-cover" />
  </AspectRatio>
  <p className=" line-clamp-3 mt-10 text-slate-600 mb-2">{props.story}</p>
  <h3 className=" font-medium mb-1 text-center ">{props.name}</h3>
  <Link href={`/watch/${props.id}/${props.slug}/1`} className={cn(buttonVariants({variant:'secondary'}),"w-full flex justiy-around" )}> <PlayIcon/> <span> Watch</span></Link>
</div>
  )
}
