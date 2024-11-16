import NameCard from "./components/NameCard";
import PostList from "./components/PostList";
import Timeline from "./components/Timeline";
import { nameConfig } from "@/configs/nameConfig";
import Post from "@/models/Post";
import mongoose from "mongoose";

// Data fetching function
async function getData() {
  try {
    const uri = process.env.MONGODB_URI!;

    // Connect to MongoDB if not already connected
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(uri);
    }

    const data = await Post.getSortedPostsWithTimeline();

    // Convert Mongoose documents to plain objects
    return {
      posts: JSON.parse(JSON.stringify(data.posts)),
      timeline: JSON.parse(JSON.stringify(data.timeline)),
      nameConfig: nameConfig
    };

  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw new Error('Failed to fetch data');
  }
}

export default async function Article() {
  const data = await getData();

  return (
    <div className="bg-black flex justify-between flex-row w-full h-screen p-2">
      <div className="border-2 border-red-500 w-[25%]">
        <NameCard nameConfig={nameConfig} />
      </div>
      <div className="border-2 border-red-500 w-[50%]">
        <PostList posts={data.posts} />
      </div>
      <div className="border-2 border-red-500 w-[20%]">
        <Timeline timeLine={data.timeline} />
      </div>
    </div>
  );
}
