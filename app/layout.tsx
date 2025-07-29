import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hemati",
  description: "Made by hemati for hemati",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="hidden lg:fixed lg:top-0 z-1 h-16 w-full bg-zinc-950 font-mono text-2xl lg:flex items-center justify-end px-4">
          <a
            href="/"
            className="h-full aspect-square flex items-center absolute left-4 top-1/2 -translate-y-1/2"
          >
            <Image
              src="/bigjimage.png"
              alt="incredible self portrait"
              width={1600}
              height={1600}
              className="h-full"
            />
          </a>
          <div className="flex items-center justify-end w-full gap-2">
            <a
              href="/music"
              className="w-1/8 text-center border-b-4 border-transparent py-2 hover:border-[#ffa74a] transition-colors duration-150 ease-out"
            >
              my music
            </a>
            <a
              href="/projects"
              className="w-1/8 text-center border-b-4 border-transparent py-2 hover:border-[#ffa74a] transition-colors duration-150 ease-out"
            >
              projects
            </a>
          </div>
          {/* <nav>
            <Link href="/" className="mx-10 w-1/6">
              yippee
            </Link>
            <Link href="/music" className="mx-10 w-1/6">
              my music
            </Link>
          </nav> */}
        </div>
        {children}
      </body>
    </html>
  );
}
