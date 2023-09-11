"use client";

import Footer from "./components/Footer";
import TopNavigation from "./components/TopNavigation";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container">
        <style jsx>{`
          .container {
            margin: 0 auto;
            width: 24vw;
            min-width: 428px;
            background-color: #eeeeee;
          }
        `}</style>
        <TopNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
