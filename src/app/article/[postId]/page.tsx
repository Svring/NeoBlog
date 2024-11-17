'use client'

import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { IPost } from "@/models/Post";
import { use } from "react";
import { Flex } from "@radix-ui/themes";

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
        <Flex 
            direction="column" 
            gap="2" 
            justify="center" 
            align="center"
            className="max-w-[720px] mx-auto px-5 leading-8 prose prose-lg"
            p="4"
        >
            {post?.content}
        </Flex>
    );
}