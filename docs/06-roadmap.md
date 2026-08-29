# AI-Powered Developer Portfolio
## Roadmap

**Document Version:** 1.0  
**Status:** APPROVED / BASELINE  
**Snapshot Date:** 2026-08-29

---

# 1. Purpose

This roadmap defines the major development progression.

The Master Build Order contains the exact 328-step execution sequence.

This document focuses on milestones, phase intent, dependencies, learning progression, and decision gates.

---

# 2. Roadmap Principles

The project follows these principles:

- Recruiter value first
- Progressive complexity
- Learn before automate
- Stable layers before advanced layers
- Test before advance
- Understand before advance
- Evidence before branding
- Optional technology must earn its place

---

# 3. Milestones

## M0 — Foundation Complete

Includes:

- Requirements
- Content audit
- Content strategy
- UI/UX direction
- Roadmap
- Architecture
- Technology decisions
- Master Build Order
- Definition of Done
- Agent rules
- Early README

**Status: Complete**

---

## M1 — Portfolio MVP

Goal:

Deploy a recruiter-usable portfolio with no AI dependency.

Includes:

- Frontend foundation
- Design system
- Professional content
- Featured projects
- Case studies
- Resume
- Contact
- Accessibility baseline
- Browser QA
- Performance baseline
- Early deployment

---

## M2 — Full-Stack Portfolio

Goal:

Add a real backend and purposeful persistence.

Includes:

- FastAPI
- Pydantic
- OpenAPI
- PostgreSQL
- SQLAlchemy
- Alembic
- Full-stack request/data flow
- Database tests

---

## M3 — AI-Enhanced Portfolio

Goal:

Add explainable AI functionality grounded in approved portfolio evidence.

Includes:

- LLM API integration
- Prompt engineering
- Structured output
- Embeddings
- pgvector
- Semantic Search
- RAG
- Grounding evaluation

---

## M4 — Advanced AI Portfolio

Goal:

Add advanced but controlled application intelligence.

Includes:

- Job Matcher
- GitHub Integration
- Tool Calling
- One justified bounded multi-step workflow

LangGraph and MCP remain decision-gated.

Their absence does not block M4 if the engineering decision is to reject them.

---

## M5 — Production v1.0

Goal:

Harden the application and professional presentation.

Includes:

- AI Evaluation
- Security / Privacy
- Rate Limits
- Cost Controls
- Observability
- Docker
- CI/CD
- Full Production Deployment
- Browser / Accessibility / Performance Hardening
- Final Documentation
- Case Study
- Resume / LinkedIn / GitHub alignment

---

# 4. Phase 0 — Project Foundation

Purpose:

Define the product before implementation.

Completed outputs:

- Executive Summary
- Requirements
- Current Status
- Content Inventory
- Content Strategy
- UI/UX Direction
- Roadmap
- Architecture
- Technology Decisions
- Master Build Order
- Definition of Done
- AGENTS.md
- README v0.1

---

# 5. Phase 1 — Repository and Development Environment

Purpose:

Create a safe reproducible development foundation.

Key outcomes:

- Git / GitHub verified
- Node/npm verified
- Python/uv verified
- Docker verified
- Repository created
- `.gitignore`
- safe environment pattern
- ADR structure
- foundation docs installed

---

# 6. Phase 2 — Frontend Foundation and Design System

Purpose:

Build the frontend shell before professional content.

Key topics:

- Vite
- React
- TypeScript
- React Router
- Tailwind
- Motion
- ESLint / Prettier
- Vitest
- Playwright baseline
- Responsive layout
- Accessibility primitives
- Internal design system
- Component provenance

---

# 7. Phase 3 — Recruiter Portfolio MVP

Purpose:

Create a real professional website before advanced backend/AI work.

Includes:

- Master software-developer resume
- GitHub evidence cleanup
- Project media selection
- Homepage
- Projects
- Case studies
- Skills
- Experience
- Education
- Certifications
- About
- Resume / Contact
- SEO baseline
- Accessibility
- Performance
- Public deployment

M1 is reached here.

---

# 8. Phase 4 — Backend Foundation

Purpose:

Teach the frontend/backend boundary clearly.

Includes:

- API Contract
- uv backend project
- FastAPI
- settings
- health endpoint
- safe errors
- CORS
- logging
- Pydantic
- OpenAPI
- pytest
- frontend API client

Learning gate:

Explain browser → React → HTTP → FastAPI → response.

---

# 9. Phase 5 — PostgreSQL and Structured Application Data

Purpose:

Introduce persistence where it creates real engineering value.

Includes:

- Data Model
- PostgreSQL
- Docker Compose database
- SQL
- SQLAlchemy 2.x
- Alembic
- migrations
- integration tests
- selected metadata persistence

Do not force all portfolio copy into the database.

M2 is reached here.

---

# 10. Phase 6 — LLM Application Fundamentals

Purpose:

Learn direct LLM integration before RAG or frameworks.

Includes:

- AI System Design
- AI security/privacy baseline
- LLM provider decision
- provider adapter
- secrets
- chat schemas
- feature flags
- basic portfolio assistant
- fake-provider tests
- controlled real-provider smoke test

AI evaluation begins here rather than waiting for a final AI phase.

---

# 11. Phase 7 — Prompt Engineering and Structured Outputs

Purpose:

Learn reliable model interaction.

Includes:

- Prompt organization
- Pydantic structured output
- validation
- bounded retries
- malformed output testing
- prompt regression examples

---

# 12. Phase 8 — Embeddings and Semantic Search

Purpose:

Understand retrieval without generation.

Includes:

- embedding-model decision
- vector dimensionality
- pgvector
- chunking
- normalization
- private ingestion script
- embeddings
- vector similarity
- Semantic Search API
- Search UI
- retrieval evaluation

Learning gate:

Semantic Search must work independently before RAG.

---

# 13. Phase 9 — RAG

Purpose:

Combine retrieval with generation.

Pipeline:

Question

→ Embedding

→ Retrieval

→ Evidence

→ Context

→ LLM

→ Grounded Answer

Includes:

- RAG Design
- corpus manifest
- source versioning
- context builder
- grounded prompt
- RAG service
- evidence mapping
- no-evidence behaviour
- conflicting / superseded content tests
- hallucination / grounding tests

M3 is reached here.

---

# 14. Phase 10 — Job Description Matcher

Purpose:

Build an evidence-based application workflow before agents.

Initial flow:

Job Description

→ Requirements

→ Portfolio Evidence

→ Classification

→ Explanation

The first implementation is deterministic.

Do not begin as an autonomous agent.

---

# 15. Phase 11 — GitHub Integration

Purpose:

Learn deterministic external API integration before model-controlled tools.

Sequence:

FastAPI

→ GitHub Service

→ HTTPX

→ GitHub REST API

Includes:

- timeouts
- rate limits
- normalization
- caching where useful
- stored fallback

This phase intentionally occurs before tool calling.

---

# 16. Phase 12 — Tool Calling

Purpose:

Allow AI to invoke safe application-owned capabilities.

Includes:

- tool security policy
- schemas
- explicit allowlist
- portfolio search
- project lookup
- skills lookup
- GitHub lookup
- argument validation
- timeouts
- error behaviour

Public tools begin read-only.

---

# 17. Phase 13 — Controlled Agentic Workflow

Purpose:

Introduce agentic decision-making only after tools are understood.

Required controls:

- explicit state
- allowed tools
- maximum steps
- timeout
- stop conditions
- loop prevention
- observability

Before adoption, compare against deterministic application code.

M4 is reached when one justified bounded workflow works safely.

---

# 18. Phase 14 — LangGraph Decision Gate

Purpose:

Evaluate graph orchestration against a real workflow.

Possible outcomes:

- ADOPT
- REJECT

If adopted, use LangGraph to coordinate existing services/tools.

Do not move business logic exclusively into graph nodes.

A documented rejection is valid.

---

# 19. Phase 15 — MCP Decision Gate

Purpose:

Learn MCP using the existing application architecture.

Potential pattern:

Application Services

← REST API

← MCP Server

MCP should reuse existing services.

Possible outcomes:

- Production use
- Learning prototype
- Rejection

MCP does not block project completion.

---

# 20. Phase 16 — AI Evaluation

Evaluation begins at first LLM integration and becomes formal here.

Evaluate:

- Semantic retrieval
- RAG grounding
- No-evidence behaviour
- Job Matcher evidence quality
- Tool selection
- Workflow completion
- Prompt injection
- AI cost / latency

Live paid-provider evaluation remains separate from normal required CI.

---

# 21. Phase 17 — Security and Privacy Hardening

Includes:

- Rate limits
- Input limits
- Output/token limits
- Tool boundaries
- Prompt-injection tests
- Private RAG source protection
- Safe logging
- Secret handling
- Dependency/security checks

Critical professional-truthfulness or tool-boundary failures block release.

---

# 22. Phase 18 — Observability and AI Cost Control

Includes:

- structured logs
- latency
- provider/model metadata
- token usage
- cost estimation
- retrieval IDs / scores
- tool calls
- workflow transitions
- privacy-aware retention

---

# 23. Phase 19 — Production Containers and Environment Architecture

Includes:

- production backend Dockerfile
- Docker Compose
- health checks
- environment strategy
- production secrets

Do not containerize components unnecessarily during early learning.

---

# 24. Phase 20 — CI/CD

Includes:

- Frontend GitHub Actions
- Backend GitHub Actions
- Tests
- Lint
- Build
- Database/integration testing where practical
- optional explicit live-AI workflow

Normal CI must not require paid AI.

---

# 25. Phase 21 — Full Production Deployment

Select current providers when this phase approaches.

Evaluate:

- Backend hosting
- Managed PostgreSQL / pgvector
- Frontend deployment
- Region
- Security
- Cost
- Reliability
- Cold start / sleeping
- Logs
- Secret handling

Connect:

Frontend

→ Backend

→ Database

→ AI Providers

→ GitHub

---

# 26. Phase 22 — Accessibility, Performance, and Browser Hardening

Final QA includes:

- Chrome
- Edge
- Firefox
- Safari
- Android Chrome
- iOS Safari
- Keyboard
- Reduced motion
- Lighthouse
- Core Web Vitals
- production smoke flows

---

# 27. Phase 23 — Optional Advanced Visual Enhancement

Only after the professional product is stable.

Potential evaluation:

- GSAP
- Three.js
- React Three Fiber
- advanced hero / architecture visualization

Production adoption requires measurable value and acceptable:

- Performance
- Mobile behaviour
- Reduced-motion fallback
- Accessibility
- Maintainability

Rejecting the prototype is valid.

---

# 28. Phase 24 — Final Documentation and Career Presentation

Includes:

- Final README
- Updated Architecture
- Final Technology Decisions
- ADRs
- Data Model
- API Contract
- AI System Design
- RAG Design
- Security / Privacy
- Testing / Evaluation
- Deployment
- Learning / Interview Guide
- Final case study
- Architecture diagrams
- GitHub cleanup
- Resume project bullets
- LinkedIn project content
- Cross-platform truthfulness audit

M5 is reached here.

---

# 29. Timeline Estimate

Target:

**12–16 weeks / approximately 150–200 focused hours**

Comfortable:

**16–20 weeks**

Indicative sequence:

Weeks 1–2  
Foundation / repository / environment

Weeks 2–4  
Frontend / portfolio MVP

Weeks 4–5  
Early deployment / backend

Weeks 5–6  
PostgreSQL / full-stack

Weeks 6–7  
LLM / structured output

Weeks 7–9  
Embeddings / Semantic Search / RAG

Weeks 9–10  
Job Matcher / GitHub

Weeks 10–11  
Tool calling

Weeks 11–12  
Controlled workflow

Weeks 12–13  
LangGraph / MCP decisions

Weeks 13–14  
Evaluation / security / observability

Weeks 14–15  
Containers / CI/CD / deployment

Weeks 15–16  
Hardening / documentation / career presentation

The schedule may expand when deeper learning or job applications require it.

---

# 30. Understanding Gates

A working feature is not complete if the project owner cannot explain the important flow.

Learning-critical gates should include questions such as:

- What problem does this layer solve?
- Which file starts the flow?
- What enters?
- What returns?
- What fails?
- How is it tested?
- Why was this design selected?

---

# 31. Git Workflow

Normal implementation cycle:

Implementation

→ Test

→ Review

→ Understanding Check

→ Documentation Update where required

→ Git Status / Diff

→ Coherent Commit when authorized

→ Next Step

---

# 32. Codex Workflow

Codex receives:

- Relevant approved documents
- One Build Order step
- Scope
- Acceptance criteria
- Test expectations

Codex should not receive:

"Build the entire portfolio."

The repository agent rules are defined in `AGENTS.md`.

---

# 33. Scope Escalation Rule

Before adding a feature/technology, evaluate:

- Recruiter value
- Learning value
- Product necessity
- Complexity
- Security
- Performance
- Cost
- Maintenance
- Current phase

Possible outcomes:

- Add Now
- Add Later
- Prototype
- Reject

---

# 34. Final Roadmap Principle

The project should become useful early and sophisticated gradually.

The roadmap must never allow optional AI experimentation to delay a credible professional portfolio.
