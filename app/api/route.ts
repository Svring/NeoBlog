import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

const uri = process.env.MONGODB_URI!;

export async function GET() {
  try {
    const client = await MongoClient.connect(uri);
    const db = client.db('mongodbVSCodePlaygroundDB');
    
    // Example query - adjust according to your needs
    const data = await db.collection('sales').find({}).toArray();
    
    await client.close();
    
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}