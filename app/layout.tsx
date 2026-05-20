import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DayZero",
  description: "Failure is not the end of a founder."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
