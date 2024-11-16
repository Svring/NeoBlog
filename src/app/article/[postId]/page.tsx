'use client'

import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { IPost } from "@/models/Post";
import { use } from "react";

export default function Page({
    params,
}: {
    params: Promise<{ postId: string }>
}) {
    const { postId } = use(params);
    const post = useAppSelector(
        (state: RootState) => state.posts.posts.find((p: IPost) => p._id === postId)
    );

    return (
        <div>
            <p>{post?.content}</p>
        </div>
    );
}