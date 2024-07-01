import { AccordionFaq } from "@/components/accordion-faq";
import { AdAlert } from "@/components/ad-alert";
import EpiList from "@/components/episode-list-container";
import SeriesContainer from "@/components/series-card-container";
import VideoIframe from "@/components/video-player";
import { Clapperboard } from "lucide-react";
import { Metadata } from "next";
interface params {
  id: number;
  slug: string;
  ep: number;
}

export default function Home({ params }: { params: params }) {
  return (
    <main className="flex flex-col items-center justify-between w-full">
      <section className="flex md:flex-row flex-col w-screen h-screen">
        <div className="md:w-3/5 w-full h-fit aspect-video md:p-5 mb-2">
          <VideoIframe id={params.id} ep_no={params.ep} />
          <span className="mt-5">
            <AdAlert />
            <span className="max-md:hidden">
              <AccordionFaq />
            </span>
          </span>
        </div>

        <div className="md:w-2/5 w-full h-full md:px-0 px-1">
          <h2 className="font-bold text-2xl my-5 flex tracking-tight w-full max-md:justify-between px-2  ">
            Available Episodes{" "}
            <span className="  ml-5 justify-center flex items-center">
              <Clapperboard />
            </span>
          </h2>
          <div className=" max-h-60 overflow-y-scroll max-md:pt-10 flex justify-center w-full ">
            <EpiList id={params.id} active_ep={params.ep} />
          </div>

          <h2 className="font-bold text-2xl my-5 px-2">Other Series</h2>

          <SeriesContainer horizontal={false} />
          <span className="md:hidden">
            <AccordionFaq />
          </span>
        </div>
      </section>
    </main>
  );
}

export async function generateMetadata({ params }: { params: params }) {
  return {
    title:`watching ${params.slug.replaceAll("-", " ")} hindi dub episode no  ${
      params.ep
    } only on jhakkas`,
    description:"Watch, Download, Hindi Dubbed anime free without add" ,
  };
}
