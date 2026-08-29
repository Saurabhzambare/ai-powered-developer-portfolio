# AI-Powered Developer Portfolio

A recruiter-first developer portfolio and structured full-stack / applied-AI learning project.

> **Project Status:** Foundation complete — implementation not yet started.
>
> The application and AI capabilities described as planned in this README have not yet been implemented unless explicitly stated otherwise.

---

## Overview

This project is being developed for two connected purposes:

1. Build a professional software-development portfolio for recruiters and hiring managers.
2. Learn and demonstrate modern full-stack and applied-AI engineering through a controlled implementation process.

The core portfolio will be useful without AI.

Planned recruiter-facing content includes:

- Professional introduction
- Technical skills
- Professional experience
- Featured projects
- Detailed project case studies
- Education
- Certifications / professional learning
- Resume
- Contact information

After the recruiter-facing portfolio is stable, the application is planned to progressively add:

- FastAPI backend services
- PostgreSQL
- LLM integration
- Structured AI output
- Embeddings
- pgvector
- Semantic Search
- Retrieval-Augmented Generation (RAG)
- Job Description Matching
- GitHub API integration
- AI Tool Calling
- Controlled Agentic Workflows
- AI Evaluation
- Security, privacy, and usage controls
- Production deployment

Advanced technologies such as LangGraph, MCP, GSAP, and Three.js remain decision-gated.

They will not be added merely to increase the number of technologies listed on the project.

---

# Current Status

## Completed

Round 1 — Project Foundation is complete.

Approved foundation work includes:

- Executive Summary
- Project Requirements
- Current Status
- Content Inventory
- Content Strategy
- UI/UX Direction
- Roadmap
- Architecture
- Technology Decisions
- Master Build Order
- Definition of Done
- Repository Agent Instructions
- README v0.1

The approved Master Build Order defines:

**328 controlled implementation steps**

across:

**24 implementation phases**

with milestone gates from M0 through M5.

## Not Yet Implemented

The following application capabilities do not yet exist:

- React portfolio application
- Public portfolio deployment
- FastAPI backend
- PostgreSQL application persistence
- pgvector integration
- LLM integration
- Semantic Search
- RAG
- Job Matcher
- GitHub API enrichment
- AI Tool Calling
- Agent workflow
- LangGraph evaluation
- MCP evaluation
- Production backend deployment
- Final CI/CD
- Production v1.0

This section must evolve with the actual repository.

---

# Milestones

## M0 — Foundation Complete

Project requirements, architecture, technology choices, execution order, quality rules, and coding-agent behaviour have been defined and approved.

**Status: Complete**

## M1 — Recruiter Portfolio MVP

A publicly deployed professional portfolio usable for real job applications.

Core requirements include:

- Clear professional identity
- Featured projects
- Evidence-based technical skills
- Accurate professional experience
- Education
- Selected certifications
- Resume
- GitHub / LinkedIn
- Contact path
- Responsive design
- Accessibility baseline
- Performance baseline

AI is not required for M1.

## M2 — Full-Stack Portfolio

Planned additions include:

- FastAPI
- Pydantic
- OpenAPI
- PostgreSQL
- SQLAlchemy
- Alembic
- Meaningful persistent application data

## M3 — AI-Enhanced Portfolio

Planned additions include:

- LLM integration
- Structured AI output
- Embeddings
- pgvector
- Semantic Search
- RAG
- Evidence-grounded portfolio answers

## M4 — Advanced AI Portfolio

Planned additions include:

- Job Description Matcher
- GitHub REST API integration
- AI Tool Calling
- One justified bounded multi-step workflow

LangGraph and MCP do not automatically block M4.

They are evaluated separately.

## M5 — Production v1.0

Production readiness is intended to include:

- Stable deployment
- CI/CD
- Database production setup
- AI evaluation
- AI rate limiting
- Usage and cost controls
- Security hardening
- Privacy review
- Browser/mobile QA
- Accessibility review
- Performance review
- Final documentation
- Portfolio case study
- Resume / LinkedIn / GitHub alignment

---

# Professional Positioning

The primary public positioning for this portfolio is:

**Software Developer / Full-Stack Developer**

The portfolio is intended to emphasize technical project evidence first.

Core areas include:

- Python
- Django / Django REST Framework from existing project work
- React / JavaScript from existing project work
- TypeScript as the approved frontend language for this portfolio once implemented
- PostgreSQL
- API development
- Full-stack architecture
- Applied AI as it is actually implemented

Professional management experience is presented as transferable evidence of:

- Leadership
- Operations management
- Training and coaching
- Communication
- Reporting
- Problem-solving
- Accountability
- Process discipline

Management experience supports the professional profile.

It does not replace technical evidence.

---

# Product Principle

The project follows this hierarchy:

Professional Portfolio

→ Full-Stack Application

→ AI-Enhanced Application

→ Advanced AI Capabilities

The professional portfolio is the foundation.

AI is an enhancement.

The recruiter-facing application must remain useful if AI or other optional services fail.

---

# Architecture

The approved architectural style is:

**Modular Full-Stack Monolith**

High-level direction:

```text
Visitor
   │
   ▼
React Frontend
   │
   │ HTTPS / JSON
   ▼
FastAPI Backend
   │
   ├── PostgreSQL / pgvector
   ├── LLM Provider
   ├── Embedding Provider
   └── GitHub API
```

Advanced AI capabilities remain internal modules of the product rather than separate microservices by default.

---

# Architecture Principles

## Recruiter-First Reliability

Critical portfolio content must remain usable if:

- LLM services fail
- Embeddings fail
- Vector retrieval fails
- GitHub is unavailable
- Agent workflows fail
- MCP is unavailable
- Experimental visual effects fail

## Progressive Complexity

Complexity should be added in an understandable sequence.

Frontend  
→ Backend  
→ Database  
→ LLM  
→ Structured Output  
→ Embeddings  
→ Semantic Search  
→ RAG  
→ External APIs  
→ Tool Calling  
→ Controlled Workflows

## Minimum Necessary Complexity

Technologies are not added merely for resume keywords.

Current non-baseline examples include:

- Microservices
- Kubernetes
- Kafka
- RabbitMQ
- Redis
- Public authentication
- CMS infrastructure
- Multi-agent swarms

## Evidence-Based AI

AI must not fabricate professional qualifications.

When approved evidence does not demonstrate a skill or experience, the system should say that sufficient demonstrated evidence was not found.

---

# Approved Technology Direction

## Frontend

- React
- Vite
- TypeScript
- React Router
- Tailwind CSS
- Motion for React
- Lucide React

Selective / conditional when justified:

- React Hook Form
- Zod
- TanStack Query
- GSAP
- Three.js
- React Three Fiber

## Backend

- Python
- FastAPI
- Pydantic
- pydantic-settings
- SQLAlchemy 2.x
- Alembic
- Psycopg
- HTTPX

Initial database access is planned around synchronous SQLAlchemy sessions.

## Python Project Management

- uv
- `pyproject.toml`
- `uv.lock`
- project-local `.venv`

## Data

- PostgreSQL
- pgvector

PostgreSQL is intended to provide both relational storage and initial vector search capability.

A dedicated vector database is not planned unless future requirements justify one.

## AI

Planned learning sequence:

```text
Direct LLM API
      ↓
Prompt Engineering
      ↓
Structured Output
      ↓
Embeddings
      ↓
Semantic Retrieval
      ↓
RAG
      ↓
Tool Calling
      ↓
Controlled Workflow
      ↓
LangGraph Decision
      ↓
MCP Decision
```

The production LLM provider/model and embedding provider/model remain deferred until their implementation phases.

## Testing

Frontend:

- Vitest
- React Testing Library
- Playwright

Backend:

- pytest

AI testing will primarily use:

- Fakes
- Mocks
- Deterministic fixtures
- Evaluation datasets

Normal required CI must not depend on paid live AI requests.

## Code Quality

Frontend:

- ESLint
- Prettier

Backend:

- Ruff

## Development / DevOps

- Git
- GitHub
- Docker
- Docker Compose
- GitHub Actions

---

# Design Direction

The intended visual character is:

- Modern
- Professional
- Technical
- Dark-first
- Calm
- Polished
- Recruiter-readable
- Slightly futuristic

The portfolio should avoid becoming:

- Gaming-heavy
- Cyberpunk-heavy
- Excessively neon
- Dependent on 3D
- Overloaded with animation
- Visually inconsistent

Initial emphasis:

- Clear typography
- Strong hierarchy
- Real project screenshots
- Subtle motion
- Consistent design-system primitives

---

# Accessibility Direction

Accessibility is part of the implementation rather than a final visual patch.

The project intends to support:

- Semantic HTML
- Keyboard navigation
- Visible focus
- Appropriate contrast
- Reduced-motion preferences
- Accessible form controls
- Responsive layouts
- Appropriate alternative text

Practical target:

**WCAG 2.2 AA where applicable.**

---

# Professional Truthfulness

Professional content must remain evidence-based.

The project must not:

- Invent employment
- Invent responsibilities
- Invent achievements
- Invent metrics
- Invent clients/users
- Present project work as employment
- Present planned technology as completed experience
- Present unfinished AI functionality as completed capability
- Treat certifications as automatic proof of professional mastery

Newer verified corrections override older drafts.

---

# Known Invalid Professional Information

The following historical claim is explicitly invalid:

**Innovation Centre SSM — IT Support Engineer Internship**

It must not be presented as real professional experience.

It must also remain excluded from:

- Portfolio content
- Resume
- LinkedIn content
- GitHub presentation
- AI knowledge sources
- RAG corpus
- Career summaries

even if it appears in older historical material.

---

# Current Project Evidence

## Discipline System

Current primary software-project evidence.

Technologies demonstrated include:

- Python
- Django
- Django REST Framework
- PostgreSQL
- React
- Vite
- Tailwind CSS
- JWT
- Docker
- GitHub-based development workflows

The portfolio presentation will use verified project evidence and approved screenshots.

## EPC Project & Vendor Management System

An in-development software project using a different technology ecosystem.

Current technical areas include:

- .NET
- MVC
- Entity Framework Core
- SQL Server
- Razor
- Bootstrap
- Testing

Public repository metadata/documentation requires cleanup before final portfolio publication.

## Data / Analytics Projects

Existing secondary technical evidence includes projects in areas such as:

- Banking-domain analysis
- Mercedes-Benz manufacturing analysis
- Real Estate analytics

These projects support data/analytics capability without competing with the portfolio's primary software-development identity.

Their public repository presentation will be improved before publication.

---

# Planned Portfolio Areas

Potential routes/sections include:

- Home
- Projects
- Project Case Studies
- About
- Skills
- Professional Experience
- Education
- Certifications
- Resume
- Contact
- AI Lab

Final routing may evolve during implementation.

---

# Planned AI Capabilities

## Ask My Portfolio

Planned assistant for questions about approved evidence such as:

- Projects
- Skills
- Education
- Professional experience
- Public GitHub evidence

## Semantic Search

Planned vector-based search over approved portfolio evidence without requiring LLM generation.

## Portfolio RAG

Planned retrieval of approved professional evidence followed by grounded answer generation.

## Job Description Matcher

Planned comparison of job requirements with demonstrated portfolio evidence.

The initial architecture is deterministic and evidence-based rather than autonomous.

## GitHub Integration

Planned GitHub REST API integration for selected live repository information.

Stored portfolio information remains the fallback.

## AI Tool Calling

Planned use of explicitly approved, read-only application tools.

## Controlled Agent Workflow

Planned demonstration of one bounded multi-step workflow using:

- Explicit state
- Approved tools
- Maximum steps
- Timeout
- Stop conditions
- Failure handling

## LangGraph

**Conditional**

LangGraph will be evaluated after a working controlled workflow exists.

A documented decision not to adopt it is a valid engineering outcome.

## MCP

**Conditional**

Possible outcomes include:

- Production integration
- Learning prototype only
- Rejection

The core portfolio will not depend on MCP.

---

# Reliability Model

## Critical Recruiter Features

- Homepage
- Projects
- Skills
- Experience
- Education
- Resume
- Contact information

## Non-Critical Enhancements

- AI assistant
- Semantic Search
- Job Matcher
- Live GitHub information

## Experimental

- Advanced agent features
- MCP
- Advanced 3D

Failure of non-critical or experimental features must not make the professional portfolio unusable.

---

# Repository Structure

Planned baseline:

```text
ai-powered-developer-portfolio/
│
├── README.md
├── AGENTS.md
├── CHANGELOG.md
│
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
│
├── frontend/
├── backend/
├── scripts/
│
└── .github/
    └── workflows/
```

The exact physical structure will be created progressively.

Folders should not be created before their responsibilities exist merely to make the repository look more complex.

---

# Development Method

Implementation is controlled by:

`docs/09-master-build-order.md`

The approved baseline contains:

**328 controlled steps**

across:

**24 phases**

Normal workflow:

```text
Read
  ↓
Understand
  ↓
Plan
  ↓
Implement
  ↓
Verify
  ↓
Review
  ↓
Explain
  ↓
Git Checkpoint
  ↓
Next Step
```

---

# Coding Agent Policy

Repository-level AI coding agents must follow:

`AGENTS.md`

Core rules include:

- Implement one approved Build Order step at a time.
- Do not continue autonomously.
- Do not silently change architecture.
- Do not introduce unapproved infrastructure.
- Do not invent professional information.
- Use proportional testing.
- Explain learning-critical changes.
- Report failures.
- Stop when a decision requires project-owner review.

---

# Definition of Done

Completion is governed by:

`docs/10-definition-of-done.md`

Done does not simply mean:

> "Code was generated."

Depending on the work, completion may require:

- Automated testing
- Manual verification
- Failure testing
- Accessibility review
- Security/privacy review
- Professional truthfulness review
- Understanding check
- Documentation updates
- Git-diff review

Verification effort should remain proportional to the task and its risk.

---

# AI Safety and Privacy Direction

The project is designed to protect:

- Provider credentials
- Professional source-of-truth data
- Visitor privacy
- RAG source boundaries
- AI tool permissions
- AI usage/cost controls

Private documents must not automatically enter the AI knowledge base.

Default prohibited RAG sources include:

- Pay records
- Tax records
- Immigration records
- Private employment-verification documents
- Private academic records
- Personal correspondence
- Secrets
- Unreviewed drafts
- Superseded professional information

---

# Deployment Strategy

Deployment is progressive.

## Stage 1
Recruiter-facing frontend.

## Stage 2
Backend + PostgreSQL.

## Stage 3
AI + retrieval.

## Stage 4
Approved advanced capabilities.

Specific hosting providers remain intentionally deferred until the relevant deployment phase.

They will be evaluated based on:

- Compatibility
- Reliability
- Security
- Cost
- Region
- Operational simplicity
- PostgreSQL / pgvector support where required

---

# Local Setup

There are intentionally no application installation or run instructions in README v0.1.

The implementation repository has not yet reached frontend/backend setup.

Setup instructions will be added as soon as runnable project components exist.

Do not invent setup commands before the repository supports them.

---

# Documentation Philosophy

The engineering documentation has separate responsibilities:

**Project Requirements**  
Define what the product must do.

**Architecture**  
Defines how major parts fit together.

**Technology Decisions**  
Define the approved implementation technologies.

**Roadmap**  
Defines the major development progression.

**Master Build Order**  
Defines the exact controlled execution sequence.

**Definition of Done**  
Defines what evidence is required before work is accepted.

**AGENTS.md**  
Defines how repository-level coding agents must behave.

Implementation should stay aligned with these documents.

---

# Scope Control

Before introducing a significant technology or feature, evaluate:

1. What problem does it solve?
2. Can the existing stack solve it?
3. Does it improve recruiter value?
4. Does it improve learning value?
5. What implementation complexity does it add?
6. What security/privacy impact does it have?
7. What maintenance cost does it create?
8. Does it belong in the current phase?

Possible outcomes:

- Add Now
- Add Later
- Prototype
- Reject

The objective is not maximum technology count.

The objective is a strong, understandable, tested software product.

---

# License

A repository-wide license has not yet been selected.

Until a license is explicitly added, no open-source reuse permission should be assumed.

Third-party code/component licensing and attribution requirements will be reviewed separately before adoption.

---

# Project Status

**README Version:** 0.1

**Foundation Status:** Complete

**Implementation Status:** Not Started

**Current Milestone:** M0 — Foundation Complete

**Next Stage:** Begin controlled execution of `docs/09-master-build-order.md`.
