import type { Metadata } from "next";
import "./globals.css";
import FontAwesomeConfig from "./fontawesome";
import QuoteContextProvider from '../context/QuoteContextProvider';

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
      <head>
        <FontAwesomeConfig />
      </head>
      <body
        className="antialiased h-screen bg-gradient-to-br from-blue-900 to-blue-400"
      >
        <QuoteContextProvider>{children}</QuoteContextProvider>
      </body>
    </html>
  );
}
