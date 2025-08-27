# Tech Event Motion Site (React + Vite + Tailwind + Framer Motion + tsParticles)

A modern, Techkriti-style event website with full-screen hero, motion effects, interactive sub-events (modals), schedule timeline, and contact section.

## ✨ Features
- Animated particle background (tsParticles)
- Smooth entrance animations (Framer Motion)
- Sticky, translucent navbar
- Interactive event cards + modal details
- Day-wise schedule
- Dark theme by default
- **No registration & no gallery** (as requested)

## 🚀 Get Started
```bash
# 1) Install dependencies
npm install

# 2) Start dev server
npm run dev

# 3) Build for production
npm run build
```

## 🔧 Customize
- Change event name/date in `src/components/Hero.jsx`
- Edit sub-events in `src/components/Events.jsx` (EVENT_DATA array)
- Update schedule in `src/components/Schedule.jsx`
- Update contacts in `src/components/Contact.jsx`
- Replace logo: `src/assets/logo.svg`