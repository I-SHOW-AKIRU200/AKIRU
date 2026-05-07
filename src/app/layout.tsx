import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AKIRU — Fullstack Developer",
  description: "AKIRU — A Fullstack Developer crafting modern web experiences.",
  metadataBase: new URL("https://akiru.online"),
  openGraph: {
    title: "AKIRU — Fullstack Developer",
    description: "A Fullstack Developer crafting modern web experiences.",
    url: "https://akiru.online",
    siteName: "AKIRU",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AKIRU — Fullstack Developer",
    description: "A Fullstack Developer crafting modern web experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
