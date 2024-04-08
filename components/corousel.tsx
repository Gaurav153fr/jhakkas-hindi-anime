
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CItem from "./carousal-item"
const imgs =["https://wallpapercave.com/wp/wp8170492.png","https://wallpapercave.com/wp/wp11159159.jpg"]
export function CarouselMain() {
  return (
    <Carousel className="md:w-11/12 w-full overflow-hidden flex">
     
      <CarouselContent>
        {imgs.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex  items-center justify-center p-4">
                 
                  <div className="h-fit w-full ">
                    <CItem url={img} />
                  </div>
        
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className=" w-52 p-1 hidden md:flex">
      <CarouselPrevious variant='secondary'  className="h-full w-full rounded-md mr-2" />
      <CarouselNext variant='secondary'  className="h-full w-full rounded-md " />
      </div>
    
    </Carousel>
  )
}
