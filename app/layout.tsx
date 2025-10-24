import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Import fonts from Google
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Gainvestor — Smart Property Investments",
  description:
    "Gainvestor helps you build wealth through premium real estate investments with expert guidance and trusted strategies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#0A2342] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
