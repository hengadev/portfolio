# Germinal - Technical Deep Dive

## Architecture Overview

Germinal is a full-stack event and talent management platform built with modern web technologies and production-ready infrastructure.

## Technical Stack

### Frontend
- **SvelteKit 2.x** with Svelte 5 Runes syntax
- **TypeScript** for end-to-end type safety
- **Tailwind CSS 4** for styling
- **bits-ui** for accessible component primitives
- **svelte-i18n** for bilingual support (English/French)

### Backend
- **PostgreSQL** with Drizzle ORM
- **pg-boss** for PostgreSQL-backed job scheduling
- **Zod** for runtime validation
- **Pino** for structured logging
- **AWS SDK** (S3, SES) for storage and email

### Infrastructure
- **Docker** with multi-stage builds
- **Sentry** for error tracking and monitoring
- **Vitest** for unit testing
- **Playwright** for E2E testing

## Key Technical Implementations

### 1. Middleware System
Implemented a decorator pattern for composable request handling:
- `withValidation<T>()` - Zod schema validation
- `withRateLimit()` - IP-based rate limiting
- `withAuth()` - Admin authentication guard
- `withCsrf()` - CSRF token validation
- `withApiMiddleware()` - Combined decorator

### 2. Caching Layer
Built an LRU cache with advanced features:
- Time-based expiration (TTL)
- Tag-based invalidation for related entities
- Pattern-based cache clearing
- Statistics and monitoring

### 3. Job Scheduler
Integrated pg-boss for background task processing:
- Cron-scheduled recurring jobs
- One-off job scheduling
- Team size configuration for parallelism
- Automatic retry with exponential backoff

### 4. Security Features
- Argon2 password hashing
- Session-based authentication
- CSRF protection on state-changing operations
- Rate limiting on sensitive endpoints
- Input sanitization and validation
- Non-root Docker user

### 5. Monitoring & Observability
- Sentry integration for error tracking
- Structured logging with Pino
- Performance monitoring with traces
- Breadcrumb tracking for user flows

## Database Schema
- talents with profile media and categories
- events with galleries and sessions
- reservations with expiration handling
- media with S3 integration
- admin users with session management

## API Design
- RESTful endpoints following SvelteKit conventions
- OpenAPI documentation generation
- Consistent error responses
- Proper HTTP status codes

## Testing Strategy
- Unit tests with Vitest
- Component testing with Testing Library
- E2E tests with Playwright
- Coverage reporting available

## DevOps & Deployment
- Multi-stage Docker builds (~200-250MB final image)
- Health check endpoints
- Graceful shutdown handling
- Environment-based configuration
- CI/CD ready with GitHub Actions support

## Development Experience
- Mock data mode for UI development without database
- Hot module replacement
- TypeScript strict mode
- Automated code generation with Drizzle Kit
