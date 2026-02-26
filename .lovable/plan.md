

## Fix: Align Section Heading Icons with First Line of Text

### Problem
When section titles wrap to 2 lines, icons using `items-center` get vertically centered across both lines (too low), while `items-start` pins them to the very top (too high). The icon should sit aligned with the center of the **first line** only.

### Solution
For all 4 section heading icon+title containers in `ApplicationDetail.tsx`:

1. Change all `flex` containers from `items-center` to `items-start`
2. Add `mt-1` and `flex-shrink-0` to every icon so it aligns with the vertical center of the first text line regardless of how many lines the title wraps to

### Changes in `src/pages/ApplicationDetail.tsx`

**Line 74** (Challenges heading): `items-center` → `items-start`, add `flex-shrink-0 mt-1` to `AlertTriangle`

**Line 107** (Solution heading): Already `items-start`, change icon from `lg:mt-2` to just `mt-1` for consistency

**Line 139** (Technical heading): `items-center` → `items-start`, add `flex-shrink-0 mt-1` to `ShieldCheck`

**Line 185** (Compliance heading): `items-center` → `items-start`, add `flex-shrink-0 mt-1` to `FileCheck`

This gives a consistent, subtle nudge that keeps icons visually aligned with the first line across all sections, whether titles are 1 or 2 lines.

