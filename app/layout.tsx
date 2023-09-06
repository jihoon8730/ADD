import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "ADD",
  description: "어디든",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
