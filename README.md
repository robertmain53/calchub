# 🌅 CalcHub — World-Class Calculator Publisher

**Sunset-themed, SEO-optimized, multilingual, PWA-ready Nuxt app** for generating, managing, and publishing the best online calculators in the world.

---

## 📦 Features

- ✅ Markdown-powered calculators with SEO metadata
- ✅ Auto-related suggestions via tags and categories
- ✅ Dynamic category pages with FAQ schema
- ✅ Admin dashboard with login, review, publish
- ✅ Lighthouse CI + Rich Results testing
- ✅ Multilingual (en, fr, es, it, zh, ko)
- ✅ PWA + full offline support
- ✅ Analytics + AdSense ready
- ✅ Sunset-themed UX (California Coast ☀️)

---

## 🚀 Quick Start (Local Dev)

```bash
git clone https://github.com/YOUR_USERNAME/calchub.git
cd calchub
npm install
npm run dev
```

---

## 🌍 Project Structure

```
/pages
  /calculators        → Dynamic calculator markdown rendering
  /category           → SEO-optimized category routes
  /admin              → Admin dashboard (login, approve, publish)

content/
  calculators/*.md    → Main calculator content

components/
  calculators/*.vue   → Calculator UIs
```

---

## ⚙️ Environment Variables

Create `.env`:

```
API_BASE_URL=https://your-api-host.com
SITE_URL=https://socalsolver.com
```

---

## 🧪 Testing SEO & Schema

Runs automatically via GitHub Actions.

To run manually:

```bash
npx lhci autorun
npx structured-data-testing-tool https://your-url.com/calculators/bmi
```

---

## ✅ Creating a Calculator

Use the `calcbundle.json` or `.md` + `.vue` approach.

### Example:

**content/calculators/bmi-calculator.en.md**
```md
---
title: Body Mass Index Calculator
description: Easily calculate your BMI and assess health.
category: health
tags: [bmi, weight, body]
---

<CalculatorBmi />
```

**components/calculators/bmi-calculator.vue** → UI logic

---

## 📤 Deployment

Supports:

- 🔥 Netlify (push to GitHub)
- 🖥️ Render/VPS with Node (via `npm run preview`)
- ⚡ CI/CD auto-publish with GitHub Actions

---

## 🔐 Admin Dashboard

- Accessible at `/admin`
- Auth-protected with JWT
- Features: list, edit, review, publish calculators

---

## 📈 Analytics + Ads

Already integrated:
- Google Analytics (GA4-ready)
- AdSense (auto script included)

Set your real IDs in `nuxt.config.ts` under `head.script`.

---

## 🏁 Final Setup Checklist

✅ Install  
✅ Configure `.env`  
✅ Deploy with GitHub + Netlify or VPS  
✅ Customize homepage and footer  
✅ Start publishing great calculators 🌟