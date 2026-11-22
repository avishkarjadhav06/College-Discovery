# Campus Compass

Campus Compass is a college discovery website built to help students search and compare colleges in Pune, Maharashtra.

## Project links

- **GitHub repository:** https://github.com/avishkarjadhav06/College-Discovery.git
- **Live website:**   https://college-discovery-livid-ho.vercel.app

## Technologies

- React
- JavaScript (JSX)
- Vite
- CSS
- Browser LocalStorage

## Getting started

### Requirements

- Node.js and npm

### Install and run

From the project directory:

```bash
npm install
npm run dev
```

Vite prints a local URL in the terminal, usually `http://localhost:5173`.

### Build and lint

```bash
npm run build
npm run lint
```

## Features

- Responsive homepage with a college search field and featured colleges.
- College listing with name, Pune-area, and course search.
- Filters for city and course.
- Sorting by college name and rating.
- Load More interaction and an empty-results state.
- College detail pages at `/colleges/:slug`.
- Wishlist add/remove actions on college cards and detail pages.
- Wishlist saved in browser LocalStorage.
- Loading and error messages for college data.
- Mobile navigation menu.

## Pages

| Route | Description |
| --- | --- |
| `/` | Homepage, featured colleges, and course categories |
| `/colleges` | Searchable and filterable college listing |
| `/colleges/:slug` | Details for a selected college |
| `/wishlist` | Colleges saved by the user |

## Data and environment setup

The app uses a local dataset in `src/services/collegeService.js`. It currently contains 15 colleges in Pune and does not call an external API. No API keys or environment variables are required.

College fees, ratings, review counts, and review text are sample data for demonstration. Please verify admissions and fee details with the colleges.

## Screenshots

- `screenshots/homepage.png`
- `screenshots/college-listing.png`
- `screenshots/college-detail.png`
- `screenshots/wishlist.png`


## Known limitations

- College information is a local demonstration dataset, not live API data.
- Fees, ratings, and review content are sample values and are not official.
- College cards use initials and CSS illustrations instead of real college photos.
- Wishlist data is stored only in the current browser and is not synced between devices or user accounts.
- Repository URL, live deployment URL, and screenshots still need to be added before submission.
