# With Garage Demo

A Next.js application demo for displaying WithGarage listings

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

### `/app` Directory
The main application directory using Next.js 14's App Router.
- Contains page routes and API routes
- Key files:
  - `layout.tsx`: The root layout that wraps all pages
  - `page.tsx`: The home page component
  - `not-found.tsx`: Custom 404 error page
  - `/api`: Contains API route handlers

### `/components` Directory
Reusable React components.
- Notable components:
  - `ListingInfo`: Main product listing component with detailed information
  - `Header`: Site navigation header
  - `Footer`: Site footer
  - `Carousel`: Image carousel/slider component
  - `/ui`: Contains base UI components like buttons and sliders

### `/api` Directory
API route handlers.
- Contains functions for:
  - Fetching listing data
  - Getting related listings

### `/lib` Directory
Utility functions and shared code.
- Contains helper functions

### `/types` Directory
TypeScript type definitions.
- Defines interfaces for:
  - Listings

### `/actions` Directory
Server actions
- Contains functions for:
  - Fetching listing data
  - Getting related listings
  - API communication

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## Development

To start development:

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

## Building for Production

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```
