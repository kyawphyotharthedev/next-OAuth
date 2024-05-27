import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next OAuth Login",
  description: "Login form with google and github OAuth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" container mx-auto px-4 max-w-5xl">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
