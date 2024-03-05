import { CarouselMain } from "@/components/corousel";

import { EmptyCard } from "@/components/empty-card";
import { AspectRatioCard } from "@/components/main-card";
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CarouselMain/>
      <div className="flex justify-start">
      <h2 className=" font-extrabold text-2xl my-5 ">Available Series</h2>
      </div>
  <Separator className="my-5"/>
     <div className=" grid grid-cols-5 gap-x-3 gap-y-5">
      <AspectRatioCard/>
      <AspectRatioCard/>
     <EmptyCard/>
   
     </div>
   
    </main>
  );
}
