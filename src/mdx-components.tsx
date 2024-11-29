import type { MDXComponents } from 'mdx/types'
import { Text, Heading, Flex } from "@radix-ui/themes";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        div: ({ children }) =>
            <Flex
                direction="column"
                py="8"
                style={{
                    backgroundColor: "#FF0000",
                }}
            >
                {children}
            </Flex>,

        h1: ({ children }) =>
            <Heading size="7" weight="bold" as="h1"
                style={{
                    marginBottom: "0.5rem",
                }}
            >
                {children}
            </Heading>,

        h2: ({ children }) =>
            <Heading size="6" weight="bold" as="h2"
                style={{
                    marginTop: "1rem",
                    marginBottom: "0.5rem",
                }}
            >
                {children}
            </Heading>,

        h3: ({ children }) =>
            <Heading size="5" weight="bold" as="h3"
                style={{
                    marginTop: "1rem",
                    marginBottom: "0.5rem",
                }}
            >
                {children}
            </Heading>,

        p: ({ children }) => (
            <Text
                as="p"
                style={{
                    lineHeight: "1.8",
                    textAlign: "left",
                    width: "100%",
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