import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  key: string;
  path: string;
  icon: LucideIcon;
  isContentType: boolean;
};

// 导航在内容重建前保持为空
export const NAVIGATION_CONFIG: NavigationItem[] = [];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
