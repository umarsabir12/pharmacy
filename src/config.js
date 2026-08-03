// ============================================================
// SITE CONFIG — edit everything here to re-brand the site.
// No other file should need business-specific edits.
// ============================================================

export const SITE = {
  // [PHARMACY NAME]
  name: "Buta Aptek",
  // Short initials/text mark used in the logo badge
  shortName: "BA",
  tagline: "Sizin etibarlı aptekiniz",

  // [PHONE] — displayed, tel: link uses this too
  phone: "+994 12 566 74 39",
  phoneHref: "+994125667439",

  // [WHATSAPP NUMBER] — digits only, no + or spaces, for wa.me links
  whatsappNumber: "994552157439",
  whatsappMessage: "Salam! Məhsul/xidmət haqqında soruşmaq istəyirəm.",

  // [ADDRESS]
  address: "Bakı ş., N.Nərimanov r., Montin q., Neymatulla küç. 26",

  email: "info@butaaptek.az",

  // [EMERGENCY / URGENT ORDERS LINE] — shown in the emergency contact banner
  emergencyPhone: "*0366",
  emergencyPhoneHref: "*0366",

  // Placeholder — replace with the real "Write a review" link for your Google Business Profile
  googleReviewsUrl: "#",

  hours: [
    { day: "Bazar ertəsi – Cümə", time: "08:00 – 21:00" },
    { day: "Şənbə", time: "09:00 – 20:00" },
    { day: "Bazar", time: "10:00 – 18:00" },
  ],

  // Placeholder social links — replace with real profiles
  social: {
    facebook: "https://facebook.com/butaaptek0366",
    instagram: "https://instagram.com/butaaptek_",
    twitter: "#",
  },

};

// Auto-built from the address above (no API key needed). For a pinpoint-accurate
// map, replace with a real "Share > Embed a map" URL from Google Maps instead.
SITE.mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`;

export function whatsappLink(message = SITE.whatsappMessage) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
