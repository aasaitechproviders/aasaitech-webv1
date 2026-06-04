// Generates public/sitemap.xml from the product list so it stays in sync.
// Clean URLs (BrowserRouter + prerendered static HTML), so every route is a
// real, separately-indexable page.

import { writeFileSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ORIGIN = 'https://www.aasaitech.in'

// Pull slugs out of content.js without importing JSX/runtime deps
const content = readFileSync(resolve(__dirname, '../src/data/content.js'), 'utf8')
const slugs = [...content.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1])

const today = new Date().toISOString().slice(0, 10)

const urls = [
  { loc: `${ORIGIN}/`, priority: '1.0', freq: 'weekly' },
  { loc: `${ORIGIN}/products`, priority: '0.9', freq: 'weekly' },
  { loc: `${ORIGIN}/about`, priority: '0.7', freq: 'monthly' },
  { loc: `${ORIGIN}/contact`, priority: '0.7', freq: 'monthly' },
  ...slugs.map((s) => ({ loc: `${ORIGIN}/products/${s}`, priority: '0.8', freq: 'monthly' })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

writeFileSync(resolve(__dirname, '../public/sitemap.xml'), xml)
console.log(`[sitemap] wrote ${urls.length} URLs to public/sitemap.xml`)
