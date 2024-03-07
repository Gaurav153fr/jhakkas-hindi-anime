import { sql } from '@vercel/postgres';

 interface newep{
    series_name: string,
    ep_no: string,
    url: string,
    series_id: string
 }
export async function NewEpi( e:newep) {
   
  try {
    const result =
      await sql`INSERT INTO episode(series, ep_no, url, series_id) 
      VALUES (${e.series_name}, ${e.ep_no},${e.url},${e.series_id});
      `;
      console.log(result,"jhuhhjvhjv")
    return result.rows;
  } catch (error) {
    console.log(error)

    return error;
  }
}