export interface ISiteConfig {
  siteName: string;
  description: string;
  currentlyAt: string;
  socialLink: {
    github: string;
  }
};

const siteConfig: ISiteConfig = {
  siteName: "Explorer",
  description: "A minimal blog",
  currentlyAt: "Budapest",
  socialLink: {
    github: "https://github.com/JulienMalcouronne"
  }
};

export default siteConfig;
