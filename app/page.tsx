import { CarouselMain } from "@/components/corousel";


import SeriesContainer from "@/components/series-container";
import { Separator } from "@/components/ui/separator"
import { PopcornIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CarouselMain/>
      <div className="parent-container flex justify-start self-start px-10">
   
      <h2 className="font-bold text-3xl my-5 flex justify-initial dark:text-slate-300 items-center align-center">Available Series {' '}<PopcornIcon/></h2>
   
  </div>
 
  <SeriesContainer/>
  
     
      

   
    

   
    </main>
  );
}
export const revalidate=60