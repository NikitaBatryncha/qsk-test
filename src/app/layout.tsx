import type { Metadata } from "next";
import "normalize.css"
import "./globals.scss";
import React from "react";
import SmoothScroll from "./SmoothScroll";

export const metadata: Metadata = {
  title: "QSK - мир как вдохновение",
  description: "Мир как вдохновение",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll >
          {children}
        </SmoothScroll>
        </body>
    </html>
  );
}
