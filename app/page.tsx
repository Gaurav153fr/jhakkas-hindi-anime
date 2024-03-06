import { CarouselMain } from "@/components/corousel";


import SeriesContainer from "@/components/series-container";
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CarouselMain/>
      <div className="flex justify-start">
      <h2 className=" font-extrabold text-2xl my-5 ">Available Series</h2>
      </div>
  <Separator className="my-5"/>
  <SeriesContainer/>
  
     
      

   
    

   
    </main>
  );
}
