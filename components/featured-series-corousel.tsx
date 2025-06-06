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
import Image from "next/image"


export function CarouselMain() {
  return (
    <section className="py-12 md:py-16 lg:py-20 w-full">
          <div className="container mx-auto px-4">
            <Carousel className="rounded-xl overflow-hidden">
              <CarouselContent>
              <CarouselItem>
                  <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground">
                    <Image
                      src="https://cdn.myanimelist.net/images/anime/1448/147351l.jpg"
                      alt="Anime Series"
                      width={500}
                      height={300}
                      className="absolute inset-0 w-full h-full object-cover md:hidden"
                    />
                    <iframe width="741" height="417"  className="absolute inset-0 w-full h-full object-cover max-md:hidden" src="https://www.youtube.com/embed/zneSO80qHN0?autoplay=1&disablekb=1&mute=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3" title="Solo Leveling Season 2 -Arise from the Shadow- | CLIMAX TRAILER"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen={true} ></iframe>
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
                      src="https://wallpaperaccess.com/full/2725449.jpg"
                      alt="Anime Series"
                      width={1200}
                      height={600}
                      className="absolute inset-0 w-full h-full object-cover max-md:hidden"
                    />
                       <Image
                      src="https://cdn.myanimelist.net/images/anime/1907/134102l.jpg"
                      alt="Anime Series"
                      width={500}
                      height={300}
                      className="absolute inset-0 w-full h-full object-cover md:hidden"
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
                      src="https://rare-gallery.com/mocahbig/1376871-jujutsu-kaisen-anime-characters-4k-pc-wallpaper.jpg"
                      alt="Anime Series"
                      width={1200}
                      height={600}
                      className="absolute inset-0 w-full h-full object-cover max-md:hidden"
                    />
                       <Image
                      src="https://cdn.myanimelist.net/images/anime/1844/128065l.jpg"
                      alt="Anime Series"
                      width={500}
                      height={300}
                      className="absolute inset-0 w-full h-full object-cover md:hidden"
                    />
                    <div className="absolute inset-0 flex flex-col items-start justify-center px-4 md:px-8 lg:px-12 space-y-4 text-white bg-black/50">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Jujutsu Kaisen</h2>
                      <p className="text-lg md:text-xl lg:text-2xl">
                        The battle against cursed spirits continues. Catch up now.
                      </p>
                      <Link href="/watch/7/jujutsu-kaisen-hindi/1" className={buttonVariants({ variant: "default" })}>Watch now</Link>
                     
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
