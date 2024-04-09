import { Skeleton } from "@/components/ui/skeleton"
export default function Loading(){
    return (<>
     <main className="flex flex-col items-center justify-between">
      <section className="flex md:flex-row flex-col w-screen h-screen">
        <div className="md:w-3/5 w-full min-h-[210px] aspect-video md:p-5">
         <Skeleton className="w-full h-full"/>
        </div>
        <div className="md:w-2/5 w-full h-full md:px-0 px-2">
          <h2 className="font-bold text-2xl my-5">Available Episodes</h2>
          <Skeleton className="w-full h-full"/>

          <h2 className="font-bold text-2xl my-5">Other Series</h2>

          <Skeleton className="w-full h-full"/>
        </div>
      </section>
    </main>
    </>)
}