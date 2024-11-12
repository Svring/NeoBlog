import { NextResponse } from "next/server";
import Post from "@/models/Post";
import { nameConfig } from "@/configs/nameConfig";
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI!;

// GET /api/article
export async function GET(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _request: Request
) {
  try {
    console.log("Connecting to MongoDB...");
    // Connect to MongoDB if not already connected
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(uri);
    }
    console.log("Connected to MongoDB");
    const data = await Post.getSortedPostsWithTimeline();

    return NextResponse.json({
      posts: data.posts,
      timeline: data.timeline,
      nameConfig: nameConfig
    }, { status: 200 });

  } catch {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
