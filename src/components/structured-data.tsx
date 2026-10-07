import { siteConfig } from "@/lib/site";
import { faqs, serviceGroups } from "@/lib/data";

/**
 * Structured data for a mobile (at-home) barber service. The business has no
 * physical salon, so it is modelled with `areaServed` and a city-level address
 * rather than a street premises. A FAQPage node mirrors the on-page FAQ.
 */
export function StructuredData() {
  const businessId = `${siteConfig.url}/#business`;

  const graph = [
    {
      "@type": "HairSalon",
      "@id": businessId,
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      image: new URL("/opengraph-image", siteConfig.url).href,
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.region,
        addressCountry: siteConfig.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      areaServed: {
        "@type": "City",
        name: `${siteConfig.address.city}, ${siteConfig.address.region}`,
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: `https://wa.me/${siteConfig.whatsapp}`,
        servicePhone: siteConfig.phone,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "08:00",
          closes: "21:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Men's Home Grooming Services",
        itemListElement: serviceGroups.flatMap((group) =>
          group.items.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item.name,
              category: group.title,
            },
            price: item.price.replace(/[^\d]/g, ""),
            priceCurrency: "INR",
          }))
        ),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
