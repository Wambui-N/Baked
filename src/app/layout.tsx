import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/Components";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baked",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className}`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
