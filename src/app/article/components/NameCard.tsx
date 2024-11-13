"use client"

import { Flex, Separator, Text } from "@radix-ui/themes"
import { NameConfig } from "@/configs/nameConfig";

export default function NameCard({ nameConfig }: { nameConfig: NameConfig }) {
  return (
    <Flex direction={'column'} width={'100%'} height={'100%'} p={'2'} gap={'2'}
      className="rounded-lg ring-2 ring-red-400 ring-inset"
    >
      <Text size="8">{nameConfig.name}</Text>
      <Separator size={'4'} />
      <Text size="3">{nameConfig.introduction}</Text>
    </Flex>
  );
}
