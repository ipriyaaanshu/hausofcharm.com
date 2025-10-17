# Haus of Charm - Website

A modern, self-managed website for Haus of Charm, a premium home décor and kitchenware brand, featuring product showcase and warranty registration.

## 🎯 Project Goals

- Beautiful, professional brand landing page
- Brand story and company mission showcase
- Easy warranty registration system for customers
- GitHub-hosted and self-managed (no backend server needed)
- Mobile-responsive and fast-loading

## 📋 Quick Start

### Prerequisites
- Node.js 18+ or UV with Node support
- Git
- GitHub account

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/hausofcharm.git
cd hausofcharm

# Install dependencies
npm install
# or with UV:
uv run npm install
```

### Development

```bash
# Start development server
npm run dev
# or
uv run npm run dev

# Navigate to http://localhost:3000
```

### Build for Production

```bash
# Create optimized build
npm run build
npm start
# or
uv run npm run build
```

## 📁 Project Structure

```
hausofcharm/
├── PROJECT_PLAN.md          # Detailed project plan
├── README.md                # This file
├── package.json             # Node.js dependencies
├── public/
│   └── images/
│       ├── logo/            # Brand logo variants
│       ├── product/         # Product photography
│       └── lifestyle/       # Lifestyle images
└── src/
    ├── pages/               # Next.js pages
    ├── components/          # Reusable React components
    ├── styles/              # Global styles
    └── utils/               # Utility functions
```

## 🎨 Pages

### Home Page (`/`)
Landing page with:
- Hero section with product imagery
- Brand introduction
- Product showcase of Acacia Wood Tray
- Call-to-action to warranty registration
- Contact information

### About / Brand Story (`/about`)
Details page featuring:
- Brand origin and mission
- Craftsmanship philosophy
- Product quality commitment
- Company values

### Warranty Registration (`/warranty`)
Customer service page with:
- Embedded Google Form for warranty registration
- Instructions and FAQs
- Warranty coverage information
- Support contact details

## 🔧 Technology Stack

- **Framework:** Next.js 14+ with React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** GitHub Pages / Vercel (free tier)
- **Forms:** Google Forms (embedded)
- **Package Management:** npm or UV

## 📝 Content Management

All content is managed through:

1. **Brand Content:** Located in component files under `src/components/`
2. **Product Information:** Updated in product showcase components
3. **Warranty Form:** Managed through Google Forms dashboard
4. **Images:** Organized in `public/images/` directories

### To Update Content

1. Navigate to the relevant component file
2. Edit text, images, or styling
3. Save changes
4. Build and deploy

## 🌐 Deployment

### GitHub Pages

```bash
# Build static site
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Vercel (Recommended - Easier)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-deploys on every push
4. Point domain to Vercel URL

## 📱 Responsive Design

The site is fully responsive:
- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)

## ♿ Accessibility

Built with accessibility in mind:
- WCAG 2.1 AA compliance
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support

## 🖼️ Assets

### Logo Files
- Multiple formats: PNG, JPG, SVG
- Full logo and icon-only variants
- Color and grayscale versions
- Print-ready formats available

**Location:** `public/images/logo/`

### Product Photography
- 8 high-resolution product images
- 6 e-commerce listing images
- 3 lifestyle photography images

**Location:** `public/images/product/` and `public/images/lifestyle/`

## 📋 Google Form Setup

The warranty registration form is embedded as an iframe on `/warranty`.

**Form Fields:**
- Full Name (required)
- Email Address (required)
- Product Name (pre-filled)
- Order Number (required)
- Order Date (required)
- Purchase Location (optional)
- Phone Number (optional)
- Additional Notes (optional)

**Form Link:** [Set up your Google Form and paste the embedded link here]

## 🔒 SEO & Best Practices

- ✅ Meta tags optimized for search
- ✅ Open Graph tags for social sharing
- ✅ Mobile-friendly design
- ✅ Fast page load times
- ✅ Clean URL structure
- ✅ Sitemap and robots.txt included

## 📊 Analytics (Optional)

To add analytics:

1. Set up Google Analytics or similar
2. Add tracking code to `_document.tsx`
3. Monitor visitor behavior and warranty registrations

## 🔄 Maintenance

### Regular Tasks
- Monitor warranty form submissions
- Update product information as needed
- Check for broken links
- Review analytics monthly

### Version Control
- Commit changes regularly
- Use meaningful commit messages
- Create branches for major changes
- Keep main branch production-ready

## 🐛 Troubleshooting

### Development Issues

**Port already in use:**
```bash
# Use different port
npm run dev -- -p 3001
```

**Build errors:**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Deployment Issues

Check deployment logs on GitHub Pages or Vercel dashboard.

## 🚀 Future Enhancements

Potential features for future iterations:
- Newsletter signup
- Blog for care tips
- Customer testimonials section
- Product reviews
- Multiple product pages
- E-commerce integration
- Multilingual support

## 📞 Support

For questions or issues:
- Email: hello@hausofcharm.com
- Address: 312 W 2nd Street, Casper, WY 82601

## 📄 License

This project is the property of Haus of Charm.

## 👨‍💻 Contributing

This is a brand website. For changes or updates:
1. Create a new branch
2. Make your changes
3. Submit for review
4. Deploy to production

---

**Last Updated:** October 2025  
**Maintained By:** Haus of Charm Team
