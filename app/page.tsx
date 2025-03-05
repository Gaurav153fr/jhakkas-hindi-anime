import { CarouselMain } from "@/components/featured-series-corousel";
import LatestEpisodeContainer from "@/components/latest-episode-container";

import SeriesContainer from "@/components/series-card-container";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlaySquareIcon, PopcornIcon, Tv } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <div className="bg-green-900 border border-green-600 rounded-full px-2 font-mono text-sm ">
        Join our
        <Link
          href="https://discord.gg/yyAmspWrNP"
          target="_blank"
          className={buttonVariants({ variant: "link" })}
        >
          Discord
        </Link>{" "}
        to Contribute.
      </div>
      <CarouselMain />
      <div className="parent-container flex justify-start self-start px-10">
      <h2 className="font-bold text-3xl my-5 flex justify-initial dark:text-slate-300 items-center align-center">
          Latest Episodes <span className="mx-2"></span> <PlaySquareIcon />
        </h2>
        </div>
      <LatestEpisodeContainer />
      <div className="parent-container flex justify-start self-start px-10">
        <h2 className="font-bold text-3xl my-5 flex justify-initial dark:text-slate-300 items-center align-center">
          Latest Series <span className="mx-2"></span> <Tv />
        </h2>
      </div>

      <SeriesContainer horizontal={false} />
    </main>
  );
}
