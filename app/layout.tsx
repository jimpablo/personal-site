import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "jimpablo",
    template: "%s · jimpablo",
  },
  description: "Personal website of jimpablo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col subpixel-antialiased">
        <Navbar />
        <main className="mx-auto w-full max-w-2xl flex-1 px-6 pt-12 pb-24 sm:pt-20 sm:pb-32">
          {children}
        </main>
      </body>
    </html>
  );
}
