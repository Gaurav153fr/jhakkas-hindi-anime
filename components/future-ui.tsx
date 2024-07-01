/* eslint-disable react/no-unescaped-entities */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QJCQKabBFd2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="w-full min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="#" className="text-2xl font-bold text-primary" prefetch={false}>
            Anime Hub
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-primary-foreground hover:text-primary" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
              Anime
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
              Movies
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
              Community
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <SearchIcon className="w-5 h-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <UserIcon className="w-5 h-5" />
              <span className="sr-only">Account</span>
            </Button>
          </div>
        </div>
      </header>
      <main>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <Carousel className="rounded-xl overflow-hidden">
              <CarouselContent>
                <CarouselItem>
                  <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground">
                    <img
                      src="/placeholder.svg"
                      alt="Anime Series"
                      width={1200}
                      height={600}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-start justify-center px-4 md:px-8 lg:px-12 space-y-4">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Attack on Titan</h2>
                      <p className="text-lg md:text-xl lg:text-2xl">
                      
                        The final season is here. Don't miss the epic conclusion.
                      </p>
                      <Button>Watch Now</Button>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground">
                    <img
                      src="/placeholder.svg"
                      alt="Anime Series"
                      width={1200}
                      height={600}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-start justify-center px-4 md:px-8 lg:px-12 space-y-4">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Demon Slayer</h2>
                      <p className="text-lg md:text-xl lg:text-2xl">
                        The thrilling journey continues. Watch the latest episodes.
                      </p>
                      <Button>Watch Now</Button>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground">
                    <img
                      src="/placeholder.svg"
                      alt="Anime Series"
                      width={1200}
                      height={600}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-start justify-center px-4 md:px-8 lg:px-12 space-y-4">
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
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-r from-secondary/90 to-secondary/70 text-secondary-foreground">
                <CardHeader className="flex items-center justify-between">
                  <div>
                    <CardTitle>My Hero Academia</CardTitle>
                    <CardDescription>Season 6, Episode 12</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    Watch Now
                  </Button>
                </CardHeader>
                <CardContent>
                  <p>
                    The heroes face their toughest challenge yet as they battle against the villains. Don't miss the
                    latest episode!
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-secondary/90 to-secondary/70 text-secondary-foreground">
                <CardHeader className="flex items-center justify-between">
                  <div>
                    <CardTitle>Spy x Family</CardTitle>
                    <CardDescription>Season 1, Episode 18</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    Watch Now
                  </Button>
                </CardHeader>
                <CardContent>
                  <p>
                    The Forger family's adventures continue as they navigate the world of espionage and family life.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-secondary/90 to-secondary/70 text-secondary-foreground">
                <CardHeader className="flex items-center justify-between">
                  <div>
                    <CardTitle>Chainsaw Man</CardTitle>
                    <CardDescription>Season 1, Episode 9</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    Watch Now
                  </Button>
                </CardHeader>
                <CardContent>
                  <p>
                    The thrilling and gory world of Chainsaw Man continues to captivate audiences. Don't miss the latest
                    episode!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">All Anime Series</h2>
              <Button variant="outline">View More</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card className="bg-muted text-muted-foreground">
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    alt="Anime Series"
                    width={300}
                    height={200}
                    className="rounded-t-lg object-cover w-full aspect-[3/2]"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle>Attack on Titan</CardTitle>
                  <CardDescription>Action, Drama, Fantasy</CardDescription>
                  <div className="flex items-center justify-between mt-4">
                    <Button variant="outline" size="sm">
                      Watch Now
                    </Button>
                    <div className="flex items-center gap-1 text-muted">
                      <StarIcon className="w-4 h-4" />
                      <span>4.8</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-muted text-muted-foreground">
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    alt="Anime Series"
                    width={300}
                    height={200}
                    className="rounded-t-lg object-cover w-full aspect-[3/2]"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle>Demon Slayer</CardTitle>
                  <CardDescription>Action, Fantasy, Adventure</CardDescription>
                  <div className="flex items-center justify-between mt-4">
                    <Button variant="outline" size="sm">
                      Watch Now
                    </Button>
                    <div className="flex items-center gap-1 text-muted">
                      <StarIcon className="w-4 h-4" />
                      <span>4.9</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-muted text-muted-foreground">
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    alt="Anime Series"
                    width={300}
                    height={200}
                    className="rounded-t-lg object-cover w-full aspect-[3/2]"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle>Jujutsu Kaisen</CardTitle>
                  <CardDescription>Action, Supernatural, Fantasy</CardDescription>
                  <div className="flex items-center justify-between mt-4">
                    <Button variant="outline" size="sm">
                      Watch Now
                    </Button>
                    <div className="flex items-center gap-1 text-muted">
                      <StarIcon className="w-4 h-4" />
                      <span>4.7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-muted text-muted-foreground">
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    alt="Anime Series"
                    width={300}
                    height={200}
                    className="rounded-t-lg object-cover w-full aspect-[3/2]"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle>My Hero Academia</CardTitle>
                  <CardDescription>Action, Superhero, School</CardDescription>
                  <div className="flex items-center justify-between mt-4">
                    <Button variant="outline" size="sm">
                      Watch Now
                    </Button>
                    <div className="flex items-center gap-1 text-muted">
                      <StarIcon className="w-4 h-4" />
                      <span>4.8</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-muted text-muted-foreground">
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    alt="Anime Series"
                    width={300}
                    height={200}
                    className="rounded-t-lg object-cover w-full aspect-[3/2]"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle>Spy x Family</CardTitle>
                  <CardDescription>Comedy, Action, Spy</CardDescription>
                  <div className="flex items-center justify-between mt-4">
                    <Button variant="outline" size="sm">
                      Watch Now
                    </Button>
                    <div className="flex items-center gap-1 text-muted">
                      <StarIcon className="w-4 h-4" />
                      <span>4.9</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-muted text-muted-foreground">
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    alt="Anime Series"
                    width={300}
                    height={200}
                    className="rounded-t-lg object-cover w-full aspect-[3/2]"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle>Chainsaw Man</CardTitle>
                  <CardDescription>Action, Supernatural, Horror</CardDescription>
                  <div className="flex items-center justify-between mt-4">
                    <Button variant="outline" size="sm">
                      Watch Now
                    </Button>
                    <div className="flex items-center gap-1 text-muted">
                      <StarIcon className="w-4 h-4" />
                      <span>4.7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-muted text-muted-foreground">
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    alt="Anime Series"
                    width={300}
                    height={200}
                    className="rounded-t-lg object-cover w-full aspect-[3/2]"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle>Naruto</CardTitle>
                  <CardDescription>Action, Adventure, Martial Arts</CardDescription>
                  <div className="flex items-center justify-between mt-4">
                    <Button variant="outline" size="sm">
                      Watch Now
                    </Button>
                    <div className="flex items-center gap-1 text-muted">
                      <StarIcon className="w-4 h-4" />
                      <span>4.6</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-muted text-muted-foreground">
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    alt="Anime Series"
                    width={300}
                    height={200}
                    className="rounded-t-lg object-cover w-full aspect-[3/2]"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle>One Piece</CardTitle>
                  <CardDescription>Adventure, Comedy, Fantasy</CardDescription>
                  <div className="flex items-center justify-between mt-4" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function SearchIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function StarIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function UserIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}