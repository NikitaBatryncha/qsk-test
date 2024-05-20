"use client"

import ReactLenis from "@studio-freight/react-lenis"
import React from "react";

export default function Layout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root options={{
      orientation: "vertical",
      gestureOrientation: "vertical",
      duration: 3
      }}>
      {children}
    </ReactLenis>
  )
}
