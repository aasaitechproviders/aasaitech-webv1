import { Head } from 'vite-react-ssg'

const ORIGIN = 'https://www.aasaitech.in'

// Renders real <title>/<meta> tags into the prerendered HTML for each route,
// so search engines and social scrapers see correct per-page metadata on first
// load — no JS execution required.
export default function SEO({ title, description, path = '/', image }) {
  const fullTitle = title
    ? `${title} | Aasai Tech`
    : 'Aasai Tech | Enterprise AI Solutions | Tamil Nadu, India'
  const url = `${ORIGIN}${path === '/' ? '/' : path}`
  const img = image || `${ORIGIN}/images/logo.png`
  const desc =
    description ||
    'DPIIT-recognized & NVIDIA Inception member building production AI from Tamil Nadu — virtual try-on, school platform, free AI chat, and support & sales agents.'

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
    </Head>
  )
}
