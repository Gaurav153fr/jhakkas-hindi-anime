import { StarIcon } from "lucide-react";
import { DrawerMain } from "./episode-container-drawer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


interface props {
  id: number;
  url: string;
  name: string;
  slug: string;
  story: string;
}
export function MainCard(props: props) {
  return (
    <Card className="bg-background text-muted-foreground  w-52 max-sm:my-3 max-sm:flex  max-sm:w-full border-0">
      <CardContent className="sm:p-1 max-sm:w-1/4 p-0">
      <div className=" h-full">
        <img
          src={props.url}
          alt="Anime Series"
          width={500}
          height={800}
          className=" object-cover w-full sm:aspect-[9/14] h-full"
        /></div>
      </CardContent>
      <CardFooter className=" max-sm:w-3/4 p-0 px-1 w-full">
       
      
        {/* <CardDescription className="line-clamp-2">{props.story}</CardDescription> */}
        <div className="flex items-center justify-between mt-4 flex-col gap-5 text-foreground  w-full pb-4">
        <p className="text-lg  font-bold text-foreground line-clamp-1">{props.name}</p>
        <DrawerMain
            id={props.id}
            story={props.story}
            name={props.name}
            url={`/watch/${props.id}/${props.slug}/`}
          />
        
        </div>
      </CardFooter>
    </Card>
  );
}
