import type { APIRoute } from "astro";
import { generateOgImageForSite } from "@utils/generateOgImages";

export const GET: APIRoute = async () => {
  const pngBuffer = await generateOgImageForSite();
  return new Response(new Uint8Array(pngBuffer), {
    headers: { "Content-Type": "image/png" },
  });
};
