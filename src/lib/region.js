import { headers } from "next/headers";

export async function getRequestRegion() {
  const h = headers();
  const country = h.get("x-vercel-ip-country") || "UNKNOWN"; // e.g. "IN"
  if (country === "IN") return "india";
  return "global";
}
