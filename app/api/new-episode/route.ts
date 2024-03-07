import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const series_name = searchParams.get('seriesName');
  const ep_no = searchParams.get('epNo');
  const url = searchParams.get('url');
  const series_id = searchParams.get('seriesId');

 
  try {
    if (!series_name || !ep_no||!url||!series_id) throw new Error('Pet and owner names required');
    await sql`INSERT INTO episode(series, ep_no, url, series_id) 
      VALUES (${series_name}, ${ep_no},${url},${series_id});
      `;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const pets = await sql`SELECT * FROM series;`;
  return NextResponse.json({ pets }, { status: 200 });
}