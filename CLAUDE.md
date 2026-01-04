# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development
```bash
npm run dev        # Start dev server on port 3015 (uses turbopack)
npm run build      # Build for production
npm run start      # Run production server
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
```

### Docker
```bash
docker build -t kortix-frontend .
# The Dockerfile uses multi-stage build with standalone output
# PORT=3015 is exposed by default
```

## Architecture Overview

This is a Next.js 15 application using App Router with a static landing page as the primary view. The codebase is structured as follows:

### Key Directories
- `src/app/` - Next.js App Router pages and route groups
  - `(home)/` - Public landing page sections (hero, pricing, FAQ, etc.)
  - `(dashboard)/` - Authenticated dashboard routes (agents, settings, billing)
  - `api/` - API routes for webhooks, integrations, exports
  - `auth/` - Authentication pages (sign-in, phone verification, password reset)
  - `share/` - Shared thread/conversation pages
- `src/components/` - React components organized by feature
- `src/lib/` - Core utilities and configuration
- `src/providers/` - React context providers
- `src/hooks/` - Custom React hooks
- `src/contexts/` - React context definitions

### Configuration Files
- `next.config.ts` - Next.js configuration with PostHog rewrites
- `src/lib/config.ts` - Environment-based configuration (LOCAL/STAGING/PRODUCTION)
- `src/lib/api.ts` - Backend API client with custom error handling
- `src/lib/supabase/` - Supabase client configuration
- `instrumentation-client.ts` - PostHog initialization

### Environment Management

The app supports three modes via `NEXT_PUBLIC_ENV_MODE`:
- `local` - Local development
- `staging` - Staging environment
- `production` - Production environment

Configuration (Stripe price IDs, feature flags) switches based on `NEXT_PUBLIC_ENV_MODE`. See `src/lib/config.ts` for subscription tiers and plan validation logic.

### Important Architecture Patterns

**Subscription & Billing**: Complex plan structure with monthly, yearly, and yearly-commitment tiers. The `isPlanChangeAllowed()` function in `src/lib/config.ts` enforces business rules for plan changes (e.g., no downgrades from yearly commitment to monthly).

**API Client**: `src/lib/api.ts` uses EventSource for streaming agent responses. Includes custom `BillingError` and `AgentRunLimitError` classes. The `cleanupAllEventSources()` function prevents memory leaks.

**State Management**: Uses Zustand for component-level state (see `src/lib/stores/`) and React Context for app-wide state like tool calls (`ToolCallsContext` in `src/app/providers.tsx`).

**Landing Page**: The home page (`src/app/(home)/page.tsx`) is composed of section components from `src/components/home/sections/`. Some sections are commented out - this is intentional for the static landing page configuration.

**TypeScript**: Strict mode is disabled (`strict: false` in tsconfig.json). Several ESLint rules are relaxed (no-unused-vars, no-explicit-any are set to 'off').

### Styling
- Uses Tailwind CSS v4
- Radix UI primitives via shadcn/ui (see `components.json`)
- Geist font family (Sans and Mono)
- Dark/light mode support via next-themes

### Authentication
- Supabase SSR for authentication
- Basejump for team/account management (`src/components/basejump/`)
- Google and GitHub OAuth providers
- Phone verification flow

### Deployment Notes
- Uses Next.js standalone output for Docker
- Vercel Analytics and Speed Insights integrated
- PostHog for analytics (EU region)
- Google Tag Manager and Google Analytics integrated
- Middleware currently passes through all requests (static landing page mode)
