# Finora Finance

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Finance](https://img.shields.io/badge/Template-Finance-10B981?style=for-the-badge)
![License](https://img.shields.io/badge/License-Apache%202.0-111827?style=for-the-badge)

> A sleek fintech dashboard starter for products that need trust, clarity, and a polished financial UI without weeks of setup work.

Finora Finance is an open-source React + TypeScript dashboard template for banking products, fintech portals, and financial operations teams. It gives you a strong front-end foundation for finance-focused products with the screens and interaction patterns people expect from modern account, transaction, and settings experiences.

## Why This Template

- 💸 Gives you a finance-ready dashboard structure without starting from an empty shell
- 🧾 Covers common fintech UI needs like balances, transactions, profile settings, cards, and auth flows
- 🔌 Makes it easy to fork, rebrand, and connect to APIs or internal services
- 🚀 Provides a practical base for demos, MVPs, internal tools, or open-source improvements

## Highlights

- 🏦 Finance-focused shell with sidebar navigation, top bar, and responsive layout behavior
- 🛠️ Reusable UI primitives in `src/components/ui`
- 🌗 Theme support through the shared context in `src/context`
- 🧪 Demo pages for dashboard metrics, transactions, profile, cards, settings, components, and authentication
- 🎨 Tailwind CSS v4 theme tokens and design variables in `src/index.css`
- ✅ TypeScript, ESLint, Prettier, and Vitest already configured

## Best For

- Banking and fintech dashboards
- Wallet, card, or account management interfaces
- Financial operations portals
- Product demos and internal admin tools in the finance space

## Tech Stack

- React 19, TypeScript, Vite
- Tailwind CSS v4, Radix UI, shadcn-style component patterns
- React Router 7, TanStack Query 5, React Hook Form, Zod
- Recharts, Sonner, theme context handling, Vitest

## Getting Started

### Requirements

- Node.js `24+`
- `npm`

### Installation

```bash
npm install
npm run dev
```

The local development server runs at `http://localhost:8080`.

## Available Scripts

| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the Vite development server        |
| `npm run build`        | Create a production build                |
| `npm run build:dev`    | Create a development-mode build          |
| `npm run preview`      | Preview the production build locally     |
| `npm run lint`         | Run ESLint                               |
| `npm run lint:fix`     | Run ESLint and apply safe fixes          |
| `npm run format`       | Format the project with Prettier         |
| `npm run format:check` | Check formatting without writing changes |
| `npm run test`         | Run the Vitest suite once                |
| `npm run test:watch`   | Run Vitest in watch mode                 |
| `npm run typecheck`    | Run the TypeScript compiler              |

## Project Structure

```text
src/
  components/
    dashboard/   Finance widgets and dashboard blocks
    layout/      App shell, top bar, sidebar, and shared layout pieces
    shared/      Cross-page helpers such as status badges and tables
    ui/          Reusable UI primitives
  context/       Theme state and providers
  hooks/         Shared client hooks
  lib/           Navigation, mock data, and utilities
  pages/         Route-level screens grouped by feature
  test/          Vitest setup and starter tests
  types/         Shared TypeScript models
```

## Included Routes

| Route              | Purpose                                         |
| ------------------ | ----------------------------------------------- |
| `/dashboard`       | Main finance dashboard                          |
| `/transactions`    | Searchable and sortable transactions table      |
| `/profile`         | Personal profile and account preferences        |
| `/cards`           | Card management experience                      |
| `/settings`        | Multi-tab settings workspace                    |
| `/components`      | Internal component showcase and pattern gallery |
| `/login`           | Sign-in screen                                  |
| `/register`        | Sign-up screen                                  |
| `/forgot-password` | Password recovery flow                          |
| `*`                | Fallback 404 page                               |

## How to Adapt It

- 💼 Replace mock finance data with your own APIs, services, or local fixtures
- 🧭 Update navigation labels and structure in `src/lib/constants.ts`
- 🎨 Adjust branding, colors, and visual tokens in `src/index.css`
- 🧱 Extend the shell or theme behavior through `src/components/layout` and `src/context/theme-context.tsx`
- 🛣️ Add product-specific routes in `src/App.tsx` and build new feature pages under `src/pages`

## Contributing

Contributions are welcome. If you want to improve the template, open an issue or submit a pull request with fixes, new finance UI patterns, accessibility improvements, stronger tests, or better documentation.

## License

This project is licensed under the Apache License 2.0. See [LICENSE](./LICENSE) for the full text.
