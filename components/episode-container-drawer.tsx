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

import EpiList from "./episode-list-container";
import { PlayIcon, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface props {
  id: number;
  story: string;
  url: string;
  name: string;
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
          <DrawerHeader className="flex justify-between flex-col">
            <DrawerClose className="self-end">
              <X />
            </DrawerClose>
            <span>
              <DrawerTitle>{props.name}</DrawerTitle>
              <DrawerDescription className="mt-2">
                Select a episode to watch
              </DrawerDescription>
            </span>
          </DrawerHeader>
          <div className="p-4 pb-0">
          <div className="flex items-center flex-col md:flex-row justify-center md:space-x-2 max-h-60 overflow-auto ">
  <EpiList id={props.id} active_ep={1} url={props.url} />
</div>

            {/* <div className="mt-3 h-[100px]"></div> */}
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
export const revalidate = 60;
