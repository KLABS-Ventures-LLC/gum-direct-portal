
# Remove All Acacia Seyal References

Since you only sell **Acacia Senegal Spray-Dried Powder (Food Grade)**, the following Seyal references need to be cleaned up:

## Changes

### 1. Footer (src/components/layout/Footer.tsx)
- Remove the "Acacia Seyal" link from the products list (line 7)
- Keep only the Acacia Senegal link

### 2. Contact Page (src/pages/Contact.tsx)
- Remove the "Acacia Seyal (Industrial)" option from the product dropdown (line 57)
- Remove the "Both Products" option (line 58) since there's only one product
- Keep "Acacia Senegal (Premium)" and "Not Sure Yet"

### 3. Applications Page (src/pages/Applications.tsx)
- Two application categories (Confectionery and Industrial) currently recommend "Acacia Seyal" with a link to `/products/acacia-seyal`
- Change both to recommend "Acacia Senegal" with the link `/products/acacia-senegal`

All other pages are clean -- no Seyal references found elsewhere.
