// layout.tsx

import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import valentin from "../public/images/valentin-shindarov.png";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Valentin Shindarov</title>
        <meta
          name="description"
          content="Personal portfolio showcasing my skills"
        />
      </Head>
      <body className={inter.className}>
        {/* Image container */}
        <div className="image-container">
          <Image
            src={valentin}
            alt="Valentin Shindarov"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* Render the children passed to the layout */}
        {children}
      </body>
    </html>
  );
};

export default Layout;
