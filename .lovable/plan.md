

# Fix Color Palette to Match Correct Hex Values

## The Problem

All three core brand colors in `src/index.css` are slightly (or significantly) wrong compared to the specified hex values.

## Corrections

### File: `src/index.css`

**1. Primary Green: `#254e38`**
- Current: `--primary: 148 35% 27%;`
- Correct: `--primary: 148 36% 23%;`
- Also update `--primary-light` and `--primary-dark` to stay relative:
  - `--primary-light: 148 30% 33%;` (was 37%)
  - `--primary-dark: 148 40% 14%;` (was 18%)
- Update `--foreground` to match darker green: `148 36% 12%;` (was 15%)

**2. Accent Amber: `#b65c38`**
- Current: `--accent: 20 55% 49%;`
- Correct: `--accent: 17 53% 47%;`
- Also update related accent shades:
  - `--accent-light: 17 48% 56%;` (was `20 50% 58%`)
  - `--accent-muted: 17 33% 73%;` (was `20 35% 75%`)

**3. Secondary Beige: `#D7C7A5`** (the biggest fix)
- Current: `--secondary: 40 35% 85%;`
- Correct: `--secondary: 41 38% 75%;`
- This is the most visually noticeable change -- the beige will actually look like a proper warm sandy beige instead of near-white.

**4. Update shadow references** to use the corrected green HSL values:
- All `hsl(148 35% 15% / ...)` references in the shadow custom properties should become `hsl(148 36% 12% / ...)`

Only the `:root` light-mode variables need updating. The `.dark` theme can remain as-is since this is a light-themed site.

