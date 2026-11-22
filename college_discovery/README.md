# Campus Compass

A simple college discovery website built with React, JavaScript, and Vite.

## Run the project

```bash
npm install
npm run dev
```

## Pages

- `/` — Homepage with college search, featured colleges, and course categories.
- `/colleges` — College list with search, filters, sorting, and Load More.
- `/colleges/:slug` — College details and wishlist action.
- `/wishlist` — Saved colleges.

The college information is a local sample dataset in `src/services/collegeService.js`. Search, filters, and sorting run in the browser. The app uses client-side rendering because this project is a small Vite React application and does not need a server to render its sample data. Wishlist choices are saved in browser LocalStorage.

Fees, ratings, review counts, and review text are sample content. Confirm real details with each college.
