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
        <div className="flex  justify-center items-center">
          <div className="w-[1680px]">
            <main className="px-5 mt-[92px] sm:mt-[254px] lg:mt-[242px] xl:mt-[178px]  sm:px-[40px] 3xl:px-[80px] max-w-[1680px]">
              <Navbar />
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
