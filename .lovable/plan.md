

# Fix Unfriendly Color Usage Across All Pages

## Summary

After auditing every page and section, I found several color application issues. The palette values are correct -- the problem is how colors are combined, layered, and applied. Here are the issues and fixes.

---

## Issues Found

### 1. Washed-out beige sections (`bg-secondary/50`)
Every beige section across all pages uses `bg-secondary/50` (50% opacity beige). Now that the beige is a proper sandy tan (#D7C7A5), half-opacity makes it look faded and unintentional. These should use full `bg-secondary` to get the proper warm sandy contrast against the cream background.

**Affected files:**
- `ProductsSection.tsx` (line 15)
- `CertificationsSection.tsx` (line 16)
- `VideoSection.tsx` (line 6 area)
- `About.tsx` (lines 116, 224)
- `Quality.tsx` (line 118)
- `Applications.tsx` (line 124)
- `Contact.tsx` (line 198)
- `ProductSenegal.tsx` (line 136)

**Fix:** Replace `bg-secondary/50` with `bg-secondary` everywhere it's used as a section background.

---

### 2. Beige-on-beige tags (no contrast)
On the Applications detail page, the use/tag pills use `bg-secondary` -- full beige tags sitting on a beige section background. They disappear.

**File:** `Applications.tsx` (line 155)

**Fix:** Change tags from `bg-secondary text-secondary-foreground` to `bg-background text-foreground` so they appear as light cream chips on the beige section.

---

### 3. Nested beige inside beige (Products pricing card)
The Products section pricing card uses `bg-secondary/50` inside a section that's already beige. Inside that card, there's another nested `bg-background/50` div. This creates a muddy layered beige effect.

**File:** `ProductsSection.tsx` (lines 79, 93)

**Fix:** Change the pricing card from `bg-secondary/50` to `bg-background` (cream white), and change the inner specs strip from `bg-background/50` to `bg-secondary/30` for subtle contrast.

---

### 4. Ghost CSS class `gradient-mesh` (does nothing)
The class `gradient-mesh` is referenced in 5 files but never defined in CSS. It's a dead reference producing no visual effect.

**Affected files:** `About.tsx`, `Quality.tsx`, `Applications.tsx`, `Contact.tsx`, `ProductSenegal.tsx`

**Fix:** Remove all `<div className="absolute inset-0 gradient-mesh" />` elements.

---

### 5. Faint green stat cards on About hero
The About page hero stat cards use `bg-primary/10` (10% green) which on the cream background produces a barely-there muddy tint.

**File:** `About.tsx` (line 99)

**Fix:** Change from `bg-primary/10 border-primary/20` to `bg-secondary border-border` so they use the proper beige as their background.

---

### 6. Faint green product feature box
The ProductSenegal hero has a features box using `bg-primary/10 border-primary/20`, same issue as above.

**File:** `ProductSenegal.tsx` (line 115)

**Fix:** Change to `bg-secondary border-border` for a clean beige card look.

---

### 7. Price box uses faint green tint
The ProductSenegal pricing block uses `bg-primary/10 border-primary/20`.

**File:** `ProductSenegal.tsx` (line 86)

**Fix:** Change to `bg-secondary border-border`.

---

### 8. Decorative accent blobs too prominent
Several pages have large decorative blobs using `bg-accent/10` or `bg-accent/15` with heavy blur. With the corrected amber, these may create visible orange stains on the cream background.

**Files:** `About.tsx` (line 71), `Quality.tsx` (line 93), `Applications.tsx` (line 99), `Contact.tsx` (line 174), `ProductSenegal.tsx` (line 60)

**Fix:** Reduce opacity from `/10` or `/15` to `/5` so they remain subtle.

---

## Files to Edit

| File | Changes |
|------|---------|
| `src/components/sections/ProductsSection.tsx` | Section bg, pricing card bg, inner specs bg |
| `src/components/sections/CertificationsSection.tsx` | Section bg |
| `src/components/sections/VideoSection.tsx` | Section bg |
| `src/pages/About.tsx` | Section bgs, remove gradient-mesh, stat card bgs, reduce blob opacity |
| `src/pages/Quality.tsx` | Section bg, remove gradient-mesh, reduce blob opacity |
| `src/pages/Applications.tsx` | Section bg, remove gradient-mesh, tag colors, reduce blob opacity |
| `src/pages/Contact.tsx` | Section bg, remove gradient-mesh, reduce blob opacity |
| `src/pages/ProductSenegal.tsx` | Section bg, remove gradient-mesh, feature/price card bgs, reduce blob opacity |

