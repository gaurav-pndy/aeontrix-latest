// lib/region.ts
import { headers } from "next/headers";

export async function getRequestRegion() {
  const h = await headers();
  const region = h.get("x-region");
  return region === "india" ? "india" : "global";
}
