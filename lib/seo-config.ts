import fs from "fs";
import path from "path";
import type { Metadata } from "next";

export interface SeoConfig {
  siteTitle: string;
  siteDescription: string;
  seoKeywords: string[];
  canonicalUrl: string;
  ogImageUrl: string;
  googleSiteVerification: string;
  bingSiteVerification: string;
  businessName: string;
  businessPhone: string;
  businessEmail: string;
  businessAddress: string;
  businessLatitude: number;
  businessLongitude: number;
}

const DEFAULT_SEO_CONFIG: SeoConfig = {
  siteTitle: "BLUE Interiors | Luxury Interior Designers in Bangalore",
  siteDescription: "Trusted interior designers in Bangalore since 2011. Modern modular kitchens, luxury master bedrooms, living rooms, wardrobes, and complete 100% turnkey home interiors with 10-year warranty.",
  seoKeywords: [
    "interior designers in bangalore",
    "luxury interior designers",
    "modular kitchen bangalore",
    "blue interiors bangalore",
    "home interior design",
    "turnkey interior design",
    "best interior designers bangalore",
    "interior design cost bangalore",
    "modular wardrobe bangalore"
  ],
  canonicalUrl: "https://blueinteriors.in",
  ogImageUrl: "/images/hero-living-room.jpg",
  googleSiteVerification: "",
  bingSiteVerification: "",
  businessName: "BLUE Interiors",
  businessPhone: "+91 8123387210",
  businessEmail: "career.blueinteriors@gmail.com",
  businessAddress: "2nd floor, Sai Krishna Arcade, 24th Main Rd, BDA Layout, HSR Layout, Bengaluru, Karnataka 560102",
  businessLatitude: 12.9121,
  businessLongitude: 77.6446,
};

export function getSeoConfig(): SeoConfig {
  try {
    const filePath = path.join(process.cwd(), "seo-config.txt");
    if (!fs.existsSync(filePath)) {
      return DEFAULT_SEO_CONFIG;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const lines = fileContent.split("\n");

    const parsedData: Partial<SeoConfig> = {};

    for (const line of lines) {
      const trimmed = line.trim();
      // Ignore comments and empty lines
      if (!trimmed || trimmed.startsWith("#")) continue;

      const [key, ...valueParts] = trimmed.split("=");
      if (!key || valueParts.length === 0) continue;

      const rawKey = key.trim();
      const val = valueParts.join("=").trim();

      switch (rawKey) {
        case "SITE_TITLE":
          if (val) parsedData.siteTitle = val;
          break;
        case "SITE_DESCRIPTION":
          if (val) parsedData.siteDescription = val;
          break;
        case "SEO_KEYWORDS":
          if (val) {
            parsedData.seoKeywords = val.split(",").map((k) => k.trim()).filter(Boolean);
          }
          break;
        case "CANONICAL_URL":
          if (val) parsedData.canonicalUrl = val;
          break;
        case "OG_IMAGE_URL":
          if (val) parsedData.ogImageUrl = val;
          break;
        case "GOOGLE_SITE_VERIFICATION":
          if (val) parsedData.googleSiteVerification = val;
          break;
        case "BING_SITE_VERIFICATION":
          if (val) parsedData.bingSiteVerification = val;
          break;
        case "BUSINESS_NAME":
          if (val) parsedData.businessName = val;
          break;
        case "BUSINESS_PHONE":
          if (val) parsedData.businessPhone = val;
          break;
        case "BUSINESS_EMAIL":
          if (val) parsedData.businessEmail = val;
          break;
        case "BUSINESS_ADDRESS":
          if (val) parsedData.businessAddress = val;
          break;
        case "BUSINESS_LATITUDE":
          if (val) parsedData.businessLatitude = parseFloat(val) || DEFAULT_SEO_CONFIG.businessLatitude;
          break;
        case "BUSINESS_LONGITUDE":
          if (val) parsedData.businessLongitude = parseFloat(val) || DEFAULT_SEO_CONFIG.businessLongitude;
          break;
      }
    }

    return {
      ...DEFAULT_SEO_CONFIG,
      ...parsedData,
    };
  } catch (error) {
    console.error("Error reading seo-config.txt:", error);
    return DEFAULT_SEO_CONFIG;
  }
}

export function generateSeoMetadata(): Metadata {
  const seo = getSeoConfig();

  const verification: Record<string, string> = {};
  if (seo.googleSiteVerification) {
    verification.google = seo.googleSiteVerification;
  }
  if (seo.bingSiteVerification) {
    verification.other = {
      "msvalidate.01": seo.bingSiteVerification,
    };
  }

  return {
    title: {
      default: seo.siteTitle,
      template: `%s | ${seo.businessName}`,
    },
    description: seo.siteDescription,
    keywords: seo.seoKeywords,
    authors: [{ name: seo.businessName, url: seo.canonicalUrl }],
    creator: seo.businessName,
    publisher: seo.businessName,
    metadataBase: new URL(seo.canonicalUrl),
    alternates: {
      canonical: seo.canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: seo.canonicalUrl,
      title: seo.siteTitle,
      description: seo.siteDescription,
      siteName: seo.businessName,
      images: [
        {
          url: seo.ogImageUrl,
          width: 1200,
          height: 630,
          alt: seo.siteTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.siteTitle,
      description: seo.siteDescription,
      images: [seo.ogImageUrl],
    },
    verification: Object.keys(verification).length > 0 ? verification : undefined,
  };
}

export function generateJsonLdSchema() {
  const seo = getSeoConfig();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${seo.canonicalUrl}/#organization`,
        name: seo.businessName,
        url: seo.canonicalUrl,
        logo: `${seo.canonicalUrl}/icon.svg`,
        image: `${seo.canonicalUrl}${seo.ogImageUrl}`,
        description: seo.siteDescription,
        telephone: seo.businessPhone,
        email: seo.businessEmail,
        address: {
          "@type": "PostalAddress",
          streetAddress: "2nd floor, Sai Krishna Arcade, 24th Main Rd, BDA Layout, HSR Layout",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560102",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: seo.businessLatitude,
          longitude: seo.businessLongitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "10:00",
            closes: "19:30",
          },
        ],
        priceRange: "₹₹₹",
        sameAs: [
          "https://www.facebook.com/Interiorsblue",
          "https://www.instagram.com/blue_interiors/",
          "https://www.youtube.com/@blueinteriors7459",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${seo.canonicalUrl}/#website`,
        url: seo.canonicalUrl,
        name: seo.businessName,
        description: seo.siteDescription,
        publisher: {
          "@id": `${seo.canonicalUrl}/#organization`,
        },
      },
    ],
  };
}
