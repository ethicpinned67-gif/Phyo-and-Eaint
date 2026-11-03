import type { Metadata } from "next";
import "./globals.css";
import MusicPlayer from "@/components/MusicPlayer";

export const metadata: Metadata = {
  title: "Phyo & Eaint | A wedding invitation",
  description: "With love, we invite you to celebrate the beginning of our forever.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}
