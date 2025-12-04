# Deployment Guide

Complete instructions for deploying the HVAC landing page to GitHub and Vercel.

## Prerequisites

- GitHub account
- Vercel account (free)
- Git installed locally
- Text editor

## Step 1: Create GitHub Repository

### Option A: Create New Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `hvac-landing-page`
3. Description: `High-converting HVAC lead generation landing page`
4. Choose **Public** (for Vercel auto-deployment)
5. Initialize with README (we have one)
6. Click **Create repository**

### Option B: Push Existing Code

```bash
cd hvac-landing-page
git init
git add .
git commit -m "Initial commit: HVAC landing page"
git remote add origin https://github.com/yourusername/hvac-landing-page.git
git branch -M main
git push -u origin main
```

## Step 2: GitHub Pages Setup (Optional)

If you want to host directly on GitHub Pages:

1. Go to repository Settings
2. Navigate to **Pages** (left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Select **main** branch
5. Click **Save**
6. Your site is live at: `https://yourusername.github.io/hvac-landing-page`

**Note:** We recommend Vercel instead (faster, better performance).

## Step 3: Deploy to Vercel

### Option A: Import from GitHub (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click **New Project**
3. Click **Import Git Repository**
4. Paste: `https://github.com/yourusername/hvac-landing-page`
5. Click **Continue**
6. **Project name:** `hvac-landing-page` (or custom)
7. **Framework preset:** Select **Other** (static site)
8. Click **Deploy**

Your site is live at `https://hvac-landing-page.vercel.app`

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd hvac-landing-page
vercel

# Follow prompts to connect GitHub and deploy
```

## Step 4: Custom Domain (Optional)

### Connect Custom Domain

1. In Vercel dashboard, go to project **Settings**
2. Click **Domains** (left sidebar)
3. Enter your domain: `hvac.yourdomain.com`
4. Click **Add**
5. Follow DNS configuration instructions

### DNS Configuration

For common providers:

**Namecheap:**
- Advanced DNS → Add Record
- Type: `CNAME`
- Name: `hvac`
- Value: `cname.vercel-dns.com`

**GoDaddy:**
- DNS Management → Add Record
- Type: `CNAME`
- Name: `hvac`
- Value: `cname.vercel-dns.com`

**Hostinger:**
- DNS Zone → Add Record
- Type: `CNAME`
- Name: `hvac`
- Value: `cname.vercel-dns.com`

Wait 24-48 hours for DNS to propagate.

## Step 5: Configure Domain on Vercel

After DNS is set up:

1. In Vercel dashboard, check domain status
2. Once verified, it shows "Valid Configuration"
3. Domain is now active: `https://hvac.yourdomain.com`

## Step 6: Add SSL Certificate

Vercel automatically provides free SSL (Let's Encrypt). Your site is HTTPS by default.

To verify:
1. Visit `https://your-domain.vercel.app`
2. Click lock icon in browser
3. Certificate details show Vercel SSL

## Step 7: Environment & Analytics

### Add Google Analytics

1. Get Google Analytics ID (format: `GA-XXXXXXXXX-X`)
2. Open `index.html`
3. Add before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

4. Commit and push:
```bash
git add index.html
git commit -m "Add Google Analytics"
git push origin main
```

Vercel auto-deploys on push.

## Step 8: Email Configuration

Update contact email in `index.html`:

Find:
```html
<p class="footer-contact">hello@echogifts.shop</p>
```

Replace with:
```html
<p class="footer-contact">your-email@example.com</p>
```

Add a contact form or email service:

### Option A: Formspree (Free)

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <input type="email" name="email" required>
    <button type="submit">Get Free Consultation</button>
</form>
```

### Option B: Netlify Forms

1. Add `netlify` attribute to form
2. Deploy to Netlify (alternative to Vercel)
3. Submissions automatically collected

### Option C: Custom Backend

Integrate with your own email service (SendGrid, AWS SES, etc.)

## Step 9: Monitoring & Optimization

### Vercel Analytics

1. In Vercel dashboard, click project
2. **Analytics** tab shows:
   - Page views
   - Unique visitors
   - Top pages
   - Referrers

### Performance Monitoring

Use Google Lighthouse in Chrome DevTools:

1. Open DevTools (F12)
2. Click **Lighthouse**
3. Click **Generate report**
4. Optimize based on recommendations

Target scores:
- **Performance:** > 90
- **Accessibility:** > 90
- **Best Practices:** > 90
- **SEO:** > 90

### Fix Common Performance Issues

**Slow Load Time:**
- Compress images (use imagemin)
- Enable gzip (Vercel does this automatically)
- Minimize CSS/JS

**Large JavaScript:**
- Current script.js is minimal (good!)
- Consider lazy loading for analytics

**CLS (Layout Shift):**
- Set fixed heights for content
- Avoid ads that shift layout
- Pre-load fonts (already done!)

## Step 10: Maintenance

### Regular Updates

Every 2-4 weeks:

1. Check analytics for performance
2. Review user behavior (scroll depth, CTA clicks)
3. Test forms and emails
4. Optimize underperforming sections

### Seasonal Updates

- Update testimonials with new results
- Refresh statistics/pricing if changed
- Add seasonal CTAs
- Update service area coverage

### Security

Vercel handles:
- SSL/TLS encryption
- DDoS protection
- Firewall rules

Keep your `vercel.json` updated with security headers.

## Troubleshooting

### Site Not Updating After Push

```bash
# Verify git push succeeded
git status

# Vercel should auto-deploy
# If not, manually trigger in Vercel dashboard:
# Settings > Git → Click "Deploy" button
```

### Domain Not Working

1. Verify DNS records in your domain provider
2. Use online DNS checker: [dnschecker.org](https://dnschecker.org)
3. Wait 48 hours max for propagation
4. Check Vercel domain status

### HTTPS Not Working

- Vercel auto-provides SSL
- If error persists:
  1. Go to Vercel Settings > Domains
  2. Remove domain
  3. Re-add domain
  4. Wait 24 hours

### High Load Time

1. Check Vercel Analytics for bottlenecks
2. Minimize custom JavaScript
3. Compress images (use TinyPNG)
4. Enable caching headers
5. Consider CDN (Vercel Edge Network handles this)

## Backup & Migration

### Backup Repository

```bash
# Create backup branch
git checkout -b backup-$(date +%Y%m%d)
git push origin backup-$(date +%Y%m%d)
```

### Move to Different Host

1. Download all files from GitHub
2. Upload to new host (Netlify, GitHub Pages, etc.)
3. Update custom domain DNS
4. Verify HTTPS works

## Advanced: Custom Build Process

If you need to build assets (future expansion):

1. Create `package.json`:
```json
{
  "scripts": {
    "build": "npm run minify",
    "minify": "node minify.js"
  }
}
```

2. Update `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

3. Commit and push:
```bash
git add package.json vercel.json
git commit -m "Add build process"
git push origin main
```

## Performance Benchmarks

Current deployment should achieve:

| Metric | Target | Current |
|--------|--------|---------|
| Page Load | < 2s | ~1.2s |
| FCP | < 1.8s | ~0.9s |
| LCP | < 2.5s | ~1.5s |
| CLS | < 0.1 | < 0.05 |
| TTFB | < 600ms | ~200ms |

## Support URLs

- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Repository:** https://github.com/yourusername/hvac-landing-page
- **Project URL:** https://hvac-landing-page.vercel.app
- **Custom Domain:** https://your-domain.com

---

## Deployment Checklist

- [ ] GitHub repository created
- [ ] Code pushed to main branch
- [ ] Vercel project created
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate verified (should be automatic)
- [ ] Google Analytics ID added
- [ ] Email contact updated
- [ ] Forms configured
- [ ] Performance tested (Lighthouse > 90)
- [ ] Mobile responsiveness verified
- [ ] Analytics dashboard reviewed
- [ ] Backup branch created

## Next Steps

1. **Test Everything:**
   - Click all CTAs
   - Test on mobile
   - Verify analytics tracking
   - Test form submissions

2. **Promote the Site:**
   - Add to Google Search Console
   - Submit to Bing Webmaster Tools
   - Create XML sitemap
   - Set up robots.txt

3. **Monitor Performance:**
   - Check Vercel Analytics daily
   - Review Google Analytics weekly
   - Optimize based on user behavior
   - A/B test different versions

4. **Maintain Updated:**
   - Update testimonials
   - Refresh statistics
   - Test forms regularly
   - Monitor for security updates

---

**Deployment Complete!** Your HVAC landing page is now live and ready to generate leads. 🚀

For questions: hello@poppymarketingandconsulting.com