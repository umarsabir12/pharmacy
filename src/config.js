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

  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 9:00 PM" },
    { day: "Saturday", time: "9:00 AM – 8:00 PM" },
    { day: "Sunday", time: "10:00 AM – 6:00 PM" },
  ],

  // Placeholder social links — replace with real profiles
  social: {
    facebook: "https://facebook.com/butaaptek0366",
    instagram: "https://instagram.com/butaaptek_",
    twitter: "#",
  },

  // Placeholder map embed — replace src with a real Google Maps embed URL
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509precise!2d-74.0059!3d40.7128",
};

export function whatsappLink(message = SITE.whatsappMessage) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
