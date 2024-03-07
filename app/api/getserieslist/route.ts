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