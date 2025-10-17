// Brand Information
export const BRAND_NAME = 'Haus of Charm';
export const BRAND_TAGLINE = 'Timeless Elegance for Your Home';
export const BRAND_DESCRIPTION =
  'Indulge in our exquisite collection of home décor and kitchenware, meticulously crafted to elevate your living spaces with style and functionality.';

// Brand Story
export const BRAND_STORY = {
  title: 'Elevating Everyday Elegance',
  paragraphs: [
    'At Haus of Charm, we believe that everyday moments deserve a touch of luxury. Your home is more than just a space—it\'s a reflection of your style, warmth, and the experiences you create within it. From a morning cup of coffee to hosting cherished gatherings, the little details shape the beauty of daily life.',
    'Our journey began with a simple vision: to craft home and kitchen essentials that blend timeless elegance with modern functionality. Every product in our collection is thoughtfully designed to bring sophistication, durability, and effortless charm into your home. We meticulously source premium materials, ensuring that each piece not only enhances your space but also stands the test of time.',
    'With Haus of Charm, we invite you to transform the ordinary into the extraordinary. Because luxury isn\'t about extravagance—it\'s about the feeling of comfort, beauty, and joy in the details of everyday living.',
    'Welcome to a home where elegance is effortless. Welcome to Haus of Charm.',
  ],
};

// Brand Values
export const BRAND_VALUES = [
  {
    title: 'Timeless Elegance',
    description: 'We create designs that transcend trends, bringing lasting beauty to your home.',
  },
  {
    title: 'Premium Quality',
    description: 'Every product is crafted from the finest materials, built to last generations.',
  },
  {
    title: 'Thoughtful Design',
    description: 'We consider every detail to enhance both functionality and aesthetics.',
  },
  {
    title: 'Effortless Luxury',
    description: 'Luxury is accessible—it\'s about beauty and comfort in everyday moments.',
  },
];

// Contact Information
export const CONTACT_EMAIL = 'hello@hausofcharm.com';
export const CONTACT_PHONE = '';
export const CONTACT_ADDRESS = '312 W 2nd Street, Casper, WY 82601';
export const CONTACT_CITY_STATE = 'Casper, WY';

// Product Information
export const PRIMARY_PRODUCT = {
  name: '100% Acacia Wood Tray',
  tagline: 'Premium Handcrafted Serving Tray',
  description: 'Beautifully crafted from 100% solid acacia wood with natural grain variations and a smooth finish.',
  features: [
    'Made from premium 100% acacia wood',
    'Naturally durable and long-lasting',
    'Perfect for serving, storage, or display',
    'Beautiful wood grain patterns',
    'Food-safe and easy to clean',
    'Versatile design complements any décor',
  ],
};

// Product Gallery Images - High quality listing/A+ Content images
export const PRODUCT_GALLERY_IMAGES = [
  // Only the first image is currently used on the homepage
  'rapid retailers A+-01.png',
];

// Hero Image
export const HERO_IMAGE = 'Rapid Retailers Listing Images-01.png';

// About Page Product Image
export const ABOUT_PRODUCT_IMAGE = 'rapid retailers A+-01.png';

// Social Media
export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/haus.of.charm/',
};

// Google Form Embed Code for Warranty Registration
export const WARRANTY_FORM_EMBED = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdJW9r2SSPgrP3gtxAF1kzF6gmMw5YZkPRv-yhlz-QamQa6aw/viewform?embedded=true" width="100%" height="1200" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`;

// Navigation Links
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Warranty', href: '/warranty' },
];

// Base path aware asset helper for GitHub Pages project sites.
// Reads NEXT_PUBLIC_BASE_PATH at runtime (injected by workflow) or falls back to ''.
export const asset = (path: string): string => {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // Normalize and URL-encode each non-empty segment to support spaces and '+' in filenames
  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;
  const encoded = withLeadingSlash
    .split('/')
    .map((segment, index) => {
      if (segment === '' && index === 0) return ''; // preserve leading slash
      return encodeURIComponent(segment);
    })
    .join('/');
  return `${base}${encoded}`;
};
