

## Plan: Create Beverages Application Page with Dynamic Routing Template

### Overview
Create a dedicated `/applications/beverages` page and set up a dynamic route template (`/applications/:id`) so future application pages can reuse the same layout.

### Changes

#### 1. Create `src/pages/ApplicationDetail.tsx` (new file)
A dynamic page component that receives application data based on the URL param `:id`. It will:
- Look up application data from a shared data map (keyed by slug like `"beverages"`)
- Render 6 sections matching the provided content structure:
  1. **Hero** — Title, subtitle, description paragraph, "Request Quote" CTA
  2. **Industry Challenges** — Heading, intro text, bullet list, closing statement
  3. **Technical Solution** — Heading, intro text, bullet list, closing statement
  4. **Technical Suitability** — "Why Spray-Dried Acacia Senegal?" with specs list + "Suitable for" tags
  5. **Compliance & Documentation** — Bullet list of available docs + traceability note
  6. **Final CTA** — Heading, subtext, "Request Quote" button
- If the slug doesn't match any data, redirect to `/applications` or show 404
- Uses the existing `Layout`, `ScrollReveal`, and `Button` components
- Alternating section backgrounds (`#FFFDF8` and white) for visual rhythm

#### 2. Create `src/data/applicationDetails.ts` (new file)
A data file containing a Record/map of application detail objects keyed by slug. For now, only `"beverages"` will be populated with:
- Hero text, challenges list, solution points, technical specs, compliance docs — all exactly as specified in the user's content
- This structure makes it trivial to add more applications later (emulsions, confectionery, etc.) by adding entries

#### 3. Update `src/App.tsx`
Add a new route:
```
<Route path="/applications/:id" element={<ApplicationDetail />} />
```
Place it before the catch-all `*` route.

#### 4. Update links in `src/pages/Applications.tsx`
Update the application card titles/names to link to `/applications/beverages` (and eventually other slugs) instead of just anchoring to `#beverages`. Only beverages will have an active link for now; others will keep existing behavior.

### Section Layout Details

Each section uses `container-wide` for consistent width and `ScrollReveal` for entrance animations. The structure per section:

- **Hero**: Full-width, `pt-32 pb-20`, decorative gradient blur blob, accent label + h1 + paragraph + CTA button
- **Challenges**: `#FFFDF8` bg, two-column on desktop (text left, bullet list right)
- **Solution**: White bg, similar two-column layout
- **Technical Suitability**: `#FFFDF8` bg, specs as a compact grid/list + "Suitable for" pill tags
- **Compliance**: White bg, icon-accompanied bullet list
- **CTA**: Centered text + single "Request Quote" button

### Technical Notes
- The data structure in `applicationDetails.ts` will be typed with a TypeScript interface for consistency
- The dynamic component will use `useParams()` from react-router-dom to get the slug
- Beverage-specific icon: `Wine` from lucide-react

