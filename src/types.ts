import type socailIcons from "../public/assets/socialIcons";

export type site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
  scheduledPostMargin: number;
};

export type SocialObjects = {
  name: keyof typeof socailIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];
