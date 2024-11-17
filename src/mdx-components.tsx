import type { MDXComponents } from 'mdx/types'
import { Text, Heading } from "@radix-ui/themes";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => <Heading className="text-3xl font-bold" as="h1">{children}</Heading>,
    h2: ({ children }) => <Heading as="h2">{children}</Heading>,

    h3: ({ children }) => <Heading as="h3">{children}</Heading>,

    p: ({ children }) => (
        <Text 
            as="p" 
            style={{ 
                lineHeight: "1.8",
                marginBottom: "1.5rem"  // 段落之间的间距
            }}
        >
            {children}
        </Text>
    ),

    img: (props) => <Image sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
      {...(props as ImageProps)} />,
  }
}