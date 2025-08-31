# Finora Finance

Finora Finance is a React + TypeScript + Vite dashboard template for banking products, fintech portals, and financial operations teams.

## Overview

- Front-end-only dashboard starter with reusable UI primitives in `src/components/ui`
- Finance-focused shell with a sidebar, top bar, responsive navigation, and theme switching
- Demo pages for dashboard metrics, transactions, profile, cards, settings, components, and auth flows
- Tailwind CSS v4 tokens and theme variables defined in `src/index.css`
- ESLint, Prettier, Vitest, and TypeScript tooling included

## Tech Stack

- React 19, TypeScript 6, Vite 8
- Tailwind CSS 4, Radix UI, shadcn-style component patterns
- React Router 7, TanStack Query 5, React Hook Form, Zod
- Recharts, Sonner, next-themes-style theme handling, Vitest, ESLint, Prettier

## Requirements

- Node.js `24.13.1`
- `npm`

## Getting Started

```bash
npm install
npm run dev
```

The local dev server runs on port `8080`.

## Scripts

```bash
npm run dev
npm run build
npm run build:dev
npm run preview
npm run lint
npm run lint:fix
npm run format
npm run format:check
npm run test
npm run test:watch
npm run typecheck
```

## Project Structure

```text
src/
  components/    Dashboard widgets, layout pieces, shared helpers, and UI primitives
  context/       Theme context
  hooks/         Shared client hooks
  lib/           Navigation, mock data, and utilities
  pages/         Route-level demo pages
  test/          Vitest setup and starter test
  types/         Shared TypeScript models
```

## Routes

| Route | Purpose |
| --- | --- |
| `/dashboard` | Main finance dashboard |
| `/transactions` | Searchable and sortable transactions table |
| `/profile` | Personal info and account preferences |
| `/cards` | Card management UI |
| `/settings` | Multi-tab settings experience |
| `/components` | Internal component showcase |
| `/login` | Sign-in screen |
| `/register` | Sign-up screen |
| `/forgot-password` | Password reset flow |
| `*` | Fallback 404 page |

## Notes

- Routing is defined manually in `src/App.tsx`.
- Navigation content is maintained in `src/lib/constants.ts`.
- The template ships with static demo data and no backend integration.
