import type { Metadata } from "next";
import "../styles/globals.css";
import { seo } from "../lib/seo";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: seo.canonical
  },
  openGraph: {
    title: seo.openGraph.title,
    description: seo.openGraph.description,
    url: seo.openGraph.url,
    images: seo.openGraph.images
  },
  twitter: {
    card: seo.twitter.card as "summary_large_image" | "summary",
    site: seo.twitter.site
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-midnight text-white">
        {children}
      </body>
    </html>
  );
}
