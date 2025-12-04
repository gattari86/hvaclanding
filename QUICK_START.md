# Quick Start Guide

Get your HVAC landing page live in 5 minutes.

## 1. Local Preview (2 min)

```bash
# Navigate to project folder
cd hvac-landing-page

# Start local server (pick one)
python -m http.server 8000
# OR
npx http-server
# OR
python3 -m http.server 8000
```

Open `http://localhost:8000` in your browser. You'll see the complete landing page.

## 2. Push to GitHub (2 min)

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit: HVAC landing page ready for deployment"

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/YOUR_USERNAME/hvac-landing-page.git
git branch -M main
git push -u origin main
```

## 3. Deploy to Vercel (1 min)

1. Go to [vercel.com](https://vercel.com)
2. Click **New Project**
3. Click **Import Git Repository**
4. Paste your GitHub repo URL
5. Click **Continue** → **Deploy**

**Your site is now LIVE!** 🎉

Default URL: `https://hvac-landing-page.vercel.app`

## Customization

### Update Contact Email

Open `index.html`, find:
```html
<p class="footer-contact">hello@poppymarketingandconsulting.com</p>
```

Replace with your email address.

### Change Colors

Open `styles.css`, find:
```css
:root {
    --color-primary: #FF6B35;  /* Change this */
    --color-accent: #004E89;   /* And this */
}
```

### Update Pricing

Search for `$499` in `index.html` and update.

### Add Google Analytics

Get your GA ID from Google Analytics, then add to `index.html` in the `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA-XXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA-XXXXX');
</script>
```

Then commit and push:
```bash
git add index.html
git commit -m "Add Google Analytics"
git push origin main
```

Vercel auto-deploys! Changes live in seconds.

## Add Custom Domain

1. In Vercel dashboard, go to **Domains**
2. Enter your domain (e.g., `hvac-leads.com`)
3. Update DNS at your domain provider to point to Vercel
4. Done! Site now runs on your custom domain.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full DNS instructions.

## Track Performance

### In Vercel
Dashboard → **Analytics** → See page views, visitors, bounce rate

### In Google Analytics
1. Add GA ID (instructions above)
2. Wait 24 hours for data
3. Dashboard → See visitor behavior, CTA clicks, conversions

### CTA Tracking
All button clicks are automatically tracked with:
- Button ID (`data-cta` attribute)
- Timestamp
- User location

Check browser console (F12) → Application → LocalStorage → `hvac_events`

## What's Included

✅ **11 Fully Optimized Sections:**
- Hero with dual CTAs
- Problem statement
- Solution package
- Money-back guarantee
- 4-step process
- AI receptionist add-on
- Social proof & testimonials
- DIY vs agency comparison
- 7 FAQ items
- Final CTA
- Footer with contact

✅ **Modern 2025 Design:**
- Clean minimalist layout
- High contrast CTAs
- Smooth animations
- Mobile-responsive
- Fast loading
- Accessible (WCAG 2.1)

✅ **Built-In Tracking:**
- CTA click tracking
- Scroll depth monitoring
- Performance analytics
- Form submission handling
- Google Analytics ready

✅ **Production Ready:**
- No dependencies needed
- Security headers
- SEO optimized
- Vercel optimized
- Tested on all browsers

## Files Overview

```
hvac-landing-page/
├── index.html       ← Main page (edit text here)
├── styles.css       ← Colors, fonts, layout (edit design here)
├── script.js        ← Interactions, tracking (ready to go)
├── vercel.json      ← Deploy configuration (ready to go)
├── .gitignore       ← Git ignore rules (ready to go)
├── README.md        ← Full documentation
├── DEPLOYMENT.md    ← Detailed deploy guide
└── QUICK_START.md   ← This file
```

## Common Changes

### Edit Headlines
Open `index.html`, search for `<h1>` or `<h2>`, edit text.

### Edit Button Text
Search for `Get 5 Calls in 5 Days` (or whatever) and change.

### Add/Remove Sections
Delete entire `<section>` tags to remove sections, or duplicate and modify.

### Change Feature List
Find `.features-grid` or `.problem-grid` and edit cards.

### Update Pricing
Search `$499` or `$249` and update values.

### Change Logo/Brand Name
Search `Poppy Marketing & Consulting` and replace everywhere (or use Find & Replace).

## Mobile Testing

Open in phone browser:
- Click buttons (should work smoothly)
- Scroll through all sections
- Check text readability
- Test forms (if added)

Or use Chrome DevTools:
1. Open DevTools (F12)
2. Click device icon (top left)
3. Select mobile device
4. Test responsiveness

## Performance Check

Open in Chrome:
1. Press F12 (DevTools)
2. Click **Lighthouse** tab
3. Click **Generate report**
4. Scores should be 90+ for all categories

If not:
- Compress images (use tinypng.com)
- Minimize CSS/JS
- Enable caching
- Use CDN (Vercel does this!)

## Deploy Checklist

Before going live, verify:

- [ ] All text updated (email, pricing, company name)
- [ ] Colors match your brand
- [ ] Mobile looks good (test on real phone)
- [ ] All buttons work
- [ ] Contact form setup (email service configured)
- [ ] Analytics ID added (Google Analytics)
- [ ] Lighthouse scores > 90
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active (Vercel provides free)
- [ ] Desktop and mobile tested in multiple browsers

## Troubleshooting

**Site not updating after I edited files?**
```bash
# Make sure to commit and push
git add .
git commit -m "Update content"
git push origin main
# Vercel deploys automatically in ~1 min
```

**Can't find a file?**
Open in your code editor and use Find (Ctrl+F or Cmd+F).

**Colors look wrong?**
- Check `styles.css` for color values
- Use [colorhunt.co](https://colorhunt.co) for inspiration
- Update `--color-primary` and other variables

**Mobile design broken?**
- Check responsive sections in `styles.css`
- Look for `@media (max-width: 768px)`
- Test with DevTools device mode

**Need more help?**
- Check full documentation in README.md
- See detailed deployment guide in DEPLOYMENT.md
- Review HTML comments in index.html

## Next Steps

1. **Customize content** (5 min)
   - Update company name, email, pricing
   - Change headlines to match your pitch
   - Edit testimonials with real reviews

2. **Set up tracking** (5 min)
   - Add Google Analytics ID
   - Configure CTA destinations
   - Test tracking in DevTools

3. **Go live** (2 min)
   - Commit changes to GitHub
   - Vercel auto-deploys
   - Verify custom domain works

4. **Monitor performance** (ongoing)
   - Check analytics daily first week
   - Monitor form submissions
   - Optimize CTAs based on clicks

5. **Iterate** (weekly)
   - Review analytics data
   - A/B test different headlines
   - Update testimonials
   - Adjust based on performance

## Support

Questions? Check:
- **README.md** - Full documentation
- **DEPLOYMENT.md** - Deployment issues
- **index.html comments** - Code explanations
- **styles.css comments** - CSS organization

Email: hello@poppymarketingandconsulting.com

---

**You're all set!** Your HVAC landing page is production-ready and waiting to generate leads. 🚀

Next: Push to GitHub and deploy to Vercel to go live!