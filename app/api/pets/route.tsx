import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
    const petName="wmerakutta"
    const ownerName="gaurav ka"
  try {
    const result =
      await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}