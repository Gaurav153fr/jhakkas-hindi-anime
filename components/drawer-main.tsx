import { Button, buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";

import EpiList from "./epilist";
import { PlayIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface props {
  id: number;
  story: string;
  url: string;
}

export function DrawerMain(props: props) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary" className="w-full flex justiy-around ">
          {" "}
          <PlayIcon /> <span> Watch</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm md:max-w-full md:h-1/2">
          <DrawerHeader>
            <DrawerTitle>Solo Leveling</DrawerTitle>
            <DrawerDescription>Select a episode.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center flex-col md:flex-row justify-center space-x-2">
              <EpiList id={2} active_ep={1} url={props.url} />
              {/* <ScrollArea className="h-[200px] w-[350px] rounded-md border md:h-[250px]">
                {props.story}
              </ScrollArea> */}
            </div>
            <div className="mt-3 h-[100px]"></div>
          </div>
          <DrawerFooter>
            <Link
              href={props.url + 1}
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full flex justiy-around ml-2"
              )}
            >
              Start first Episode
            </Link>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
