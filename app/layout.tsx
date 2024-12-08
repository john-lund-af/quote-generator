import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quote Generator",
  description: "Shows quotes fetched from dummyjson.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased h-screen bg-gradient-to-br from-blue-900 to-blue-400"
      >
        {children}
      </body>
    </html>
  );
}
