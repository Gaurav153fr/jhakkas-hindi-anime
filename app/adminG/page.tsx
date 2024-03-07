"use client"
import { useState } from 'react';
import { NewEpi } from "@/lib/Get"

export default function Home(){
    const [seriesName, setSeriesName] = useState('');
    const [episodeNo, setEpisodeNo] = useState('');
    const [url, setUrl] = useState('');
    const [seriesId, setSeriesId] = useState('');
    const [res, setRes] = useState('res');

    const handleSubmit = (event:any) => {
        console.log("Helo")
        event.preventDefault();
        const data = { series_name: seriesName, ep_no: episodeNo, url, series_id: seriesId };
        const res =NewEpi(data);
        setRes(res.toString())
    }

    return(
        <main>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 pl-10'>
                <input type="text" placeholder="Series Name" value={seriesName} onChange={(e) => setSeriesName(e.target.value)} />
                <input type="text" placeholder="Episode Number" value={episodeNo} onChange={(e) => setEpisodeNo(e.target.value)} />
                <input type="text" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} />
                <input type="text" placeholder="Series ID" value={seriesId} onChange={(e) => setSeriesId(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            {res}
        </main>
    )
}
