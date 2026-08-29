# AI-Powered Developer Portfolio
## Project Requirements

**Document Version:** 1.0  
**Status:** APPROVED / BASELINE  
**Snapshot Date:** 2026-08-29  
**Project Phase:** Round 1 — Project Foundation

---

# 1. Purpose

This document defines **what the product must do**.

Architecture determines how requirements are implemented.

Technology Decisions determine which implementation technologies are used.

---

# 2. Product Objective

Build a recruiter-first professional developer portfolio that:

- Presents verified professional information clearly
- Demonstrates real software projects
- Provides detailed technical case studies
- Remains useful without AI
- Progressively becomes a full-stack application
- Progressively adds grounded AI capabilities
- Remains secure, accessible, maintainable, and explainable

---

# 3. User Groups

## USER-001 — Recruiters / HR
Must be able to understand professional fit quickly.

## USER-002 — Technical Recruiters / Hiring Managers
Must be able to inspect project depth, technologies, architecture, and testing.

## USER-003 — Developers / Interviewers
Should be able to inspect technical documentation, GitHub evidence, and engineering decisions.

## USER-004 — Project Owner
Must be able to understand and explain the major architecture and code flow.

---

# 4. Core Portfolio Requirements

## PORT-001 — Professional Identity — MUST
The homepage must clearly communicate the candidate's software-development identity.

## PORT-002 — About — MUST
The portfolio must provide concise professional background and technical direction.

## PORT-003 — Skills — MUST
Skills must be organized clearly and supported by demonstrable evidence.

## PORT-004 — Experience — MUST
Verified professional experience must be presented truthfully and concisely.

## PORT-005 — Projects — MUST
The portfolio must present flagship and supporting projects with clear technology, status, and links.

## PORT-006 — Project Case Studies — MUST
Important projects must have deeper pages covering problem, implementation, architecture, testing, challenges, lessons, and future work where relevant.

## PORT-007 — Education — MUST
Verified education must be included.

## PORT-008 — Certifications — SHOULD
Relevant selected certifications / professional learning should be included without overwhelming the technical story.

## PORT-009 — Resume — MUST
A current approved public resume must be accessible.

## PORT-010 — Contact — MUST
A clear professional contact path must exist.

## PORT-011 — GitHub / LinkedIn — MUST
Public professional profiles must be easily accessible.

## PORT-012 — AI Independence — MUST
Core recruiter-facing content must remain usable without AI functionality.

---

# 5. Professional Truthfulness Requirements

## TRUTH-001 — Verified Employment — MUST
Only real employment may be presented as employment.

## TRUTH-002 — Project vs Employment — MUST
Project work must not be represented as professional employment.

## TRUTH-003 — Certification Scope — MUST
Certifications must not automatically be presented as mastery, professional title, or academic degree.

## TRUTH-004 — Planned Technology — MUST
Future or planned technology must not be presented as completed experience.

## TRUTH-005 — Project Status — MUST
In-development features must be clearly labelled.

## TRUTH-006 — Metrics — MUST
Quantified claims require defensible evidence.

## TRUTH-007 — Superseded Information — MUST
Newer approved factual corrections override older drafts and historical content.

## TRUTH-008 — AI Professional Claims — MUST
AI-generated professional claims must follow the same evidence standards.

---

# 6. Project Requirements

## PROJ-001 — Flagship Software Project — MUST
The portfolio must prominently feature the strongest current full-stack project.

## PROJ-002 — Supporting Software Project — MUST
A second substantial software project should demonstrate additional technology breadth.

## PROJ-003 — Data / Analytics Evidence — SHOULD
Existing data / analytics projects should be presented as secondary evidence.

## PROJ-004 — Real Evidence — MUST
Project screenshots, repository links, documentation, test results, and live demos must be used only when verified.

## PROJ-005 — Project Status — MUST
Incomplete projects must not be presented as finished.

---

# 7. UX Requirements

## UX-001 — Recruiter Clarity — MUST
The first screen must make professional identity and key actions obvious.

## UX-002 — Navigation — MUST
Navigation must be predictable and usable.

## UX-003 — Mobile — MUST
The site must be usable on modern mobile devices.

## UX-004 — Responsive — MUST
Layouts must adapt across representative mobile, tablet, laptop, and desktop widths.

## UX-005 — Dark-First — MUST
The initial design should use the approved dark-first technical visual direction.

## UX-006 — Light Theme — SHOULD
The design system should be capable of supporting a future light mode. Light mode is not an M1 blocker.

## UX-007 — Subtle Motion — SHOULD
Motion may enhance hierarchy and interaction.

## UX-008 — Motion Independence — MUST
Content and navigation must remain usable without decorative motion.

## UX-009 — No Blocking Visual Gimmicks — MUST
Custom cursors, scroll-jacking, cinematic loaders, and similar effects must not block professional usability.

---

# 8. Accessibility Requirements

## A11Y-001 — Semantic Structure — MUST
Use semantic HTML where practical.

## A11Y-002 — Keyboard Access — MUST
Interactive functionality must be keyboard accessible.

## A11Y-003 — Focus — MUST
Visible focus must be preserved.

## A11Y-004 — Contrast — MUST
Important text and controls must meet practical contrast expectations.

## A11Y-005 — Reduced Motion — MUST
Motion-sensitive users must receive reduced-motion behaviour.

## A11Y-006 — Images — MUST
Meaningful images require appropriate alternative text.

## A11Y-007 — Forms — MUST
Forms must have accessible labels and error handling.

## A11Y-008 — Standard — SHOULD
Aim for WCAG 2.2 AA where applicable.

---

# 9. Performance Requirements

## NFR-PERF-001 — Recruiter Performance — MUST
The portfolio should load promptly enough for normal recruiter use.

## NFR-PERF-002 — Lighthouse Target — SHOULD
Aim approximately for 90+ in Performance, Accessibility, Best Practices, and SEO where reasonable.

## NFR-PERF-003 — LCP — SHOULD
Target LCP at or below approximately 2.5 seconds in representative conditions.

## NFR-PERF-004 — CLS — SHOULD
Target CLS at or below approximately 0.1.

## NFR-PERF-005 — Media Optimization — MUST
Project screenshots and media must be optimized.

## NFR-PERF-006 — Optional Feature Isolation — MUST
Heavy AI/3D/experimental functionality should be deferred or lazy-loaded where appropriate.

Targets are engineering guides rather than arbitrary release blockers when real-world trade-offs are justified.

---

# 10. Browser Requirements

## NFR-BROWSER-001 — Desktop — MUST
Support current modern versions of Chrome/Chromium, Edge, Firefox, and Safari where practical.

## NFR-BROWSER-002 — Mobile — MUST
Support representative Android Chrome and iOS Safari.

## NFR-BROWSER-003 — Graceful Enhancement — MUST
Experimental visuals must degrade without breaking critical content.

---

# 11. Reliability Requirements

## NFR-REL-001 — Core Availability — MUST
Critical professional content must not depend on external AI providers.

## NFR-REL-002 — GitHub Fallback — MUST
Stored project content must remain available when GitHub is unavailable.

## NFR-REL-003 — AI Failure State — MUST
AI features must expose a controlled unavailable/error state.

## NFR-REL-004 — External-Service Independence — MUST
Failure of non-critical external services must not remove recruiter-critical functionality.

## NFR-REL-005 — Experimental Isolation — MUST
MCP, agents, or advanced visuals must not become dependencies for the main portfolio.

---

# 12. Frontend Requirements

## FE-001 — React-Based Frontend — MUST
The application will use the approved React-based frontend architecture.

## FE-002 — TypeScript — MUST
Frontend application code should use TypeScript.

## FE-003 — Reusable Components — MUST
Repeated UI patterns should use coherent reusable components.

## FE-004 — Feature Organization — SHOULD
Feature-specific logic should be organized by responsibility.

## FE-005 — Source-Controlled Core Content — MUST
Initial professional portfolio content should remain source-controlled.

## FE-006 — No Frontend Secrets — MUST
Provider and database secrets must never be exposed in frontend bundles.

---

# 13. Backend Requirements

## BE-001 — API Boundary — MUST
Server-trusted operations must be handled by the backend.

## BE-002 — Validation — MUST
External input must be validated.

## BE-003 — Thin Routes — SHOULD
Routes should delegate substantial logic to application services.

## BE-004 — Safe Errors — MUST
Public clients must not receive secrets, raw stack traces, or unsafe provider/database internals.

## BE-005 — OpenAPI — MUST
The backend should provide an understandable OpenAPI contract.

## BE-006 — Environment Configuration — MUST
Development, test, and production settings must be externalized appropriately.

---

# 14. Database Requirements

## DB-001 — PostgreSQL — MUST
Use PostgreSQL for approved persistent requirements.

## DB-002 — Purposeful Persistence — MUST
Do not move static professional content into the database solely to demonstrate database usage.

## DB-003 — Migrations — MUST
Schema evolution must use migrations.

## DB-004 — Testability — MUST
Database-dependent functionality must support integration testing.

## DB-005 — Sensitive Data Minimization — MUST
Do not persist sensitive information without a real requirement.

---

# 15. AI Requirements

## AI-001 — Server-Side Provider Calls — MUST
LLM/provider credentials remain server-side.

## AI-002 — Basic Portfolio Assistant — SHOULD
A portfolio assistant may answer scoped questions about approved evidence.

## AI-003 — Structured Output Validation — MUST
Structured AI output must be validated before application use.

## AI-004 — Evidence-Based Professional Claims — MUST
Professional answers must be grounded in approved evidence.

## AI-005 — No-Evidence Behaviour — MUST
If demonstrated evidence is missing, the AI should say so.

## AI-006 — Session Context — SHOULD
Limited temporary conversation context may be supported.

## AI-007 — Persistent Chat History — SHOULD NOT
Permanent visitor chat history should not be stored by default.

## AI-008 — Streaming — SHOULD
Streaming may be added if it materially improves UX.

## AI-009 — Usage Protection — MUST
Public AI endpoints must have appropriate rate/input/output controls.

## AI-010 — Cost Awareness — SHOULD
Token/model/cost usage should be observable where practical.

---

# 16. Semantic Search Requirements

## SEARCH-001 — Embeddings — MUST
Approved content must be embeddable.

## SEARCH-002 — Vector Storage — MUST
The initial design should support vector storage in PostgreSQL via pgvector.

## SEARCH-003 — Independent Retrieval — MUST
Semantic Search must work independently of generation.

## SEARCH-004 — Metadata — MUST
Retrieved chunks must preserve useful source metadata.

## SEARCH-005 — Evaluation — MUST
Representative retrieval queries must be evaluated.

---

# 17. RAG Requirements

## RAG-001 — Approved Corpus — MUST
Only approved public-safe professional content may enter production RAG.

## RAG-002 — Private Ingestion — MUST
RAG ingestion must be developer-controlled rather than unrestricted public upload.

## RAG-003 — Retrieval Before Generation — MUST
Factual professional RAG answers must retrieve evidence before generation.

## RAG-004 — Evidence References — MUST
Relevant evidence references should be preserved for user-visible grounding where practical.

## RAG-005 — Conflict Handling — MUST
Conflicting or superseded evidence must not silently create unsupported claims.

## RAG-006 — Grounding Evaluation — MUST
The system must contain repeatable grounding/hallucination evaluation cases.

---

# 18. Job Matcher Requirements

## JM-001 — Structured Requirements — MUST
The job description must be converted into a structured requirement representation.

## JM-002 — Evidence Mapping — MUST
Requirements must be compared against approved project/profile evidence.

## JM-003 — Grounded Classification — MUST
Use categories such as Demonstrated / Partially Demonstrated / Not Demonstrated.

## JM-004 — No Skill Invention — MUST
Missing skills must remain missing.

## JM-005 — Match Score Language — MUST
Any percentage is an application estimate and must not be described as hiring probability.

## JM-006 — Privacy — MUST
Pasted job descriptions must not be permanently stored by default.

---

# 19. GitHub Integration Requirements

## INT-GH-001 — REST First — MUST
Use the GitHub REST API for initial integration.

## INT-GH-002 — Normalized Data — MUST
External responses should be normalized into application-owned schemas.

## INT-GH-003 — Timeout / Rate Limit — MUST
Handle timeouts and rate limits.

## INT-GH-004 — GitHub Fallback — MUST
GitHub failure must not remove stored project information.

---

# 20. Tool Calling Requirements

## TOOL-001 — Explicit Registry — MUST
AI-callable tools must be explicitly registered.

## TOOL-002 — Schema Validation — MUST
Tool arguments must be validated.

## TOOL-003 — Read-Only Baseline — MUST
Initial public tools should be read-only.

## TOOL-004 — Allowlist — MUST
Unregistered/invented tools must not execute.

## TOOL-005 — Timeouts — MUST
Tool execution should have bounded timeouts.

## TOOL-006 — Safe Failures — MUST
Tool failure must not crash the entire request.

---

# 21. Agent Workflow Requirements

## AGENT-001 — Genuine Use Case — MUST
Do not use an agent when deterministic code is clearer.

## AGENT-002 — Explicit State — MUST
Workflow state must be explicit.

## AGENT-003 — Bounded Steps — MUST
Maximum steps must exist.

## AGENT-004 — Timeout — MUST
Overall workflow timeout must exist.

## AGENT-005 — Stop Conditions — MUST
Explicit completion/termination rules must exist.

## AGENT-006 — Allowed Tools — MUST
Only approved tools may run.

## AGENT-007 — Failure Tests — MUST
Looping, tool failure, and model failure must be tested.

---

# 22. LangGraph and MCP Requirements

## LG-001 — Decision Gate — MUST
LangGraph adoption requires evaluation after a controlled workflow exists.

## LG-002 — Rejection Allowed — MUST
A documented rejection is a successful outcome.

## MCP-001 — Decision Gate — MUST
MCP is evaluated after core services exist.

## MCP-002 — Optional Production Use — MUST
Production success does not require MCP.

## MCP-003 — Reuse Services — MUST
If implemented, MCP should reuse existing application services.

---

# 23. Security Requirements

## SEC-001 — Secret Isolation — MUST
Secrets must remain outside public frontend/source control.

## SEC-002 — Input Validation — MUST
Public inputs must be validated.

## SEC-003 — Rate Limiting — MUST
Costly/abuse-sensitive public endpoints require rate limiting.

## SEC-004 — Safe Error Responses — MUST
Do not expose stack traces/secrets.

## SEC-005 — Dependency Review — MUST
New dependencies require proportional maintenance/security review.

## SEC-006 — Security Testing — MUST
Security-sensitive features require representative negative tests.

## SEC-007 — RAG Data Boundary — MUST
Private prohibited sources must remain outside the production corpus.

## SEC-008 — Internal AI Information Protection — MUST
Prompts, secrets, private documents, and privileged operational information must not be exposed unnecessarily.

## SEC-009 — AI Tool Allowlisting — MUST
Public AI cannot obtain arbitrary system capabilities.

## SEC-010 — Safe AI Output Handling — MUST
Model output must be treated as untrusted until validated where applicable.

---

# 24. Privacy Requirements

## PRIV-001 — Minimum Data — MUST
Collect only information necessary for the feature.

## PRIV-002 — Chat Retention — MUST
Do not permanently retain visitor AI conversations by default.

## PRIV-003 — Job Description Retention — MUST
Do not permanently retain pasted job descriptions by default.

## PRIV-004 — Log Minimization — MUST
Logs must avoid unnecessary raw visitor content.

## PRIV-005 — Private Document Exclusion — MUST
Private professional/administrative documents are not default AI knowledge sources.

## PRIV-006 — Public Evidence — MUST
Public professional AI answers should rely on public-safe approved evidence.

---

# 25. Observability Requirements

## OBS-001 — Application Diagnostics — MUST
Important failures should be diagnosable.

## OBS-002 — AI Operational Metadata — SHOULD
Track relevant latency, model, token, and outcome information.

## OBS-003 — Retrieval Visibility — SHOULD
Retrieval IDs/scores should be observable for debugging/evaluation.

## OBS-004 — Tool/Workflow Traceability — MUST
Important tool and workflow transitions should be traceable.

## OBS-005 — Privacy-Aware Logging — MUST
Observability must not become a sensitive-data archive.

---

# 26. Testing Requirements

## TEST-001 — Proportional Testing — MUST
Testing effort must match change type and risk.

## TEST-002 — Frontend Testing — MUST
Use unit/component and E2E testing where appropriate.

## TEST-003 — Backend Testing — MUST
API/services require appropriate pytest coverage.

## TEST-004 — Database Integration — MUST
Database behaviour requires integration testing.

## TEST-005 — Paid AI Isolation — MUST
Standard CI must not depend on paid live AI calls.

## TEST-006 — AI Evaluation — MUST
Retrieval/RAG/tools/workflows require repeatable evaluation appropriate to their risk.

---

# 27. DevOps Requirements

## DEVOPS-001 — Git History — MUST
Meaningful work should produce coherent Git history.

## DEVOPS-002 — Dependency Reproducibility — MUST
Frontend/backend dependencies must be locked reproducibly.

## DEVOPS-003 — Docker — MUST
Docker should be used where it improves reproducibility/deployment learning.

## DEVOPS-004 — CI — MUST
GitHub Actions should run appropriate automated quality checks.

## DEVOPS-005 — Deployment — MUST
M1 must be publicly deployable before advanced AI is complete.

---

# 28. Maintainability Requirements

## NFR-MAIN-001 — Understandable Structure — MUST
The project structure must remain explainable.

## NFR-MAIN-002 — No Unnecessary Layers — MUST
Do not create abstraction for abstraction's sake.

## NFR-MAIN-003 — Provider Isolation — SHOULD
External providers should be isolated behind small boundaries where replacement/testing value exists.

## NFR-MAIN-004 — Documentation Sync — MUST
Material implementation changes must not leave approved documentation knowingly misleading.

## NFR-MAIN-005 — Dependency Justification — MUST
Dependencies must solve a real problem and avoid unnecessary duplication.

---

# 29. Out of Scope for v1.0

The following are not required unless requirements change:

- Public visitor accounts
- Persistent ChatGPT-like conversation platform
- Full admin CMS
- Unrestricted AI agents
- Multi-agent swarms
- Microservices
- Kubernetes
- Kafka
- RabbitMQ
- Dedicated vector database
- Model training from scratch
- Fine-tuning merely for resume keywords
- Large-scale distributed architecture

---

# 30. Advanced Learning Hierarchy

## MUST LEARN / BUILD

- LLM API integration
- Prompt Engineering
- Structured Output
- Embeddings
- Vector Search
- RAG
- Basic Evaluation
- AI Security

## STRONGLY INTENDED

- Job Matcher
- GitHub Integration
- Tool Calling
- Controlled Agent Workflow

## IMPLEMENT IF JUSTIFIED

- LangGraph
- MCP
- Advanced 3D
- Advanced agent orchestration

The project must not force conditional technology into production solely for branding.

---

# 31. Release Principle

The project releases progressively:

Portfolio MVP

→ Full-Stack

→ AI-Enhanced

→ Advanced AI

→ Production v1.0

A later milestone must not prevent earlier recruiter value from being deployed.

---

# 32. Final Requirement Principle

A feature belongs in the project when it improves:

- Recruiter value
- Technical learning
- Product capability
- Engineering evidence

without creating disproportionate complexity, risk, or maintenance burden.
