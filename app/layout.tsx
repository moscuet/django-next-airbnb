import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Djanogo Next AirBnb",
  description: "Next JS app powered with django backend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="flex  justify-center items-center"
        >
          <div className="w-[1680px]">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
