
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
}
export function AspectRatioCard(props:props) {
  return (
    <div className="w-60 dark:bg-slate-900/70 shadow-md p-5">
  <AspectRatio ratio={9 / 13}>
    <img src={props.url} alt="Image" className="rounded-md object-cover" />
  </AspectRatio>
  <h3 className=" font-medium mb-1 ">{props.name}</h3>
  <Link href={`/watch/${props.id}/${props.slug}/1`} className={cn(buttonVariants({variant:'secondary'}),"w-full flex justiy-around" )}> <PlayIcon/> <span> Watch</span></Link>


</div>
  )
}
