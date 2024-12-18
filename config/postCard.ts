export type PostCardConfig = typeof postCard;

export function sortByTime(postCard: PostCardConfig) {
  const clonedPostCard = postCard.map(post => ({
    ...post,
    date: new Date(post.date)
  }));
  
  const sortedPosts = clonedPostCard.sort((a, b) => b.date.getTime() - a.date.getTime());
  const timeline = sortedPosts.map(post => ({ date: post.date }));
  
  return {
    posts: sortedPosts,
    timeline: timeline
  };
}

export const postCard = [
  {
    title: "PostCard",
    cover: "/postcover/PostCard.jpg",
    date: new Date("2024-10-19"),
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    description: "This is a post card",
    id: "1",
  },
  {
    title: "React Hooks 深入理解",
    cover: "/postcover/react-hooks.jpg",
    date: new Date("2024-11-05"),
    tags: ["React", "Hooks", "JavaScript"],
    description: "深入探讨 React Hooks 的使用和原理",
    id: "2",
  },
  {
    title: "Next.js 13 新特性解析",
    cover: "/postcover/nextjs-13.png",
    date: new Date("2024-12-01"),
    tags: ["Next.js", "React", "Web Development"],
    description: "探索 Next.js 13 带来的革命性变化",
    id: "3",
  },
  {
    title: "GraphQL vs REST API",
    cover: "/postcover/graphql-vs-rest.png",
    date: new Date("2025-01-15"),
    tags: ["GraphQL", "REST", "API Design"],
    description: "比较 GraphQL 和 REST API 的优缺点",
    id: "4",
  },
  {
    title: "TypeScript 高级技巧",
    cover: "/postcover/typescript-advanced.jpg",
    date: new Date("2025-02-10"),
    tags: ["TypeScript", "JavaScript", "Programming"],
    description: "探索 TypeScript 的高级特性和使用技巧",
    id: "5",
  },
  {
    title: "Docker 容器化实践",
    cover: "/postcover/docker-containers.png",
    date: new Date("2025-03-05"),
    tags: ["Docker", "DevOps", "Containerization"],
    description: "学习如何使用 Docker 进行应用程序容器化",
    id: "6",
  },
  {
    title: "CSS Grid 布局精通",
    cover: "/postcover/css-grid.jpg",
    date: new Date("2025-04-20"),
    tags: ["CSS", "Web Design", "Layout"],
    description: "深入理解 CSS Grid 布局系统及其应用",
    id: "7",
  },
];
