// app/layout.jsx
import { Inter,Merriweather} from "next/font/google";
import "./globals.css";
import BookingButton from "../components/Bookingbutton"

// Import fonts from Google
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// SEO Metadata
export const metadata = {
  title: "Gainvestor — Smart Property Investments",
  description:
    "Gainvestor helps you build wealth through premium real estate investments with expert guidance and trusted strategies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} font-sans antialiased bg-[#0A2342] text-white`}
      >
        
        {children}
        <BookingButton/>
   
      </body>
    </html>
  );
}