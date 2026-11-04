import type { Metadata } from "next";
import "./globals.css";

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

// 👈 အောက်ပါ default export function ပျောက်နေ၍ Error တက်နေခြင်း ဖြစ်ပါသည်
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-amber-100">{children}</body>
    </html>
  );
}