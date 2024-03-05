"use client"
import ReactPlayer from 'react-player'
interface params{
  id:number,
  slug:string,
  ep:number,
}
export default function Home({params}:{params:params}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      
   
   <section className="flex w-screen h-screen">
   <div className=" w-3/5 h-full">
 <iframe src="https://filemoon.sx/e/b1okpn7sqk3v/EP.1.v0.1688667918.360p.mp4"/>

   </div>
   <div className=" w-2/5 h-full"></div>
   </section>
    </main>
  );
}
