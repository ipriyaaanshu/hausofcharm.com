# Deployment Guide - Haus of Charm Website

Complete guide for deploying your Haus of Charm website to GitHub Pages or Vercel.

---

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is the creator of Next.js and provides seamless integration and auto-deployment.

### Setup Steps

1. **Create a GitHub Repository**
   ```bash
   cd /Users/braindead/Documents/Development/websites/hausofcharm
   git init
   git add .
   git commit -m "Initial commit - Haus of Charm website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/hausofcharm.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in with GitHub
   - Click "Add New Project"
   - Select your `hausofcharm` repository
   - Click "Import"
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Point Your Domain**
   - Go to your domain registrar (where you have `hausofcharm.com`)
   - Update DNS records to point to Vercel
   - Vercel provides specific DNS records during setup
   - Or use CNAME: `yourdomain.com` → `cname.vercel.com`

4. **Automatic Deployments**
   - Any push to `main` branch will auto-deploy
   - Check deployment status on Vercel dashboard
   - Rollback previous versions if needed

### Vercel Benefits
- ✅ Zero-config deployment
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic image optimization
- ✅ Preview deployments for branches
- ✅ Built-in analytics
- ✅ Free for hobby projects

---

## Option 2: Deploy to GitHub Pages

GitHub Pages is a free hosting option directly from your GitHub repository.

### Setup Steps

1. **Initialize Git Repository**
   ```bash
   cd /Users/braindead/Documents/Development/websites/hausofcharm
   git init
   git add .
   git commit -m "Initial commit - Haus of Charm website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/hausofcharm.git
   git push -u origin main
   ```

2. **Configure for GitHub Pages**
   - Update `next.config.js`:
   ```javascript
   module.exports = {
     reactStrictMode: true,
     basePath: '', // or '/hausofcharm' if using project site
     assetPrefix: '',
     exportPathMap: async () => {
       return {
         '/': { page: '/' },
         '/about': { page: '/about' },
         '/warranty': { page: '/warranty' },
       };
     },
   };
   ```

3. **Build and Export**
   ```bash
   npm run build
   npm run export
   ```

4. **Create GitHub Pages Deployment**
   - Create `gh-pages` branch: `git checkout -b gh-pages`
   - Copy contents of `out/` folder
   - Push to `gh-pages` branch
   - Go to GitHub → Settings → Pages
   - Select "Deploy from a branch"
   - Select `gh-pages` branch
   - Click Save

5. **Enable GitHub Actions (Automatic Deployment)**
   - Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Build and Deploy

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - run: npm run export
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

6. **Point Your Domain**
   - Add `CNAME` file to `out/` folder with your domain
   - Or configure in GitHub Pages settings
   - Update DNS at your domain registrar

### GitHub Pages Limitations
- ⚠️ Requires `npm run export` (static export)
- ⚠️ No server-side rendering
- ⚠️ Manual deployment or GitHub Actions setup needed
- ✅ Completely free

---

## Recommended Approach: Vercel + GitHub

1. Push code to GitHub (version control)
2. Vercel automatically deploys from GitHub
3. Get best of both worlds: Git + Auto-Deploy + CDN

---

## Testing Locally Before Deployment

### Test Production Build
```bash
npm run build
npm start
# Visit http://localhost:3000
```

### Test Static Export (for GitHub Pages)
```bash
npm run build
npm run export
# Visit files in ./out/ folder
```

---

## Domain Configuration

### For Vercel
1. In Vercel Dashboard → Settings → Domains
2. Add your domain: `hausofcharm.com`
3. Follow Vercel's DNS instructions
4. Typical DNS Records:
   - `A` record: points to Vercel IP
   - Or `CNAME`: points to `cname.vercel.com`

### For GitHub Pages
1. Create `CNAME` file in repository root with domain
2. Update DNS at registrar to point to GitHub Pages
3. Typical DNS Record:
   - `A` records (4 IPs provided by GitHub)
   - Or `CNAME`: points to `username.github.io`

---

## Post-Deployment Checklist

- [ ] Visit your domain in browser
- [ ] Test all navigation links
- [ ] Test warranty form submission
- [ ] Test responsive design on mobile
- [ ] Check Google Form responses
- [ ] Verify images load properly
- [ ] Test contact email link
- [ ] Check page load speed
- [ ] Verify SEO meta tags
- [ ] Test social media sharing (Open Graph)

---

## Troubleshooting

### Form Not Embedding
- Check Google Form embed URL is correct
- Ensure Google Form is set to "Accepting responses"
- Check browser console for iframe errors

### Images Not Loading
- Verify image paths in `public/images/` directory
- Check file permissions
- Clear browser cache and reload

### Slow Load Times
- Check Vercel Analytics dashboard
- Optimize image sizes
- Use Lighthouse tool for performance audit
- Enable caching headers

### Domain Not Resolving
- Wait 24-48 hours for DNS propagation
- Use DNS checker tool: dnschecker.org
- Verify DNS records at registrar

---

## Monitoring & Analytics

### Vercel Analytics
- Real-time traffic data
- Page performance metrics
- Build logs and deployment history
- Error tracking

### Google Analytics (Optional)
- Add tracking code to `_document.tsx`
- Track visitor behavior
- Monitor warranty form submissions

---

## Continuous Improvements

After deployment, consider:
- Monitor warranty form submissions
- Gather user feedback
- Track page analytics
- Optimize images based on usage
- Update content as needed
- Plan future products/features
- Add customer testimonials
- Implement email newsletter signup

---

**Last Updated:** October 2025  
**Maintained By:** Haus of Charm
