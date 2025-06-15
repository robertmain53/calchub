# 🛠️ Developer Guide — CalcHub

This guide walks through the internal structure, development workflow, and CI/CD setup of the CalcHub project.

---

## ⚙️ Tech Stack

- **Nuxt 3**
- **@nuxt/content** for markdown
- **PWA** via `@vite-pwa/nuxt`
- **Multilingual** via `@nuxtjs/i18n`
- **CI**: GitHub Actions + Lighthouse CI
- **Structured Data Testing**: `structured-data-testing-tool`
- **Auth**: JWT-based client-only guard

---

## 🔧 Dev Setup

```bash
git clone https://github.com/YOUR_ORG/calchub.git
cd calchub
npm install
npm run dev
```

Create `.env`:

```
API_BASE_URL=https://your-api-url.com
SITE_URL=https://socalsolver.com
```

---

## 📁 Folder Overview

- `content/calculators/*.md` → Markdown-based calculators
- `components/calculators/*.vue` → Vue-based UIs
- `pages/calculators/[slug].vue` → Dynamic loader
- `pages/category/[slug].vue` → SEO category pages
- `pages/admin/` → Admin interface
- `middleware/auth.global.ts` → Route guard
- `utils/isTokenExpired.ts` → Auth helper

---

## ✨ Calculator Authoring

Each calculator consists of:
- Markdown with frontmatter:
```md
---
title: Mortgage Calculator
category: finance
tags: [loan, interest]
description: Calculate mortgage payments easily.
---
<CalculatorMortgage />
```

- A Vue component in `components/calculators/CalculatorMortgage.vue`

---

## 🧪 SEO & Schema Testing

Uses **Lighthouse CI** + `structured-data-testing-tool`.

To run manually:

```bash
npx lhci autorun
npx structured-data-testing-tool https://your-url.com/calculators/mortgage
```

---

## 🔄 CI/CD Setup

GitHub Actions:

- Lints
- Runs Lighthouse
- Runs structured data validator
- PWA validation coming soon

Config files:
- `.lighthouserc.js`
- `.github/workflows/lighthouse-sdtt.yml`

---

## 🧱 Deployment Targets

- **Netlify**: Zero-config
- **Render** or VPS:
  - `npm install`
  - `npm run build`
  - `npm run preview`

---

## 🔒 Admin Panel

- Path: `/admin`
- Uses JWT token stored in localStorage
- `auth_token` must be valid
- Auto-expiry detection via `isTokenExpired.ts`

---

## 📎 Notes

- Translations auto-load
- Structured data (`<script type="application/ld+json">`) added to:
  - Calculator pages
  - Category pages
- Related calculators auto-inferred via shared tags/categories

---

Happy building! 🌅

## 📎 Author Linking
To link a calculator to its author page, add this to its frontmatter:

```yaml
author: Alex Thompson
```
Then include `<CalculatorAuthorLink :author="frontmatter.author" />` in the page layout.
