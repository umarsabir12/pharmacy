// ============================================================
// SITE CONFIG — edit everything here to re-brand the site.
// No other file should need business-specific edits.
// ============================================================

export const SITE = {
  // [PHARMACY NAME]
  name: "Noura Global Medical Pharmacy",
  // Arabic rendering of the name — shown alongside the English name in the logo/header
  nameArabic: "صيدلية نورا العالمية الطبية",
  // Short initials/text mark used in the logo badge
  shortName: "NG",
  tagline: "Your trusted global pharmacy",

  // [PHONE] — displayed, tel: link uses this too
  phone: "+966 56 297 6054",
  phoneHref: "+966562976054",

  // [WHATSAPP NUMBER] — digits only, no + or spaces, for wa.me links
  whatsappNumber: "966562976054",
  whatsappMessage: "Hello! I'd like to ask about a product/service.",

  // [ADDRESS]
  address: "Sheikh Zayed Road, Business Bay, Dubai, UAE",

  email: "info@nouraglobalpharmacy.com",

  // [EMERGENCY / URGENT ORDERS LINE] — shown in the emergency contact banner
  emergencyPhone: "+971 800 6872",
  emergencyPhoneHref: "+9718006872",

  // Placeholder — replace with the real "Write a review" link for your Google Business Profile
  googleReviewsUrl: "#",

  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 10:00 PM" },
    { day: "Saturday", time: "9:00 AM – 10:00 PM" },
    { day: "Sunday", time: "10:00 AM – 8:00 PM" },
  ],

  // Placeholder social links — replace with real profiles
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
};

// Auto-built from the address above (no API key needed). For a pinpoint-accurate
// map, replace with a real "Share > Embed a map" URL from Google Maps instead.
SITE.mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`;

export function whatsappLink(message = SITE.whatsappMessage) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
