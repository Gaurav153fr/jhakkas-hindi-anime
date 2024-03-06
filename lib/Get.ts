import { sql } from '@vercel/postgres';

 
export async function GetAllSeries() {
   
  try {
    const result =
      await sql`SELECT * FROM series;`;
    return result.rows;
  } catch (error) {
    return error;
  }
}