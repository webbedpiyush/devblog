import { slugifyStr } from "@utils/slugify";
import type { CollectionEntry } from "astro:content";
import DateTime from "./DateTime";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDateTime, modDateTime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li>
      <a>
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      <DateTime pubDateTime={pubDateTime} modDateTime={modDateTime} />
      <p>{description}</p>
    </li>
  );
}
