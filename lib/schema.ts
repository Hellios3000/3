export const generateServiceSchema = (name: string, description: string, price: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": name,
  "description": description,
  "provider": {
    "@type": "WebAgency",
    "name": "BeautyWeb Studio"
  },
  "offers": {
    "@type": "Offer",
    "price": price,
    "priceCurrency": "UAH"
  }
});

export const generateFAQSchema = (faqs: { q: string, a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
});