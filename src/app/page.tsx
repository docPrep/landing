import { HeroSection } from "@/components/hero-section";
import { PowerfulFeatures } from "@/components/powerful-features";
import { WhyDocPrep } from "@/components/why-docprep";
import { Footer } from "@/components/footer";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://docprep.com/#organization",
        "name": "DocPrep",
        "alternateName": "Doc Prep NEET PG Preparation",
        "description": "India's premier NEET PG preparation platform with 10,000+ high-yield questions, expert explanations, and comprehensive test series.",
        "url": "https://docprep.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://docprep.com/logo.png",
          "width": 250,
          "height": 60
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-555-123-4567",
          "contactType": "customer service",
          "email": "info@docprep.com",
          "availableLanguage": ["English", "Hindi"]
        },
        "sameAs": [
          "https://twitter.com/docprep",
          "https://linkedin.com/company/docprep",
          "https://instagram.com/docprep"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "3000",
          "bestRating": "5"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://docprep.com/#website",
        "url": "https://docprep.com",
        "name": "DocPrep - NEET PG Preparation Platform",
        "description": "Comprehensive NEET PG preparation platform with 10,000+ questions",
        "publisher": {
          "@id": "https://docprep.com/#organization"
        }
      },
      {
        "@type": "Course",
        "name": "NEET PG Preparation Course",
        "description": "Complete NEET PG preparation with 10,000+ previous year questions, mock tests, and expert explanations",
        "provider": {
          "@id": "https://docprep.com/#organization"
        },
        "educationalLevel": "Postgraduate",
        "about": "Medical Education",
        "hasCourseInstance": [
          {
            "@type": "CourseInstance",
            "courseMode": "online",
            "courseWorkload": "PT30H"
          }
        ]
      },
      {
        "@type": "Product",
        "name": "DocPrep NEET PG Question Bank",
        "description": "10,000+ high-yield NEET PG questions with detailed explanations",
        "brand": {
          "@id": "https://docprep.com/#organization"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "price": "0",
          "priceCurrency": "INR"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "3000",
          "bestRating": "5"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Header */}
  
      <main className="min-h-screen">
      <HeroSection />
      <PowerfulFeatures />
      <WhyDocPrep />
      <Footer  />
    </main>
 
    </div>
  );
}
