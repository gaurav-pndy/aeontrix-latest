// middleware.js (project root, same level as next.config.mjs)
import { NextResponse } from "next/server";

export async function middleware(req) {
  // console.log("MIDDLEWARE RUNNING");

  const forwardedFor = req.headers.get("x-forwarded-for") || "";
  const ip =
    req.ip ||
    forwardedFor.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "";

  let region = "global";

  if (ip) {
    try {
      const res = await fetch(
        `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.IPGEO_KEY}&ip=${ip}`,
        { cache: "no-store" }
      );

      const text = await res.text();

      if (res.ok) {
        const data = JSON.parse(text);
        const country = data.country_code2 || "UNKNOWN";
        if (country === "IN") region = "india";
      }
    } catch (e) {
      console.error("middleware geo lookup error", e);
    }
  }

  const response = NextResponse.next();
  response.headers.set("x-region", region);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
