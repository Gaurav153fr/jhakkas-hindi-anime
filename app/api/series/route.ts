import { sql, QueryResultRow } from '@vercel/postgres';
import { NextResponse } from 'next/server';

interface Row {
    id: string;
    name: string;
    slug: string;
    sypnosis: string;
    url: string;
    created_on: string;
}



export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if(!id){
    try {
      
        const res = await sql`SELECT * FROM series`;
        const rows: Row[] = res.rows.map((row: QueryResultRow) => {
            return {
                id: row.id,
                name: row.name,
                slug: row.slug,
                sypnosis: row.sypnosis,
                url: row.url,
                created_on: row.created_on
            };
        });

        // Set CORS headers to disable CORS
      
        // Returning rows as JSON response with CORS headers
        return NextResponse.json({ rows }, { status: 200 });
    } catch (error:any) {
        // Returning error response if there's any error during SQL execution
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }}
    else{
      try {
      
        const res:any = await sql`SELECT * FROM series WHERE id=${id}`;
        const rows: Row = res.rows
       
        // Set CORS headers to disable CORS
      
        // Returning rows as JSON response with CORS headers
        return NextResponse.json({ rows }, { status: 200 });
    } catch (error:any) {
        // Returning error response if there's any error during SQL execution
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
    }

}



export async function POST(request: Request) {
  try {
    const { seriesName, slug, url, story } = await request.json();
    
    if (!seriesName || !slug || !url || !story) {
      throw new Error('All parameters are required');
    }

    await sql`
      INSERT INTO series(name, slug, sypnosis, url,created_on) 
      VALUES (${seriesName}, ${slug}, ${story}, ${url},CURRENT_DATE)
    `;
    
    const seriesData = await sql`SELECT * FROM series WHERE slug=${seriesName};`;
    return NextResponse.json({ seriesData }, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ error: error.message,"url":request.url }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, name, slug,url,story } = await request.json();
    
    if (!id || !name || !slug||!url||!story) {
      throw new Error('All parameters are required');
    }

     await sql`
      UPDATE series SET name=${name},slug=${slug},url=${url},sypnosis=${story}  WHERE id=${id}
    `;
    
   const returndata=   await sql`
   SELECT * FROM series WHERE id=${id}
  
 `;
    return NextResponse.json({ returndata }, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ error: error.message+" bhai galat bat " }, { status: 500 });
  }
}
