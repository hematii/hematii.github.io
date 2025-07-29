import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "hemati",
  description: "made by hemati for hemati",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed top-0 z-1 w-full bg-zinc-900 font-mono text-3xl flex flex-row justify-center py-2 gap-10">
          <p>piss</p>
          <p>yippee</p>
        </div>
        {children}
      </body>
    </html>
  );
}
