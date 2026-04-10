import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sangamam 2025-2026 | Parent Feedback Form",
  description: "Share your thoughts on the Sangamam Annual Day event.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
