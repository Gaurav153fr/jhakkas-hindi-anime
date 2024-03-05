
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CItem from "./carousal-item"
const imgs =["https://img.flawlessfiles.com/_r/1366x768/100/db/86/db8603d2f4fa78e1c42f6cf829030a18/db8603d2f4fa78e1c42f6cf829030a18.jpg","https://img.flawlessfiles.com/_r/1366x768/100/58/d0/58d0b99666b285d2c484fec5dfaa23f0/58d0b99666b285d2c484fec5dfaa23f0.jpg"]
export function CarouselMain() {
  return (
    <Carousel className="w-11/12 ">
      <CarouselContent>
        {imgs.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex  items-center justify-center p-4">
                 
                  <div className="h-80 w-full ">
                    <CItem url={img}/>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant='secondary' />
      <CarouselNext variant='secondary' />
    </Carousel>
  )
}
