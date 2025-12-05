import type { Metadata } from "next";
import "./global.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Apró Lépések Fejlesztőház",
  description:
    "Személyre szabott fejlesztés csecsemőkortól 16 éves korig mozgásfejlesztés, beszédfejlesztés és tanulási nehézségek legyőzésére.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
