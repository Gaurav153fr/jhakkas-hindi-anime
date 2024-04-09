import { GetUrl } from "@/lib/Get";
interface props {
  id: number;
  ep_no: number;
}
export default async function VideoIframe(props: props) {
  const data = await GetUrl(props.id, props.ep_no);
  var url;
  try {
    const p = JSON.parse(JSON.stringify(data));
    url = p;
  } catch {
    url = "null   ";
    return;
  }
  return (
    <>
      {data && (
        <iframe
          title="video"
          id="iframe"
          allowFullScreen
          src={url.url}
          className="w-full h-full rounded-md shadow-lg"
        />
      )}
    </>
  );
}
