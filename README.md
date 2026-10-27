# You Aspirant — Company Website (Animated & Theme-Aware Edition)

A modern, responsive, SEO-optimized, and highly animated web application built for **You Aspirant**, a premier career guidance and training company.

Live Repository: [https://github.com/BORISH1/karka_academy](https://github.com/BORISH1/karka_academy)

---

## 🌟 Key Features

### 🌓 1. Complete Light & Dark Theme System
- **Three Modes**: `Light`, `Dark`, and `System` (follows OS `prefers-color-scheme`).
- **No-Flash Guarantee**: Inline script in `<head>` executes prior to first paint to prevent white flash.
- **Persistent State**: Theme choice is automatically remembered via `localStorage`.
- **Zero Hardcoded Colors**: Powered by semantic CSS variable tokens:
  - `--background`, `--foreground`
  - `--surface`, `--surface-elevated`
  - `--primary`, `--accent`
  - `--muted`, `--border`, `--ring`
- **WCAG AA Compliance**: High-contrast ratios (> 4.5:1 text, > 3:1 UI components) across both themes.

### 🎨 2. Performance-First Animation System
- **Interactive Canvas Mesh & Particles**: GPU-accelerated constellation effect in Hero that reacts gently to desktop mouse movement.
- **Auto Low-Power Fallback**: Automatically reduces particle density on devices with `<= 4` CPU cores.
- **Tab & Scroll Detection**: Pauses automatically when scrolled out of view (`IntersectionObserver`) or when the tab is hidden (`visibilitychange`).
- **Global Animation Control**: Accessible **"Animations: Active / Paused"** toggle in the footer for sensitive users.
- **Native `prefers-reduced-motion` Support**: Disables particle physics and transitions when OS reduced motion is active.
- **Animated Viewport Counters**: Stat counters in the trust bar count up smoothly when entering view.
- **Interactive Testimonial Carousel**: Touch-swipe enabled, auto-play with pause on hover/focus and manual arrow controls.
- **Floating WhatsApp Button**: Features a gentle breathing pulse ring and pre-filled enquiry message.

### 📋 3. Multi-Step Lead Generation Wizard
- **4-Step Guided Flow**:
  1. Contact Details (Name, Phone, Email)
  2. Student Persona (12th student, Undergrad, Career Switcher, Parent)
  3. Program Selection (Counselling, Full Stack, Data Science, DevOps, etc.)
  4. Preferred Callback Slot & Consent Checkbox
- **Instant Client Validation**: Real-time error banners announced via `aria-live`.
- **WhatsApp Fast-Track**: Direct link to confirm consultation via WhatsApp.

---

## 📁 Site Pages & Routing

| Route | Page | Key Features |
|---|---|---|
| `/` | **Home** | Interactive Hero, trust counter, services overview, featured programs, 4-step pathway, testimonial slider, FAQ accordion |
| `/about` | **About Us** | Mission & story, guiding values, growth timeline, and leadership team credentials |
| `/services` | **Career Services** | Full catalog of 6 guidance tracks with target audience, deliverables, and duration |
| `/courses` | **Courses Catalog** | Searchable catalog with instant category filtering (Tech, Data & AI, Career, Business) |
| `/courses/[slug]` | **Course Detail** | Week-by-week syllabus, technologies mastered, target roles, and sticky enrollment sidebar |
| `/stories` | **Success Stories** | Detailed student transitions, salary hikes, company offers, and key takeaways |
| `/testimonials` | **Testimonials** | Category-filtered reviews (Students, Parents, Career Switchers, College Partners) |
| `/blog` | **Blog / Guides** | Actionable career guides with category badges and read-time estimates |
| `/blog/[slug]` | **Article View** | In-depth guide with reading progress bar at the top and inline lead capture banner |
| `/contact` | **Book Session** | Multi-step interactive lead wizard, office hub locations (Chennai & Bangalore), and direct phone/WhatsApp |
| `/privacy`, `/terms`, `/refund` | **Legal** | 7-day money-back guarantee, student code of conduct, and zero-spam policy |

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.3 (App Router, React 18, TypeScript)
- **Styling**: Tailwind CSS with custom CSS variables & dark mode class
- **Animation**: Canvas GPU rendering, CSS keyframes, Framer Motion
- **Icons & Components**: Custom accessible SVGs & Radix UI primitives
- **Typography**: Self-hosted `Inter` via `next/font/google` (`font-display: swap`)
- **Build Output**: 23 static pre-rendered routes (SSG)

---

## 🚀 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 3. Production Build
```bash
npm run build
```

---

## ☁️ Deployment on Vercel

1. Push your changes to GitHub (already linked to `BORISH1/karka_academy`).
2. Visit **[vercel.com/new](https://vercel.com/new)** and import `BORISH1/karka_academy`.
3. Framework Preset: **Next.js**.
4. Root Directory: `./`.
5. Click **Deploy**. Vercel will build the 23 static pages and assign your live URL!
