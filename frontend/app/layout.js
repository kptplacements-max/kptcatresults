import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KPT-CAT 2026 Results | Karnataka Govt. Polytechnic Mangaluru",

  description:
    "Official KPT-CAT 2026 CET Result Portal of Karnataka (Govt.) Polytechnic, Mangaluru.",

  keywords: [
    "KPT-CAT",
    "CET Results",
    "Karnataka Polytechnic",
    "KPT Mangaluru",
    "Diploma CET",
    "Polytechnic Admission",
  ],

  authors: [
    {
      name: "Karnataka Govt. Polytechnic Mangaluru",
    },
  ],

  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
