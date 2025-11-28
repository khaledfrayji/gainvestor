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
     other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "og:url": "https://gainvestor.com.au/", //main url
    "og:image": "/opengraph-image.jpg", //when u share the link on apps the img would be displayed
    "og:type": "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WRZVMV24');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${merriweather.variable} font-sans antialiased bg-[#0A2342] text-white`}
      >
         {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WRZVMV24"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        {children}
        <BookingButton/>
   
      </body>
    </html>
  );
}