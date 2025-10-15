# 🚀 Deployment Guide

## Pre-Launch Checklist

### 1. Content Updates

- [ ] Replace all placeholder images in `assets/img/`
  - `hero.webp` & `hero.jpg` (workshop/wood texture)
  - `work-1.webp` through `work-6.webp` (portfolio pieces)
  - `about.webp` (team/workshop photo)
  
- [ ] Add WhatsApp phone number in `script.js`
  ```js
  const phone = '9655XXXXXXX'; // Kuwait format
  ```

- [ ] Update social media links in `index.html` (footer section)
  - Instagram URL
  - WhatsApp link

- [ ] Set up contact form:
  1. Create account at [formspree.io](https://formspree.io/)
  2. Create new form
  3. Copy endpoint URL
  4. Replace `action="https://formspree.io/f/your-id"` in `index.html`

- [ ] Update Schema.org telephone in `index.html` (line ~24)

### 2. SEO & Metadata

- [ ] Verify meta description is accurate
- [ ] Check Open Graph image path
- [ ] Add Google Analytics (optional)
  ```html
  <!-- Add before </head> -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
  ```

### 3. Image Optimization

Before uploading real images:

1. **Resize:**
   - Hero: 1920×1080px or 2400×1350px
   - Gallery: 800×800px (square crop)
   - About: 800×600px

2. **Compress:**
   - Use [Squoosh.app](https://squoosh.app/)
   - WebP format, 85-90% quality
   - Keep each under 200KB (hero can be ~300KB)

3. **Convert:**
   - Export WebP versions
   - Keep JPG fallback for hero image only

## Deploy to Vercel (Recommended)

### Method 1: Git Integration (Best)

1. **Initialize Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Al Noor Woodworks site"
   ```

2. **Push to GitHub:**
   - Create new repo on GitHub
   - Follow GitHub instructions to push

3. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com/signup)
   - Click "New Project"
   - Import your GitHub repo
   - Framework Preset: **Other**
   - Click "Deploy"

4. **Custom Domain (Optional):**
   - Project Settings → Domains
   - Add your domain (e.g., `alnoorwoodworks.com`)
   - Follow DNS instructions from Vercel

### Method 2: Vercel CLI (Quick)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd woodwork-site
vercel

# Production deploy
vercel --prod
```

## Deploy to Netlify

1. **Drag & Drop:**
   - Go to [netlify.com](https://app.netlify.com/drop)
   - Drag entire project folder
   - Site is live!

2. **Or via CLI:**
   ```bash
   npm i -g netlify-cli
   netlify deploy --dir=. --prod
   ```

## Deploy to GitHub Pages

1. **Push to GitHub**
2. **Settings → Pages**
3. Source: Deploy from branch `main`
4. Root folder: `/` (root)
5. Save → Site live at `https://username.github.io/repo-name`

## Testing Before Launch

### Local Testing

**Option 1: Python**
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

**Option 2: Node.js**
```bash
npx serve .
```

**Option 3: VS Code**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

### Checklist

- [ ] Test all navigation links
- [ ] Click gallery images → lightbox opens
- [ ] Test WhatsApp button (opens chat)
- [ ] Submit contact form (check email)
- [ ] Test on mobile (Chrome DevTools)
- [ ] Check all images load
- [ ] Test smooth scroll
- [ ] Verify footer year updates

## Post-Launch

### Monitor Performance

- Use [PageSpeed Insights](https://pagespeed.web.dev/)
- Aim for 90+ score (easy with static site)

### Optional Enhancements

1. **Add Testimonials:**
   - Uncomment testimonials section in HTML
   - Add quotes from satisfied clients

2. **Arabic Version:**
   - Duplicate `index.html` → `index-ar.html`
   - Translate content
   - Add `dir="rtl"` to `<html>` tag
   - Add language switcher in header

3. **Before/After Slider:**
   - Use a simple JS library like [Beer Slider](https://pepsized.com/beer-slider/)

4. **Pricing Calculator:**
   - Add simple form to estimate project costs

---

## Quick Commands Reference

```bash
# Test locally
python -m http.server 8000

# Deploy to Vercel
vercel --prod

# Deploy to Netlify
netlify deploy --prod

# Compress images (using ImageMagick)
magick convert hero.jpg -quality 90 -resize 1920x1080 hero.webp
```

## Support Contacts

- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Netlify Support: [netlify.com/support](https://www.netlify.com/support/)
- Formspree Support: [help.formspree.io](https://help.formspree.io/)

---

**Need help?** Create an issue in the repo or contact your developer.

