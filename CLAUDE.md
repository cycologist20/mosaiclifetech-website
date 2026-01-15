# CLAUDE.md

This file provides guidance for Claude Code when working with this repository.

## Project Overview

**Mosaic LifeTech** - A healthcare AI governance consulting company website. The site targets healthcare executives (C-suite, board members, compliance/quality leaders) who need help building defensible AI governance frameworks.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5 (dev server on port 8080)
- **Styling**: Tailwind CSS 3 with custom design system
- **UI Components**: shadcn/ui (Radix primitives)
- **Routing**: React Router DOM 6
- **State/Data**: TanStack React Query
- **Forms**: React Hook Form + Zod validation

## Project Structure

```
src/
├── App.tsx              # Root component with routing
├── main.tsx             # Entry point
├── components/
│   ├── layout/          # Header, Footer, Layout wrapper
│   ├── ui/              # shadcn/ui components
│   └── NavLink.tsx      # Navigation helper
├── pages/               # Route pages
│   ├── Index.tsx        # Homepage
│   ├── WhatWeDo.tsx
│   ├── WhoWeHelp.tsx
│   ├── OurApproach.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── hooks/               # Custom React hooks
└── lib/
    └── utils.ts         # cn() utility for class merging
```

## Commands

```bash
npm run dev       # Start dev server (localhost:8080)
npm run build     # Production build
npm run build:dev # Development build
npm run lint      # ESLint
npm run preview   # Preview production build
```

## Design System

### Path Aliases
Use `@/` for imports from `src/`:
```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

### Color Tokens
Colors use CSS custom properties via HSL values:
- `primary` - Brand teal accent
- `secondary` - Light backgrounds
- `navy` - Dark blue for headings and CTA sections
- `muted` - Gray text
- `card` - Card backgrounds

### Custom Utilities
- `container-narrow` - Centered container (defined in global CSS)
- `section-padding` - Consistent vertical spacing
- `shadow-soft` / `shadow-card` - Subtle elevation

### Button Variants
Custom variants beyond shadcn defaults:
- `hero` - Primary CTA buttons
- `cta` - Call-to-action style
- `textLink` - Link-style buttons

## Component Patterns

### Page Structure
All pages wrap content in `<Layout>`:
```tsx
import { Layout } from "@/components/layout/Layout";

const PageName = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          {/* content */}
        </div>
      </section>
    </Layout>
  );
};
```

### Card Components
Pages define local card components for repeated patterns:
```tsx
function FeatureCard({ icon, title, description }: Props) {
  return (
    <div className="bg-card rounded-lg p-8 shadow-card border border-border/50">
      {/* ... */}
    </div>
  );
}
```

## Adding New Routes

1. Create page component in `src/pages/`
2. Add route in `src/App.tsx` above the catch-all `*` route
3. Update navigation in `src/components/layout/Header.tsx`

## Notes

- Site uses `lovable-tagger` plugin (dev only) for component tracking
- Inter font is the primary typeface
- Animations use `animate-fade-in` with staggered delays
- Icons from `lucide-react`
