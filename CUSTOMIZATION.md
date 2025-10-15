# 🎨 Customization Guide

Quick reference for updating content and styling.

## 📝 Text Content

### Update Company Name

**Location:** `index.html` (lines 6, 19, 37, 171)

```html
<!-- Find and replace all instances -->
Al Noor Woodworks → Your Company Name
```

### Update Headline & Tagline

**Location:** `index.html` (lines 56-57)

```html
<h1>Crafted Wood, <span class="accent">Timeless</span> Form.</h1>
<p>Custom doors, kitchens, wardrobes & bespoke pieces — built to last.</p>
```

### Update About Section

**Location:** `index.html` (lines 108-115)

```html
<h2>About <span class="accent">Us</span></h2>
<p>We're a Kuwait-based workshop...</p>
<ul class="bullets">
  <li>Solid wood & premium veneer</li>
  <!-- Edit or add more bullet points -->
</ul>
```

## 🎨 Color Scheme

**Location:** `styles.css` (lines 1-4)

```css
:root{
  --bg:#0B0B0B;      /* Page background */
  --fg:#FFFFFF;      /* Text color */
  --muted:#C9C9C9;   /* Subtext/dividers */
  --accent:#8B5E3C;  /* Brown accent (buttons, highlights) */
  --max:1200px;      /* Max content width */
}
```

### Color Presets

**Warmer Brown:**
```css
--accent:#A0632F;
```

**Cooler Brown:**
```css
--accent:#7A5436;
```

**Darker Background:**
```css
--bg:#050505;
```

## 🖼️ Images

### Gallery

**Location:** `script.js` (lines 13-20)

```js
const galleryImages = [
  'assets/img/work-1.webp',
  'assets/img/work-2.webp',
  // Add more images here
  'assets/img/work-12.webp'
];
```

**Image Requirements:**
- Format: WebP (preferred) or JPG
- Size: 800×800px (square crop best)
- File size: Under 150KB each
- Naming: `work-1.webp`, `work-2.webp`, etc.

### Hero Image

**Location:** `index.html` (lines 44-46)

```html
<picture>
  <source srcset="assets/img/hero.webp" type="image/webp">
  <img src="assets/img/hero.jpg" alt="Fine wood texture and tools in workshop" class="hero-bg" />
</picture>
```

**Requirements:**
- WebP: 1920×1080px, ~200KB
- JPG fallback: same dimensions, ~250KB
- Dark image works best (overlay will be applied)

### About Image

**Location:** `index.html` (line 117)

```html
<img src="assets/img/about.webp" alt="Workshop team working on a cabinet door" loading="lazy">
```

**Requirements:**
- Format: WebP
- Size: 800×600px (landscape)
- Subject: Workshop photo, team, or closeup of craft

## 📞 Contact & Social

### WhatsApp Number

**Location:** `script.js` (line 5)

```js
const phone = '9655XXXXXXX'; // Format: country code + number (no + or spaces)
```

Examples:
- Kuwait: `9655XXXXXXX`
- UAE: `9715XXXXXXX`
- Saudi: `9665XXXXXXX`

### Social Links

**Location:** `index.html` (lines 173-176)

```html
<div class="socials">
  <a href="https://instagram.com/alnoorwoodworks" aria-label="Instagram" class="social">IG</a>
  <a href="https://wa.me/9655XXXXXXX" aria-label="WhatsApp" class="social">WA</a>
</div>
```

### Contact Form

**Location:** `index.html` (line 129)

```html
<form id="contactForm" action="https://formspree.io/f/YOUR-ID" method="POST">
```

**Setup:**
1. Sign up at [formspree.io](https://formspree.io/)
2. Create new form
3. Copy endpoint: `https://formspree.io/f/xyzabc123`
4. Replace `your-id` with actual ID

## 🛠️ Services

**Location:** `data/services.json`

```json
[
  { "title": "Custom Doors", "desc": "Solid wood & veneer doors, frames, and trims." },
  { "title": "Kitchen Cabinets", "desc": "Tailored layouts, premium hardware, refined finishes." }
  // Add more services as needed
]
```

**To Add Service:**
```json
{ "title": "New Service", "desc": "Short description here." }
```

## 📐 Layout & Spacing

### Max Content Width

**Location:** `styles.css` (line 4)

```css
--max:1200px;  /* Default: 1200px. Try 1400px for wider layout */
```

### Section Spacing

**Location:** `styles.css` (line 39)

```css
.section-head{margin:64px auto 24px; text-align:center}
/* Increase 64px to add more space between sections */
```

## 🔤 Typography

### Change Fonts

**Location:** `index.html` (lines 9-11)

Current fonts:
- **Headings:** Playfair Display (serif, elegant)
- **Body:** Inter (sans-serif, clean)

**To Change:**

1. Find fonts on [Google Fonts](https://fonts.google.com/)
2. Update `<link>` tag in `index.html`
3. Update CSS:

```css
/* styles.css */
h1,h2,h3{font-family:"Your Heading Font", serif;}
body{font-family:"Your Body Font", sans-serif;}
```

**Font Pairing Suggestions:**
- Cormorant Garamond + Work Sans
- Lora + Roboto
- Crimson Text + Open Sans

## 🎯 Process Steps

**Location:** `index.html` (lines 98-103)

```html
<ol class="steps">
  <li><span>01</span><h3>Consult</h3><p>We discuss scope, materials, budget & timeline.</p></li>
  <!-- Edit steps or add more -->
</ol>
```

**To Add 5th Step:**
```html
<li><span>05</span><h3>Your Step</h3><p>Description here.</p></li>
```

## 🌐 SEO & Metadata

### Page Title & Description

**Location:** `index.html` (lines 6-7)

```html
<title>Al Noor Woodworks – Crafted Wood, Timeless Form</title>
<meta name="description" content="Custom doors, kitchens, wardrobes & bespoke woodwork in Kuwait." />
```

### Schema.org (Local Business)

**Location:** `index.html` (lines 14-23)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Al Noor Woodworks",
  "telephone": "+965XXXXXXXX",  // Update this
  "address": { "@type": "PostalAddress", "addressCountry": "KW" }
}
```

## 📱 Responsive Breakpoints

**Location:** `styles.css` (lines 117-123)

```css
@media (max-width: 960px){
  /* Tablet styles */
}
@media (max-width: 600px){
  /* Mobile styles */
}
```

**To adjust:**
- Change `960px` to `768px` for earlier tablet breakpoint
- Change `600px` to `480px` for smaller mobile breakpoint

## 🎭 Animations & Effects

### Disable Smooth Scroll

**Location:** `script.js` (line 61)

```js
el.scrollIntoView({ behavior: 'auto', block: 'start' }); // Change 'smooth' to 'auto'
```

### Adjust Hover Effects

**Location:** `styles.css`

**Gallery hover:**
```css
.gallery img:hover{
  transform:translateY(-4px);  /* Increase for more lift */
  box-shadow:0 12px 32px rgba(0,0,0,.5);  /* Larger shadow */
}
```

**Nav link hover:**
```css
nav a:hover::after{width:100%}  /* Underline animation */
```

## 🔍 Common Tasks

### Add a New Section

1. Choose insertion point in `index.html`
2. Copy an existing section structure
3. Update IDs and content
4. Add nav link in header if needed

### Change Button Style

**Location:** `styles.css` (lines 33-36)

```css
.btn-accent{
  background:var(--accent);
  border-radius:999px;  /* Change to 8px for square corners */
  padding:12px 18px;    /* Adjust for larger buttons */
}
```

### Update Footer

**Location:** `index.html` (lines 170-179)

```html
<footer class="site-footer">
  <div class="container footer-inner">
    <div class="logo small">Your Brand</div>
    <div class="copy">© <span id="year"></span> Your Company</div>
  </div>
</footer>
```

---

**Pro Tip:** Always test changes in a local browser before deploying!

```bash
# Test locally
python -m http.server 8000
# Open http://localhost:8000
```

