# Food Product Explorer

A modern React + TypeScript grocery and food marketplace app built with DummyJSON data. The app focuses on food and grocery products, uses Indian Rupees for pricing, and includes a responsive product grid, search, category filtering, sorting, loading and error states, and a dedicated product details view.

## 1. Project overview

Food Product Explorer is a frontend app designed to help users browse a curated food and grocery catalog, narrow results by title or category, and view detailed information for individual items. The application loads product data from DummyJSON and keeps the UI clean, modern, and responsive across desktop, tablet, and mobile devices.

## 2. Technologies used

- React
- TypeScript
- Vite
- React Router
- CSS
- DummyJSON REST API
- Indian Rupee formatting for local pricing

## 3. Features

- Food and grocery-only product listing
- Search by title with case-insensitive matching
- Category filtering generated from the fetched data
- Sorting by default, price, rating, and name
- Product cards with ratings, INR pricing, stock status, and discount badges
- Loading skeletons and retryable error handling
- Empty state handling when no products match the search or filters
- Product details page for each item
- Invalid or missing product ID handling
- Clean navigation and footer layout
- Currency displayed in Indian Rupees (₹)

## 4. API details

The app fetches food and grocery product data from DummyJSON:

- Products list: https://dummyjson.com/products?limit=0
- Single product: https://dummyjson.com/products/{id}

The storefront filters the dataset to food and grocery categories before display. Prices are formatted in Indian Rupees (₹), and requests are handled in the service layer with proper error handling for failed fetches and 404 responses.

## 5. How to run the application

1. Install dependencies:
   npm install
2. Start the development server:
   npm run dev

## 6. Installation instructions

```bash
npm install
```

## 7. Project structure

```text
src/
  components/
    CategoryFilter.tsx
    EmptyState.tsx
    ErrorState.tsx
    Footer.tsx
    Header.tsx
    LoadingState.tsx
    ProductCard.tsx
    SearchBar.tsx
    SortSelect.tsx
  hooks/
    useProducts.ts
  pages/
    AboutPage.tsx
    NotFoundPage.tsx
    ProductDetailsPage.tsx
    ProductsPage.tsx
  routes/
    AppRoutes.tsx
  services/
    productService.ts
  types/
    product.ts
  utils/
    formatters.ts
    parseProductId.ts
  App.tsx
  index.css
  main.tsx
README.md
```

## 8. Design decisions

- The layout uses a light, clean storefront aesthetic with soft shadows, rounded corners, and accessible contrast.
- The interface keeps the main workflow focused on browsing and filtering products without overloading the page.
- Reusable components keep the UI maintainable and easy to extend.

## 9. Search approach

Search is performed client-side after fetching the full product list once from DummyJSON. This avoids extra network requests while users type, and it keeps filtering fast and responsive. The search matches product titles case-insensitively and works together with the category filter.

## 10. Filtering approach

- Category options are generated from the current food and grocery product list rather than hardcoded.
- Filtering combines the selected category with the typed search term.
- The app supports clearing filters from the toolbar or empty state button.
- Only food and grocery items are shown in the storefront to keep the catalog focused on the requested product type.

## 11. Known limitations

- The app relies on the public DummyJSON dataset, so product availability and pricing may change over time.
- Image assets are loaded directly from the API and depend on external hosting.
- This is a frontend-only implementation intended for browsing and demonstration.

## 12. Optional/bonus features implemented

- Sorting dropdown for price and rating
- Product stock badges and discount badges
- About page
- Mobile-friendly stacked layout
- Retry support when the product fetch fails
- Responsive detail page with product metrics and back navigation
- INR pricing and food/grocery-first storefront design

## 13. Search and filtering summary

The app fetches all products once, then filters the already loaded dataset in the browser. This approach keeps the UX smooth and avoids repeated API calls during search interactions.

## 14. Installation and start commands

```bash
npm install
npm run dev
```

## 15. Notes

This project intentionally avoids hardcoded product data and uses the live DummyJSON API as required by the specification. The storefront is currently scoped to food and grocery products, and all prices are displayed in Indian Rupees (₹) for a local market-focused shopping experience.

