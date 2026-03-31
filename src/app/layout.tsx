import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AxR Tech | Freelance Full-Stack Developer",
  description: "I build high-converting websites for modern brands. Full-stack developer specializing in scalable, high-performance web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-gray-200`}>
        {children}
      </body>
    </html>
  );
}
