# AI-Powered Developer Portfolio
## System Architecture

**Document Version:** 1.0  
**Status:** APPROVED / BASELINE  
**Snapshot Date:** 2026-08-29  
**Project Phase:** Round 1 — Project Foundation

**Depends On:**
- `00-executive-summary.md`
- `01-project-requirements.md`
- `02-current-status.md`
- `03-content-inventory.md`
- `04-content-strategy.md`
- `05-ui-ux-direction.md`
- `06-roadmap.md`

---

# 1. Purpose

This document defines the baseline technical architecture for the AI-Powered Developer Portfolio.

It defines:

- Major application components
- Responsibility boundaries
- Frontend/backend separation
- Professional-content ownership
- Data persistence
- Retrieval and vector search
- LLM integration
- RAG
- GitHub integration
- Tool calling
- Controlled agent workflows
- Optional LangGraph and MCP boundaries
- Security
- Failure isolation
- Testing
- Deployment evolution
- Repository organization

Exact libraries, providers, and hosting vendors belong in `08-technology-decisions.md`.

---

# 2. Core Architecture Philosophy

The project is:

**A professional portfolio first, a full-stack application second, and an AI-enhanced system third.**

Architecture must preserve that order.

Advanced technology enhances the professional portfolio rather than becoming a dependency for basic recruiter use.

---

# 3. Architecture Goals

## AG-001 — Recruiter Reliability
The core portfolio continues to function if LLM, embeddings, vector retrieval, GitHub, agents, MCP, or advanced visuals fail.

## AG-002 — Progressive Complexity
The architecture supports:

Frontend Portfolio

→ Backend

→ PostgreSQL

→ LLM

→ Embeddings

→ Semantic Search

→ RAG

→ External Integrations

→ Tools

→ Controlled Agent Workflows

without major rewrites.

## AG-003 — Clear Boundaries
Presentation, application logic, persistence, AI, retrieval, external integrations, and orchestration remain conceptually separated.

## AG-004 — Professional Truthfulness
AI-generated professional claims must be based on approved evidence.

## AG-005 — Learnability
The architecture must remain understandable enough to explain during interviews.

## AG-006 — External Provider Isolation
Important providers should sit behind small replaceable/mockable boundaries.

## AG-007 — Minimum Necessary Complexity
Do not introduce infrastructure primarily for resume keywords.

---

# 4. Architectural Style

The approved style is a:

**Modular Full-Stack Monolith**

The system contains:

- One frontend application
- One backend application
- One relational database
- Vector capability inside the relational datastore where practical
- Internal backend modules
- External-provider adapters

The system is not initially composed of independently deployed microservices.

---

# 5. High-Level Architecture

```text
                Recruiter / Visitor
                        │
                        ▼
                React Frontend
                        │
                      HTTPS
                        │
                        ▼
                 FastAPI Backend
          ┌─────────────┼─────────────┐
          │             │             │
          ▼             ▼             ▼
   PostgreSQL       AI Services    Integrations
    + pgvector         │             │
                      ├──── LLM      └──── GitHub REST API
                      └──── Embeddings
```

The frontend remains capable of rendering the critical professional portfolio independently of AI.

---

# 6. Evolutionary Architecture

## State 1 — Professional Portfolio

Browser  
→ Frontend  
→ Approved source-controlled professional content

No backend is required for the core presentation.

## State 2 — Backend-Enabled

Browser  
→ Frontend  
→ Backend API

The backend handles functionality requiring a trusted server.

## State 3 — Full-Stack

Frontend  
→ Backend  
→ PostgreSQL

Only selected structured or operational data moves into persistence.

## State 4 — AI-Enabled

Frontend  
→ Backend  
→ AI Service  
→ LLM Provider

## State 5 — Retrieval-Enabled

Backend  
→ Retrieval Service  
→ PostgreSQL / pgvector

## State 6 — RAG

Question  
→ Retrieval  
→ Approved Evidence  
→ LLM  
→ Grounded Answer

## State 7 — Tool Calling

AI Orchestrator  
→ Approved Tool Registry  
→ Existing Application Services

## State 8 — Controlled Agent Workflow

Workflow State  
→ Decision  
→ Approved Tool  
→ Updated State  
→ Stop / Continue

## State 9 — Optional MCP

MCP Interface  
→ Existing Application Services

MCP is an additional delivery interface, not the core application.

---

# 7. Professional Content Source of Truth

Initial authoritative professional content remains:

**Approved source-controlled content**

Examples:

- Hero / headline
- About
- Project summaries
- Experience
- Education
- Certifications

Potential source formats may include typed TypeScript data, JSON, Markdown, or MDX.

The exact format belongs to Technology Decisions / implementation.

---

# 8. Why Public Content Is Not Database-First

Do not create this dependency unnecessarily:

React  
→ FastAPI  
→ PostgreSQL  
→ Professional headline

for static professional information that rarely changes.

Reasons:

- Better core reliability
- Simpler frontend deployment
- Git history for professional edits
- Easier factual review
- Database downtime does not remove resume-like core content

PostgreSQL is used where persistence provides meaningful engineering value.

---

# 9. Database Responsibilities

PostgreSQL may store:

- Selected structured application data
- Knowledge-document metadata
- Knowledge chunks
- Embedding vectors
- Retrieval metadata
- Evaluation cases
- Approved operational / usage metadata
- Cached integration metadata where useful

PostgreSQL does not automatically become a CMS.

---

# 10. Vector Storage

Initial vector architecture:

**PostgreSQL + pgvector**

Conceptually:

```text
PostgreSQL
├── Relational tables
├── Knowledge documents
├── Knowledge chunks
└── Embedding vectors
```

Benefits:

- One datastore
- Simpler deployment
- Easier local development
- Relational metadata and vectors together
- Lower infrastructure complexity

A separate vector database requires future evidence that pgvector is inadequate.

---

# 11. Frontend Responsibilities

Frontend owns:

- Rendering
- Routing
- Navigation
- Responsive layout
- Accessibility
- User interaction
- Project presentation
- Resume access
- Contact presentation
- AI assistant UI
- Job Matcher UI
- Loading / error states
- Temporary client interaction state

Frontend does not own:

- LLM secrets
- Database credentials
- Embedding credentials
- Trusted AI orchestration
- Private integration credentials
- Server-side rate limiting

---

# 12. Frontend Logical Structure

Provisional structure:

```text
frontend/
└── src/
    ├── app/
    ├── pages/
    ├── components/
    ├── features/
    ├── content/
    ├── hooks/
    ├── services/
    ├── styles/
    ├── types/
    └── utils/
```

Folders are created only when a real responsibility exists.

---

# 13. Feature Modules

Potential feature areas:

```text
features/
├── projects/
├── contact/
├── ai-assistant/
├── semantic-search/
└── job-matcher/
```

A feature may contain its own:

- Components
- API client
- Hooks
- Validation
- Types
- Utilities

---

# 14. Backend Responsibilities

The backend owns server-trusted behaviour:

- HTTP APIs
- Request validation
- Response contracts
- Persistent-data access
- LLM communication
- Embeddings
- Retrieval
- RAG
- GitHub integration
- Tool calling
- Workflow orchestration
- Rate limits
- Logging
- Usage controls

---

# 15. Backend Logical Structure

```text
backend/
├── app/
│   ├── api/
│   ├── core/
│   ├── schemas/
│   ├── models/
│   ├── services/
│   ├── repositories/
│   ├── ai/
│   ├── retrieval/
│   ├── integrations/
│   ├── tools/
│   ├── workflows/
│   └── observability/
├── tests/
├── migrations/
└── scripts/
```

Do not create every directory on Day 1.

---

# 16. API Layer

Routes should remain thin.

Preferred:

Route  
→ Validate  
→ Application Service  
→ Result  
→ API Response

A route should not directly contain complete prompts, SQL-heavy logic, provider SDK implementation, RAG orchestration, or agent loops.

---

# 17. API Versioning

Once API routes become frontend contracts, use a predictable convention such as:

`/api/v1/...`

Avoid complex versioning before it is necessary.

---

# 18. Application Services

Possible services:

- `ProjectService`
- `PortfolioAssistantService`
- `SemanticSearchService`
- `RAGService`
- `JobMatchService`
- `GitHubService`
- `ContactService`

Services represent application use cases rather than HTTP details.

---

# 19. Repository Layer Policy

A repository abstraction is optional.

Use it when:

- Persistence logic becomes substantial
- Queries need reuse
- Database details leak into services
- Tests benefit from a data-access boundary

Do not create layers for textbook appearance.

---

# 20. Schemas and Validation

Schemas may define:

- API requests
- API responses
- AI structured output
- Tool arguments
- Job Matcher results
- Retrieval results
- Integration data

External/model-generated information is untrusted until validated where applicable.

---

# 21. LLM Service Boundary

Preferred:

Application Service  
→ LLM Interface  
→ Provider Adapter  
→ External LLM Provider

The interface should remain small.

Potential operations:

- text generation
- structured generation
- conversational generation

Do not build a universal AI framework.

---

# 22. Embedding Service Boundary

Preferred:

Retrieval  
→ Embedding Interface  
→ Provider Adapter

Generation and embedding providers may be different.

---

# 23. Provider Adapter Purpose

Adapters exist for:

- Secret isolation
- Testing
- Mocking
- Model changes
- Cost comparison
- Provider replacement

They must remain lightweight.

---

# 24. Prompt Architecture

Important prompts are source-controlled.

Potential organization:

```text
ai/
└── prompts/
    ├── portfolio_assistant
    ├── rag_answer
    ├── requirement_extraction
    └── job_match_summary
```

Prompts should be versioned, testable, reviewable, and tied to schemas where applicable.

---

# 25. Structured AI Output

Required pattern:

Model Output  
→ Schema Validation  
→ Application Logic

Never blindly trust JSON because the prompt requested JSON.

Invalid output produces controlled retry, fallback, or error.

---

# 26. Basic AI Assistant

Initial:

Chat UI  
→ Backend Chat Endpoint  
→ Portfolio Assistant Service  
→ LLM Adapter  
→ Provider

Initial context may use approved curated content.

Later:

Chat UI  
→ Backend  
→ Retrieval  
→ Evidence  
→ LLM  
→ Grounded Answer

---

# 27. AI Session Strategy

No public user-account system is required.

Preferred initial design:

- Browser/session-scoped conversation
- Limited context
- No permanent public visitor chat archive by default

---

# 28. RAG Ingestion Architecture

RAG ingestion is a private developer operation.

Preferred:

Approved Source  
→ Normalize  
→ Chunk  
→ Metadata  
→ Embed  
→ Store  
→ Retrieval Evaluation

Initial implementation may use a CLI command or controlled script.

A background job system is not initially required.

---

# 29. Knowledge Source Approval

Allowed candidates:

- Published portfolio content
- Approved public resume
- Clean public project README
- Approved case studies
- Approved education descriptions
- Approved professional experience
- Approved public GitHub evidence

Disallowed by default:

- Pay records
- Tax records
- Immigration records
- Raw private employment verification
- Private academic records
- Personal correspondence
- Secrets
- Unreviewed drafts
- Superseded professional information

---

# 30. Knowledge Metadata

Potential metadata:

- Document ID
- Chunk ID
- Source type
- Source title
- Public URL
- Project association
- Section
- Version
- Approval status
- Updated timestamp

Public evidence references must not expose private filesystem paths.

---

# 31. Retrieval Service

Conceptual interface:

`search(query, filters, top_k)`

Potential output:

- Chunk text
- Source identifier
- Public evidence URL
- Metadata
- Relevance / similarity information

Retrieval is independently testable.

---

# 32. Semantic Search

Semantic Search:

Query  
→ Embedding  
→ Vector Search  
→ Ranked Evidence

No LLM generation is required.

This phase teaches embeddings, vector similarity, chunking, metadata, and retrieval evaluation before RAG.

---

# 33. RAG Pipeline

```text
Question
   ↓
Validation
   ↓
Query Preparation
   ↓
Embedding
   ↓
Retrieval
   ↓
Evidence Filtering
   ↓
Context Builder
   ↓
RAG Prompt
   ↓
LLM
   ↓
Output Validation
   ↓
Evidence Mapping
   ↓
Grounded Response
```

Retrieval and generation remain separate concerns.

---

# 34. RAG Truthfulness Behaviour

Evidence available  
→ Answer using evidence.

Evidence missing  
→ State that demonstrated evidence was not found.

Conflicting evidence  
→ Avoid silently selecting an unsupported claim.

Superseded information  
→ Must not be reintroduced.

---

# 35. Job Matcher Architecture

Initial pipeline:

Job Description  
→ Validate  
→ Extract Requirements  
→ Structured Requirement Schema  
→ Retrieve Portfolio Evidence  
→ Match Classification  
→ Optional Evidence-Based Explanation  
→ Validated Result

This is not initially an autonomous agent.

---

# 36. GitHub Integration

GitHub is an external integration:

Backend  
→ GitHub Integration Service  
→ GitHub REST API

Potential responsibilities:

- HTTP client
- Timeout
- Rate-limit handling
- Caching
- Response normalization
- Error translation

---

# 37. GitHub Failure Behaviour

If GitHub fails:

- Stored project descriptions remain
- Screenshots remain
- Stored technology evidence remains
- Repository URL remains
- Live metadata becomes temporarily unavailable

No project disappears because an external API timed out.

---

# 38. Tool Calling

AI Orchestrator  
→ Explicit Tool Registry  
→ Existing Application Services

Potential tools:

- `search_portfolio`
- `get_project`
- `get_skills`
- `retrieve_evidence`
- `get_github_project`
- `analyze_job_evidence`

---

# 39. Tool Definition

Every tool should define:

- Name
- Purpose
- Input schema
- Output contract
- Permission level
- Timeout
- Failure behaviour

Only registered tools execute.

---

# 40. Tool Security

Initial public tools are read-only.

Forbidden public capabilities include:

- Shell execution
- Arbitrary filesystem access
- Arbitrary SQL
- Repository editing
- Environment access
- Production configuration changes
- Deployment actions

Any future mutating tool requires separate authorization design.

---

# 41. Controlled Agent Workflow

An agent is a bounded application workflow.

```text
Initialize State
      ↓
Choose Allowed Action
      ↓
Execute Approved Tool
      ↓
Update State
      ↓
Check Stop Condition
   ┌──┴──┐
Continue Finish
```

Required controls:

- Maximum steps
- Overall timeout
- Tool allowlist
- Explicit state
- Failure handling
- Stop rules
- Traceability

---

# 42. Deterministic Before Agentic

Before implementing an agent, ask:

Can normal application code perform this workflow more clearly?

If yes, use normal code.

Agentic architecture should solve genuine uncertainty or branching.

---

# 43. LangGraph Boundary

LangGraph is optional.

If adopted:

```text
workflows/
└── <workflow>/
    ├── state
    ├── nodes
    ├── routing
    └── graph
```

Reusable logic remains in services, retrieval, integrations, and tools.

The graph coordinates them.

---

# 44. MCP Boundary

MCP is a separate interface layer:

```text
                Application Services
                  ▲             ▲
                  │             │
               REST API       MCP
                  │             │
               Browser      MCP Client
```

MCP reuses existing services.

It must not duplicate core business logic.

---

# 45. Authentication

Public user accounts are out of scope for v1.0.

Do not introduce registration/login/password reset/profile infrastructure without a new requirement.

Protected developer operations should initially use deployment processes, scripts, or private operational workflows rather than a public account system.

---

# 46. Contact Architecture

Core requirement:

Direct professional email remains available.

A future contact form may use:

Frontend  
→ Contact API  
→ Validation  
→ Rate Limit  
→ Anti-Abuse  
→ Email/Contact Provider

Contact-provider failure must not remove the direct contact alternative.

---

# 47. Logging and Observability

Potential structured categories:

HTTP:
- route
- status
- duration

AI:
- provider/model
- duration
- token counts
- outcome

Retrieval:
- query ID
- result IDs
- scores

Tools:
- name
- duration
- success/failure

Workflows:
- transition
- step count
- stop reason

---

# 48. Privacy-Aware Logging

Do not automatically log:

- Entire pasted job descriptions
- Entire AI conversations
- Secrets
- Authorization headers
- Private professional documents

Logs exist for operations, not indiscriminate retention.

---

# 49. Error Boundaries

External Provider Error  
→ Integration Error  
→ Application Error  
→ API Error  
→ User-Friendly UI State

Users must not receive raw:

- Stack traces
- SQL errors
- Credentials
- Internal filesystem information

---

# 50. Feature Criticality

## Critical
Homepage, Projects, Skills, Experience, Education, Resume, Contact

## Non-Critical
GitHub live metadata, AI Assistant, Semantic Search, Job Matcher

## Experimental
Agent demos, MCP, Advanced 3D

Experimental failures must never affect recruiter-critical functionality.

---

# 51. Graceful Degradation

LLM unavailable  
→ Core portfolio works.

Embedding unavailable  
→ Retrieval-dependent features show unavailable state.

Vector search unavailable  
→ Do not fabricate grounded answers.

GitHub unavailable  
→ Stored project evidence remains.

Database unavailable  
→ Source-controlled recruiter core remains accessible where architecture permits.

3D unavailable  
→ Standard visual fallback.

MCP unavailable  
→ Web portfolio unaffected.

---

# 52. Security Trust Boundary

Browser input is untrusted.

External AI output is also untrusted.

Conceptually:

Untrusted Visitor  
→ API Validation  
→ Application Services  
→ Controlled Infrastructure / Providers

---

# 53. Secret Management

Secrets remain outside source code.

Examples:

- Database URL
- LLM API key
- Embedding API key
- Integration tokens
- Contact-provider credentials

Development uses environment-based configuration.

Production uses platform secret management.

---

# 54. Rate Limiting

Protect expensive or abuse-sensitive endpoints such as:

- AI chat
- Job Matcher
- Semantic Search where expensive
- Contact
- External API operations

Rate limiting is server-side.

---

# 55. AI Cost Controls

Support:

- Maximum input size
- Maximum output size
- Token limits
- Model selection
- Timeouts
- Bounded retries
- Rate limits
- Usage visibility
- Caching where appropriate

AI cost should be observable.

---

# 56. Caching

Possible cache candidates:

- GitHub metadata
- Approved normalized content
- Expensive stable external responses
- Embedding results

Do not introduce Redis by default.

Use the simplest suitable mechanism first.

---

# 57. Feature Flags

Potential flags:

- AI assistant
- Semantic Search
- Job Matcher
- Agent workflow
- MCP
- Advanced visual experiments

Simple environment/configuration flags are sufficient.

---

# 58. Testing Architecture

Frontend:
- Component tests
- Feature tests
- Accessibility checks

API:
- Route/contract tests
- Validation tests

Services:
- Unit tests

Database:
- Integration tests

LLM:
- Provider mocks
- Structured-output tests

Retrieval:
- Chunking / retrieval tests

RAG:
- Grounding / no-evidence tests

Tools:
- Schema / permission / failure tests

Workflows:
- State / stop / maximum-step tests

Production:
- E2E journeys
- Browser
- Performance
- Accessibility
- Security regression

---

# 59. External Provider Testability

Standard automated tests should not require paid production APIs.

Preferred:

Application Service  
→ Fake / Mock Provider

Live-provider evaluation remains separate and explicit.

---

# 60. Configuration Architecture

Separate:

- Development
- Test
- Production

Potential configuration:

- API URL
- Database URL
- Provider/model IDs
- Rate limits
- Timeouts
- Feature flags
- Logging level

Environment changes should not require source-code edits.

---

# 61. Accessibility Architecture

Accessibility belongs in shared frontend primitives.

Base components should support:

- Semantic elements
- Keyboard interaction
- Focus
- Labels
- Reduced motion
- Accessible status messaging

---

# 62. Performance Architecture

Frontend:
- Optimize media
- Code split where useful
- Defer non-critical AI
- Lazy-load advanced visuals

Backend:
- Efficient queries
- Indexes
- Timeouts
- Connection management

AI:
- Controlled context
- Focused retrieval
- Bounded output
- Avoid unnecessary repeated provider calls

---

# 63. Deployment Stage 1

Browser  
→ Frontend Hosting  
→ Portfolio

This is the first publicly useful release.

---

# 64. Deployment Stage 2

Browser  
→ Frontend Hosting  
→ Backend Hosting  
→ Managed PostgreSQL

---

# 65. Deployment Stage 3

Browser  
→ Frontend  
→ Backend  
├── PostgreSQL / pgvector  
├── LLM Provider  
├── Embedding Provider  
└── GitHub API

The backend remains the trusted integration boundary.

---

# 66. Deployment Stage 4

Advanced internal modules:

- API
- Services
- Retrieval
- AI
- Integrations
- Tools
- Workflows

Optional MCP reuses the same services.

---

# 67. Docker Architecture

Docker is intended for:

- Reproducible backend runtime
- PostgreSQL local environment
- Production packaging where suitable
- Container learning

Potential local setup:

```text
docker compose
├── database
└── backend
```

Frontend may run through the native Vite development server.

---

# 68. Background Processing Policy

Do not initially introduce:

- Celery
- RabbitMQ
- Kafka
- Distributed workers

Initial RAG ingestion may be a developer command/script.

Background processing can be reconsidered through an ADR if a real asynchronous workload emerges.

---

# 69. Repository Architecture

Approved baseline direction:

```text
ai-powered-developer-portfolio/
├── README.md
├── AGENTS.md
├── CHANGELOG.md
├── docs/
│   ├── 00-executive-summary.md
│   ├── 01-project-requirements.md
│   ├── 02-current-status.md
│   ├── 03-content-inventory.md
│   ├── 04-content-strategy.md
│   ├── 05-ui-ux-direction.md
│   ├── 06-roadmap.md
│   ├── 07-architecture.md
│   ├── 08-technology-decisions.md
│   ├── 09-master-build-order.md
│   ├── 10-definition-of-done.md
│   └── adr/
├── frontend/
├── backend/
├── scripts/
└── .github/
    └── workflows/
```

Exact folders are created progressively.

---

# 70. Monorepo Decision

A monorepo is approved because the project has:

- One product
- One owner
- One documentation system
- Coordinated frontend/backend changes
- Easier learning
- Easier coding-agent context
- Simpler issue tracking

Separate repositories require a future real requirement.

---

# 71. Dependency Direction

Preferred conceptual direction:

API  
→ Application Services  
→ Domain / Persistence / AI / Integration Boundaries  
→ Infrastructure Providers

External infrastructure should serve application use cases rather than control them.

---

# 72. Abstraction Rule

Create abstractions where a meaningful boundary exists.

Good candidates:

- LLM provider
- Embedding provider
- External API
- Persistence when complexity justifies it

Do not abstract every function.

---

# 73. AI Framework Policy

Preferred sequence:

Direct provider integration

→ Small application service

→ Structured output

→ Embeddings

→ Retrieval

→ RAG

→ Tools

→ Workflow

→ Evaluate orchestration framework

A framework should simplify an understood problem.

---

# 74. Architecture Decision Records

Likely ADR topics include:

- Monorepo
- Frontend framework
- TypeScript
- Styling
- Motion
- FastAPI
- SQLAlchemy / Alembic
- PostgreSQL / pgvector
- Source-controlled content
- LLM provider
- Hosting
- LangGraph adoption/rejection
- MCP adoption/rejection
- Three.js adoption/rejection

Not every minor package needs an ADR.

---

# 75. Architecture Change Process

Problem identified  
→ Explain reason  
→ Compare alternatives  
→ Record ADR where needed  
→ Update Architecture / Technology / Build Order  
→ Implement

Major architecture should not change silently through generated code.

---

# 76. Coding-Agent Architecture Guardrail

Repository coding agents may not independently introduce:

- New framework
- New database
- New architectural layer
- New provider
- New orchestration framework
- Authentication system
- Background-processing system
- Deployment platform
- Global state architecture

unless authorized by the Build Order or approved ADR.

---

# 77. Understanding Gate

Before a major architecture phase is considered understood, the project owner should be able to explain:

Frontend:
Where does content come from? How does routing work?

Backend:
What happens after an HTTP request arrives?

Database:
Which data belongs in PostgreSQL and why?

LLM:
Where is the provider key stored?

Embeddings:
What does an embedding represent?

Retrieval:
How is relevant evidence selected?

RAG:
Where does retrieval stop and generation begin?

Tools:
Who decides which capabilities the model can use?

Agent:
What prevents infinite execution?

MCP:
How is MCP different from the REST interface?

Production:
Which components communicate over the network?

---

# 78. Explicit Non-Goals

v1.0 does not exist to demonstrate:

- Microservices
- Kubernetes
- Kafka
- Event sourcing
- CQRS
- Distributed databases
- Multi-agent swarms
- Blockchain
- Public account management
- Enterprise queues
- Service meshes

These require actual product requirements.

---

# 79. Architecture Success Criteria

Architecture v1.0 succeeds when:

- Portfolio MVP can deploy without backend AI
- Core professional content survives backend failure
- Backend can be added without rebuilding the frontend
- PostgreSQL solves meaningful persistence problems
- One datastore supports relational/vector needs initially
- AI secrets remain server-side
- Retrieval works independently of generation
- RAG uses approved evidence
- Public RAG ingestion is prohibited
- GitHub is non-critical
- Tools are allowlisted
- Agent workflows are bounded
- LangGraph is optional
- MCP is optional
- External providers can be mocked
- Failures degrade gracefully
- The architecture remains explainable

---

# 80. Final Architecture Principle

The foundation is:

Reliable Frontend

+

Trusted Backend

+

Purposeful Persistence

+

Approved Professional Evidence

+

Replaceable External Integrations

+

Controlled AI Capabilities

Advanced AI sits on top of these foundations. It does not replace them.
