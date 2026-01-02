import type { site, SocialObjects } from "types";

export const SITE: site = {
  website: "http://localhost:3000/",
  author: "Piyush Tiwari",
  desc: "A devlog containing all my handwritten and exucit blogs",
  title: "Webbedpiyush - Devlog",
  ogImage: "logo.png",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000,
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
};

export const LOGO_IMAGE = {
  enable: true,
  width: 200,
  height: "auto",
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/webbedpiyush",
    linkTitle: ``,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/piyush-tiwari-89543b260/",
    linkTitle: ``,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:professional@webbedpiyush.me",
    linkTitle: ``,
    active: true,
  },

  {
    name: "Twitter",
    href: "https://x.com/piyushhcodes",
    linkTitle: "",
    active: true,
  },
];
