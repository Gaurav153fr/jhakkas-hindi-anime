import { sql } from '@vercel/postgres';

 
export async function GetAllSeries() {
   
  try {
    const result =
      await sql`SELECT * FROM series;`;
      console.log(result.rows)
    return result.rows;
  } catch (error) {
    console.log(error)
    return error;
  }
}
export async function GetEpisodeById(id:string) {
   
  try {
    const result =
      await sql`SELECT * FROM episode where series_id=${id};`;
    
    return result.rows;
  } catch (error) {
    console.log(error)
    return error;
  }
}
export async function GetUrl(id:number,ep_no:number) {
   const idS =id.toString()
   const epS = ep_no.toString()
  try {
    const result =
      await sql`SELECT url FROM episode where series_id =${idS} and ep_no=${epS};`;
    console.log(result.rows[0])
    return result.rows[0];
  } catch (error) {
    console.log(error)
    return error;
  }
}


interface newep{
  series_name: string,
  ep_no: string,
  url: string,
  series_id: string
}
