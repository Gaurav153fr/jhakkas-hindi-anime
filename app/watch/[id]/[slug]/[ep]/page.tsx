
import EpiList from "@/components/epilist";
import VideoIframe from "@/components/video-plyr";

interface params {
  id: number;
  slug: string;
  ep: number;
}

export default function Home({ params }: { params: params }) {


  return (
    <main className="flex flex-col items-center justify-between">
      <section className="flex w-screen h-screen">
        <div className="w-3/5 h-fit aspect-video p-5">
          <VideoIframe id={params.id} ep_no={params.ep} />
        </div>
        <div className="w-2/5 h-full">
          <h2 className="font-bold text-2xl my-5">Available Episodes</h2>
          <EpiList id={params.id} active_ep={params.ep} />
          <h2 className="font-bold text-2xl my-5">Other Series</h2>

        </div>
      </section>
    </main>
  );
}
