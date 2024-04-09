
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CItem from "./featured-carousal-item"
const data =[{id:11,name:"Bucchigiri?!",slug:"bucchigiri",story:"Arajin Tomoshibi gets caught up in battles among powerful individuals after reuniting with his former friend Matakara Asamine. Meanwhile, the shadow of a colossal demon appears...?!",url:"https://cdn.myanimelist.net/images/anime/1934/135982l.jpg"},
{id:10,name:"Lookism",slug:"lookism",story:"Violence, name-calling, and humiliation are a daily reality for high school student Park Hyung Suk. Chubby and insecure, he is often used as a plaything and punching bag for bullies... ",url:"https://cdn.myanimelist.net/images/anime/1435/131396.jpg"}]
export function CarouselMain() {
  return (
    <Carousel className="md:w-11/12 w-full overflow-hidden flex">
     
      <CarouselContent>
        {data.map((e, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex  items-center justify-center p-4">
                 
                  <div className="h-fit w-full ">
                    <CItem url={e.url} name={e.name} id={e.id} slug={e.slug} story={e.story} />
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
