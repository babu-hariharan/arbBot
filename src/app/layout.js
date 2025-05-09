import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from "@/provider/GlobalProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ArB BOT",
  description: "Automated process for identifying and executing flash loan arbitrage opportunities and dex’s using LP’s",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
