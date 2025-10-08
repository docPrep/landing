import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "DocPrep - NEET PG Preparation | 10,000+ High-Yield Questions",
    template: "%s | DocPrep NEET PG"
  },
  description: "Ace NEET PG with India's most comprehensive question bank. 10,000+ high-yield PYQs, expert explanations, mock tests & detailed analytics. Join 50,000+ medical students preparing for NEET PG, INICET, FMGE & NEET SS.",
  keywords: [
    "NEET PG preparation",
    "NEET PG questions",
    "NEET PG mock test",
    "INICET preparation",
    "FMGE preparation",
    "NEET SS",
    "medical entrance exam",
    "PG medical entrance",
    "NEET PG question bank",
    "previous year questions",
    "medical PG exam",
    "postgraduate medical entrance",
    "NEET PG online coaching",
    "medical MCQs"
  ],
  authors: [{ name: "DocPrep Medical Education Team" }],
  creator: "DocPrep",
  publisher: "DocPrep",
  category: "Education",
  applicationName: "DocPrep NEET PG",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://docprep.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://docprep.com",
    title: "DocPrep - NEET PG Preparation | 10,000+ High-Yield Questions",
    description: "Ace NEET PG with India's most comprehensive question bank. 10,000+ high-yield PYQs, expert explanations, mock tests & detailed analytics. Join 50,000+ medical students.",
    siteName: "DocPrep NEET PG",
    images: [
      {
        url: "https://docprep.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DocPrep NEET PG Preparation Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@docprep",
    creator: "@docprep",
    title: "DocPrep - NEET PG Preparation | 10,000+ High-Yield Questions",
    description: "Ace NEET PG with India's most comprehensive question bank. 10,000+ PYQs, expert explanations & mock tests.",
    images: ["https://docprep.com/twitter-image.jpg"]
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-verification-code"
    }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
