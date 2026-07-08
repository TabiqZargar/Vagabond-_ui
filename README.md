# KINTSUGI — The Path of the Sword

Award-winning inspired editorial website with a Japanese wabi-sabi / sumi-e aesthetic. Built with Next.js 16, React 19, TypeScript, Tailwind v4, GSAP, Framer Motion, and Lenis.

---

## Design

- **Japanese museum editorial** — asymmetrical grids, matting frames, huge whitespace, thin dividers
- **Sumi-e ink wash texture** — WebGL shader background simulating paper grain with subtle ink movement
- **Monochrome + crimson** — paper `#F8F5EE`, ink `#111111`, muted charcoal `#2A2A2A`, accent `#7D1F1F`
- **Typography** — Playfair Display (editorial headings), Hanken Grotesk (body), Space Mono (labels)
- **Vertical Japanese text** — decorative kanji flourishes (`不完全の美`, `武士道の道`)
- **No glassmorphism, no gradients, no neumorphism**

## Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind v4 theme tokens, custom utilities, keyframes
│   ├── layout.tsx           # Root layout with Google Fonts
│   ├── page.tsx             # Composition root — stitches all sections
│   └── providers.tsx        # Lenis + GSAP ScrollTrigger sync, loading gate
├── components/
│   ├── Navbar.tsx           # Transparent → blur-on-scroll, ink-spread CTA
│   ├── Hero.tsx             # Cinematic entrance: image zoom, text reveal, vertical kanji
│   ├── EditorialSection.tsx # Asymmetrical 5/7 split with scroll-triggered fade-up
│   ├── GallerySection.tsx   # Full-bleed image break with hover lens + "Join the Order"
│   ├── Footer.tsx           # Minimal footer — logo, links, "PRINTED IN KYOTO"
│   ├── Cursor.tsx           # Custom ink dot cursor with easing + click ripple
│   ├── InkDivider.tsx       # GSAP-animated horizontal brush stroke (scaleX reveal)
│   ├── InkButton.tsx        # Button with ink-spread hover (mask slide) + magnetic scale
│   ├── RevealText.tsx       # Reusable container for GSAP text reveal on scroll
│   ├── VerticalJapaneseText.tsx  # upright vertical-rl kanji decoration
│   ├── LoadingScreen.tsx    # Canvas ink-brush burst animation → slide-up exit
│   ├── ScrollProgress.tsx   # Fixed top progress bar driven by ScrollTrigger
│   └── ShaderBackground.tsx # WebGL fragment shader — paper grain + ink wash animation
└── hooks/
    └── useMousePosition.ts  # Tracks clientX/clientY for cursor
```

## Animations

| Element | Technique |
|---|---|
| Hero title | GSAP stagger translateY reveal (power4.out) |
| Hero image | GSAP scale + opacity entrance |
| Scroll sections | Fade-up + translateY via ScrollTrigger |
| Dividers | scaleX from 0 → 1 on scroll |
| Cursor | lerp-based smooth follow + DOM ripple on click |
| Buttons | Ink mask slide on hover + whileHover scale |
| Images | grayscale → full color on hover (CSS transition) |
| Loading screen | Canvas 2D radial ink strokes → Framer Motion slide-up |

## Smooth Scrolling

Lenis drives the scroll loop. GSAP's ticker is synced to Lenis's `raf`, and `ScrollTrigger.update()` fires on every Lenis scroll event for perfect alignment.

## Getting Started

```bash
npm install
npm run dev       # next dev --webpack
npm run build     # next build --webpack
npm run start     # production server
```

> `--webpack` is required because Turbopack native bindings are not available on all platforms.

## Stack

| Library | Version | Purpose |
|---|---|---|
| Next.js | 16.2.10 | App Router, SSR, Image optimization |
| React | 19.2.4 | UI |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling, CSS-based theme |
| GSAP | 3.15 | Scroll-triggered animations, text reveals |
| Framer Motion | 12.42 | Page transitions, hover animations |
| Lenis | 1.3.25 | Smooth scrolling |

## Accessibility

- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- `aria-hidden` on decorative elements (cursor, shader, particles)
- `role="progressbar"` on scroll progress bar
- Custom cursor hidden on touch devices (`@media (hover: none)`)
- `prefers-reduced-motion` respected via GSAP/Framer Motion defaults
- Keyboard-navigable focus states

## Image Credits

All photography via [AIDA Public](https://lh3.googleusercontent.com/aida-public/...) — misty bamboo forest, katana blade macro, temple in misty mountains.

---

*KINTSUGI — すべては無常*
