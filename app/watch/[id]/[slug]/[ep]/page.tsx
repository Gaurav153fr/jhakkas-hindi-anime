"use client"

import EpiList from "@/components/epilist";

interface params{
  id:number,
  slug:string,
  ep:number,
}
const items =[{
  no:"1",
  url:"#"
},
{
  no:"1",
  url:"#"
},
{
  no:"1",
  url:"#"
},
{
  no:"1",
  url:"#"
},
{
  no:"1",
  url:"#"
},
{
  no:"1",
  url:"#"
},
{
  no:"1",
  url:"#"
},]

export default function Home({params}:{params:params}) {
  return (
    <main className="flex  flex-col items-center justify-between">
      
   
   <section className="flex w-screen h-screen">
   <div className=" w-3/5 h-fit aspect-video p-5 ">
 <iframe src="https://filemoon.sx/e/b1okpn7sqk3v/EP.1.v0.1688667918.360p.mp4" className="w-full h-full rounded-md shadow-lg "/>

   </div>
   <div className=" w-2/5 h-full">
   <h2 className=" font-bold text-2xl my-5 ">Available Episodes</h2>

    <EpiList items={items}/>
   </div>
   </section>
    </main>
  );
}
