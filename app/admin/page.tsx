"use client"
import { useState } from 'react';
import { NewEpi } from "@/lib/POST";
import SelectSeries from '@/components/select';

export default function Home() {
    const [seriesName, setSeriesName] = useState<string>('');
    const [episodeNo, setEpisodeNo] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const [seriesId, setSeriesId] = useState<string>('');
    const [res, setRes] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = { series_name: seriesName, ep_no: episodeNo, url, series_id: seriesId };
        try {
            const response = await NewEpi(data);
            const list: url = JSON.parse(JSON.stringify(response));

            setRes(url.toString());
        } catch (error:any) {
            console.error("Error submitting form:", error);
            setRes("Error: " + error.message);
        }
    };

    return (
        <main>
            <div className='my-10 '>
                <SelectSeries onChange={(selectedSeriesId: string) => setSeriesId(selectedSeriesId)} />
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 pl-10'>
                <input type="text" placeholder="Series Name" value={seriesName} onChange={(e) => setSeriesName(e.target.value)} />
                <input type="text" placeholder="Episode Number" value={episodeNo} onChange={(e) => setEpisodeNo(e.target.value)} />
                <input type="text" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} />
                <input type="text" placeholder="Series ID" value={seriesId} onChange={(e) => setSeriesId(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            {res}
        </main>
    );
}
