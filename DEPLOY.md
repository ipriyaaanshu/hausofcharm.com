# Deploy to GitHub & Vercel

## Option 1: Vercel (Recommended - 2 minutes)

### Step 1: Push to GitHub
```bash
cd /Users/braindead/Documents/Development/websites/hausofcharm
git init
git add .
git commit -m "Initial commit - Haus of Charm website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hausofcharm.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Select your `hausofcharm` repository
5. Click "Deploy"
6. Done! Your site is live 🎉

### Step 3: Connect Your Domain
1. Go to Vercel Dashboard → Settings → Domains
2. Add your domain: `hausofcharm.com`
3. Follow Vercel's DNS instructions
4. Wait for DNS propagation (usually 24 hours)

## Option 2: GitHub Pages (Free, but manual)

```bash
# Build static version
npm run build
npm run export

# Deploy to gh-pages branch
git checkout -b gh-pages
cp -r out/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push -u origin gh-pages
git checkout main
```

Then enable Pages in GitHub Settings.

## Local Testing

```bash
npm install
npm run dev
# Visit http://localhost:3000
```

## Build & Test Production

```bash
npm run build
npm start
```

---

**Time**: ~5 minutes  
**Cost**: Free (Vercel hobby tier)  
**Domain**: Point DNS to Vercel or GitHub Pages
