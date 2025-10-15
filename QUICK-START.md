# ⚡ Quick Start – 3 Steps to Launch

## 🎯 Before You Deploy

### 1️⃣ Add WhatsApp Number
**File:** `script.js` (line 5)
```js
const phone = '9655XXXXXXX';  // Add your number here
```

### 2️⃣ Replace Images
**Folder:** `assets/img/`
- Drop your photos (rename them to match existing names)
- Keep WebP format (use [Squoosh.app](https://squoosh.app/) to convert)

**You need:**
- `hero.webp` – Main background (1920×1080)
- `work-1.webp` to `work-6.webp` – Portfolio pieces (800×800)
- `about.webp` – Workshop/team photo (800×600)

### 3️⃣ Set Up Contact Form
1. Go to [formspree.io](https://formspree.io/) → Sign up (free)
2. Create new form → Copy endpoint URL
3. **File:** `index.html` (line 129)
   ```html
   <form action="https://formspree.io/f/YOUR-ID" method="POST">
   ```

---

## 🚀 Deploy

**Easiest:** Drag entire folder to [netlify.com/drop](https://app.netlify.com/drop)

**Best:** Push to GitHub → Import to [vercel.com](https://vercel.com/)

---

## ✅ Test First

```bash
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000)

Check:
- [ ] WhatsApp button works
- [ ] Gallery images open in lightbox
- [ ] Contact form submits successfully

---

**Need details?** See `README.md` or `DEPLOYMENT.md`

