import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/fonts.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Państwo Barmaństwo",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
