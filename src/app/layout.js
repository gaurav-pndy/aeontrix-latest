// app/layout.tsx

import "./globals.css";
import { Inter_Tight } from "next/font/google";
import Navbar from "@/components/Navbar";
import Ribbons from "@/components/ui/Ribbons";
import ClientEffects from "@/components/ClientEffects";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

export const metadata = {
  metadataBase: new URL("https://aeontrix.com"), // ✅ your production domain

  title: "Aeontrix | AI Transformation Partner",
  description:
    "Aeontrix AI helps businesses boost revenue and reduce workload by automating sales, marketing, and customer support with reliable AI systems.",
  keywords: [
    "AI automation",
    "business process automation",
    "AI agents",
    "chatbots",
    "workflow automation",
    "AI integration",
    "n8n vs Zapier",
    "AI transformation",
    "lead generation",
    "customer support automation",
  ],
  authors: [{ name: "Aeontrix" }],
  openGraph: {
    type: "website",
    url: "https://aeontrix.com/",
    title: "Aeontrix | AI Transformation Partner",
    description:
      "Aeontrix AI helps businesses automate sales, marketing, and customer support with reliable AI systems.",
    images: [
      {
        url: "/aeontrix-emblem.png",
        width: 1200,
        height: 630,
        alt: "Aeontrix Logo",
      },
    ],
    siteName: "Aeontrix",
  },
  twitter: {
    card: "summary_large_image",
    site: "@aeontrix",
    creator: "@aeontrix",
    images: ["/aeontrix-emblem.png"],
    title: "Aeontrix | AI Transformation Partner",
    description:
      "Aeontrix AI helps businesses automate sales, marketing, and support with reliable AI systems.",
  },
  icons: {
    icon: "/aeontrix-logo.png",
    apple: "/aeontrix-logo.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`relative ${interTight.variable} antialiased bg-[--color-bg] text-[--color-fg]`}
      >
        {/* <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="w-full h-full">
            <Ribbons
              colors={["#ff0000"]}
              baseThickness={80}
              speedMultiplier={1}
              maxAge={Infinity}
              enableFade={false}
              enableShaderEffect={false}
              backgroundColor={[0, 0, 0, 0]}
            />
          </div>
        </div> */}
        {/* GLOBAL BACKGROUND */}
        {/* <div className="fixed inset-0 z-10 ">
          <Ribbons
            baseThickness={30}
            colors={["#5227FF"]}
            speedMultiplier={0.5}
            maxAge={500}
            enableFade={false}
            enableShaderEffect={false}
            backgroundColor={[0, 0, 0, 0]}
          />
        </div> */}

        <Navbar />
        <ClientEffects />
        {children}
      </body>
    </html>
  );
}
