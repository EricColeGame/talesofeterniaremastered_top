export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
    website?: string;
    reddit?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Tales of Eternia Remastered Wiki",
  shortName: "Tales of Eternia Remastered",
  logoText: "TE",
  tagline: "Guides, Characters, Combat & World Walkthroughs",
  description: "Explore Tales of Eternia Remastered with story details, character profiles, combat tips, world guides, platform info, and beginner help for Inferia and Celestia.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://talesofeterniaremastered.top",
  supportEmail: "support@talesofeterniaremastered.top",
  gameUrl: "https://store.steampowered.com/app/3470960/Tales_of_Eternia_Remastered/",
  heroVideoId: "n0Trr5yLK1A", // Tales of Eternia Remastered - Announcement Trailer (Bandai Namco Entertainment America)
  social: {
    youtube: "https://www.youtube.com/@BandaiNamcoAmerica",
    website: "https://www.bandainamcoent.com/games/tales-of-eternia-remastered",
    reddit: "https://www.reddit.com/r/tales/",
  },
  locales: ["en", "ja", "es", "fr"],
  defaultLocale: "en",
};
