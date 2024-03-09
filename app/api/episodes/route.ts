import { sql, QueryResultRow } from '@vercel/postgres';
import { NextResponse } from 'next/server';

interface epRow {
    episode: number;
    url:string
   
}


export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
   
    try {
      
        //console.log(id)
        const res = await sql`SELECT * FROM episode WHERE series_id=${id}`;
       // console.log(res)
        const data: epRow[] = res.rows.map((row: QueryResultRow) => {
            return {
                episode: row.ep_no,
                url: row.url,
                seriesId:id
               
            };
        });

        // Set CORS headers to disable CORS
     

        // Returning rows as JSON response with CORS headers
        return NextResponse.json({ data }, { status: 200 });
    } catch (error:any) {
        // Returning error response if there's any error during SQL execution
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}



export async function POST(request: Request) {
  try {
    const { seriesId, episodeId, newUrl } = await request.json();
    
    if (!seriesId || !episodeId || !newUrl) {
      throw new Error('All parameters are required');
    }

     await sql`
      UPDATE episode SET url=${newUrl} WHERE ep_no=${episodeId}
     AND series_id=${seriesId}
    `;
    
   const returndata=   await sql`
   SELECT * FROM episode WHERE ep_no=${episodeId} AND series_id=${seriesId}
  
 `;
    return NextResponse.json({ returndata }, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ error: error.message+" bhai galat bat " }, { status: 500 });
  }
}
