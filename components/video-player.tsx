import { GetUrl } from "@/lib/Get";
interface props {
  id: number;
  ep_no: number;
}
export default async function VideoIframe(props: props) {
  const url = await GetUrl(props.id, props.ep_no);
  
  return (
    <>
      {url && (
        <iframe
  src={url}
  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
  allowFullScreen={true}
className="w-full h-full"
  loading="lazy"
 
/>      )}
    </>
  );
}
