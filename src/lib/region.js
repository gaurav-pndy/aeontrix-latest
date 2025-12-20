export async function getRequestRegion() {
  try {
    console.log("getRequestRegion: key?", process.env.IPGEO_KEY);

    const res = await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.IPGEO_KEY}`,
      { cache: "no-store" }
    );

    console.log("getRequestRegion: status", res.status);

    const text = await res.text();
    console.log("getRequestRegion: body", text);

    if (!res.ok) return "global";

    const data = JSON.parse(text);
    const country = data.country_code2 || "UNKNOWN";

    if (country === "IN") return "india";
    return "global";
  } catch (e) {
    console.error("getRequestRegion error", e);
    return "global";
  }
}
