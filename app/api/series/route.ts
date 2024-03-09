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

interface PostgresResponse {
    rows: Row[];
}

export async function GET(request: Request) {
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
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
        };

        // Returning rows as JSON response with CORS headers
        return NextResponse.json({ rows }, { status: 200, headers });
    } catch (error:any) {
        // Returning error response if there's any error during SQL execution
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
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
      VALUES (${seriesName}, ${slug}, ${url}, ${url},CURRENT_DATE)
    `;
    
    const seriesData = await sql`SELECT * FROM series WHERE slug=${seriesName};`;
    return NextResponse.json({ seriesData }, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ error: error.message,"url":request.url }, { status: 500 });
  }
}
