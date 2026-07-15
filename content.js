/**
 * ============================================================
 *  JACKSON EAN HOLMES — SITE CONTENT
 * ============================================================
 * This is the ONLY file you need to edit to update the site.
 * Change any text, image URL, or list item below and save —
 * the page reads from this file automatically.
 *
 * Images: paste any image URL, or drop files into /assets and
 * reference them as "assets/your-file.jpg".
 *
 * Do not delete the `window.SITE_CONTENT = { ... };` wrapper —
 * everything must live inside it.
 * ============================================================
 */

window.SITE_CONTENT = {

  site: {
    title: "Jackson Ean Holmes — Freelance Photographer",
    description: "Freelance photography by Jackson Ean Holmes — portraits, events, and editorial work.",
  },

  nav: [
    { label: "Work", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Words", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Freelance Photographer",
    name: "Jackson Ean Holmes",
    tagline: "Capturing life's moments, one frame at a time.",
    image: "https://www.jacksoneanholmes.com/wp-content/uploads/2026/02/BannerFace-1024x683.jpg",
    imageAlt: "Jackson Ean Holmes portrait",
    cta: { label: "View the work", href: "#gallery" },
  },

  about: {
    heading: "Behind the lens",
    body: [
      "I'm Jackson — a freelance photographer working across portraits, events, and editorial stories. I'm drawn to unscripted moments: the half-second before a smile, the quiet in between the posed shots.",
      "Every project starts with a conversation, not a checklist. I want to understand what a photo needs to do for you before I ever pick up a camera.",
    ],
    image: "https://www.jacksoneanholmes.com/wp-content/uploads/2026/02/ad4a7a9e98786fd01a32e2bb82ad02c6c0f18f7a.jpg",
    imageAlt: "Jackson Ean Holmes at work",
    highlights: [
      { label: "Based in", detail: "Available for travel" },
      { label: "Focus", detail: "Portraits · Events · Editorial" },
      { label: "Turnaround", detail: "2–3 weeks, full gallery" },
    ],
  },

  gallery: [
    {
      src: "https://www.jacksoneanholmes.com/wp-content/uploads/2026/02/MG_5878-1024x683.jpg",
      alt: "Portrait photograph",
      caption: "Golden hour, downtown rooftop",
      exif: { lens: "85mm", aperture: "f/1.8", shutter: "1/500s", iso: "ISO 200" },
    },
    {
      src: "https://www.jacksoneanholmes.com/wp-content/uploads/2026/02/IMG_5861-1024x683.jpg",
      alt: "Candid photograph",
      caption: "Between takes",
      exif: { lens: "50mm", aperture: "f/2.0", shutter: "1/250s", iso: "ISO 400" },
    },
    {
      src: "https://www.jacksoneanholmes.com/wp-content/uploads/2026/02/MG_5897-1024x683.jpg",
      alt: "Event photograph",
      caption: "First look, spring wedding",
      exif: { lens: "35mm", aperture: "f/2.8", shutter: "1/320s", iso: "ISO 320" },
    },
    {
      src: "https://www.jacksoneanholmes.com/wp-content/uploads/2026/02/MG_5912-1024x683.jpg",
      alt: "Editorial photograph",
      caption: "Studio series, no. 3",
      exif: { lens: "100mm macro", aperture: "f/4.0", shutter: "1/200s", iso: "ISO 100" },
    },
    {
      src: "https://www.jacksoneanholmes.com/wp-content/uploads/2026/02/MG_5914-1024x683.jpg",
      alt: "Portrait photograph",
      caption: "Late afternoon light",
      exif: { lens: "85mm", aperture: "f/1.8", shutter: "1/640s", iso: "ISO 200" },
    },
    {
      src: "https://www.jacksoneanholmes.com/wp-content/uploads/2026/02/MG_5924-1024x683.jpg",
      alt: "Event photograph",
      caption: "Reception, last dance",
      exif: { lens: "35mm", aperture: "f/2.2", shutter: "1/160s", iso: "ISO 800" },
    },
  ],

  testimonials: [
    {
      quote: "Jackson's ability to capture emotion and detail truly brought our story to life.",
      name: "Emma Clarke",
      role: "Marketing Director",
      image: "https://www.jacksoneanholmes.com/wp-content/uploads/2026/02/c972b533584bb5f528690a71c4e98cb9d6ac3c0c.jpg",
    },
    {
      quote: "Professional, creative, and attentive — Jackson delivered images beyond our highest expectations.",
      name: "Liam Foster",
      role: "Art Director",
      image: "https://www.jacksoneanholmes.com/wp-content/uploads/2026/02/afdab9369b3f7f0d7d33df0b3b3b5904f03ce6dc.jpg",
    },
    {
      quote: "The entire process was seamless, and the final photographs perfectly reflected our vision.",
      name: "Sophia Ramirez",
      role: "Event Coordinator",
      image: "https://www.jacksoneanholmes.com/wp-content/uploads/2026/02/9e863a71525f4c4b9064e7f990b6010a766cbe26.jpg",
    },
  ],

  contact: {
    heading: "Let's make something",
    body: "Have a project in mind? Tell me about it.",
    email: "hello@jacksoneanholmes.com",
    social: [
      { label: "Instagram", href: "https://www.instagram.com/" },
      { label: "Facebook", href: "https://www.facebook.com/" },
      { label: "X", href: "https://x.com/" },
    ],
  },

  footer: {
    text: "© " + new Date().getFullYear() + " Jackson Ean Holmes. All rights reserved.",
  },

};
