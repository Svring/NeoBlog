"use client";

import { Theme } from "@radix-ui/themes";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <Theme panelBackground="translucent" radius="large" appearance="dark">{children}</Theme>;
}
