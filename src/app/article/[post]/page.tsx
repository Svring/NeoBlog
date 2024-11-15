import { notFound } from "next/navigation";
import mongoose from "mongoose";
import Post from "@/models/Post";
// import MDXPage from "./mdxpage.mdx";

async function getPost(postId: string) {
    try {
        const uri = process.env.MONGODB_URI!;

        // Connect to MongoDB if not already connected
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(uri);
        }
        console.log("postId:", postId);

        const post = await Post.findById(postId);

        if (!post) {
            return notFound();
        }

        // Convert Mongoose document to plain object
        return JSON.parse(JSON.stringify(post));

    } catch (error) {
        console.error('Failed to fetch post:', error);
        throw new Error('Failed to fetch post');
    }
}

export default async function Page({
    params,
}: {
    params: Promise<{ post: string }>
}) {
    const post = await getPost((await params).post);

    return (
        <div>
            {/* <MDXPage /> */}
            <p>{post.content}</p>
        </div>
    );
}