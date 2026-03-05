

## Plan: Sample Order Page, Hero Updates, and Contact Form Cleanup

### Changes Overview

**1. Hero section bullet points** (`src/components/sections/HeroSection.tsx`)
- Replace `["99%+ Purity", "UK Processed", "Batch Tested"]` with `["High Purity", "Low Ash", "Controlled Microbiology"]`

**2. Create new `/order-sample` page** (`src/pages/OrderSample.tsx`)
- New dedicated page with the following structure:
  - **Product Header**: "Technical Evaluation Sample" title, "Spray-Dried Acacia Senegal (E414)" subtitle, description line, price (£34.99 incl. UK delivery), next batch note (Early May 2026)
  - **What You Will Receive**: bullet list (1kg sample, sealed lab bag, batch ID, COA, TDS)
  - **Intended Use**: short paragraph about lab/evaluation use, not for resale
  - **Dispatch & Delivery**: bullet list (2-3 working days, UK delivery included, international on request, tracking provided)
  - **Order Form**: Company Name, Contact Name, Email, Phone, Delivery Address (textarea), Application (text input)
  - **"Proceed to Secure Payment" button** (non-functional placeholder for now — will be linked to Stripe later)
  - **Disclaimer below button**: "All commercial supply is subject to formal quotation and written confirmation."

**3. Update all "Request Technical Sample" links to point to `/order-sample`** and rename to "Order Technical Sample"
- `src/components/sections/HeroSection.tsx` — not applicable (hero has "Request Quote" not sample)
- `src/pages/ProductSenegal.tsx` — line 101-104: change link to `/order-sample`, text to "Order Technical Sample"
- `src/components/sections/ProductsSection.tsx` — line 89-94: change link to `/order-sample`, text to "Order Technical Sample"
- `src/components/layout/Footer.tsx` — line 39-44: change link to `/order-sample`, text to "Order Technical Sample"

**4. Remove sample price from homepage and product page**
- `src/components/sections/ProductsSection.tsx` — remove the £34.99 price block (lines 73-86)
- `src/pages/ProductSenegal.tsx` — remove the pricing block (lines 83-96) showing £34.99

**5. Update Contact page** (`src/pages/Contact.tsx`)
- Replace `{ value: "sample", label: "Sample Request" }` with `{ value: "general", label: "General Inquiry" }` in the `inquiryTypes` array
- Remove the conditional quantity field that shows for `sample` type (keep it for `quote` only)

**6. Register route** (`src/App.tsx`)
- Add `<Route path="/order-sample" element={<OrderSample />} />`

### Files Modified
- `src/components/sections/HeroSection.tsx` — bullet text
- `src/pages/OrderSample.tsx` — new file
- `src/pages/ProductSenegal.tsx` — remove price, update sample button
- `src/components/sections/ProductsSection.tsx` — remove price, update sample button
- `src/components/layout/Footer.tsx` — update sample link
- `src/pages/Contact.tsx` — replace sample inquiry type with general inquiry
- `src/App.tsx` — add route

