export async function getRequestRegion() {
  try {
    const res = await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.IPGEO_KEY}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.error("getRequestRegion: status", res.status);
      return "global";
    }

    const data = await res.json();
    const country = data.country_code2 || "UNKNOWN";

    if (country === "IN") return "india";
    return "global"; // any non-IN (including VPN exit) → USD
  } catch (e) {
    console.error("getRequestRegion error", e);
    return "global";
  }
}
