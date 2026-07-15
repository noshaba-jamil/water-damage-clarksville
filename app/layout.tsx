 import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmergencyBar from "@/components/EmergencyBar";
import SkipLink from "@/components/SkipLink";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const SITE_URL = "https://water-damage-clarksville.com";
const GA_ID = "G-B2N4YBQFM5"; // replace with your real ID
const SITE_NAME = "Clarksville Water Damage Restoration";
const PHONE_RAW = "+19312712350";

export const metadata: Metadata = {
  title: {
    default: "Water Damage Restoration Clarksville TN | 24/7 Emergency | (931) 271-2350",
    template: `%s`,
  },
  description: "Clarksville TN's #1 water damage restoration. 60-min guaranteed arrival, 24/7/365. Flood cleanup, mold remediation, structural drying & insurance claim help. Free assessment. Call (931) 271-2350.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Water Damage Restoration Clarksville TN | 24/7 Emergency",
    description: "Clarksville TN's #1 water damage restoration. 60-min guaranteed arrival, 24/7/365.",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Clarksville Water Damage Restoration" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Damage Restoration Clarksville TN | 24/7",
    description: "60-min guaranteed arrival, 24/7. Free assessment. Call (931) 271-2350.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  other: { "geo.region": "US-TN", "geo.placename": "Clarksville, Tennessee", "geo.position": "36.5298;-87.3595", "ICBM": "36.5298, -87.3595" },
};

// Single source of truth for the business entity.
// Other pages should reference this via itemReviewed: { "@id": `${SITE_URL}/#localbusiness` }
// instead of redeclaring their own aggregateRating.
const bizSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  url: SITE_URL,
  telephone: PHONE_RAW,
  email: "waterdamageclarksville@gmail.com",
  openingHours: "Mo-Su 00:00-24:00",
  address: {
    "@type": "PostalAddress",
    streetAddress: "215 Legion Street",
    addressLocality: "Clarksville",
    addressRegion: "TN",
    postalCode: "37040",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 36.5298, longitude: -87.3595 },
  areaServed: [
    { "@type": "City", name: "Clarksville" },
    { "@type": "City", name: "Fort Campbell" },
    { "@type": "AdministrativeArea", name: "Montgomery County, Tennessee" },
  ],
  priceRange: "$$",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "47", bestRating: "5" },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE_RAW,
    contactType: "customer service",
    availableLanguage: "English",
    hoursAvailable: "Mo-Su 00:00-24:00",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" dir="ltr" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <script
    async
    src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  />
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `,
    }}
  />
        <meta name="theme-color" content="#09090B" />
        
        
      </head>
      <body style={{ fontFamily: "var(--font-inter)", margin: 0, padding: 0 }}>
        <PageLoaderWrapper />
        <SkipLink />
        <EmergencyBar />
        <Header />
        <main id="main-content" role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}