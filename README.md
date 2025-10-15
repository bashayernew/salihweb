# Al Noor Woodworks – Static Website

A fast, minimal, elegant woodworking portfolio site with black, white, and brown accent palette.

## 🎨 Tech Stack

- **Pure HTML/CSS/JS** (no frameworks)
- **Fonts:** Playfair Display (headings) + Inter (body)
- **Colors:**
  - Black: `#0B0B0B` (background)
  - White: `#FFFFFF` (text)
  - Brown accent: `#8B5E3C` (CTA, highlights)
  - Muted gray: `#C9C9C9` (subtext)

## 📁 File Structure

```
woodwork-site/
├── index.html          # Main page (single-page scroll)
├── styles.css          # All styles
├── script.js           # Gallery, lightbox, smooth scroll
├── data/
│   └── services.json   # Service cards data
└── assets/
    ├── favicon.svg     # Site favicon
    ├── img/            # Images (hero, about, work-1 to work-6)
    └── icons/          # Social icons (placeholder)
```

## 🚀 Quick Start

1. **Replace Placeholder Images:**
   - Export client's Instagram photos as WebP (use [Squoosh](https://squoosh.app/) or similar)
   - Replace `assets/img/hero.webp`, `assets/img/hero.jpg` (fallback)
   - Replace `assets/img/work-1.webp` through `work-6.webp` (add more if needed)
   - Replace `assets/img/about.webp` with workshop/team photo

2. **Add WhatsApp Number:**
   - Open `script.js`
   - Replace `const phone = '';` with actual number, e.g., `'9655XXXXXXX'`

3. **Update Contact Form:**
   - Sign up for [Formspree](https://formspree.io/) (free tier)
   - Replace `action="https://formspree.io/f/your-id"` in `index.html` with your endpoint

4. **Customize Branding:**
   - Replace "Al Noor Woodworks" logo text in `index.html` (header & footer)
   - Update social links in footer (Instagram, WhatsApp URLs)

## 🌐 Deploy on Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com/)
3. New Project → Import Git Repository
4. Set **Framework Preset:** Other
5. Root Directory: `.` (project root)
6. Deploy!

Your site will be live at `https://your-project.vercel.app`

## ✨ Features

- ✅ Responsive (mobile-first)
- ✅ Lazy-loaded images
- ✅ Lightbox gallery (vanilla JS)
- ✅ Smooth scroll (respects `prefers-reduced-motion`)
- ✅ SEO: meta tags, Open Graph, JSON-LD schema
- ✅ Sticky header with hover animations
- ✅ WhatsApp CTA integration
- ✅ Formspree-ready contact form

## 📸 Adding More Gallery Images

Edit `script.js`:

```js
const galleryImages = [
  'assets/img/work-1.webp',
  'assets/img/work-2.webp',
  // ... add more
  'assets/img/work-12.webp'
];
```

## 🎯 Performance Tips

- Use WebP images (90% quality, compress with Squoosh)
- Keep images under 500KB each
- Hero image: aim for ~200KB
- Gallery images: ~100–150KB each

## 🔧 Customization

**Update Services:** Edit `data/services.json`

**Change Colors:** Edit `:root` variables in `styles.css`

**Add Testimonials:** Uncomment testimonials section in `index.html` (if needed)

## 📱 Browser Support

- Chrome/Edge (modern)
- Firefox (modern)
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## 📝 License

All rights reserved. Built for Al Noor Woodworks.

---

**Next Steps:**
1. Replace placeholder images with client's real photos
2. Add WhatsApp phone number in `script.js`
3. Set up Formspree for contact form
4. Deploy to Vercel
5. (Optional) Add Google Analytics or Simple Analytics

