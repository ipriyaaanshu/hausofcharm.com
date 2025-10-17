# Haus of Charm - Website Project Plan

## Project Overview

**Brand:** Haus of Charm  
**Mission:** A premium home décor and kitchenware brand offering beautifully crafted products  
**First Product:** 100% Acacia Wood Tray  
**Website Goal:** Self-managed, GitHub-hosted landing page with warranty registration  
**Contact:** hello@hausofcharm.com  
**Location:** 312 W 2nd Street, Casper, WY 82601

---

## Website Structure

### Page 1: Landing Page (`/`)
- **Purpose:** Brand showcase and product introduction
- **Key Sections:**
  - Navigation bar with logo and links
  - Hero section with stunning product imagery
  - Brand introduction (brief, compelling)
  - Product showcase (100% Acacia Wood Tray)
  - CTA to warranty registration
  - Footer with contact info and links

### Page 2: Brand Story (`/about` or `/story`)
- **Purpose:** Build connection with customers
- **Key Sections:**
  - Brand origin and inspiration
  - Mission and values
  - Craftsmanship commitment
  - Product philosophy
  - Navigation and footer

### Page 3: Warranty Registration (`/warranty`)
- **Purpose:** Allow customers to register their product warranty
- **Key Sections:**
  - Page heading and brief instructions
  - Embedded Google Form
  - FAQs about warranty coverage
  - Contact info for support

---

## Brand Identity

### Visual Assets Available
✅ **Logo Files:** 11 variants including:
- Full logo (color & grayscale)
- Icon only
- Text only
- Multiple transparency options
- SVG and print formats (EPS, PDF)

✅ **Product Photography:** 8 high-resolution DSL images
✅ **Lifestyle Photography:** 3 styled lifestyle shots
✅ **E-commerce Listing Images:** 6 professional product listing images

### Recommended Design Direction
- **Aesthetic:** Rustic-elegant meets modern minimalism
- **Color Palette:** Warm wood tones, natural neutrals, accent colors from logo
- **Typography:** Clean, readable fonts; mix of serif and sans-serif
- **Mood:** Sophisticated, accessible, premium but approachable
- **Imagery:** Focus on natural materials, craftsmanship, lifestyle use cases

---

## Technology Stack

### Frontend Framework
- **Next.js** with React
- TypeScript for type safety
- Tailwind CSS for styling
- Responsive design (mobile-first)

### Hosting & Deployment
- **GitHub Pages** or **Vercel** (free tier)
- **GitHub** for version control
- Auto-deploy on push to main branch

### Package Management
- **UV** - for Python dependencies (if needed for future backend)
- **npm/pnpm** - for Node.js dependencies

### Third-Party Services
- **Google Forms** - Warranty registration (free, no backend needed)
- **Google Sheets** - Auto-collects form responses

---

## Google Form for Warranty Registration

### Form Fields
1. **Full Name** (required, short text)
2. **Email Address** (required, email)
3. **Product Name** (pre-filled: "100% Acacia Wood Tray")
4. **Order Number** (required, short text)
5. **Order Date** (required, date picker)
6. **Purchase Location** (optional, multiple choice: Amazon, Direct, Other)
7. **Phone Number** (optional, short text)
8. **Additional Notes** (optional, paragraph text)

### Form Settings
- ✅ Collect email addresses
- ✅ Auto-save to Google Sheets
- ✅ Share link for embedded iframe
- ✅ Confirmation message after submission

---

## Project File Structure

```
hausofcharm/
├── PROJECT_PLAN.md          # This document
├── README.md                # Getting started guide
├── package.json             # Node dependencies
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS config
├── tsconfig.json            # TypeScript config
├── .gitignore               # Git ignore rules
├── public/
│   ├── images/
│   │   ├── logo/            # All logo variants (SVG, PNG, JPG)
│   │   ├── product/         # Product photography (8 images)
│   │   └── lifestyle/       # Lifestyle photography (3 images)
│   └── favicon.ico          # Browser tab icon
├── src/
│   ├── pages/
│   │   ├── index.tsx        # Landing page
│   │   ├── about.tsx        # Brand story page
│   │   ├── warranty.tsx     # Warranty registration page
│   │   ├── _app.tsx         # App wrapper
│   │   └── _document.tsx    # HTML document
│   ├── components/
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Site footer
│   │   ├── ProductShowcase.tsx
│   │   ├── HeroSection.tsx
│   │   └── WarrantyForm.tsx # Google Form embed
│   ├── styles/
│   │   ├── globals.css      # Global styles
│   │   └── variables.css    # CSS variables
│   └── utils/
│       └── constants.ts     # Brand constants
```

---

## Key Content Needed

### 1. Brand Story Content
- [ ] Origin story (2-3 paragraphs)
- [ ] Brand mission statement
- [ ] Core values (3-5 key values)
- [ ] Craftsmanship philosophy
- [ ] Why Acacia wood? (material sourcing & benefits)

### 2. Product Copy
- [ ] Product name & tagline
- [ ] Short description (1-2 sentences)
- [ ] Key features (5-7 bullet points)
- [ ] Dimensions, weight, material specs
- [ ] Care instructions
- [ ] Warranty coverage details

### 3. Brand Messaging
- [ ] Homepage headline
- [ ] Homepage subheadline
- [ ] CTA copy ("Register Warranty", "Learn More", etc.)
- [ ] Warranty page introduction

---

## Development Phases

### Phase 1: Foundation (This week)
- [ ] Create project structure
- [ ] Set up Next.js with Tailwind
- [ ] Configure GitHub repository
- [ ] Create Google Form for warranty
- [ ] Finalize brand content and messaging

### Phase 2: Core Pages (Week 2)
- [ ] Build landing page layout
- [ ] Build brand story page
- [ ] Build warranty registration page
- [ ] Implement responsive design
- [ ] Mobile testing

### Phase 3: Polish & Deploy (Week 3)
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Browser compatibility testing
- [ ] Final content review
- [ ] Deploy to GitHub Pages/Vercel
- [ ] Point domain to hosting

### Phase 4: Maintenance
- [ ] Monitor analytics
- [ ] Collect user feedback
- [ ] Plan future product pages

---

## Assets Inventory

### ✅ Copied to Project

#### Logo Files (18 total)
- `fulllogo_nobuffer.png/jpg`
- `fulllogo_transparent_nobuffer.png`
- `grayscale_nobuffer.png`
- `icononly_nobuffer.png`
- `textonly.png`
- `logo.svg`
- Print formats (EPS, PDF)

#### Product Photography (8 images)
- `DSL_7662.jpg` - Product detail shot
- `DSL_7663.jpg` - Product detail shot
- `DSL_7664.jpg` - Product detail shot
- `DSL_7666.jpg` - Product detail shot
- `DSL_7667.jpg` - Product detail shot
- `DSL_7671.jpg` - Product detail shot
- `DSL_7672.jpg` - Product detail shot
- `DSL_8288.jpg` - Product detail shot

#### Listing Images (6 images)
- Professional e-commerce listing images
- Optimized for various platforms

#### Lifestyle Photography (3 images)
- In-context product usage
- Styled/staged shots
- Perfect for hero section or story page

---

## Next Steps

### Immediate Actions
1. **Confirm Brand Content**
   - Provide brand story narrative
   - Write product specifications
   - Finalize key messaging

2. **Set Up Google Form**
   - Create warranty registration form
   - Configure field settings
   - Generate embed code and link

3. **Initialize Project**
   - Create GitHub repository
   - Set up Next.js project
   - Configure deployment

4. **Design Finalization**
   - Approve color palette
   - Finalize typography choices
   - Review image selections

### Questions to Answer
- [ ] Do you prefer modern or rustic aesthetic?
- [ ] Any specific colors you want featured?
- [ ] Should we include customer testimonials?
- [ ] Do you want a blog section for future content?
- [ ] Any specific fonts preferences?

---

## Success Metrics

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Fast load time (< 3 seconds)
- ✅ Easy warranty registration process
- ✅ Professional brand presentation
- ✅ Easy to update and maintain
- ✅ SEO-friendly structure
- ✅ Accessible (WCAG compliant)

---

## Timeline

**Estimated Total Duration:** 2-3 weeks (depending on content readiness)

- **Week 1:** Planning + content + setup
- **Week 2:** Development + testing
- **Week 3:** Final polish + deployment

---

## Questions & Notes

**For Future Consideration:**
- Newsletter signup?
- Product waitlist (for future items)?
- Blog for care tips?
- Customer reviews/testimonials?
- Multiple product pages?

---

**Project Owner:** Haus of Charm  
**Contact:** hello@hausofcharm.com  
**Last Updated:** 2025
