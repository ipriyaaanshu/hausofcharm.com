# Quick Start Guide - Haus of Charm Website

Get your Haus of Charm website running locally or deployed live in minutes!

---

## 🚀 Running Locally

### Prerequisites
- Node.js 18+ installed
- npm installed

### Steps

```bash
# 1. Navigate to project directory
cd /Users/braindead/Documents/Development/websites/hausofcharm

# 2. Install dependencies (if not already done)
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Visit: http://localhost:3000
```

That's it! Your website is now running locally. Make changes to files and they'll auto-refresh.

---

## 📦 Deployment in 5 Minutes

### Method 1: Vercel (Easiest & Recommended)

1. **Go to GitHub**
   ```bash
   # Initialize git repository
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/hausofcharm.git
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com)**
   - Click "Add New Project"
   - Select your `hausofcharm` repository
   - Click "Deploy"
   - Done! Your site is live 🎉

3. **Point Your Domain**
   - In Vercel → Settings → Domains
   - Add `hausofcharm.com`
   - Follow DNS instructions from your domain registrar

### Method 2: GitHub Pages

```bash
# Build static version
npm run build
npm run export

# Create and push to gh-pages
git checkout -b gh-pages
cp -r out/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push -u origin gh-pages
git checkout main
```

Then in GitHub Settings → Pages, select `gh-pages` branch.

---

## 🔍 Testing

### Before Deployment

```bash
# Test production build locally
npm run build
npm start
# Visit http://localhost:3000
```

### Checklist
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Warranty form appears
- [ ] Images display
- [ ] Mobile looks good
- [ ] No console errors

---

## 📝 Making Changes

### Update Brand Content

Edit `/utils/constants.ts`:
```typescript
export const BRAND_NAME = 'Your Brand Name';
export const BRAND_DESCRIPTION = 'Your description here';
```

### Update Pages

- **Home**: `/pages/index.tsx`
- **About**: `/pages/about.tsx`
- **Warranty**: `/pages/warranty.tsx`

### Update Styles

- **Global CSS**: `/styles/globals.css`
- **Tailwind Config**: `/tailwind.config.js`

### Update Images

Place images in `/public/images/` directories:
- `/product/` - Product photos
- `/lifestyle/` - Lifestyle photos
- `/logo/` - Logo files

---

## 🔧 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Export static HTML
npm run export

# Check for code issues
npm run lint

# Fix formatting issues
npm run lint --fix
```

---

## 🌐 Pointing Your Domain

### With Vercel (Easiest)
1. Dashboard → Settings → Domains
2. Add your domain
3. Follow Vercel's DNS instructions
4. Done!

### With GitHub Pages
1. Create `CNAME` file with your domain
2. Update DNS at registrar
3. GitHub Pages settings → Select branch
4. Wait 24 hours for DNS propagation

---

## ✅ Post-Launch Checklist

- [ ] Visit domain in browser
- [ ] Test all page links
- [ ] Fill out warranty form
- [ ] Check Google Form responses
- [ ] Test on mobile device
- [ ] Verify images load
- [ ] Check page speed
- [ ] Test email link

---

## 📞 Support & Troubleshooting

### Form Not Working?
- Check Google Form is "Accepting responses"
- Verify form URL in `/utils/constants.ts`
- Check browser console for errors

### Site Not Loading?
- Verify build succeeded: `npm run build`
- Check all imports are correct
- Look for TypeScript errors

### Images Missing?
- Check file paths are correct
- Verify images in `/public/images/`
- Clear browser cache

### Slow Loading?
- Run Lighthouse audit (Chrome DevTools)
- Check image sizes
- Minimize unnecessary CSS

---

## 📚 Full Documentation

For more detailed information, see:
- **PROJECT_PLAN.md** - Complete project planning
- **README.md** - Full setup guide
- **DEPLOYMENT.md** - Detailed deployment options
- **ASSETS.md** - Image and asset guide
- **BUILD_SUMMARY.md** - What was built

---

## 🎯 Next Steps

1. **Run locally**: `npm run dev`
2. **Test thoroughly**: Visit all pages, test form
3. **Push to GitHub**: Initialize and commit
4. **Deploy to Vercel**: 1-click deployment
5. **Point domain**: Update DNS records
6. **Celebrate**: Your site is live! 🎉

---

**Time to Deploy**: ~5 minutes ⚡  
**Difficulty**: Easy ✅  
**Cost**: Free (Vercel hobby tier) 💰

Good luck! 🚀
