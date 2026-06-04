// ============================================================
// Central content store — sourced from the existing aasaitech.in
// site, the BoutiqueAI site, and the four official product
// overview documents (BoutiqueAI, Aasai SmartEDU, Aasai Tech AI,
// SupportGent).
// ============================================================

export const COMPANY = {
  name: 'Aasai Tech',
  legalName: 'Aasai Tech Providers Private Limited',
  tagline: 'AI-First Software Studio · Tamil Nadu, India',
  domain: 'www.aasaitech.in',
  email: 'info@aasaitech.in',
  altEmail: 'aasaitechproviders@gmail.com',
  phone: '+91 89391 34777',
  phoneHref: 'tel:+918939134777',
  location: 'Chennai, Tamil Nadu, India',
  responseTime: 'Within 24 hours on business days',
  brochure: '/images/AasaiTech_Brochure.pdf',
  social: {
    facebook: 'https://www.facebook.com/share/16oqTSW37R/',
    linkedin: 'https://www.linkedin.com/in/aasai-tech-providers-aa4abb367',
    instagram: 'https://www.instagram.com/aasai_tech_providers',
    youtube: 'https://youtube.com/@aasai_tech_providers',
  },
}

export const STATS = [
  { num: '4', suffix: '+', label: 'Production AI products deployed' },
  { num: '2', suffix: '', label: 'Industry program recognitions' },
  { num: '10', suffix: '+', label: 'Client projects delivered' },
  { num: '24/7', suffix: '', label: 'AI products available, always on' },
]

export const PARTNERS = [
  { name: 'DPIIT', sub: 'Recognized Startup', icon: 'fa-award', color: '#c44200' },
  { name: 'NVIDIA Inception', sub: 'AI Startup Program', icon: 'fa-microchip', color: '#4d7c00' },
  { name: 'Amazon AWS', sub: 'Cloud Infrastructure', icon: 'fa-aws', brand: true, color: '#ff9900' },
  { name: 'Microsoft Azure', sub: 'OpenAI & Cloud', icon: 'fa-microsoft', brand: true, color: '#0078d4' },
  { name: 'Google Cloud', sub: 'Gemini & GCP', icon: 'fa-google', brand: true, color: '#4285f4' },
  { name: 'Startup India', sub: 'Govt. of India', icon: 'fa-flag', color: '#138808' },
  { name: 'Cloudflare', sub: 'Edge & Security', icon: 'fa-cloud', color: '#f59e0b' },
  { name: 'MongoDB Atlas', sub: 'Vector Search DB', icon: 'fa-database', color: '#13aa52' },
  { name: 'Razorpay', sub: 'Payments', icon: 'fa-credit-card', color: '#0c2451' },
]

// ── PRODUCTS ──────────────────────────────────────────────
// Each product has its own dedicated page at #/products/:slug
export const PRODUCTS = [
  // ========================= BOUTIQUEAI =========================
  {
    slug: 'boutique-ai',
    name: 'BoutiqueAI',
    category: 'Virtual Try-On · Retail',
    icon: 'fa-shirt',
    color: '#7c6fff',
    soft: 'rgba(124,111,255,0.09)',
    featured: true,
    live: true,
    url: 'https://boutiquesaas.aasaitech.in',
    highlights: [
      { icon: 'fas fa-camera', label: 'Upload a selfie, try on instantly' },
      { icon: 'fas fa-mobile-alt', label: 'No app download needed' },
      { icon: 'fab fa-whatsapp', label: 'Share via WhatsApp & Instagram' },
      { icon: 'fas fa-palette', label: 'Your brand, your colors' },
    ],
    short:
      "Give your boutique its own AI dressing room. Customers upload a selfie, pick an outfit, and instantly see how it looks on them — no app, no code, no setup.",
    hero: {
      badge: '✨ Virtual Try-On — Built for Indian Boutiques',
      title: "Your boutique's own AI dressing room",
      sub: "Boutique owners create a branded AI stylist, upload product photos, and share one link via WhatsApp or Instagram. Customers tap, upload a selfie, pick a product, and see a photorealistic try-on — no app download required.",
      note: 'Start free · No coding · Share on WhatsApp & Instagram',
    },
    problems: [
      { icon: '📦', title: 'High return rates', desc: 'Customers order, discover the outfit doesn’t suit them, and return it — costing time, logistics, and restocking effort.' },
      { icon: '🐢', title: 'Slow buying decisions', desc: '"Will this saree match my skin tone? Does this blouse fit?" Every doubt over WhatsApp delays or kills the sale.' },
      { icon: '🪞', title: 'No visual confidence', desc: 'Product photos show garments on a mannequin or generic model — not on the actual customer. Trust and excitement are lost.' },
      { icon: '🧑‍💻', title: 'No app, no tech budget', desc: 'Boutique owners aren’t developers. They can’t build or afford a custom try-on app — they need something that works from day one.' },
      { icon: '🌙', title: 'After-hours sales lost', desc: 'When a customer browses at 10pm with questions, there’s no one to answer. Potential sales slip away overnight.' },
      { icon: '🔗', title: 'Low upselling', desc: 'Showing how a saree, blouse, and jewellery work together is hard over chat. Boutiques lose combo and accessory sales.' },
    ],
    steps: [
      { icon: '🛍️', title: 'Create your agent', desc: 'Sign in with Google. Enter your boutique name, choose your category (Sarees, Western Wear, Jewellery…), pick a brand colour, and write a welcome message. Your branded AI stylist is created instantly.', time: 'Sign in with Google' },
      { icon: '📸', title: 'Upload your catalog', desc: 'Upload product photos — sarees, dresses, jewellery, footwear, or any apparel. The AI learns your inventory automatically. Add or remove products anytime; changes go live immediately.', time: 'Drag & drop' },
      { icon: '🔗', title: 'Share your link & go live', desc: 'Copy your unique try-on URL and share it on WhatsApp, Instagram bio, or your website. Customers tap, upload a selfie, pick an outfit, and see their try-on right in the browser.', time: "Done. You're live." },
    ],
    audience: [
      { emoji: '🥻', title: 'Saree & Silk Stores', desc: 'Let customers see how Kanjivarams, Banarasis, and designer blouses look on them before they visit or place a WhatsApp order.' },
      { emoji: '👗', title: 'Western & Fusion Wear', desc: 'Dresses, co-ords, tops — ideal for Instagram boutiques that sell nationwide to customers who can’t visit in person.' },
      { emoji: '💍', title: 'Jewellery & Accessories', desc: 'Show how necklaces, earrings, and bangles complement a full outfit. AI renders fine jewellery detail so customers buy with confidence.' },
      { emoji: '👶', title: 'Kids Clothing Stores', desc: 'Parents love seeing how ethnic wear and dresses look before ordering. Reduce return rates and increase repeat purchases.' },
      { emoji: '👠', title: 'Footwear Shops', desc: 'Customers pick an outfit from the catalog and immediately see matching footwear on themselves — seamless cross-selling.' },
      { emoji: '🏪', title: 'Multi-Brand Boutiques', desc: 'Mix sarees, western wear, and jewellery in one catalog. Customers try combo outfits — three products, one image, one sale.' },
    ],
    features: [
      { icon: '🤖', title: 'Your own branded AI agent', desc: 'Custom name, logo, colors, and welcome message. Customers interact with your boutique’s own stylist, not a generic bot.' },
      { icon: '🪭', title: 'Photorealistic try-ons', desc: "Powered by Google Gemini's latest image AI. Fabric drapes naturally, colors are accurate, and the customer's face stays unchanged." },
      { icon: '👗', title: 'Combo try-ons', desc: 'Customers try on up to 3 products together — saree, blouse, and jewellery — in one generated image. Ideal for upselling.' },
      { icon: '💬', title: 'AI chat stylist built in', desc: 'Between try-ons, the AI answers questions about size, availability, color matching, and recommendations — 24/7.' },
      { icon: '📊', title: 'Real-time analytics dashboard', desc: 'See which products get tried most, sessions per day, which items convert best, and customer engagement — all from one dashboard.' },
      { icon: '🌐', title: 'Instant branded URL', desc: 'Every agent gets a unique subdomain (your-store.boutiquesaas.aasaitech.in). Custom domains available on paid plans.' },
      { icon: '🔒', title: 'Per-customer rate limits', desc: 'Set how many try-ons each customer gets per day, week, month, or total. Prevents credit abuse and protects your catalog.' },
      { icon: '🏷️', title: 'Watermarked downloads', desc: 'When customers download their try-on photo, your logo and name are added automatically. Every share is free marketing.' },
      { icon: '⚡', title: 'Credit-based, pay as you grow', desc: 'Flexible credit-based pricing with quality tiers, so you only pay for what you use. Start free and top up whenever you need more.' },
      { icon: '📤', title: 'Customer data export', desc: 'Export full customer data to CSV — mobile numbers, try-on counts, agent, last active date. Useful for WhatsApp remarketing.' },
      { icon: '🧧', title: 'GST-compliant invoicing', desc: 'Enter your GSTIN and business name once. All payment invoices are generated GST-compliant automatically.' },
      { icon: '🔌', title: 'API access (coming soon)', desc: 'REST API for integrating BoutiqueAI into your own website, app, or ordering system. Already on the roadmap.' },
    ],
    pricing: [
      { name: 'Free', price: 'Free', period: '', note: 'No credit card needed', credits: 'Free credits on signup', popular: false,
        feats: ['Free credits to get started', 'Unlimited AI agents', 'Photorealistic try-ons', 'Your own subdomain URL', 'AI chat stylist', 'Community support'] },
      { name: 'Standard', price: 'Starter', period: '', note: 'For small boutiques', credits: 'Monthly credit pack', popular: false,
        feats: ['A monthly credit allowance', 'Unlimited AI agents', 'Standard + balanced quality', 'Custom domain supported', 'AI chat stylist', 'Email support'] },
      { name: 'Pro Store', price: 'Growth', period: '', note: 'For active stores', credits: 'Larger monthly credits', popular: true,
        feats: ['A larger monthly credit allowance', 'Unlimited AI agents', 'All quality tiers', 'Custom domain + priority queue', 'Combo try-ons & analytics', 'Priority support'] },
      { name: 'Studio Premium', price: 'Custom', period: '', note: 'For high-volume brands', credits: 'Custom volume', popular: false,
        feats: ['Custom credit volume', 'Unlimited AI agents', 'Dedicated infrastructure', 'Full custom domain setup', 'Bulk catalog generation', 'Dedicated account manager'] },
    ],
    pricingNote: 'Flexible credit-based pricing with quality tiers, billed via Razorpay (UPI, cards, net banking, wallets). Visit the platform for current plans and pricing, or contact us for a tailored quote.',
    useCases: [
      { title: 'WhatsApp Boutique — closing sales faster', desc: 'A saree store gets a steady stream of WhatsApp enquiries, but many shoppers hesitate because they’re unsure how a piece will look on them. With a try-on link on every catalog message, customers upload a photo, try the saree, and reply ready to order — shortening the back-and-forth.' },
      { title: 'Instagram Boutique — nationwide sales', desc: 'A western-wear boutique ships across India via Instagram DMs. The bio link lets anyone try on any piece from anywhere, so shoppers buy with more confidence after seeing the outfit on themselves, and the AI handles common "do you have size M?" questions around the clock.' },
      { title: 'Jewellery Store — cross-selling with confidence', desc: 'A jewellery brand uses combo try-ons so customers pick a saree and a necklace together and see the complete look in one image — making it natural to bundle matching sets and lift the average order.' },
      { title: 'Kids Wear — reducing returns', desc: 'A kids clothing store sees returns from catalog-based ordering. Parents upload a photo of their child, pick a frock or ethnic outfit, and see a try-on before ordering — helping reduce returns and build repeat trust.' },
    ],
    security: [
      { icon: '🔒', title: 'Encrypted image storage', desc: 'All customer photos are stored in encrypted AWS S3 buckets. Images are never shared or used for AI model training.' },
      { icon: '🗑️', title: 'Customer deletion rights', desc: 'Customers can delete their base photo at any time from within the try-on interface.' },
      { icon: '💳', title: 'Secure payments via Razorpay', desc: 'Payments are processed through Razorpay (PCI-DSS compliant). Card details are never stored on BoutiqueAI servers.' },
      { icon: '🔐', title: 'Google OAuth login', desc: 'Boutique owner accounts are secured with Google Sign-In. No passwords to manage or forget.' },
    ],
    faq: [
      { q: 'Do my customers need to download an app?', a: 'No. They just tap your link — it opens in any browser on their phone or laptop. No download, no login required for them.' },
      { q: 'How fast are the try-on images?', a: 'Try-ons are generated in seconds, right in the browser. Higher quality tiers take a little longer but show finer fabric detail.' },
      { q: 'What happens when I run out of credits?', a: 'Customers see a friendly message that try-ons are temporarily unavailable. You can top up anytime from your dashboard — credits add instantly and top-up packs never expire.' },
      { q: 'Can I manage multiple boutiques?', a: 'Yes. Every plan — including Free — supports unlimited AI agents, each a separate boutique with its own catalog, URL, and chat history.' },
      { q: 'Can I use my own domain name?', a: 'Yes, on paid plans you can connect a custom domain like tryon.yourstore.com with a simple one-step DNS setup.' },
      { q: 'Are customer photos stored safely?', a: 'Yes. All images are stored in encrypted AWS S3 buckets. Customers can delete their base photo anytime, and we never use images for training.' },
    ],
    tech: ['Google Gemini Image AI', 'AWS S3 Encrypted Storage', 'Streaming SSE Output', 'Per-agent Subdomains', 'Razorpay (GST invoicing)'],
  },

  // ========================= AASAI SMARTEDU =========================
  {
    slug: 'smartedu',
    name: 'Aasai SmartEDU',
    category: 'EdTech · Multi-Tenant SaaS',
    icon: 'fa-graduation-cap',
    color: '#2b24e8',
    soft: 'rgba(43,36,232,0.07)',
    live: true,
    url: 'https://aasaischool.ai.aasaitech.in',
    short:
      'AI-powered, multi-tenant school management & learning platform. Every school gets its own branded portal with role-based dashboards and a RAG assistant trained on its own study materials.',
    hero: {
      badge: '🎓 Multi-Tenant School Platform',
      title: 'Every school its own branded AI learning portal',
      sub: 'A cloud-based, multi-tenant platform that gives each school a white-labelled portal on its own subdomain — with role-based dashboards for admins, teachers, and students, and a RAG assistant that answers from the school’s own uploaded materials.',
      note: 'Google Sign-In · Per-school branding · RAG curriculum AI · Built on AWS',
    },
    metrics: [
      { num: '3', label: 'Role-based dashboards' },
      { num: 'RAG', label: 'School-specific AI engine' },
      { num: '24/7', label: 'Student doubt-clearing' },
      { num: 'AWS', label: 'Serverless, multi-tenant' },
    ],
    problems: [
      { icon: '🏫', title: 'Schools can’t afford custom software', desc: 'Most schools share a generic platform or spend lakhs building their own. SmartEDU gives every school a fully white-labelled portal on its own subdomain at a fraction of the cost.' },
      { icon: '🌙', title: 'No one to ask at 10 PM', desc: 'Doubt-clearing is limited to school hours. With SmartEDU’s AI assistant, a student can ask any question in their language and get an instant, structured answer any time.' },
      { icon: '📂', title: 'Teachers waste hours distributing notes', desc: 'Teachers juggle WhatsApp groups, email, and USB drives. SmartEDU gives a drag-and-drop upload panel that instantly makes materials available and feeds the AI.' },
      { icon: '👁️', title: 'Admins are blind to portal activity', desc: 'Without a console, admins can’t see usage or enrolment. The Admin Dashboard gives real-time visibility into accounts, uploads, and statistics.' },
      { icon: '🤖', title: 'Generic AI doesn’t know your curriculum', desc: 'Public tools answer from the open internet. SmartEDU’s RAG engine retrieves answers exclusively from the documents your own teachers uploaded — always curriculum-aligned.' },
    ],
    steps: [
      { icon: '🏫', title: 'School onboarding', desc: 'Aasai registers the school, creates a subdomain (e.g. aasaischool.ai.aasaitech.in), and uploads the school’s logo, name, and brand colours. No installation required.', time: 'Zero setup for schools' },
      { icon: '👥', title: 'Admin sets up users', desc: 'The admin logs in via Google Sign-In and adds teacher emails through the Admin Dashboard. Teachers get instant access; students self-register or are added in bulk.', time: 'Minutes' },
      { icon: '📤', title: 'Teachers upload materials', desc: 'Teachers select the class standard and subject, then upload PDFs, notes, or worksheets. Each document is processed by AWS Lambda and indexed into the RAG knowledge base.', time: 'Drag & drop' },
      { icon: '💬', title: 'Students ask questions', desc: 'Students pick standard, subject, and preferred language, then type a question. The AI retrieves relevant passages and returns a structured answer — with tables, derivations, or step-by-step solutions.', time: 'Instant' },
    ],
    audience: [
      { emoji: '🏫', title: 'Schools & Institutions', desc: 'CBSE, State Board, and ICSE schools that want a digital-first platform without the cost of custom development.' },
      { emoji: '🧑‍💼', title: 'School Administrators', desc: 'Principals and IT coordinators who want visibility and control over the portal without technical complexity.' },
      { emoji: '🧑‍🏫', title: 'Teachers', desc: 'Educators who want a simple way to publish study material and make it instantly accessible to students.' },
      { emoji: '🧑‍🎓', title: 'Students', desc: 'Learners who need instant, syllabus-accurate answers in their own language — especially outside school hours.' },
      { emoji: '🤝', title: 'EdTech Resellers', desc: 'Partners who want to white-label and resell a proven AI school platform to institutions.' },
    ],
    features: [
      { icon: '🎨', title: 'Multi-tenant school branding', desc: 'The system detects the school from its subdomain and loads its name, logo, and custom colours across the entire portal. Everyone feels they’re on their own school’s platform.' },
      { icon: '🔑', title: 'Google Sign-In authentication', desc: 'Login is handled entirely through Google OAuth 2.0 — no usernames or passwords. Users are mapped to a school and role and routed to the right dashboard automatically.' },
      { icon: '🧭', title: 'Role-based dashboards', desc: 'Three distinct dashboards — Admin, Teacher, and Student — each with its own interface, permissions, and tools. No clutter from features meant for other roles.' },
      { icon: '📤', title: 'Teacher document upload portal', desc: 'Drag-and-drop upload, standard/subject categorisation, group-level targeting, real-time progress, a personal library with status, and total page-count tracking.' },
      { icon: '🧠', title: 'AI student Q&A (RAG engine)', desc: 'Students select standard, subject, medium and answer language, ask a question, and get a structured answer sourced only from the school’s own materials — never hallucinated.' },
      { icon: '📊', title: 'Admin dashboard', desc: 'Live stats (documents, processing status, pages indexed), teacher and student management, a document activity log with timestamps, and search across users.' },
      { icon: '🔐', title: 'Session management & security', desc: 'JWT tokens silently restore valid sessions; role verification is enforced on every dashboard, redirecting unauthorised users to login.' },
      { icon: '📱', title: 'Responsive, mobile-friendly', desc: 'All dashboards work on phones, tablets, and desktops — ideal for Indian students who often use smartphones.' },
    ],
    why: [
      'School-specific AI — answers come from your school’s own materials, not the open internet',
      'Zero setup for schools — no servers, no installation, no IT department required',
      'Full white-labelling — every school sees its own brand, not ours',
      'Multi-language support — students can learn in their mother tongue',
      'Role-based security — admins, teachers, and students see only what they need',
      'Built on AWS — enterprise-grade reliability, scalable to thousands of schools',
    ],
    tech: ['Google OAuth 2.0', 'AWS API Gateway + Lambda', 'Amazon S3', 'RAG Vector Knowledge Base', 'JWT Session Security', 'Vanilla JS — fast on any device'],
  },

  // ========================= AASAI TECH AI (Free AI Chat) =========================
  {
    slug: 'aasai-tech-ai',
    name: 'Aasai Tech AI',
    category: 'Free AI Chat · SaaS',
    icon: 'fa-comments',
    color: '#1a7a4a',
    soft: 'rgba(26,122,74,0.09)',
    live: true,
    url: 'https://freeai.aasaitech.in',
    short:
      'A free, browser-based AI chat platform with vision, streaming replies, cloud-synced history, and guest mode — instant access to a powerful AI assistant with no downloads or subscriptions.',
    hero: {
      badge: '💬 Free AI Chat Platform',
      title: 'A powerful AI assistant, free, right in your browser',
      sub: 'Aasai Tech AI gives individuals, students, and businesses instant access to a powerful AI assistant — no downloads, no subscriptions, no barriers. Chat as a guest in seconds, or sign in with Google to unlock streaming replies, vision, and cloud history.',
      note: '100% free to start · No download · Made in India · Guest mode available',
    },
    metrics: [
      { num: 'Free', label: 'No card, no trial period' },
      { num: '4 imgs', label: 'Vision: up to 10 MB each' },
      { num: 'Cloud', label: 'Synced chat history' },
      { num: 'SSE', label: 'Streaming replies' },
    ],
    features: [
      { icon: '🤖', title: 'Real-time AI responses', desc: 'Intelligent, context-aware answers to any question — writing, coding, research, math, or general knowledge. Understands multi-turn conversations within a session.' },
      { icon: '⏱️', title: 'Streaming replies', desc: 'For signed-in users, responses stream word-by-word in real time — like watching the AI think — for a smooth, natural experience.' },
      { icon: '🖼️', title: 'Image understanding (Vision AI)', desc: 'Attach up to 4 images per message (10 MB each), or paste from the clipboard. The AI reads, describes, extracts text from, and compares images.' },
      { icon: '🔒', title: 'Secure Google Sign-In', desc: 'One-click sign-in via Google Identity Services. No passwords, no forms.' },
      { icon: '📂', title: 'Cloud-synced history', desc: 'Signed-in users have every conversation saved to the cloud and accessible from any device. Delete individual chats or export everything as JSON.' },
      { icon: '👤', title: 'Guest mode', desc: 'Anyone can start chatting instantly without an account. Guest chats are temporary and subject to a message limit.' },
      { icon: '📊', title: 'Usage statistics dashboard', desc: 'A live panel showing total messages, tokens consumed, sessions, today’s activity, and a quota progress bar — plus a per-session token breakdown.' },
      { icon: '🎨', title: 'Customisation & personalisation', desc: 'Pick a custom accent colour or one of 10 presets, upload a custom profile avatar, and tune behaviour like Enter-to-send and the typing indicator.' },
      { icon: '📱', title: 'Mobile & desktop ready', desc: 'Fully responsive with an overlay sidebar on small screens and iOS safe-area handling, plus keyboard shortcuts (Cmd/Ctrl+K, Enter, Esc).' },
    ],
    audience: [
      { emoji: '📚', title: 'Students & Learners', desc: 'Instant doubt-clearing in Tamil or English, essay and assignment help, and worked math & science solutions that explain the method.' },
      { emoji: '💼', title: 'Businesses & Professionals', desc: 'Draft client emails, proposals, and summaries in minutes; understand reports and invoices from screenshots; brainstorm ideas and strategy fast.' },
      { emoji: '💻', title: 'Developers & Technical Users', desc: 'Write, fix, and explain code across dozens of languages; generate READMEs, API docs, and code comments from a brief description.' },
      { emoji: '🌍', title: 'Everyday Use', desc: 'Compare products and decisions, get concise research summaries, and generate creative writing — stories, captions, scripts — on demand.' },
    ],
    why: [
      '100% free to start — guest users chat immediately; signed-up users get a generous free quota with full features',
      'No download needed — works in Chrome, Safari, Edge, or Firefox',
      'Made in India — built by a Tamil Nadu startup that understands Indian users, languages, and business contexts',
      'Privacy-conscious — Google-handled auth; chat data stored per-user with full delete and export control',
      'Enterprise-ready credentials — backed by DPIIT recognition and NVIDIA Inception membership',
      'Continuous improvement — regularly updated with new features and performance gains',
    ],
    tech: ['Google OAuth 2.0', 'Streaming via Server-Sent Events', 'Vision (4 images / 10 MB each)', 'Cloud history + JSON export', 'AWS Lambda (ap-southeast-2)'],
  },

  // ========================= SUPPORTGENT =========================
  {
    slug: 'supportgent',
    name: 'SupportGent',
    category: 'Customer Support & Sales · AI',
    icon: 'fa-headset',
    color: '#5a4ddd',
    soft: 'rgba(90,77,221,0.09)',
    live: true,
    url: 'https://supportagent.aasaitech.in',
    short:
      'Build intelligent AI agents that answer questions, recommend products, take orders, and auto-reply across website, WhatsApp, Instagram, and email — working 24/7 with no human intervention.',
    hero: {
      badge: '🎧 AI Support & Sales Platform',
      title: 'AI agents that support and sell, 24/7, on every channel',
      sub: 'Create intelligent chat agents that answer customer questions, recommend products, process orders, and reply across website, WhatsApp, Instagram, and email — all without human intervention. No coding required.',
      note: 'No-code agent builder · Multi-channel · Razorpay in-chat payments · 6 Indian languages',
    },
    metrics: [
      { num: '24/7', label: 'Always-on support' },
      { num: '4', label: 'Channels: web, WA, IG, email' },
      { num: '6', label: 'Indian languages supported' },
      { num: 'No-code', label: 'Setup, no developer needed' },
    ],
    problems: [
      { icon: '🌙', title: 'You can’t be available 24/7', desc: 'Customers ask questions at midnight, on weekends, and during festivals. SupportGent runs 24/7 and handles every query instantly, even while you sleep.' },
      { icon: '🔁', title: 'Hours lost to repetitive questions', desc: '"What’s your return policy?" "Do you deliver to Chennai?" Train SupportGent once and it handles the bulk of your repetitive queries automatically.' },
      { icon: '📥', title: 'Messages scattered across apps', desc: 'WhatsApp, Instagram, and email in separate inboxes is chaotic. SupportGent unifies all channels into one inbox with auto-replies across each.' },
      { icon: '🧩', title: 'Website live chat is complex to build', desc: 'Hiring a developer is expensive. SupportGent’s no-code widget goes live by pasting a single line of HTML — no engineering needed.' },
      { icon: '🛒', title: 'Customers drop off before buying', desc: 'Shoppers have questions at checkout. The AI sales agent answers in real-time, recommends alternatives, and can take payment via Razorpay in-chat.' },
      { icon: '🌐', title: 'You serve many Indian languages', desc: 'The widget supports Tamil, Telugu, Kannada, Malayalam, Hindi, and English — making your business accessible across India in native languages.' },
    ],
    steps: [
      { icon: '🪪', title: 'Create your agent', desc: 'Name your agent, upload your logo, choose a brand colour and theme, write a welcome message, pick a type (Support, Sales, FAQ, General), and set a system prompt to define its behaviour.', time: 'No code needed' },
      { icon: '📚', title: 'Add your knowledge base', desc: 'Paste FAQ text, upload PDF/DOCX/TXT files, or enter a webpage URL to scrape. SupportGent extracts, indexes, and learns your business content.', time: 'Smart training' },
      { icon: '🛍️', title: '(Optional) Enable shopping', desc: 'Toggle shopping on, add products manually or via CSV, connect your Razorpay keys, and set your currency to accept payments inside the chat.', time: 'Sales-ready' },
      { icon: '🚀', title: 'Publish & connect channels', desc: 'Publish to an instant subdomain or embed one HTML line. Connect WhatsApp, Instagram (Meta), and Gmail, and enable AI auto-reply per channel.', time: 'Go live' },
    ],
    features: [
      { icon: '🧱', title: 'No-code AI agent builder', desc: 'Set agent name and persona, upload a logo and welcome message, write a custom system prompt, choose dark/light theme and brand colour, with a real-time live preview.' },
      { icon: '🧠', title: 'Knowledge base (smart training)', desc: 'Train on text/FAQ, PDF/DOCX/TXT uploads, and URL scraping. Add multiple knowledge sources per agent — scaling with your plan — with token tracking per source.' },
      { icon: '🛒', title: 'Shopping & sales automation', desc: 'Product catalogue (manual or CSV), AI product recommendations, Razorpay in-chat payments, order management (Pending/Paid/Fulfilled/Refunded), and sales analytics.' },
      { icon: '📡', title: 'Multi-channel support', desc: 'Website widget (one line of HTML), WhatsApp Business, Instagram DMs, and Gmail/email — with an AI auto-reply toggle per channel so you stay in control.' },
      { icon: '📨', title: 'Unified conversations inbox', desc: 'View, search, and manage every conversation from all channels in one feed, with AI-reply labels and real-time updates — no page refresh.' },
      { icon: '🌍', title: 'Multi-language UI', desc: 'The chat widget serves customers in English, Tamil, Telugu, Kannada, Malayalam, and Hindi.' },
      { icon: '🌐', title: 'Publishing & deployment', desc: 'Instant subdomain (yourstore.supportagent.aasaitech.in), custom domain support, an embed widget snippet, and Draft/Live status control.' },
      { icon: '📊', title: 'Dashboard & analytics', desc: 'Conversation stats with 14-day trends, a token usage meter vs. your plan cap, an agent overview with share links, and full billing history.' },
    ],
    pricing: [
      { name: 'Starter', price: 'Starter', period: '', note: 'For small businesses', credits: 'Multiple agents', popular: false,
        feats: ['A set of AI agents', 'A monthly token allowance', 'Knowledge sources per agent', 'Website + multi-channel widget', 'Email support', 'Entry-level for small businesses'] },
      { name: 'Grower', price: 'Grower', period: '', note: 'For growing teams', credits: 'More agents & tokens', popular: true,
        feats: ['More AI agents', 'A larger monthly token allowance', 'More knowledge sources per agent', 'Custom domain', 'Shopping + Razorpay payments', 'Priority support'] },
      { name: 'Enterprise', price: 'Enterprise', period: '', note: 'For high scale', credits: 'Unlimited scale', popular: false,
        feats: ['Unlimited agents', 'High monthly token allowance', 'Unlimited knowledge sources', 'All features included', 'Unlimited scale', 'Dedicated support'] },
    ],
    pricingNote: 'Token-based plans with an annual-billing discount, plus one-time token top-ups that never expire. Visit the platform for current plans and pricing, or contact us for a tailored quote.',
    audience: [
      { emoji: '🛍️', title: 'E-commerce & D2C brands', desc: 'Automate product discovery and order support, and take payments directly inside the chat.' },
      { emoji: '💇', title: 'Service businesses', desc: 'Salons, clinics, and agencies that want to answer booking and pricing questions automatically.' },
      { emoji: '🧩', title: 'SaaS products', desc: 'Embed an AI FAQ and support bot directly in your app or marketing site.' },
      { emoji: '💬', title: 'High-DM local businesses', desc: 'Businesses receiving high volumes of WhatsApp and Instagram DMs from customers.' },
      { emoji: '📉', title: 'Cost-conscious teams', desc: 'Any business that wants to reduce support costs while improving customer response time.' },
    ],
    tech: ['Custom system prompts', 'RAG knowledge base', 'Razorpay in-chat payments', 'WhatsApp / Instagram / Gmail', 'One-line embed widget', 'Token-based usage'],
  },
]

// ── SERVICES ──────────────────────────────────────────────
export const SERVICES = [
  { num: '01', icon: 'fa-brain', name: 'AI & LLM Development', desc: 'Custom RAG pipelines, LLM fine-tuning, intelligent chatbots, NLP systems, and ML models tailored to your data and domain.' },
  { num: '02', icon: 'fa-mobile-alt', name: 'Mobile App Development', desc: 'iOS and Android applications with AI integrations — GPT assistants, on-device ML, and real-time data sync built for performance.' },
  { num: '03', icon: 'fa-laptop-code', name: 'Web Development', desc: 'Modern SaaS platforms, enterprise portals, and e-commerce solutions built with React, Node.js, and cloud-native architecture.' },
  { num: '04', icon: 'fa-cloud', name: 'Cloud & DevOps', desc: 'AWS, Azure, and GCP deployments, Cloudflare edge infrastructure, CI/CD pipelines, and scalable serverless architectures.' },
  { num: '05', icon: 'fa-cogs', name: 'System Integration', desc: 'Connecting AI capabilities to existing CRMs, ERPs, APIs, and business workflows — seamlessly and reliably at scale.' },
  { num: '06', icon: 'fa-chalkboard-teacher', name: 'Technical Training', desc: 'Hands-on corporate programs in AI/ML, full-stack development, and cloud technologies for teams at every level.' },
]

// ── CLIENT WORK ───────────────────────────────────────────
export const CLIENTS = [
  { cat: 'Life Coaching · Wellness', name: 'HappySoul Coaching', icon: 'fa-heart', color: '#7c3aed', bg: 'linear-gradient(135deg,#f5f0ff,#ede9fe)', url: 'https://happysoul.info/',
    desc: 'Professional coaching platform with an integrated appointment booking system, client management portal, and structured content delivery — built to scale a coaching practice digitally.' },
  { cat: 'Holistic Wellness · Personal Development', name: 'The Alchemy of Living', icon: 'fa-flask', color: '#d97706', bg: 'linear-gradient(135deg,#fffbeb,#fef3c7)', url: 'https://thealchemyofyourliving.in/',
    desc: 'Transformative wellness platform offering holistic life coaching, curated workshop management, and a content hub for personal development resources — a premium experience at every touchpoint.' },
]

// ── RAG FLOW (How our AI works) ───────────────────────────
export const RAG_FLOW = [
  { icon: 'fa-user', title: 'User Query', desc: 'A user asks a natural-language question', edge: 'embed' },
  { icon: 'fa-project-diagram', title: 'Vector Embedding', desc: 'Query converted to a semantic vector', edge: 'search' },
  { icon: 'fa-database', title: 'Vector Store', desc: 'Finds the most semantically similar chunks', edge: 'retrieve' },
  { icon: 'fa-brain', title: 'LLM Generation', desc: 'Gemini / GPT generates a grounded answer', edge: 'respond' },
  { icon: 'fa-comment-dots', title: 'Accurate Answer', desc: 'A precise, sourced, real-time response', edge: null },
]

export const NAV_LINKS = [
  { label: 'Products', to: '/#products' },
  { label: 'Services', to: '/#services' },
  { label: 'How AI Works', to: '/#ragflow' },
  { label: 'Clients', to: '/#clients' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
