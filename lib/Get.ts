import axios from 'axios';
import { sql } from '@vercel/postgres';
export async function GetAllSeries() {
    const url= 'http://localhost:3000/api/getserieslist'
    try {
        const response = await axios.get(url);
        if (!response || !response.data) {
            throw new Error(`Failed to fetch series`);
        }
        const data = response.data;
         console.log('Series data:', data.rows,"hfdhfhfhffffffffffff");
        return data.rows;
    } catch (error) {
        console.error('Error fetching series:', error);
        throw error;
    }
}

export async function GetEpisodeById(id: string) {
    try {
        const result = await sql`SELECT * FROM episode where series_id=${id};`;
        return result.rows;
    } catch (error) {
        console.error('Error fetching episode by ID:', error);
        throw error;
    }
}

export async function GetUrl(id: number, ep_no: number) {
    const idS = id.toString();
    const epS = ep_no.toString();
    try {
        const result = await sql`SELECT url FROM episode where series_id=${idS} and ep_no=${epS};`;
        return result.rows[0];
    } catch (error) {
        console.error('Error fetching URL:', error);
        throw error;
    }
}

interface NewEpisode {
    series_name: string;
    ep_no: string;
    url: string;
    series_id: string;
}
