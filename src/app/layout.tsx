import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Autoservis Bokoch — Brandýs nad Labem-Stará Boleslav",
  description:
    "Opravy a lakování vozidel do 3,5 t, použité náhradní díly, přezutí pneumatik a výkup havarovaných aut v Brandýse nad Labem.",
  keywords:
    "autoservis, Brandýs nad Labem, opravy aut, lakování, náhradní díly, pneumatiky",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Autoservis Bokoch",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mariánské nám. 4/3",
    addressLocality: "Brandýs nad Labem-Stará Boleslav",
    postalCode: "250 01",
    addressCountry: "CZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.19557127142594,
    longitude: 14.671716813110528,
  },
  telephone: "+420608259151",
  url: "https://autoservis-bokoch.cz",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={inter.className}>
      <head>
        <meta name="google-site-verification" content="1k4Jugz4ijqqP34w1xSwu6UYy_0cN65rJyLw9HIlkBo" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Consent Mode v2 defaults — must run before gtag loads */}
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', { analytics_storage: 'denied' });
        `}} />
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <CookieBanner />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XFXB7LKB9N" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XFXB7LKB9N');
        `}</Script>
      </body>
    </html>
  );
}
