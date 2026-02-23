

# Fix Inconsistent Section Heading Sizes

## The Problem

Section headings across the site use two different size classes inconsistently:

- **Homepage sections** (WhatWeDo, Products, Applications, WhyGumDirect) use `text-display-md` -- the correct, larger size (clamp 2rem to 3.5rem)
- **VideoSection + all subpage sections** use `text-display-sm` -- noticeably smaller (clamp 1.5rem to 2.25rem)

This makes the VideoSection heading ("See How It Works") look tiny compared to adjacent sections, and makes all subpage content feel undersized compared to the homepage.

## The Fix

Upgrade all `text-display-sm` section headings to `text-display-md` for consistency. The only exception is the Footer CTA heading, which should stay smaller since it's a minor call-to-action, not a full section title.

### Files to update

| File | Line(s) | Current | Change to |
|------|---------|---------|-----------|
| `src/components/sections/VideoSection.tsx` | 15 | `text-display-sm` | `text-display-md` |
| `src/pages/About.tsx` | 127, 196, 226 | `text-display-sm` | `text-display-md` |
| `src/pages/Quality.tsx` | 128, 182 | `text-display-sm` | `text-display-md` |
| `src/pages/Applications.tsx` | 193 | `text-display-sm` | `text-display-md` |
| `src/pages/ProductSenegal.tsx` | 145, 177 | `text-display-sm` | `text-display-md` |

**Not changing:** `src/components/layout/Footer.tsx` (line 24) -- this is a smaller CTA block in the footer, not a main section heading.

This is a straightforward find-and-replace of the class name in 5 files, no layout or structural changes needed.
