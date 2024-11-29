'use client'

import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { IPost } from "@/models/Post";
import { use } from "react";
import { Flex } from "@radix-ui/themes";
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useEffect, useState } from 'react';
import { useMDXComponents } from '@/mdx-components';

export default function Page({
    params,
}: {
    params: Promise<{ postId: string }>
}) {
    const { postId } = use(params);
    const post = useAppSelector(
        (state: RootState) => state.posts.posts.find((p: IPost) => p._id === postId)
    );
    const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null);
    
    // Get the custom components
    const components = useMDXComponents({});

    useEffect(() => {
        const prepareMdx = async () => {
            if (post?.content) {
                const serialized = await serialize(post.content);
                setMdxSource(serialized);
            }
        };
        prepareMdx();
    }, [post?.content]);

    return (
        <Flex 
            direction="column" 
            gap="2" 
            justify="center" 
            align="center"
            className="max-w-[720px] mx-auto leading-8 prose prose-lg"
            py="6"
        >
            {mdxSource && <MDXRemote {...mdxSource} components={components} />}
        </Flex>
    );
}