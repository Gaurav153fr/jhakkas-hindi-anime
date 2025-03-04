/* eslint-disable react/no-unescaped-entities */

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CItem from "./featured-carousal-item"
import { Button, buttonVariants } from "./ui/button"
import Link from "next/link"

const data =[{id:11,name:"Bucchigiri?!",slug:"bucchigiri",story:"Arajin Tomoshibi gets caught up in battles among powerful individuals after reuniting with his former friend Matakara Asamine. Meanwhile, the shadow of a colossal demon appears...?!",url:"https://cdn.myanimelist.net/images/anime/1934/135982l.jpg"},
{id:10,name:"Lookism",slug:"lookism",story:"Violence, name-calling, and humiliation are a daily reality for high school student Park Hyung Suk. Chubby and insecure, he is often used as a plaything and punching bag for bullies... ",url:"https://cdn.myanimelist.net/images/anime/1435/131396.jpg"}]
export function CarouselMain() {
  return (
    <section className="py-12 md:py-16 lg:py-20 w-full">
          <div className="container mx-auto px-4">
            <Carousel className="rounded-xl overflow-hidden">
              <CarouselContent>
              <CarouselItem>
                  <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground">
                    <img
                      src="https://www.icegif.com/wp-content/uploads/2024/04/solo-leveling-icegif-5.gif"
                      alt="Anime Series"
                      width={1200}
                      height={600}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-start justify-center px-4 md:px-8 lg:px-12 space-y-4 text-white bg-black/50">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Solo Leveling S2</h2>
                      <p className="text-lg md:text-xl lg:text-2xl">
                  Get lost in &quot;Sung, Jin-Woo's&quot; aura
                      </p>
                      <Link href="/watch/24/solo-leveling-s2/1" className={buttonVariants({ variant: "default" })}>Watch now</Link>
                     
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground">
                    <img
                      src="https://giffiles.alphacoders.com/114/114482.gif"
                      alt="Anime Series"
                      width={1200}
                      height={600}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-start justify-center px-4 md:px-8 lg:px-12 space-y-4 bg-black/50 text-white">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-2xl shadow-muted">Attack on Titan</h2>
                      <p className="text-lg md:text-xl lg:text-2xl">
                      
                        The final season is here. Don't miss the epic conclusion.
                      </p>
                      <Link href="/watch/23/attack-on-titan-season-1/1" className={buttonVariants({ variant: "default" })}>Watch now</Link>
                     
                    </div>
                  </div>
                </CarouselItem>
               
                <CarouselItem>
                  <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground">
                    <img
                      src="https://media.tenor.com/K70lTMmZjSUAAAAC/jjk-jujutsu-kaisen.gif"
                      alt="Anime Series"
                      width={1200}
                      height={600}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-start justify-center px-4 md:px-8 lg:px-12 space-y-4 text-white bg-black/50">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Jujutsu Kaisen</h2>
                      <p className="text-lg md:text-xl lg:text-2xl">
                        The battle against cursed spirits continues. Catch up now.
                      </p>
                      <Button>Watch Now</Button>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
  )
}
