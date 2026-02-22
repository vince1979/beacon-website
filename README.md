# Beacon — Marketing Website

Production-quality marketing website for **Beacon**, the AI-powered legal operations platform. Built with Next.js 14, TypeScript, and Tailwind CSS — visually matching the Beacon app's dark navy aesthetic with purple/teal/amber accents.

---

## Tech Stack

| Tool | Version |
|------|---------|
| Next.js (App Router) | 14.2.5 |
| React | 18 |
| TypeScript | 5 |
| Tailwind CSS | 3.4 |
| lucide-react | 0.400 |
| clsx | 2.1 |

---

## Getting Started

### Prerequisites
- Node.js 18.17+ (required by Next.js 14)
- npm 9+

### Install & Run

```bash
# 1. Clone / unzip the project
cd beacon-website

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

```bash
npm run dev      # Start development server (hot reload)
npm run build    # Production build
npm run start    # Start production server (after build)
npm run lint     # ESLint check
```

---

## Project Structure

```
beacon-website/
├── public/
│   └── screens/            ← Drop screenshot images here (see below)
│       ├── dashboard.png
│       ├── billing-review.png
│       ├── client-intelligence.png
│       ├── clients-portfolio.png
│       └── settings-integrations.png
├── src/
│   ├── app/
│   │   ├── layout.tsx          Root layout (Nav + Footer)
│   │   ├── page.tsx            Home (/)
│   │   ├── globals.css         Global styles + CSS variables
│   │   ├── sitemap.ts          Auto-generated sitemap
│   │   ├── robots.ts           robots.txt
│   │   ├── product/page.tsx    /product
│   │   ├── pricing/page.tsx    /pricing
│   │   ├── company/page.tsx    /company
│   │   └── contact/page.tsx    /contact
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx  Sticky header with blur
│   │   │   └── Footer.tsx      Sitemap footer
│   │   ├── sections/           Home page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TrustedBySection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── ScreenshotsSection.tsx
│   │   │   ├── HowItWorksSection.tsx
│   │   │   ├── SecuritySection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── CTASection.tsx
│   │   └── ui/                 Reusable design system components
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── ClientBadge.tsx
│   │       ├── GlowRing.tsx
│   │       ├── PortfolioGauge.tsx
│   │       └── StatCard.tsx
├── tailwind.config.ts          Design tokens (colors, shadows, fonts)
├── next.config.js
├── tsconfig.json
└── postcss.config.js
```

---

## Screenshot Images

Place your app screenshots in `public/screens/` with these exact filenames:

| File | Content |
|------|---------|
| `dashboard.png` | Dashboard / morning brief view |
| `billing-review.png` | Billing review / proformas |
| `client-intelligence.png` | Client intelligence search |
| `clients-portfolio.png` | Client portfolio list |
| `settings-integrations.png` | Settings / connectors |

> The screenshot gallery gracefully falls back to a placeholder UI if any image is missing — so the site still looks polished without screenshots.

---

## Design Tokens

All colors, shadows, and typography are centralized in `tailwind.config.ts`:

```ts
colors: {
  'bg-base':      '#0A0D14',   // Page background
  'bg-surface':   '#0E1420',   // Section surfaces
  'bg-card':      '#141C2B',   // Card backgrounds
  'bg-elevated':  '#1A2336',   // Elevated elements
  'primary':      '#7C5CFF',   // Purple accent
  'success':      '#2DD4BF',   // Teal / connected
  'warning':      '#F59E0B',   // Amber / threshold
  'danger':       '#F87171',   // Red / critical
  'text-primary': '#F0F2F8',
  'text-secondary':'#8899BB',
  'text-muted':   '#4A5568',
}
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, features, screenshots, how it works, security, testimonials, CTA |
| `/product` | Deep-dive into each module with live mini UI previews |
| `/pricing` | 3-tier pricing with monthly/annual toggle |
| `/company` | About, mission, team, careers |
| `/contact` | Validated contact form + calendly-style booking card |

---

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (follow prompts)
vercel

# Or connect your GitHub repo at vercel.com
# Framework: Next.js (auto-detected)
# Root directory: . (default)
# No environment variables required
```

---

## Customisation

- **Logo / brand name**: Update `Navigation.tsx` and `Footer.tsx`
- **Copy / content**: Each section component is self-contained
- **Colors**: Edit `tailwind.config.ts` → `theme.extend.colors`
- **OG image**: Replace `public/og-image.png` (1200×630px)
- **Domain**: Update `metadataBase` in `src/app/layout.tsx` and URLs in `sitemap.ts`

---

## Accessibility

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- `focus-visible` keyboard focus rings on all interactive elements
- Sufficient color contrast ratios (WCAG AA)
- `aria-label` on icon-only buttons
- `alt` text on all images

---

## License

Private — Beacon Legal Technologies, Inc.
