# HVAC Lead Generation Landing Page

A modern, high-converting landing page for Houston HVAC contractors using the "5 Calls in 5 Days" guarantee system. Built with December 2025 design best practices.

## Features

✨ **Modern Design**
- Clean, minimalist layout focusing on conversions
- Mobile-first responsive design
- Smooth animations and micro-interactions
- Professional color scheme with high contrast CTAs

🎯 **High-Converting Elements**
- Problem-solution messaging structure
- Social proof with real testimonials and statistics
- Clear value proposition above the fold
- Multiple CTAs strategically placed
- Trust indicators and guarantees

📱 **Mobile Optimized**
- 100% responsive design
- Touch-friendly buttons
- Fast loading (under 2 seconds target)
- Mobile-first CSS approach

🔧 **Technical Features**
- Pure HTML/CSS/JavaScript (no dependencies)
- CTA tracking and analytics ready
- Scroll depth tracking
- Performance monitoring
- Accessibility compliant (WCAG 2.1)
- Reduced motion support

## Sections

1. **Hero Section** - Bold headline, dual CTAs, social proof badge
2. **Problem Section** - Paint the pain with specific statistics
3. **Solution Section** - Detailed features and pricing ($499)
4. **Guarantee Section** - 5-call guarantee with terms
5. **How It Works** - 4-step implementation process
6. **AI Receptionist Add-On** - 24/7 call handling feature
7. **Social Proof** - Real testimonials with ROI metrics
8. **Comparison Table** - DIY vs Agency vs Our System
9. **FAQ** - Common questions answered
10. **Final CTA** - Closing call-to-action
11. **Footer** - Contact info and links

## Design Best Practices Applied

### 2025 Design Trends
- **Monochrome with Accent Colors** - Unified look with orange (#FF6B35) primary
- **Micro-interactions** - Smooth hover effects and transitions
- **AI & Personalization Ready** - Foundation for dynamic content
- **Performance Focused** - Fast loading without unnecessary animations
- **Typography-Driven** - Clear hierarchy with Syne and Inter fonts

### Conversion Optimization
- Hero section clarifies the offer in under 5 seconds
- High contrast CTAs (primary + secondary options)
- Social proof strategically placed
- Specific numbers and results (not generic claims)
- Clear pricing and guarantee
- Multiple entry points for leads

### Mobile Optimization
- Responsive grid layouts
- Touch-friendly button sizes (min 48x48px)
- Optimized typography for readability
- Stacked layouts on mobile
- Fast load time optimization

## Directory Structure

```
hvac-landing-page/
├── index.html          # Main landing page
├── styles.css          # All styling
├── script.js           # Interactivity and tracking
├── vercel.json         # Vercel deployment config
├── .gitignore          # Git ignore rules
├── README.md           # This file
└── DEPLOYMENT.md       # Deployment guide
```

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hvac-landing-page.git
cd hvac-landing-page
```

2. Open in a local server (required for some features):
```bash
# Using Python 3
python -m http.server 8000

# Or using Node.js http-server
npx http-server

# Or using Live Server in VS Code
```

3. Visit `http://localhost:8000` in your browser

## Deployment

### GitHub Pages

1. Push to GitHub
2. Go to Settings > Pages
3. Select `main` branch as source
4. Your site is live at `https://username.github.io/hvac-landing-page`

### Vercel (Recommended)

1. Push to GitHub
2. Import repository in Vercel dashboard
3. Click Deploy
4. Configure custom domain
5. Site is live!

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## Configuration

### Google Analytics

Add your Google Analytics tracking code in the header:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

### Email Configuration

Update footer email:
```html
<p class="footer-contact">your-email@example.com</p>
```

### CTA Redirects

All buttons use `data-cta` attributes for tracking. Update button actions:

```html
<button class="btn btn-primary" data-cta="hero-primary">
    Get 5 Calls in 5 Days – Guaranteed
</button>
```

Handle in JavaScript:
```javascript
button.addEventListener('click', (e) => {
    // Track event
    // Redirect to booking URL, email form, etc.
});
```

## Performance Metrics

### Target Metrics
- **Page Load Time:** < 2 seconds
- **Largest Contentful Paint (LCP):** < 2.5 seconds
- **Cumulative Layout Shift (CLS):** < 0.1
- **Mobile Lighthouse Score:** > 90

### Optimization Tips
- Compress images (use WebP format)
- Minify CSS and JavaScript
- Enable gzip compression on server
- Use CDN for static assets
- Lazy load images below fold

## Customization Guide

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --color-primary: #FF6B35;          /* Main brand color */
    --color-accent: #004E89;           /* Secondary color */
    --color-success: #10B981;          /* Success/guarantee color */
    /* ... more colors ... */
}
```

### Typography

Fonts are loaded from Google Fonts:
- **Display:** Syne (headings)
- **Body:** Inter (paragraphs)

Change in HTML `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

### Content

Update all text content in `index.html`. Key sections to customize:

1. **Hero:** Headline, subheadline, CTAs
2. **Problem:** Statistics and pain points
3. **Solution:** Features, pricing
4. **Testimonials:** Add real customer quotes
5. **Footer:** Contact information

### Sections

To reorder or hide sections, modify the HTML structure. CSS classes make it easy to hide sections:

```css
.section-name {
    display: none; /* Hide section */
}
```

## Analytics & Tracking

The page automatically tracks:

- **Page Views** - Initial page load
- **CTA Clicks** - All button clicks with CTA ID
- **Scroll Depth** - User engagement (25%, 50%, 75%, 100%)
- **Performance** - Page load time, DNS, TCP times
- **Form Submissions** - If forms are added

Data is stored in `localStorage` for development. Connect to Google Analytics for production.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Color contrast ratios > 4.5:1
- Focus styles for keyboard navigation
- Reduced motion support
- Form labels associated with inputs

Test accessibility:
```bash
npm install -g axe-core
axe http://localhost:8000
```

## SEO

The page includes:
- Descriptive meta tags
- Semantic HTML (heading hierarchy)
- Open Graph meta tags
- Schema markup ready

Add schema.org markup for rich snippets:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Poppy Marketing & Consulting",
  ...
}
</script>
```

## Security

The site includes:
- XSS Protection headers
- Content Security Policy ready
- HSTS header ready
- Frame options to prevent clickjacking

## Support & Maintenance

### Common Issues

**Slow Load Time**
- Compress images
- Enable caching
- Use CDN
- Minify assets

**Mobile Layout Issues**
- Check viewport meta tag
- Test on real devices
- Use Chrome DevTools device emulation

**Tracking Not Working**
- Check browser console for errors
- Verify Google Analytics ID
- Check localStorage in DevTools

### Updates

Check for updates to design trends quarterly. Key areas:

- CSS variables for theming
- Button styles and hover effects
- Color palette optimization
- Typography hierarchy
- Responsive breakpoints

## License

This landing page template is provided as-is for use by Poppy Marketing & Consulting.

## Credits

- Design: Modern 2025 best practices
- Fonts: Google Fonts (Syne, Inter)
- Framework: Custom HTML/CSS/JavaScript
- Inspired by: High-converting HVAC lead gen pages

---

**Last Updated:** December 2025
**Version:** 1.0.0
**Status:** Production Ready

For questions or customization, contact: hello@poppymarketingandconsulting.com