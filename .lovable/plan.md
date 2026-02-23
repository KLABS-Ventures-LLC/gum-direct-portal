

# Restructure Color Application to Match Reference Design

## The Problem
The current site applies colors in a "dark hero with overlays" style. The reference site at wellplan.io uses a completely different structural approach: clean light backgrounds, minimal decoration, and alternating cream/tan sections.

## Key Structural Changes

### 1. Hero Section - Light & Clean
- Remove the video background and dark gradient overlays
- Use the warm cream (`--background`) as the hero background instead
- Headings in dark forest green, accent words in terracotta
- Body text in dark muted color on the light background
- Remove decorative blur orbs and floating cards
- Center-aligned, clean typographic hero (matching the reference layout)
- Simple solid terracotta CTA button (no glow effects)

### 2. Header - Minimal on Light Background
- Always show dark green text (no transparent-to-scrolled color switching needed since bg is always light)
- Simplify the logo: text-only "GUMDIRECT" with "GUM" in green, "DIRECT" in terracotta (matching reference)
- Remove the icon box with "G" letter
- Clean nav links in dark text

### 3. Section Backgrounds - Alternating Pattern
- Light cream sections (`--background`): WhatWeDoSection, ApplicationsSection, WhyGumDirectSection
- Sandy tan sections (`--secondary`): VideoSection, CertificationsSection
- Products section: Use sandy tan instead of dark `--foreground` background; switch all text from light-on-dark to dark-on-light
- Remove `gradient-mesh` overlays and blur orbs from sections

### 4. Footer
- Keep the dark footer as-is (this is standard practice and matches the reference having a darker bottom area)

### 5. Cards & Elements
- Cards use white/card background with subtle borders (no glass/blur effects)
- Remove `backdrop-blur`, `shadow-glow`, `animate-float` decorations
- Simpler, cleaner card styling with just border and light shadow

## Files to Modify

1. **`src/components/sections/HeroSection.tsx`** - Complete redesign: remove video bg, use light bg, center-aligned text, simplified layout
2. **`src/components/layout/Header.tsx`** - Simplify logo, remove color-switching logic, always dark text on light bg
3. **`src/components/sections/ProductsSection.tsx`** - Change from dark bg (`bg-foreground`) to sandy tan, flip text colors to dark
4. **`src/components/sections/WhatWeDoSection.tsx`** - Remove gradient-mesh, use clean cream bg
5. **`src/components/sections/WhyGumDirectSection.tsx`** - Remove gradient-mesh, simplify the stats card, use light bg
6. **`src/components/sections/ApplicationsSection.tsx`** - Remove gradient-mesh, clean light bg
7. **`src/components/sections/VideoSection.tsx`** - Use sandy tan bg instead of gradient-mesh
8. **`src/components/sections/CertificationsSection.tsx`** - Keep sandy tan, simplify
9. **`src/index.css`** - Remove or simplify gradient-mesh, gradient-hero, and other dark overlay utilities that are no longer needed

## Technical Details

- The hero will shift from a full-bleed dark section with `min-h-screen` video to a centered text block on cream background with generous padding
- Button variants `hero` and `hero-outline` (designed for dark backgrounds) will need updating or replacing with standard `accent` and `outline` variants on light backgrounds
- The header's `isScrolled` color logic simplifies since it's always on a light background
- All sections using `text-background` or `text-primary-foreground` patterns (light text on dark bg) will switch to `text-foreground` (dark text on light bg)

