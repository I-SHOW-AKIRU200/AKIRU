# AKIRU Portfolio — Vercel Deployment Guide

## Setup

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Import the repo in Vercel — it auto-detects Vite
3. No environment variables needed
4. Build command: `npm run build`
5. Output directory: `dist`

## BMW Frame Animation

Place your 240 frames inside `public/fames/`:

```
public/
  fames/
    ezgif-frame-001.webp
    ezgif-frame-002.webp
    ...
    ezgif-frame-240.webp
```

The app loads them automatically. Without the frames, a cinematic dark gradient plays as fallback.

## Project Structure

```
src/
  components/
    LoadingScreen.tsx   — Preloader overlay with progress + rotating messages
    HeroCanvas.tsx      — Sticky BMW canvas + hero text overlay
    AboutSection.tsx    — Skills grid with reveal animations
    SocialSection.tsx   — Telegram contact cards
  hooks/
    useFrameAnimation.ts — Frame preloading + scroll-to-frame logic
    useSmoothScroll.ts   — Lenis smooth scroll setup
  lib/
    utils.ts            — cn() helper
  pages/
    Home.tsx            — Page assembly
  App.tsx               — Router
  index.css             — Dark theme + glassmorphism utilities
  main.tsx              — Entry point
```
