# Food Product Explorer

A modern React + TypeScript marketplace app for exploring food and consumer products from the DummyJSON API. The app includes a responsive product grid, search, category filtering, sorting, loading and error states, and a dedicated product details view.

## 1. Project overview

Food Product Explorer is a frontend app designed to help users browse a catalog of products, narrow results by title or category, and view detailed information for individual items. The application loads product data from DummyJSON and keeps the UI clean, modern, and responsive across desktop, tablet, and mobile devices.

## 2. Technologies used

- React
- TypeScript
- Vite
- React Router
- CSS
- DummyJSON REST API

## 3. Features

- Responsive product listing page
- Search by title with case-insensitive matching
- Category filtering generated from the fetched data
- Sorting by default, price, rating, and name
- Product cards with ratings, pricing, stock status, and discount badges
- Loading skeletons and retryable error handling
- Empty state handling when no products match the search or filters
- Product details page for each item
- Invalid or missing product ID handling
- Clean navigation and footer layout

## 4. API details

The app fetches product data from DummyJSON:

- Products list: https://dummyjson.com/products?limit=0
- Single product: https://dummyjson.com/products/{id}

These requests are handled in the service layer, with proper error handling for failed fetches and 404 responses.

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

- Category options are generated from the current product list rather than hardcoded.
- Filtering combines the selected category with the typed search term.
- The app supports clearing filters from the toolbar or empty state button.

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

## 13. Search and filtering summary

The app fetches all products once, then filters the already loaded dataset in the browser. This approach keeps the UX smooth and avoids repeated API calls during search interactions.

## 14. Installation and start commands

```bash
npm install
npm run dev
```

## 15. Notes

This project intentionally avoids hardcoded product data and uses the live DummyJSON API as required by the specification.

