"use client";

import Footer from "./components/Footer";
import TopNavigation from "./components/TopNavigation";
import "./styles/global.css";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModal, setIsModal] = useState(false);

  return (
    <html lang="en">
      <body className="container">
        <style jsx>{`
          .container {
            width: 428px;
            min-width: 428px;
            margin: 0 auto;
            background-color: #eeeeee;
          }
        `}</style>
        <ThemeProvider theme={theme}>
          <TopNavigation isModal={isModal} setIsModal={setIsModal} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
