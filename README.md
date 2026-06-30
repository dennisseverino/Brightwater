# Brightwater Family Law

Premium single-page website for a fictional boutique family law firm based in Brisbane and servicing the Gold Coast.

This project was built for an AI-first web developer/designer skills assessment. The site is designed around a visitor who may be anxious, overwhelmed, and looking for trust before they are ready to make a legal decision.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Sharp for local image optimization

## Local Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npm run build
```

## Design Direction

Brightwater is positioned as calm, premium, and human rather than aggressive or corporate. The interface uses warm white surfaces, soft sage accents, muted teal, deep charcoal typography, generous spacing, and restrained shadows.

The site avoids common legal cliches such as gavels, courthouse imagery, scales of justice, dark navy, and gold. The visual direction is closer to a premium healthcare brand: reassuring, clear, and approachable.

## Conversion Strategy

The primary conversion action is booking a free 20-minute consultation. Each section supports that action by reducing uncertainty:

- The hero clarifies who the firm helps and what action to take.
- Trust indicators establish experience and scope quickly.
- Practice areas help visitors self-identify their legal need.
- The approach section explains how the firm communicates and guides clients.
- Team portraits make the firm feel human and reachable.
- Testimonials reinforce calm, practical support.
- FAQ content answers common objections before the form.
- The final form keeps the commitment low and clearly states that no backend submission occurs in this demo.

## Assets

Images are stored locally in `public/` so the production site is not dependent on third-party image URLs at runtime.

- Team portraits are real stock portrait images sourced from Pexels and exported as consistent 4:5 WebP crops.
- The hero consultation image is optimized as WebP.
- Brand marks are optimized for navigation and browser title usage.

## Deployment

The project is ready for deployment to Vercel, Netlify, or any static host that supports Vite builds.

Build output is generated with:

```bash
npm run build
```

The static output is written to `dist/`.
