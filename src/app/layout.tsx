import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AxR Tech | Building Digital Experiences",
  description: "Modern web solutions. Powerful ideas. AxR Tech builds polished digital experiences for modern brands.",
  keywords: ["Freelance Web Developer", "Next.js Expert", "Full Stack Developer India", "UI/UX Designer", "AxR Tech"],
  openGraph: {
    title: "AxR Tech | Building Digital Experiences",
    description: "Modern Web Solutions. Powerful Ideas.",
    url: "https://axrtech.vercel.app",
    siteName: "AxR Tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AxR Tech | Premium Web Solutions",
    description: "Freelance web developer specialized in React and Next.js.",
  },
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
