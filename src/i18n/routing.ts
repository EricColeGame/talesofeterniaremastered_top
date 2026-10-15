import { defineRouting } from "next-intl/routing";
import { siteConfig } from "@/config/site";

// 唯一真相源：最终语言集合（取代模板遗留的 siteConfig.locales）
export const locales = ["en", "ja", "es", "fr"] as const;

export const routing = defineRouting({
  locales: locales as unknown as string[],
  defaultLocale: siteConfig.defaultLocale,
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
