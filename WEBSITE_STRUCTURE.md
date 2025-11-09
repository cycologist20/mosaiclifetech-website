# Mosaic Life Tech Website - Structure & Module Documentation

**Last Updated:** November 9, 2025  
**Version:** 1.0.0

## Technology Stack

- **Frontend Framework:** React 18.3.1 with TypeScript
- **Build Tool:** Vite 5.4.2
- **Styling:** TailwindCSS 3.4.1 with PostCSS
- **Icons:** Lucide React 0.344.0
- **Backend Integration:** Supabase JS 2.57.4
- **Development:** ESLint 9.9.1 with TypeScript ESLint

## File Structure

```
mosaiclifetech-website/
└── project/
    ├── .bolt/                          # Bolt.new configuration
    ├── .env                            # Environment variables (empty)
    ├── .git/                           # Git repository
    ├── .github/                        # GitHub workflows/actions
    ├── .gitignore                      # Git ignore rules
    ├── dist/                           # Build output directory
    ├── node_modules/                   # Dependencies
    ├── public/                         # Static assets
    │   ├── Jim Headshot.jpg           # CTO headshot
    │   ├── Mosaic Life Tech Logo.svg  # Company logo (variant 1)
    │   ├── Mosaic Life Tech Logo2.svg # Company logo (variant 2)
    │   ├── Teresa Headshot WHA DC.png # CEO headshot
    │   ├── image_36c204.jpg           # Hero background image
    │   └── mosaic_life_tech_logo_transparent2.png # Transparent logo
    ├── src/                           # Source code
    │   ├── components/                # React components
    │   │   ├── About.tsx             # About section with founder profiles
    │   │   ├── CollaborativeNetwork.tsx # Partnership information
    │   │   ├── Contact.tsx           # Contact information & CTA
    │   │   ├── ExpertiseBar.tsx      # Expertise tags display
    │   │   ├── Footer.tsx            # Site footer with navigation
    │   │   ├── Header.tsx            # Navigation header with mobile menu
    │   │   ├── Hero.tsx              # Landing hero section
    │   │   ├── KnowMyHealth.tsx      # Product showcase section
    │   │   └── Services.tsx          # Services grid display
    │   ├── App.tsx                   # Main application component
    │   ├── index.css                 # Global styles & Tailwind imports
    │   ├── main.tsx                  # React application entry point
    │   └── vite-env.d.ts            # Vite type definitions
    ├── eslint.config.js              # ESLint configuration
    ├── index.html                    # HTML entry point
    ├── package.json                  # Dependencies & scripts
    ├── package-lock.json             # Dependency lock file
    ├── postcss.config.js             # PostCSS configuration
    ├── tailwind.config.js            # TailwindCSS configuration
    ├── tsconfig.app.json             # TypeScript app configuration
    ├── tsconfig.json                 # TypeScript base configuration
    ├── tsconfig.node.json            # TypeScript Node configuration
    ├── vite.config.ts                # Vite build configuration
    └── WEBSITE_STRUCTURE.md          # This documentation file
```

## Key Modules & Components

### Core Application
- **`App.tsx`** - Main application orchestrator that renders all page sections sequentially
- **`main.tsx`** - React application bootstrap with StrictMode
- **`index.html`** - HTML shell with Vite integration

### UI Components

#### Navigation & Layout
- **`Header.tsx`** - Responsive navigation with scroll effects, mobile menu, and smooth scrolling
  - Features: Sticky header, scroll-triggered styling, hamburger menu
  - Navigation links: Services, Collaborative Network, KnowMyHealth, About Us
- **`Footer.tsx`** - Site footer with navigation links and copyright

#### Content Sections
- **`Hero.tsx`** - Landing section with company messaging and call-to-action
  - Features: Background image overlay, smooth scroll to services
- **`ExpertiseBar.tsx`** - Horizontal expertise tags display
  - Tags: FHIR, ONC Compliance, Da Vinci Workgroups, HIE Architecture, AI Governance
- **`Services.tsx`** - Four-column service grid with icons and descriptions
  - Services: AI Readiness & Assessments, Strategy & Roadmap, Solution Design & Implementation, IV&V
- **`CollaborativeNetwork.tsx`** - Three-column partnership showcase
  - Partners: Management Consultancies, Government Agencies, Health Systems & Payers
- **`KnowMyHealth.tsx`** - Product spotlight with feature grid and CTAs
  - Features: Personal caregiving focus, FHIR-based aggregation, AI insights, enterprise governance
- **`About.tsx`** - Founder profiles with headshots and biographical information
  - Founders: Teresa Younkin (CEO), Jim Younkin (CTO)
- **`Contact.tsx`** - Contact information with external scheduling integration
  - Integration: Sprintful scheduling system

### Styling & Configuration
- **`index.css`** - Global styles, brand colors, and custom CSS classes
- **`tailwind.config.js`** - Custom color palette, font families, and extended height utilities
- **`vite.config.ts`** - Build optimization with Lucide React exclusion

## Brand Guidelines

### Color Palette
- **Primary:** #2A5B69 (Teal blue)
- **Accent:** #E89A3C (Orange)
- **Background:** #E0E0E0 (Light gray)
- **Text:** Various shades of slate (900, 600, 400)

### Typography
- **Font Stack:** Inter, Roboto, Lato, system fonts
- **Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

## Key Features

### Technical Features
- Smooth scrolling navigation between sections
- Responsive mobile menu with hamburger toggle
- Scroll-triggered header styling changes
- External integrations (LinkedIn profiles, Sprintful scheduling)
- Performance optimizations (lazy loading, optimized builds)

### Content Areas
- **Healthcare AI Expertise:** FHIR, ONC compliance, Da Vinci workgroups
- **Service Offerings:** AI readiness, strategy development, implementation, verification
- **Partnership Models:** Consultancies, government agencies, health systems
- **Product Positioning:** KnowMyHealth platform for caregivers
- **Leadership Profiles:** Founder credentials and experience

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Type checking
npm run typecheck
```

## Dependencies Overview

### Production Dependencies
- `@supabase/supabase-js` - Backend integration
- `lucide-react` - Icon library
- `react` & `react-dom` - Core React framework

### Development Dependencies
- `@vitejs/plugin-react` - Vite React plugin
- `typescript` - Type checking
- `tailwindcss` - Utility-first CSS framework
- `eslint` - Code linting
- `autoprefixer` - CSS vendor prefixes

## Notes for Future Updates

- **Component Structure:** Each component is self-contained with its own styling and logic
- **Responsive Design:** Mobile-first approach with breakpoints at md (768px) and lg (1024px)
- **Performance:** Vite provides fast development and optimized production builds
- **Accessibility:** Consider adding ARIA labels and keyboard navigation improvements
- **SEO:** Consider adding meta tags and structured data for better search visibility

---

*This document should be updated whenever significant changes are made to the website structure, components, or dependencies.*
