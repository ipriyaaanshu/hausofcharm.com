# Haus of Charm - Asset Inventory

Complete inventory of creative assets organized for the website.

## 📁 Asset Organization

All assets are organized in the `public/images/` directory for easy reference and use throughout the website.

```
public/images/
├── logo/          # Brand logo variants (18 files)
├── product/       # Product photography (17 files)
└── lifestyle/     # Lifestyle photography (3 files)
```

**Total Assets:** 35+ files | **Total Size:** ~159 MB

---

## 🎨 Logo Files (`public/images/logo/`)

### Primary Logos
- **fulllogo.png** - Full color logo with text (PNG)
- **fulllogo.jpg** - Full color logo with text (JPG)
- **fulllogo_nobuffer.png** - Full color logo, no padding (PNG)
- **fulllogo_nobuffer.jpg** - Full color logo, no padding (JPG)
- **logo.svg** - Scalable vector version (SVG)

### Transparent Variants
- **fulllogo_transparent.png** - Full logo with transparency
- **fulllogo_transparent_nobuffer.png** - Full logo, transparent, no padding

### Grayscale Versions
- **grayscale.png** - Grayscale full logo
- **grayscale_nobuffer.png** - Grayscale, no padding
- **grayscale_transparent.png** - Grayscale with transparency
- **grayscale_transparent_nobuffer.png** - Grayscale, transparent, no padding

### Icon & Text Only
- **icononly.png** - Logo icon without text
- **icononly_nobuffer.png** - Icon only, minimal size
- **icononly_transparent.png** - Icon with transparency
- **icononly_transparent_nobuffer.png** - Icon, transparent, minimal
- **textonly.png** - Text-only version of logo

### Print Formats
- **print_transparent.eps** - Print-ready EPS format
- **print_transparent.pdf** - Print-ready PDF format
- **print_transparent.svg** - Print-ready SVG format
- **print.eps** - Print EPS version
- **print.pdf** - Print PDF version

### Recommended Uses
| Logo Type | Best For |
|-----------|----------|
| fulllogo.png | Website header, main branding |
| fulllogo_transparent.png | Dark backgrounds, overlays |
| icononly_nobuffer.png | Favicon, social media icons |
| logo.svg | Responsive scaling, animations |
| grayscale.png | Print, B&W materials |
| textonly.png | Secondary branding, footers |

---

## 📸 Product Photography (`public/images/product/`)

### Primary Product Shots (DSL Series)
Professional photography showcasing the 100% Acacia Wood Tray from multiple angles:

- **DSL_7662.jpg** - Product angle 1
- **DSL_7663.jpg** - Product angle 2
- **DSL_7664.jpg** - Product angle 3
- **DSL_7666.jpg** - Product angle 4
- **DSL_7667.jpg** - Product angle 5
- **DSL_7671.jpg** - Product angle 6
- **DSL_7672.jpg** - Product angle 7
- **DSL_8288.jpg** - Product detail shot

**Resolution:** High-resolution (suitable for website and print)  
**Format:** JPG  
**Best Use:** Hero sections, product showcase, product detail pages

### E-Commerce Listing Images (Rapid Retailers)
Optimized product listing images for online marketplaces:

- **Rapid Retailers Listing Images-01.png**
- **Rapid Retailers Listing Images-02.png**
- **Rapid Retailers Listing Images-03.png**
- **Rapid Retailers Listing Images-04.png**
- **Rapid Retailers Listing Images-05.png**
- **Rapid Retailers Listing Images-06.png**

**Format:** PNG with transparent backgrounds  
**Best Use:** Product grid, gallery sections, marketplace listings

---

## 🏡 Lifestyle Photography (`public/images/lifestyle/`)

Styled, in-context product photography showing the tray in use:

- **DSC00524.jpg** - Lifestyle scene 1
- **DSC00529.jpg** - Lifestyle scene 2
- **DSC00531.jpg** - Lifestyle scene 3

**Purpose:** Show the product in real-world settings  
**Best Use:** About/story page, hero section, social media

---

## 💡 Usage Guide

### For Homepage Hero Section
- **Primary:** `DSL_7662.jpg` or `DSL_7663.jpg` (prominent product shot)
- **Alternative:** One of the lifestyle photos for aspirational feel

### For Product Showcase Gallery
- **Use:** All DSL series images (DSL_7662-DSL_8288)
- **Layout:** Grid or carousel display
- **Format:** Maintain as JPG

### For Navigation Header
- **Logo:** `icononly_nobuffer.png` (small, clean icon)
- **Alternative:** `textonly.png` or `fulllogo_transparent.png` (for light backgrounds)

### For Footer
- **Logo:** `textonly.png` or `fulllogo_transparent.png`
- **Size:** Medium (100-150px width)

### For Social Media
- **Square Format:** `icononly.png` (profile pic)
- **Banner:** `fulllogo_transparent.png` on solid color background

### For Print Materials
- **Use:** Print-ready formats (`.eps`, `.pdf`)
- **Resolution:** Suitable for high-quality printing
- **Files:** `print_transparent.eps` or `print_transparent.pdf`

---

## 🎯 Asset Recommendations

### Current Website Implementation

**Landing Page:**
- Hero image: `DSL_7663.jpg` or lifestyle photo
- Logo: `icononly_nobuffer.png` (header)
- Product showcase: DSL series gallery

**About/Story Page:**
- Hero: Lifestyle photo (DSC00524 or DSC00529)
- Logo: `fulllogo_transparent.png`

**Warranty Page:**
- Logo: `icononly.png` or `textonly.png`
- No major images needed

**Footer (All Pages):**
- Logo: `textonly.png` or `grayscale_transparent.png`

---

## 🖼️ Image Optimization Tips

### For Web
1. Use PNG for logos (crisp, scalable)
2. Use JPG for photography (smaller file size)
3. Compress images for web:
   - Product photos: 60-80% quality
   - Logos: 90%+ quality
4. Responsive images: Provide multiple sizes (1x, 2x, WebP format)

### File Size Targets
- Logo files: < 50KB each
- Product photos: 100-300KB each
- Lifestyle photos: 150-400KB each

### Recommended Tools
- ImageOptim (macOS)
- TinyPNG/TinyJPG
- Squoosh (online)

---

## 🔄 Asset Management

### Adding New Images
1. Place in appropriate folder (`logo/`, `product/`, or `lifestyle/`)
2. Use descriptive filenames
3. Maintain consistent naming convention
4. Update this inventory document

### Updating Existing Assets
1. Create new version with `-v2` suffix
2. Test thoroughly before replacing original
3. Update references in code
4. Document changes

### Version Control
- All images are committed to Git
- Use `git-lfs` (Git Large File Storage) for managing large images efficiently
- Organize in logical directories

---

## 📊 Asset Metadata

| Category | Count | Total Size | Format |
|----------|-------|-----------|--------|
| Logos | 18 | ~700KB | PNG, JPG, SVG, EPS, PDF |
| Product Photos | 8 | ~20MB | JPG |
| Listing Images | 6 | ~15MB | PNG |
| Lifestyle Photos | 3 | ~124MB | JPG |
| **Total** | **35** | **~159MB** | Mixed |

---

## 🎯 Next Steps

- [ ] Choose primary hero images
- [ ] Define color palette based on logo
- [ ] Create image variants for responsive design
- [ ] Optimize all images for web
- [ ] Set up image compression in build process
- [ ] Test loading times with all assets

---

**Last Updated:** October 2025  
**Maintained By:** Haus of Charm
