
import EpiList from "@/components/epilist";
import SeriesContainer from "@/components/series-container";
import VideoIframe from "@/components/video-plyr";

interface params {
  id: number;
  slug: string;
  ep: number;
}

export default function Home({ params }: { params: params }) {


  return (
    <main className="flex flex-col items-center justify-between">
      <section className="flex md:flex-row flex-col w-screen h-screen">
        <div className="md:w-3/5 w-full min-h-[210px] aspect-video md:p-5">
          <VideoIframe id={params.id} ep_no={params.ep} />
        </div>
        <div className="md:w-2/5 w-full h-full md:px-0 px-2">
          <h2 className="font-bold text-2xl my-5">Available Episodes</h2>
          <EpiList id={params.id} active_ep={params.ep} />

          <h2 className="font-bold text-2xl my-5">Other Series</h2>
<SeriesContainer/>
        </div>
      </section>
    </main>
  );
}

export const revalidate=60