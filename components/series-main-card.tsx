import { StarIcon } from "lucide-react";
import { DrawerMain } from "./episode-container-drawer";
import {
  Card,
  CardContent,
  CardDescription,
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
    <Card className="bg-background text-muted-foreground  w-52 max-md:my-3 max-md:flex max-md:w-full">
      <CardHeader className="md:p-5 max-md:w-1/4 p-0">
        <img
          src={props.url}
          alt="Anime Series"
          width={500}
          height={200}
          className="rounded-t-lg object-cover w-full md:aspect-[3/2] h-full"
        />
      </CardHeader>
      <CardContent className="p-4 max-md:w-3/4">
        <TooltipProvider >
          <Tooltip>
            <TooltipTrigger>
             
                <span className="w-full line-clamp-1 text-2xl font-semibold leading-none tracking-tight ml-0">
                {props.name}</span>
              
            </TooltipTrigger>
            <TooltipContent>
              <CardTitle>{props.name}</CardTitle>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <CardDescription className="line-clamp-2">{props.story}</CardDescription>
        <div className="flex items-center justify-between mt-4">
        <DrawerMain
            id={props.id}
            story={props.story}
            name={props.name}
            url={`/watch/${props.id}/${props.slug}/`}
          />
          <div className="flex items-center gap-1 text-muted">
            <StarIcon className="w-4 h-4" />
            <span>4.9</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
