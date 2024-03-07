import { GetUrl } from "@/lib/Get"

interface props{
    id:number,
    ep_no:number
}
export default async function VideoIframe(props:props){
    const data= await GetUrl(props.id,props.ep_no)
    const url: url = JSON.parse(JSON.stringify(data));
    console.log(url)
    return( <iframe

        src={url.url}
        className="w-full h-full rounded-md shadow-lg"
      /> )
}