

# Navbar, Logo, and Typography Consistency Fixes

## 1. Bigger Navbar

The current navbar uses small sizing:
- Logo: `text-2xl` (too small)
- Nav links: `text-base` with `px-5 py-2.5` (tiny)
- Buttons: `size="default"` (small)
- Padding: `py-3` scrolled / `py-5` unscrolled (cramped)

**Changes to Header.tsx:**
- Increase logo from `text-2xl` to `text-3xl`
- Increase nav links from `text-base` to `text-lg` with more padding (`px-6 py-3`)
- Increase CTA buttons to `size="lg"`
- Increase header padding from `py-3`/`py-5` to `py-4`/`py-6`
- Increase mobile menu icon from `w-6 h-6` to `w-7 h-7`

## 2. Logo Color: White "Gum" on Homepage (Before Scroll)

Currently the logo always shows green "Gum" + terracotta "Direct". On the homepage hero (before scrolling), the green is hard to see against the dark video overlay.

**Change in Header.tsx:**
- When `isTransparent` is true (homepage, not scrolled): render "Gum" as `text-background` (white) instead of `text-primary`
- When scrolled or on other pages: keep `text-primary` (green) as normal

## 3. Footer Logo Update

The footer currently uses an old icon-based logo (green box with "G" + "GumDirect" text). This doesn't match the header's text-only branding.

**Change in Footer.tsx:**
- Replace the icon-based logo with the same text-only logo: "Gum" in white + "Direct" in terracotta (since footer has dark `bg-foreground` background, white works perfectly)
- Make the footer logo the same size as the header logo (`text-3xl`)
- Keep the "Premium Acacia Gum" tagline underneath

## 4. Typography Consistency Across Pages

Hero heading and description sizes vary slightly across pages. Standardize them:

| Element | Standard Class |
|---|---|
| Hero heading | `text-display-lg` (already consistent) |
| Hero description | `text-xl lg:text-2xl` (ProductSenegal has this, others only have `text-xl`) |
| Section headings | `text-display-md` |
| Section descriptions | `text-lg` or `text-xl` |

**Pages to update descriptions to `text-xl lg:text-2xl`:**
- About.tsx (line 87): add `lg:text-2xl`
- Quality.tsx (line 108): add `lg:text-2xl`
- Applications.tsx (line 114): add `lg:text-2xl`
- Contact.tsx hero description: add `lg:text-2xl`

## Technical Summary of File Changes

### Header.tsx
- Logo: `text-2xl` to `text-3xl`, conditional white "Gum" when `isTransparent`
- Nav links: `text-base px-5 py-2.5` to `text-lg px-6 py-3`
- Buttons: `size="default"` to `size="lg"`
- Header padding: `py-3`/`py-5` to `py-4`/`py-6`
- Mobile icon: `w-6 h-6` to `w-7 h-7`

### Footer.tsx
- Replace icon+text logo block (lines 57-65) with text-only logo matching header style: `text-3xl`, "Gum" in `text-background` (white), "Direct" in `text-accent` (terracotta)

### About.tsx, Quality.tsx, Applications.tsx, Contact.tsx
- Add `lg:text-2xl` to hero description paragraphs for consistent responsive sizing

