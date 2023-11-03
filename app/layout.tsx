import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import NavBar from "./Homepage/components/navbar";
import "../firebase-config";
const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Porfolio",
  description: "my work presented",
};



export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
      <NavBar />
      {children}
      </body>
    </html>
  );
}
