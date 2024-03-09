
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {  buttonVariants } from "./ui/button"
import { PlayIcon } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { DrawerMain } from "./drawer-main"

interface props{
  id:number,
  url:string,
  name:string,
  slug:string,
  story:string
}
export function MainCard(props:props) {
  return (
    <div className=" dark:bg-slate-900/70 shadow-md md:p-5  md:h-fit md:block flex md:max-w-52 max-w-fit my-2">
 <div className="w-1/2 h-full md:w-full p-2 ">
    <img src={props.url} alt="Image" className=" h-full rounded-md object-cover " />
    </div>
  <span className="w-1/2 p-2 md:w-full flex flex-col justify-between h-40">
  <p className=" line-clamp-3 font-semibold text-slate-600 text-sm">{props.story}</p>
  <span>
  <h3 className=" font-medium mb-1 text-center  ">{props.name}</h3>
  <DrawerMain id={props.id} story={props.story} name={props.name} url={`/watch/${props.id}/${props.slug}/`} />
  {/* <Link href= className={cn(buttonVariants({variant:'secondary'}),"w-full flex justiy-around" )}></Link> */}
  </span></span></div>
  )
}
