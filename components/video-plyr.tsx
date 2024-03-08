import { GetUrl } from "@/lib/Get";
interface props{
    id:number,
    ep_no:number
}
export default async function VideoIframe(props:props) {
    const data= await GetUrl(props.id,props.ep_no)
    const url = JSON.parse(JSON.stringify(data));
    console.log(url)
    return( 
        <>
            <iframe
            title="video"
                id="iframe"
                allowFullScreen
                src={url.url}
                className="w-full h-full rounded-md shadow-lg"
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        setTimeout(function() {
                            var iframe = document.getElementById("iframe");
                            iframe.setAttribute("sandbox", "allow-scripts");
                            console.log("done")
                        }, 5000);
                       
                    `
                }}
            />
        </>
    )
}
