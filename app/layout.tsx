import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import valentin from "../public/images/valentin-shindarov.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Valentin Shindarov",
  description: "Personal portfolio showcasing my skills",
  openGraph: {
    title: "Valentin Shindarov",
    description: "Personal portfolio showcasing my skills",
    images: [
      {
        url: "/images/valentin-shindarov.png",
        width: 800,
        height: 600,
        alt: "Valentin Shindarov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentin Shindarov",
    description: "Personal portfolio showcasing my skills",
    images: [
      {
        url: "/images/valentin-shindarov.png",
        alt: "Valentin Shindarov",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
