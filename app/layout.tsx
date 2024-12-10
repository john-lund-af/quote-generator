import type { Metadata } from "next";
import "./globals.css";
import FontAwesomeConfig from "./fontawesome";
import QuoteContextProvider from '../context/QuoteContextProvider';
import Header from "@/components/Header";

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
        className="antialiased h-screen md:container md:mx-auto text-white bg-gradient-to-br from-blue-900 to-blue-400"
      >
        <Header></Header>
        <QuoteContextProvider><div className="h-screen pt-28">{children}</div></QuoteContextProvider>
      </body>
    </html>
  );
}
