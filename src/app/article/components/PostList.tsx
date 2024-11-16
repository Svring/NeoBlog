"use client";

import { Card, Flex, Badge, Text, Heading, Separator } from "@radix-ui/themes";
import { IPost } from "@/models/Post";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { initialize } from "@/redux/features/posts/postsSlice";

/**
 * TODO: Implement post preview with parallel route and route interception
 * @deadline 2077-01-01
 */

export default function PostList({ posts }: { posts: IPost[] }) {
  const dispatch = useDispatch();
  dispatch(initialize(posts));

  return (
    <Flex key={posts.length} direction="column" gap="4" width="100%" height="100%" p="2"
      className="overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </Flex>
  );
}

function PostCard({ post }: { post: IPost }) {
  return (
    <Link href={`/article/${post._id}`}>
      <Card variant="classic" key={post._id} className="w-full min-h-[140px]">
        <Flex key={post._id} width="100%" direction="row" gap="2">
          <Flex width="25%" justify='center' className="relative h-[130px]">
            <Image
              src={`data:image/jpeg;base64,${Buffer.from(post.cover).toString('base64')}`}
              alt={post.title}
              className="object-cover rounded-md"
              fill
              priority
            />
          </Flex>
          <Flex direction="column" width="75%" height="100%" gap="2">
            <Heading className="h-1/4 overflow-x-auto scrollbar-hide" size="4">{post.title}</Heading>
            <Flex className="h-1/4" direction="row" justify='center' align="center" gap="2">
              <Text className="w-1/3" size="2">
                {new Date(post.createdAt).toLocaleDateString()}
              </Text>
              <Separator orientation="vertical" />
              <Flex className="w-2/3 overflow-x-auto scrollbar-hide"
                direction="row" justify='start' align="center" gap="2">
                {post.tags.map((tag) => (
                  <Badge key={tag} size="2">{tag}</Badge>
                ))}
              </Flex>
            </Flex>
            <Text className="h-1/2 overflow-y-auto scrollbar-hide" color="gray" size="2">
              {post.description}
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Link>
  );
}
