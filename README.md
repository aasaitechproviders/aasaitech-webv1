# Aasai Tech — Website (React)

A fast, modern React site for Aasai Tech, redesigned in a clean Microsoft.com /
Fluent-inspired light style. Every product has its own dedicated page, including the
new **BoutiqueAI** virtual try-on product.

Built with **React 18 + Vite + React Router** and **Framer Motion**, with
**static prerendering** (`vite-react-ssg`) so every page is real HTML that ranks
in search engines and loads instantly, then hydrates into a fast SPA.

## Quick start

```bash
npm install
npm run dev        # local dev server (usually http://localhost:5173)
```

## Build for production

```bash
npm run build      # outputs to ./dist
npm run preview    # preview the production build locally
```

## SEO & marketing

This site uses **clean URLs + static prerendering** so every page ranks
individually in search engines.

- **Routing:** `BrowserRouter` with clean paths (`/products/boutique-ai`).
- **Prerendering:** `vite-react-ssg` renders every route to a real static HTML
  file at build time (`dist/products/boutique-ai.html`, etc.). Search engines
  and social scrapers see full content **and** correct per-page meta on first
  load — no JavaScript execution required. The same HTML then hydrates into the
  interactive SPA for users.
- **Per-page meta** lives in `src/components/SEO.jsx` (one `<SEO />` per page).
  Each page gets its own `<title>`, description, canonical, and OG/Twitter tags
  baked into its HTML. Product pages derive theirs from `content.js` automatically.
- **`index.html`** holds only site-wide head: keywords, GA (`G-WYLK8PWBP5`),
  JSON-LD Organization data, theme-color, and fonts. Title/description are
  intentionally **not** here — the SEO component owns them to avoid duplicates.
- **`public/robots.txt`** allows all major crawlers and points to the sitemap.
- **`public/sitemap.xml`** is generated before every build by
  `scripts/generate-sitemap.mjs` (reads slugs from `content.js`, so new products
  appear automatically). Lists clean URLs. Regenerate with `npm run sitemap`.

### Deploying to Cloudflare Pages

1. Push this repo to GitHub/GitLab and create a Cloudflare Pages project from it.
2. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Cloudflare serves the prerendered HTML directly (e.g. `/products/smartedu`
   resolves to `dist/products/smartedu.html`). The included `public/_redirects`
   adds an SPA fallback (`/* -> /index.html 200`) for any path without a
   prebuilt page, so unknown product slugs still load and show the in-app 404.
4. Add your custom domain `www.aasaitech.in` in the Pages project (the `CNAME`
   file is for GitHub Pages; on Cloudflare you set the domain in the dashboard).
5. After the first deploy, submit `https://www.aasaitech.in/sitemap.xml` in
   Google Search Console so the product pages get crawled and indexed.

> **Note:** The site is configured with an absolute asset base (`base: '/'` in
> `vite.config.js`), so it must be served from the **root** of a domain (which
> Cloudflare Pages does by default). If you ever host it under a sub-path like
> `example.com/site/`, change `base` to `'/site/'` and rebuild.

Adding a new product to `PRODUCTS` in `content.js` automatically creates its
page, its prerendered HTML, its sitemap entry, and its nav/footer links — no
other changes needed.

## Project structure

```
public/
  images/            # logo, about photo, brochure
  robots.txt         # crawler rules + sitemap pointer
  sitemap.xml        # auto-generated before each build
  _redirects         # Cloudflare Pages SPA fallback
  CNAME / .nojekyll  # only needed if you also deploy to GitHub Pages
scripts/
  generate-sitemap.mjs  # builds sitemap.xml from content.js
src/
  data/content.js    # ← ALL site content lives here (products, services, etc.)
  routes.jsx         # route table (used by router + prerenderer)
  main.jsx           # vite-react-ssg entry (hydrate + generate)
  Layout.jsx         # nav + page outlet + footer + scroll mgmt
  components/        # Navbar, Footer, ProductCard, SEO
  pages/             # Home, ProductsIndex, ProductPage, About, Contact, NotFound
  hooks/useReveal.js # scroll-reveal animation hook
  styles/global.css  # design system / CSS variables
```

## Editing content

Almost everything is data-driven. To change products, services, pricing, FAQs,
client work, stats, or contact details, edit **`src/data/content.js`** — no JSX
changes needed. To add a new product page, add an object to the `PRODUCTS` array;
its page, prerendered HTML, sitemap entry, and nav/footer links all appear
automatically at `/products/<slug>`.

## Routes

| Route                          | Page                          |
| ------------------------------ | ----------------------------- |
| `/`                            | Home                          |
| `/products`                    | All products                  |
| `/products/boutique-ai`        | BoutiqueAI (full detail)      |
| `/products/smartedu`           | Aasai SmartEDU                |
| `/products/aasai-tech-ai`      | Aasai Tech AI (free chat)     |
| `/products/supportgent`        | SupportGent                   |
| `/about`                       | About                         |
| `/contact`                     | Contact (wired to email API)  |

## Contact form

The contact form posts to the same email backend the original site used:
`https://aasai-tech-api.onrender.com/aasaitech/email/api/contact`. Change `API_BASE`
in `src/pages/Contact.jsx` if your endpoint moves.

## Deploying elsewhere (GitHub Pages, Netlify, etc.)

The primary target is **Cloudflare Pages** (see the SEO section above). The build
output in `dist/` is plain static HTML, so it also works on Netlify, Vercel, S3,
or GitHub Pages. On any host, point all unmatched routes to `/index.html` for the
SPA fallback (Cloudflare uses the included `_redirects`; Netlify uses the same
file; Vercel uses a rewrite). For GitHub Pages specifically, the prerendered
per-route HTML files mean clean URLs work, and the `CNAME` / `.nojekyll` files are
included in the build.

## Notes

- The very large `web.jpg` (20 MB) and `app.jpg` (5.6 MB) from the old site were
  intentionally left out to keep the site fast. Add optimized images to
  `public/images/` if you need them.
- Fonts: Fraunces (display) + Hanken Grotesk (body) + DM Mono, loaded from Google Fonts.
