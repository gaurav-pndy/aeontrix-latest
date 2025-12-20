import { headers } from "next/headers";

export async function getRequestRegion() {
  const h = await headers(); // ← await the Promise
  const country = h.get("x-vercel-ip-country") || "UNKNOWN"; // e.g. "IN"

  if (country === "IN") return "india";
  return "global";
}
