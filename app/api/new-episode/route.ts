import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { seriesName, epNo, url, seriesId } = await request.json();
    
    if (!seriesName || !epNo || !url || !seriesId) {
      throw new Error('All parameters are required');
    }

    await sql`
      INSERT INTO episode(series, ep_no, url, series_id) 
      VALUES (${seriesName}, ${epNo}, ${url}, ${seriesId})
    `;
    
    const seriesData = await sql`SELECT * FROM series;`;
    return NextResponse.json({ seriesData }, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
