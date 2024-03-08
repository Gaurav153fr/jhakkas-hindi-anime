
import { sql } from '@vercel/postgres';
export async function GetAllSeries() {
   
    try  {
        const response = await sql`SELECT * FROM series;`;
        if (!response || !response) {
            throw new Error(`Failed to fetch series`);
        }
        const data = response;
        //  console.log('Series data:', data.rows,"hfdhfhfhffffffffffff");
        return data.rows;
    } catch (error) {
        console.error('Error fetching series:', error);
        throw error;
    }
}

export const GetEpisodeById =async(id:string)=> {
    try {
        const result = await sql`SELECT * FROM episode where series_id=${id};`;
        console.log(result.rows)
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
