import { revalidate } from '@/components/episode-list-container';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { seriesName, epNo, url, seriesId } = await request.json();
    console.log(seriesName, epNo, url, seriesId )
    if (!seriesName || !epNo || !url || !seriesId) {
      throw new Error('All parameters are required');
    }

   const seriesData= await sql`
      INSERT INTO episode(series, ep_no, url, series_id) 
      VALUES (${seriesName}, ${epNo}, ${url}, ${seriesId})
    `;
    const series_slug= await sql`SELECT slug FROM series WHERE id=${seriesId};`
  revalidatePath('/')
  if (seriesId && series_slug?.rows?.[0]?.slug) {
    revalidatePath(`/watch/${seriesId}/${series_slug.rows[0].slug}`);
  }
    return NextResponse.json({ seriesData}, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
