import type { LucideIcon } from "lucide-react";
import { BookOpen, Boxes, Compass, ScrollText, Users, Zap } from "lucide-react";

export type NavigationItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

// 分类 slug 与 content/<locale>/ 子目录、content.ts 的 GROUP_TITLES/GROUP_ORDER、en.json 的 nav 键一一对应
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "editions", path: "/editions", icon: Boxes, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Zap, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "comparison", path: "/comparison", icon: Compass, isContentType: true },
  { key: "community", path: "/community", icon: ScrollText, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
