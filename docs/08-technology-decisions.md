# AI-Powered Developer Portfolio
## Technology Decisions

**Document Version:** 1.0  
**Status:** APPROVED / BASELINE  
**Snapshot Date:** 2026-08-29

**Depends On:**
- `01-project-requirements.md`
- `06-roadmap.md`
- `07-architecture.md`

---

# 1. Purpose

This document records baseline technology choices, reasons, alternatives, conditional technologies, deferred decisions, and technologies rejected from the initial architecture.

Status terms:

- **APPROVED** — baseline
- **SELECTIVE** — use only where the specific feature benefits
- **CONDITIONAL** — requires a demonstrated need / decision gate
- **DEFERRED** — choose near implementation time
- **REJECTED FOR BASELINE** — no current requirement justifies it

---

# 2. Core Stack Summary

## Frontend
- React
- Vite
- TypeScript
- React Router
- Tailwind CSS
- Motion for React
- Lucide React

## Backend
- Python
- FastAPI
- Pydantic
- pydantic-settings
- SQLAlchemy 2.x
- Alembic
- Psycopg
- HTTPX

## Python Project Management
- uv
- pyproject.toml
- .venv
- uv.lock

## Data
- PostgreSQL
- pgvector

## Frontend Testing
- Vitest
- React Testing Library
- Playwright

## Backend Testing
- pytest

## Quality
- ESLint
- Prettier
- Ruff

## Development / DevOps
- Git
- GitHub
- Docker
- Docker Compose
- GitHub Actions

## AI
- Direct provider integration through a lightweight adapter
- Project-owned RAG pipeline
- Native provider tool calling
- LLM provider deferred
- Embedding provider deferred
- LangGraph conditional
- MCP conditional

---

# 3. React

**Decision:** React  
**Status:** APPROVED

Reasons:

- Strong professional relevance
- Component model
- Existing experience
- Good ecosystem
- Works well with separate FastAPI backend
- Appropriate for interactive portfolio and AI UI

Alternative considered:

Next.js.

Next.js is not baseline because the project does not currently require a second server/runtime layer, React Server Components, or framework-owned backend logic.

The architecture benefits from a clear learning boundary:

React  
→ HTTP / JSON  
→ FastAPI

---

# 4. Vite

**Decision:** Vite  
**Status:** APPROVED

Reasons:

- Fast local development
- Straightforward React setup
- Simple static production build
- Low framework overhead
- Good fit with separate frontend/backend architecture

---

# 5. TypeScript

**Decision:** TypeScript  
**Status:** APPROVED

Learning goals include:

- Primitive and object types
- Interfaces / type aliases
- Typed props
- Typed functions
- API response types
- Null safety
- Generics when genuinely useful

Avoid type cleverness that obscures fundamentals.

---

# 6. React Router

**Decision:** React Router  
**Status:** APPROVED

Potential routes:

- `/`
- `/projects`
- `/projects/:slug`
- `/about`
- `/resume`
- `/contact`
- `/lab`

Final routing is implementation-controlled.

---

# 7. Tailwind CSS

**Decision:** Tailwind CSS  
**Status:** APPROVED

Reasons:

- Existing experience
- Responsive workflow
- Design-token implementation
- Fast UI iteration
- Good fit with component composition

Tailwind does not replace a coherent design system.

---

# 8. Component Strategy

**Decision:** Internal reusable component system  
**Status:** APPROVED

Potential selective sources:

- shadcn-style patterns
- Magic UI
- Animata
- Skiper UI
- Aceternity UI
- Vengeance UI

External components are reviewed, adapted, normalized, and tracked in the Component Provenance Register.

---

# 9. shadcn-style Components

**Status:** SELECTIVE

Useful for accessible primitives such as:

- Dialog
- Sheet
- Dropdown
- Tabs
- Tooltip
- Form controls

Do not make the portfolio look like an unmodified component-library demo.

---

# 10. Motion for React

**Decision:** Primary animation system  
**Status:** APPROVED

Use for:

- Microinteractions
- Card motion
- Section reveals
- Layout transitions
- Dialogs / state transitions

---

# 11. GSAP

**Status:** CONDITIONAL

Do not install for MVP.

Possible later use:

- Complex scroll timelines
- Pinned storytelling
- Scrubbed motion
- Highly synchronized sequences

If Motion can implement the behaviour cleanly, prefer Motion.

---

# 12. Three.js / React Three Fiber

**Status:** CONDITIONAL

Not part of M1.

Potential later use:

- Lightweight hero visualization
- Architecture visualization
- AI Lab experiment

Production adoption requires performance, mobile, accessibility, reduced-motion, and maintainability review.

---

# 13. Smooth Scrolling

**Decision:** Native browser scrolling  
**Status:** APPROVED

Lenis or alternatives are conditional only if a genuine interaction requires them.

---

# 14. Icons

**Decision:** Lucide React  
**Status:** APPROVED

Use one coherent icon family for interface icons.

Technology logos remain separate from general UI icons.

---

# 15. Forms

**Initial decision:** Native React forms  
**Status:** APPROVED

**React Hook Form:** SELECTIVE / WHEN NEEDED  
**Zod:** SELECTIVE / WHEN RUNTIME VALIDATION BENEFITS

Likely useful for more complex features such as Job Matcher or contact forms.

---

# 16. Server-State Management

Begin with:

- Fetch API / small API client
- Local component state

**TanStack Query:** CONDITIONAL

Adopt when meaningful server-state caching, retries, invalidation, or synchronization appear.

---

# 17. Global Client State

**Redux:** REJECTED FOR BASELINE

Use:

- Local state
- Lifted state
- React Context when genuinely global

Add more complex state management only after a real requirement emerges.

---

# 18. Portfolio Content Storage

**Decision:** Source-controlled core professional content  
**Status:** APPROVED

Recommended initial use:

- Typed TypeScript content modules for structured content
- Markdown/MDX may be evaluated for longer case-study content

Do not force a CMS or database dependency.

---

# 19. Python

**Decision:** Python  
**Status:** APPROVED

Reasons:

- Strong fit for FastAPI
- AI ecosystem
- Data-processing ecosystem
- Existing technical background
- Professional relevance

---

# 20. FastAPI

**Decision:** FastAPI  
**Status:** APPROVED

Reasons:

- Modern typed Python APIs
- Pydantic integration
- OpenAPI
- Clear HTTP learning
- AI application fit
- Provides portfolio breadth beyond existing Django work

Django / DRF remain valuable existing project technologies, but this new project intentionally broadens backend experience.

---

# 21. Pydantic

**Decision:** Pydantic  
**Status:** APPROVED

Use for:

- API request/response schemas
- AI structured output
- Tool arguments
- Validated configuration structures where appropriate

Core concept:

Untrusted input  
→ Schema  
→ Validated application data

---

# 22. pydantic-settings

**Decision:** Pydantic-based settings  
**Status:** APPROVED

Use for environment-driven:

- Database configuration
- Provider configuration
- Feature flags
- Rate limits
- Runtime settings

---

# 23. SQLAlchemy 2.x

**Decision:** SQLAlchemy 2.x  
**Status:** APPROVED

Use modern SQLAlchemy patterns.

Do not copy legacy 1.x Query API patterns from old tutorials without review.

Reasons:

- Mature
- PostgreSQL support
- FastAPI compatibility
- Strong ORM / relational learning
- Framework-independent persistence layer

---

# 24. Database Execution Model

**Decision:** Synchronous SQLAlchemy sessions first  
**Status:** APPROVED

Do not adopt `AsyncSession` merely because FastAPI supports async routes.

Reconsider async database access only if actual concurrency requirements or measured performance justify it.

External HTTP operations may still use async where useful.

---

# 25. Alembic

**Decision:** Alembic  
**Status:** APPROVED

Learning goals:

- Schema evolution
- Migration history
- Upgrade
- Downgrade
- Environment consistency

---

# 26. Psycopg

**Decision:** Psycopg  
**Status:** APPROVED

Use with the synchronous SQLAlchemy baseline.

---

# 27. PostgreSQL

**Decision:** PostgreSQL  
**Status:** APPROVED

Reasons:

- Professional relevance
- Existing exposure
- Relational capability
- Strong SQLAlchemy support
- pgvector support
- Suitable for one-database architecture

---

# 28. pgvector

**Decision:** pgvector  
**Status:** APPROVED BASELINE

Use PostgreSQL for:

- Relational data
- Metadata
- Knowledge chunks
- Embedding vectors
- Similarity search

Do not add a dedicated vector database initially.

Reevaluate only when real scale/capability evidence exists.

---

# 29. Embedding Schema Rule

The embedding provider/model decision must be finalized before the production embedding-column migration.

Sequence:

Choose model  
→ Know vector dimension  
→ Design column  
→ Migration  
→ Embed corpus

Changing embedding models may require:

- Schema migration
- Re-embedding
- Retrieval re-evaluation

---

# 30. HTTPX

**Decision:** HTTPX  
**Status:** APPROVED

Potential use:

- GitHub REST API
- External HTTP services
- Provider calls where a specific SDK is unnecessary
- Integration testing

---

# 31. LLM Provider Strategy

**Provider abstraction:** APPROVED  
**Specific provider/model:** DEFERRED

Selection criteria near implementation:

- Structured output
- Tool calling
- API quality
- Capability
- Latency
- Cost
- Rate limits
- Availability
- Developer experience
- Testing/mocking

Choose one primary provider first.

Do not build several production provider integrations without need.

---

# 32. LangChain

**Decision:** Do not begin with LangChain  
**Status:** REJECTED FOR INITIAL AI IMPLEMENTATION

Reason:

Foundational concepts should be visible:

- Provider call
- Prompt
- Schema
- Embeddings
- Retrieval
- Context construction
- Tool calling

Framework evaluation comes after understanding.

---

# 33. LangGraph

**Status:** CONDITIONAL

Evaluate after:

- LLM integration
- Retrieval
- RAG
- Tools
- Controlled workflow

A documented rejection is acceptable.

---

# 34. MCP

**Status:** CONDITIONAL

Evaluate late in the project.

Potential implementation:

Expose approved read-only portfolio capabilities through an MCP server.

Production v1.0 does not require MCP.

---

# 35. Embedding Provider

**Status:** DEFERRED

Evaluate:

- Quality
- Vector dimension
- Cost
- Latency
- Availability
- Multilingual performance if relevant
- Compatibility

Generation and embedding do not need to use the same vendor.

---

# 36. RAG Implementation Strategy

**Decision:** Project-owned pipeline first  
**Status:** APPROVED

Core pieces:

- Source loading
- Normalization
- Chunking
- Embedding
- pgvector storage
- Retrieval
- Context assembly
- Prompt
- Generation
- Evidence mapping

Avoid hiding these steps inside a large framework initially.

---

# 37. RAG Ingestion

**Decision:** Private Python CLI/script  
**Status:** APPROVED

Do not initially introduce:

- Celery
- RabbitMQ
- Kafka
- Background worker fleet

---

# 38. GitHub Integration

**Decision:** GitHub REST API first  
**Status:** APPROVED

Flow:

FastAPI  
→ GitHub Service  
→ HTTPX  
→ GitHub REST API

Handle:

- Timeouts
- Rate limits
- Caching where useful
- Response normalization
- Graceful failure

**GitHub GraphQL:** CONDITIONAL

---

# 39. OpenAPI

**Decision:** OpenAPI as backend API-contract foundation  
**Status:** APPROVED

Flow:

Pydantic Schemas  
→ FastAPI  
→ OpenAPI  
→ Frontend/API understanding

**Generated TypeScript client:** CONDITIONAL

Begin with manual understanding of HTTP requests/responses.

Evaluate generation after contracts stabilize.

---

# 40. AI Tool Calling

**Decision:** Selected provider's native function/tool calling  
**Status:** APPROVED WHEN PHASE REACHED

Tools remain application-owned and explicitly allowlisted.

---

# 41. AI Evaluation

**Decision:** Project-owned evaluation datasets first  
**Status:** APPROVED

Possible formats:

- JSON
- YAML
- test fixtures

Evaluate:

- Factual answers
- No-evidence behaviour
- Retrieval
- Job Matcher
- Tool calls
- Workflows

Dedicated evaluation platforms may be considered later.

---

# 42. Vitest

**Decision:** Vitest  
**Status:** APPROVED

Primary frontend unit/test runner.

---

# 43. React Testing Library

**Decision:** React Testing Library  
**Status:** APPROVED

Test user-visible behaviour rather than internal implementation details.

---

# 44. Playwright

**Decision:** Playwright  
**Status:** APPROVED

Use for:

- Navigation
- Project routes
- Resume access
- Contact flow
- AI features later
- Cross-browser checks
- Critical production journeys

---

# 45. Accessibility Testing

Use:

- Manual semantic / keyboard review
- Playwright checks
- axe integration where useful

Automated checks do not replace manual accessibility review.

---

# 46. pytest

**Decision:** pytest  
**Status:** APPROVED

Use for:

- Backend unit tests
- API tests
- DB integration tests
- AI provider fakes
- Retrieval tests
- Tool/workflow tests

---

# 47. Ruff

**Decision:** Ruff  
**Status:** APPROVED

Use for Python linting / formatting as configured.

Do not stack Black + isort + Flake8 without a real reason.

---

# 48. ESLint

**Decision:** ESLint  
**Status:** APPROVED

Use for React / TypeScript code-quality rules.

---

# 49. Prettier

**Decision:** Prettier  
**Status:** APPROVED

Use for consistent frontend formatting.

---

# 50. Frontend Package Manager

**Decision:** npm  
**Status:** APPROVED

Reasons:

- Included with Node
- Widely understood
- Sufficient for this single frontend
- Lowest extra workflow overhead

---

# 51. Python Project and Dependency Management

**Decision:** uv  
**Status:** APPROVED

Use:

- `pyproject.toml`
- `.venv`
- `uv.lock`

Concepts must still be understood independently:

- Virtual environments
- Dependency isolation
- Dependency metadata
- Lockfiles

`uv.lock` should be committed.

---

# 52. Dependency Reproducibility

Frontend:

Commit `package-lock.json`.

Backend:

Commit `uv.lock`.

Do not rely on unrecorded global dependencies.

---

# 53. Runtime Versions

Select stable compatible Node and Python versions during environment verification.

Record them in runtime configuration.

Do not hard-code transient versions in long-lived planning documents unnecessarily.

---

# 54. Git

**Decision:** Git  
**Status:** APPROVED

Use coherent commits and meaningful history.

---

# 55. GitHub

**Decision:** GitHub  
**Status:** APPROVED

Use for:

- Source control
- Public repository
- Pull requests
- Issues where useful
- GitHub Actions
- Portfolio evidence

---

# 56. GitHub Desktop

**Status:** OPTIONAL

May be used for visual Git review.

It must not replace understanding:

- commit
- branch
- merge
- push
- pull
- diff

---

# 57. Repository Coding Agent

**Decision:** Codex Desktop as primary repository-level coding assistant  
**Status:** APPROVED

Use for:

- File editing
- Repository inspection
- Commands
- Testing
- Debugging
- One Build Order step at a time

`AGENTS.md` controls behaviour.

---

# 58. Planning / Learning Environment

Use the Portfolio & Resume ChatGPT project for:

- Planning
- Requirements
- Architecture
- Teaching
- Code-flow explanation
- Documentation review
- Interview preparation
- Career branding

Repository implementation belongs primarily to Codex.

---

# 59. Docker

**Decision:** Docker  
**Status:** APPROVED

Use where it improves:

- Backend reproducibility
- PostgreSQL local environment
- Production packaging
- Container learning

---

# 60. Docker Compose

**Decision:** Docker Compose  
**Status:** APPROVED

Likely local services:

- Backend
- PostgreSQL

Frontend may initially run natively with Vite.

---

# 61. CI

**Decision:** GitHub Actions  
**Status:** APPROVED

Potential checks:

Frontend:
- Lint
- Tests
- Build

Backend:
- Ruff
- Tests

Later:
- DB integration
- security checks
- production smoke checks

---

# 62. Live AI Testing

**Decision:** Separate from normal required CI  
**Status:** APPROVED

Standard CI uses:

- Fake LLM
- Mock embedding provider
- Deterministic fixtures

Live evaluation uses:

- Real provider
- Controlled test set
- Cost limit
- Explicit execution

---

# 63. CD / Deployment Automation

**Status:** DEFERRED

Select after hosting choice.

Use the simplest reliable workflow:

- platform-native Git deployment
- GitHub Actions
- or combination

---

# 64. Frontend Hosting

**Status:** DEFERRED

Select near M1 based on:

- Vite compatibility
- HTTPS
- Custom domain
- Preview deploys
- Cost
- Reliability
- Operational simplicity

---

# 65. Backend Hosting

**Status:** DEFERRED

Evaluate:

- FastAPI / Python support
- Docker
- Secrets
- Logs
- Health checks
- Region
- Cost
- Cold-start behaviour
- Deployment workflow

---

# 66. PostgreSQL Hosting

**Status:** DEFERRED

Requirements include:

- PostgreSQL
- Backups
- Secure access
- pgvector support
- Reasonable cost
- Reliability

---

# 67. Domain

**Decision:** Custom domain SHOULD  
**Provider:** DEFERRED

The project may deploy before final domain configuration.

---

# 68. Analytics

**Status:** CONDITIONAL

No analytics required for M1.

If introduced, use privacy-aware configuration and minimize tracking.

---

# 69. Error Monitoring

**Status:** DEFERRED

Begin with application logging.

Add a dedicated service if production operations justify it.

---

# 70. Contact Provider

Direct professional email is the baseline.

Backend contact-provider selection is deferred.

Do not delay M1 for external email-service setup.

---

# 71. Authentication

**Status:** REJECTED FOR v1.0

Do not add public:

- Auth0
- Clerk
- Firebase Auth
- Custom password system
- Public JWT account system

without a new requirement.

---

# 72. CMS

**Status:** REJECTED FOR BASELINE

Do not add:

- Contentful
- Sanity
- Strapi
- Custom admin CMS

Source-controlled professional content is preferred.

---

# 73. Separate Vector Database

**Status:** REJECTED FOR BASELINE

pgvector is sufficient for expected corpus and learning goals.

---

# 74. Redis

**Status:** REJECTED FOR BASELINE

Reconsider only if real distributed caching/rate/state needs appear.

---

# 75. Background Queue

**Status:** REJECTED FOR BASELINE

Do not add Celery, RabbitMQ, or Kafka until asynchronous workloads genuinely justify them.

---

# 76. Microservices

**Status:** REJECTED

One owner + one product + one deployment domain does not justify microservices.

---

# 77. Kubernetes

**Status:** REJECTED

Docker provides sufficient container/deployment learning for this project's requirements.

---

# 78. Multi-Agent Framework

**Status:** REJECTED FOR BASELINE

A single bounded workflow is sufficient for agentic learning.

---

# 79. Technology Adoption Rule

Before introducing non-approved technology:

1. Identify the problem.
2. Explain why the current stack is insufficient.
3. Compare alternatives.
4. Evaluate complexity.
5. Evaluate security.
6. Evaluate maintenance.
7. Evaluate learning value.
8. Record ADR if architecture changes.
9. Update Build Order.
10. Implement only after approval.

---

# 80. Version Strategy

Planning docs avoid pinning transient package versions.

Implementation should:

- Select compatible stable versions
- Commit lockfiles
- Record runtime versions
- Upgrade deliberately
- Test after upgrades

Exact dependency versions belong in:

- `frontend/package-lock.json`
- `backend/uv.lock`

---

# 81. Proposed ADRs

Potential ADRs:

- Monorepo
- React + Vite
- TypeScript
- Tailwind
- Motion
- FastAPI
- PostgreSQL + pgvector
- SQLAlchemy + Alembic
- Source-controlled portfolio content
- Direct AI integration before frameworks
- LLM provider
- Embedding provider
- Hosting architecture
- LangGraph adopt/reject
- MCP adopt/reject
- Three.js adopt/reject

Not every minor package needs an ADR.

---

# 82. Final Baseline

```text
Frontend
React + Vite + TypeScript + React Router + Tailwind + Motion + Lucide

Backend
Python + FastAPI + Pydantic + SQLAlchemy 2.x + Alembic + Psycopg + HTTPX

Python Project
uv + pyproject.toml + uv.lock

Data
PostgreSQL + pgvector

AI
Direct provider integration + lightweight adapters + project-owned RAG
LLM/embedding providers deferred
LangGraph/MCP conditional

Testing
Vitest + React Testing Library + Playwright + pytest

Quality
ESLint + Prettier + Ruff

DevOps
Git + GitHub + Docker + Compose + GitHub Actions
```

The selected stack intentionally favors clarity, professional relevance, and progressive learning over technology count.
