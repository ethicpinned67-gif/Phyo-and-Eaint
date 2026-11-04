import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://phyo-and-eaint.vercel.app"),
  title: "Phyo & Eaint - Wedding Invitation",
  description: "We invite you to celebrate our wedding with us!",
  openGraph: {
    title: "Phyo & Eaint - Wedding Invitation",
    description: "We invite you to celebrate our wedding with us!",
    url: "https://phyo-and-eaint.vercel.app",
    siteName: "Phyo & Eaint Wedding",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wedding Invitation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phyo & Eaint - Wedding Invitation",
    description: "We invite you to celebrate our wedding with us!",
    images: ["/og-image.jpg"],
  },
};