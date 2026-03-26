

## Plan: Redirect to Stripe after form submission

### Change
In `src/pages/OrderSample.tsx`, update `handleSubmit` to redirect the user to the Stripe payment link after form submission instead of showing the "Thank you" confirmation screen.

**Specifically:**
1. Replace the placeholder `await new Promise(...)` and `setIsSubmitted(true)` logic with `window.location.href = "https://pay.gumdirect.co.uk/b/cNi7sK0FZaOX3PFfDPabK01"`
2. Remove the `isSubmitted` state and the entire confirmation screen block (lines 68-97) since it's no longer needed
3. Keep the toast briefly showing before redirect, or just redirect immediately

### File
- `src/pages/OrderSample.tsx`

