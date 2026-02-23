
# Fix White-on-White Text Across All Pages

## Problem
Multiple pages reference a `gradient-hero` CSS class that doesn't exist, resulting in a transparent/cream background. Text in those sections uses `text-primary-foreground` which is near-white (`hsl(35 30% 96%)`), creating invisible white-on-white text.

## Affected Pages and Fixes

### 1. ProductSenegal.tsx (worst offender -- the selected element)
The entire hero section uses `text-primary-foreground` on a cream background:
- Line 73: `h1` heading -- change to `text-primary`
- Line 79: description paragraph -- change to `text-foreground/70`
- Line 86: price box background -- change to `bg-primary/10` with `border-primary/20`
- Line 88: price text -- change to `text-primary`
- Line 89: price sub-text -- change to `text-foreground/60`
- Line 104: stat label text -- change to `text-foreground/60`
- Line 116: features card heading -- change to `text-primary`
- Line 115: features card background -- change to `bg-primary/10` with `border-primary/20`
- Line 122: feature text items -- change to `text-foreground/80`

### 2. About.tsx
Hero section has the same issue:
- Line 82: `h1` heading -- change to `text-primary`
- Line 87: description -- change to `text-foreground/70`
- Line 99: stat box background -- change to `bg-primary/10` with `border-primary/20`
- Line 104: stat label -- change to `text-foreground/60`

### 3. Quality.tsx
Hero section:
- Line 103: `h1` heading -- change to `text-primary`
- Line 108: description -- change to `text-foreground/70`

### 4. Applications.tsx
Already partially fixed, but verify the hero remains correct with `text-primary` and `text-foreground/70`.

### 5. Remove dead `gradient-hero` references
Remove the `<div className="absolute inset-0 gradient-hero" />` from all affected pages since the class doesn't exist and serves no purpose. This applies to:
- ProductSenegal.tsx (line 59)
- About.tsx (line 70)
- Quality.tsx (line 92)
- Applications.tsx (line 98)
- Contact.tsx (line 175)

Alternatively, define `.gradient-hero` in `index.css` as a subtle light gradient if desired, but removing is cleaner.

## Summary of Pattern
Every instance of `text-primary-foreground` on a light/cream background section needs to be replaced with `text-primary` (for headings) or `text-foreground` (for body text). The `primary-foreground` color is designed to be used ON TOP of the green `primary` background, not on light backgrounds.

## Pages Verified as OK
- **Index.tsx / HeroSection.tsx** -- uses video background with dark overlay and `text-background` (correct)
- **WhatWeDoSection.tsx** -- uses `text-foreground` (correct)
- **ProductsSection.tsx** -- uses `text-foreground` (correct)
- **ApplicationsSection.tsx** -- uses `text-foreground` (correct)
- **CertificationsSection.tsx** -- uses `text-foreground` (correct)
- **WhyGumDirectSection.tsx** -- uses `text-primary-foreground` but on a `bg-primary` green card (correct)
- **Contact.tsx** -- already uses `text-primary` and `text-gray-950` (correct)
- Dark `bg-foreground` sections on About, Quality, ProductSenegal use `text-background` (correct)
