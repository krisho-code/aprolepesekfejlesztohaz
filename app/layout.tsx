import type { Metadata } from "next";
import "./global.css";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

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
