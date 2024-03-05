
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "./ui/button"
import { PlayIcon, PlusIcon } from "lucide-react"
import { DrawerMain } from "./drawer-main"

export function EmptyCard() {
  return (
    <div className="w-52 dark:bg-slate-900/70 p-5 shadow-md border-dashed border-2 border-white ">
  <AspectRatio ratio={9 / 13}>
    <PlusIcon className="w-full h-full text-slate-700"/>
  </AspectRatio>
  <h3 className=" font-medium mb-1  text-slate-500 ">Request Anime</h3>

  <DrawerMain />
</div>
  )
}
