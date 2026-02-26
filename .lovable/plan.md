

## Plan: Align Application Cards with Detail Pages and Improve UX

### Problem
1. The application cards on `/applications` have content (functionalRole, benefits, uses) that was written separately from the detail pages in `applicationDetails.ts` — they may be inconsistent.
2. Cards don't feel clickable — no whole-card hover effect.
3. The right sidebar on every card shows "View Product" linking to the same product page, which is repetitive.

### Changes

**File: `src/pages/Applications.tsx`**

1. **Align card content with detail pages**: Update each application's `functionalRole`, `benefits`, and `uses` arrays in the `applications` array (lines 18-110) to match the corresponding data in `applicationDetails.ts`. Specifically pull the subtitle from `hero.subtitle`, the solution items from `solution.items`, and the `suitableFor` list from `technical.suitableFor`.

2. **Make whole card clickable with hover effect**: Wrap each card's outer `<div>` (line 157-234) in a `<Link>` to `/applications/{slug}`. Add a hover background color change (e.g., `hover:bg-accent/5`) to the card container so the entire card signals interactivity. The existing border/shadow hover effects will be retained.

3. **Replace "View Product" sidebar**: Change the right-side panel (lines 217-232) from "Available Grade / Spray-Dried Acacia Senegal / View Product" to a contextual "Learn More" section with a button labeled something like "Explore {app.name} Applications" linking to the detail page. This removes the repetitive product link and makes the CTA relevant to each card.

### Technical Details

- The `slugMap` already exists at line 170 — it will be extracted to the top level so it can be used both for the card link wrapper and the sidebar CTA.
- The card `<Link>` wrapper will use `className="block"` with no text decoration. The inner content structure stays the same.
- The existing `<Link>` on the application name (lines 172-176) will be simplified to plain text since the whole card is now clickable.
- Content alignment will match these mappings:
  - `functionalRole` → `applicationDetails[slug].hero.subtitle`
  - `benefits` → `applicationDetails[slug].solution.items`
  - `uses` → `applicationDetails[slug].technical.suitableFor`

