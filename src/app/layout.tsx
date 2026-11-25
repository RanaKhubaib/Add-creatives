import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { AuthProvider } from "@/components/site/auth-provider";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { siteConfig } from "@/data/site-config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.company.website),
  title: "ADD Creatives | Digital Solutions That Drive Growth",
  description:
    "ADD Creatives helps ambitious brands grow with thoughtful digital strategy, creative work, and measurable results.",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteConfig.company.website,
    siteName: siteConfig.company.name,
    title: "ADD Creatives | Digital Solutions That Drive Growth",
    description:
      "Thoughtful digital strategy, creative work, and measurable growth for ambitious brands.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADD Creatives | Digital Solutions That Drive Growth",
    description:
      "Thoughtful digital strategy, creative work, and measurable growth for ambitious brands.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company.name,
    url: siteConfig.company.website,
    email: siteConfig.company.email,
    telephone: siteConfig.company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.company.address,
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-screen antialiased">
        <AuthProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
          <WhatsAppButton />
        </AuthProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationData).replace(/</g, "\\u003c"),
          }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}
