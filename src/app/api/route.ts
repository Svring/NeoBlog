import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import Post from '@/models/Post';

const uri = process.env.MONGODB_URI!;

export async function GET() {
  try {
    console.log("Connecting to MongoDB...");
    // Connect to MongoDB if not already connected
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(uri);
    }
    console.log("Connected to MongoDB");
    // Fetch posts using Mongoose
    const data = await Post.find({});
    
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}