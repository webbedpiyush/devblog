import type { CollectionEntry } from "astro:content";
import getSortedPosts from "./getSortedPosts";
import { slugifyAll } from "./slugify";

const getPostsByTag = (post: CollectionEntry<"blog">[], tag: string) =>
  getSortedPosts(
    post.filter((post) => slugifyAll(post.data.tags).includes(tag))
  );

export default getPostsByTag;
