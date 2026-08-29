# AI-Powered Developer Portfolio
## Master Build Order

**Document Version:** 1.0  
**Status:** APPROVED / BASELINE  
**Snapshot Date:** 2026-08-29

**Total Controlled Steps:** 328  
**Implementation Phases:** 24  
**Release Milestones:** M0–M5

---

# 1. Purpose

This document defines the complete implementation order for the AI-Powered Developer Portfolio.

The objective is not to complete 328 checkboxes quickly.

The objective is to build an understandable, truthful, tested, deployable product through controlled increments.

---

# 2. Execution Rule

Default:

**One Build Order step at a time.**

Normal learning/implementation cycle:

Concept

→ Simple Explanation

→ Technical Explanation

→ Architecture Context

→ Affected Files

→ Controlled Implementation

→ Run

→ Test

→ Review

→ Understanding Check

→ Git Checkpoint when appropriate

→ Next Step

---

# 3. Coding-Agent Rule

A repository-level coding agent should receive:

- `AGENTS.md`
- Relevant approved documentation
- Current Build Order step
- Scope
- Acceptance criteria
- Test expectations

Do not ask an agent to build the entire portfolio or automatically continue through future steps.

---

# 4. Gate Rule

A phase or milestone gate validates already completed work.

A gate should not normally hide major new feature implementation.

If a gate reveals substantial missing work, add or revise Build Order steps instead of expanding the gate indefinitely.

---

# 5. Understanding Requirement

For learning-critical steps, implementation is not complete merely because code runs.

The project owner should be able to explain:

- What problem the change solves
- Which file starts the flow
- What happens next
- Inputs
- Outputs
- Failure behaviour
- Testing
- Why the implementation was selected

---

# PHASE 1 — BUILD READINESS
## Steps 1–8

### Step 1
Confirm that all approved Round 1 project documents use their latest versions.

### Step 2
Confirm that corrected or superseded professional information cannot override newer approved information.

### Step 3
Run a final professional-truthfulness check across the approved documentation.

### Step 4
List all technology decisions currently marked DEFERRED.

### Step 5
List all technology decisions currently marked CONDITIONAL.

### Step 6
Confirm the major release milestones and their exit gates.

### Step 7
Confirm the Build Order execution, testing, review, understanding, and Git workflow.

### Step 8 — FOUNDATION EXECUTION GATE
Approve the project to proceed from planning into repository implementation.

---

# PHASE 2 — DEVELOPMENT ENVIRONMENT AND REPOSITORY
## Steps 9–23

### Step 9
Verify Git installation and record the installed version.

### Step 10
Verify GitHub authentication from the development machine.

### Step 11
Verify Node.js installation and select the project runtime version.

### Step 12
Verify npm and record the package-manager version.

### Step 13
Verify Python installation and select the backend runtime version.

### Step 14
Install or verify uv.

### Step 15
Verify Docker Desktop.

### Step 16
Verify Docker Compose.

### Step 17
Verify browser development tools and required test browsers.

### Step 18
Finalize the GitHub repository name and public/private status.

### Step 19
Create the GitHub repository and clone it locally.

### Step 20
Create the root `.gitignore` before adding application code or environment files.

### Step 21
Create the safe environment-configuration pattern, including `.env.example`, without adding real secrets.

### Step 22
Create the ADR directory, ADR template, and architecture-decision index.

### Step 23 — REPOSITORY BASELINE GATE
Create the approved root repository structure, add the approved Round 1 documents, inspect the complete initial diff, verify no sensitive information is present, and create the baseline commit when authorized.

---

# PHASE 3 — FRONTEND INITIALIZATION
## Steps 24–41

### Step 24
Create the Vite React TypeScript application inside `frontend/`.

### Step 25
Run the untouched application and verify the development server.

### Step 26
Install and configure React Router.

### Step 27
Install and configure Tailwind CSS.

### Step 28
Install Motion for React.

### Step 29
Install Lucide React.

### Step 30
Configure ESLint.

### Step 31
Configure Prettier.

### Step 32
Install and configure Vitest and React Testing Library.

### Step 33
Create the initial Playwright configuration without writing large E2E coverage yet.

### Step 34
Create the approved frontend directory structure only for responsibilities that already exist.

### Step 35
Create application-level configuration and constants.

### Step 36
Create the initial routing structure.

### Step 37
Create the root application layout.

### Step 38
Create the initial Not Found route.

### Step 39
Create global base styles and CSS normalization.

### Step 40
Create the initial frontend error-boundary strategy.

### Step 41 — FRONTEND FOUNDATION GATE
Run lint, tests, build, and development smoke checks; review the project structure and create the frontend-foundation Git checkpoint when authorized.

---

# PHASE 4 — DESIGN SYSTEM
## Steps 42–59

### Step 42
Define semantic color tokens based on the approved dark-first visual direction.

### Step 43
Define typography tokens and font hierarchy.

### Step 44
Define the spacing scale.

### Step 45
Define border-radius, border, and shadow conventions.

### Step 46
Create the reusable page/container layout primitive.

### Step 47
Create the reusable Button component and interaction states.

### Step 48
Create the reusable Link/action style.

### Step 49
Create reusable heading and body-text primitives where they improve consistency.

### Step 50
Create the shared Card foundation.

### Step 51
Create badge / technology-chip styles.

### Step 52
Create baseline form input and textarea primitives.

### Step 53
Implement visible keyboard focus states across interactive primitives.

### Step 54
Implement reduced-motion handling.

### Step 55
Implement semantic theme-token architecture capable of supporting a future light theme.

### Step 56
Create the desktop navigation.

### Step 57
Create the accessible mobile navigation and shared footer.

### Step 58
Create the Third-Party Component Provenance Register with source, URL, license, cost/attribution status, dependencies, modifications, and adoption reason for externally adapted production components.

### Step 59 — DESIGN SYSTEM GATE
Review representative components on desktop/mobile, verify keyboard behaviour and reduced motion, verify third-party provenance where applicable, and create the design-system checkpoint.

---

# PHASE 5 — PROFESSIONAL CONTENT AND EVIDENCE PREPARATION
## Steps 60–67

### Step 60
Create the general Software Developer portfolio resume using only approved verified professional information.

### Step 61
Perform recruiter, ATS, truthfulness, date, title, project, and link review of the public resume and approve the final portfolio PDF.

### Step 62
Audit the public GitHub profile and all portfolio-target repositories for description quality, README quality, naming, stale metadata, broken links, inappropriate files, and professional presentation.

### Step 63
Clean the EPC Project & Vendor Management repository presentation, including stale repository description and outdated top-level status information.

### Step 64
Create or substantially improve the Market Analysis in Banking Domain README and clean clearly unprofessional filenames/presentation issues.

### Step 65
Rewrite the Mercedes-Benz Greener Manufacturing README so it focuses on the actual project rather than generic tutorial material.

### Step 66
Create a professional Real Estate Analytics README and select appropriate analytics / Tableau evidence.

### Step 67 — PROFESSIONAL EVIDENCE GATE
Capture/select approved project screenshots, record repository URLs, record verified live-demo status, review public project evidence, and confirm that every portfolio project can be presented truthfully before homepage content is finalized.

---

# PHASE 6 — PROFESSIONAL CONTENT MODEL AND HOMEPAGE
## Steps 68–98

### Step 68
Define TypeScript types for portfolio professional content.

### Step 69
Create the approved candidate-profile content source.

### Step 70
Create the approved contact and social-link content source.

### Step 71
Create the skills-category content model.

### Step 72
Create the professional-experience content model.

### Step 73
Create the education content model.

### Step 74
Create the certification / professional-learning content model.

### Step 75
Create the project metadata model.

### Step 76
Add project priority, status, and evidence fields where required.

### Step 77
Add the approved public resume asset and define its stable public location.

### Step 78
Define the project-media naming and storage convention.

### Step 79
Review all initial public content against approved truthfulness rules.

### Step 80
Build the homepage Hero layout.

### Step 81
Add the approved launch-stage professional headline and hero content.

### Step 82
Implement View Projects and Resume primary calls to action.

### Step 83
Add restrained Motion-based hero interaction.

### Step 84
Create the Featured Projects section shell.

### Step 85
Build the reusable ProjectCard component.

### Step 86
Add the Discipline System featured-project content.

### Step 87
Add the EPC Project & Vendor Management featured-project content.

### Step 88
Handle the new AI Portfolio project status without presenting unfinished work as completed.

### Step 89
Create the Core Technical Skills section.

### Step 90
Implement the evidence-based skill-category layout.

### Step 91
Create the Professional Experience section.

### Step 92
Add the concise McDonald's Canada transferable-experience content.

### Step 93
Create the Data & Machine Learning Projects section.

### Step 94
Create the Education section.

### Step 95
Create the selected Certifications / Professional Learning section.

### Step 96
Create the About section.

### Step 97
Create the Resume / Contact call-to-action section.

### Step 98 — HOMEPAGE CONTENT GATE
Review the complete homepage on representative desktop and mobile sizes, verify content accuracy and hierarchy, and create the homepage implementation checkpoint.

---

# PHASE 7 — PROJECTS AND CASE STUDIES
## Steps 99–117

### Step 99
Create the Projects index route.

### Step 100
Define the detailed project case-study content schema.

### Step 101
Create the shared Project Case Study layout.

### Step 102
Add clear back/breadcrumb navigation.

### Step 103
Create the reusable project screenshot/gallery component.

### Step 104
Create the project technology-stack presentation.

### Step 105
Create the architecture/technical-design presentation section.

### Step 106
Create reusable Testing, Challenges, Lessons Learned, and Future Improvements sections.

### Step 107
Create reusable GitHub, Demo, and external-action controls.

### Step 108
Write and implement the Discipline System case study.

### Step 109
Add approved Discipline System screenshots and media.

### Step 110
Verify Discipline System technology/testing claims against project evidence.

### Step 111
Write and implement the EPC Project & Vendor Management case study.

### Step 112
Clearly display the EPC project's current development status.

### Step 113
Add approved EPC screenshots and supporting evidence.

### Step 114
Create the improved Mercedes-Benz project presentation.

### Step 115
Create the improved Banking Domain project presentation.

### Step 116
Create the improved Real Estate Analytics project presentation.

### Step 117 — PROJECT PRESENTATION GATE
Test all project routes, links, responsive layouts, and public claims; create the project/case-study checkpoint.

---

# PHASE 8 — MVP QUALITY, SEO, ACCESSIBILITY, AND EARLY DEPLOYMENT
## Steps 118–135

### Step 118
Add route-appropriate document titles.

### Step 119
Add professional metadata descriptions.

### Step 120
Create the portfolio social/Open Graph preview asset.

### Step 121
Create and configure favicon/application icons.

### Step 122
Add robots and sitemap handling appropriate to the chosen frontend architecture.

### Step 123
Run an internal and external-link audit.

### Step 124
Optimize project screenshots and other significant images.

### Step 125
Perform a complete keyboard-navigation audit.

### Step 126
Perform a color-contrast audit.

### Step 127
Test `prefers-reduced-motion` behaviour.

### Step 128
Create Playwright coverage for the primary recruiter journey.

### Step 129
Perform desktop browser compatibility tests.

### Step 130
Perform representative mobile/tablet QA.

### Step 131
Run Lighthouse/performance analysis and address the most important issues.

### Step 132 — FRONTEND HOSTING DECISION GATE
Evaluate current frontend hosting options for React/Vite compatibility, HTTPS, custom domain, preview deployments, reliability, build integration, cost, and operational simplicity; select and record the M1 hosting decision.

### Step 133
Configure the frontend production deployment for the selected platform.

### Step 134
Deploy the recruiter-facing Portfolio MVP and run the production smoke test.

### Step 135 — M1 PORTFOLIO MVP GATE
Verify recruiter clarity, project evidence, resume access, GitHub/LinkedIn links, contact path, mobile behaviour, accessibility baseline, browser behaviour, performance baseline, and professional truthfulness. Approve M1 only when suitable for real job applications.

---

# PHASE 9 — BACKEND DESIGN AND FASTAPI FOUNDATION
## Steps 136–153

### Step 136
Create `API_CONTRACT.md` v0.1 for the initial backend boundary.

### Step 137
Review and approve the baseline API contract before backend feature implementation.

### Step 138
Create the backend uv Python project.

### Step 139
Add FastAPI, Pydantic, pydantic-settings, HTTPX, pytest, Ruff, and required initial backend dependencies.

### Step 140
Verify `pyproject.toml`, `.venv`, and `uv.lock` behaviour.

### Step 141
Create the approved backend application structure.

### Step 142
Implement environment-based application settings.

### Step 143
Create the FastAPI application entry point.

### Step 144
Create `/api/v1/health`.

### Step 145
Define the baseline standardized API-error format.

### Step 146
Configure controlled CORS for local frontend/backend development.

### Step 147
Add baseline structured application logging.

### Step 148
Create a simple validated request/response-schema example.

### Step 149
Inspect and explain the generated OpenAPI contract.

### Step 150
Configure the backend pytest foundation.

### Step 151
Write automated health and baseline API tests.

### Step 152
Create the frontend API configuration/client foundation and verify frontend-to-backend communication.

### Step 153 — BACKEND FOUNDATION GATE
Explain the browser → frontend → FastAPI → response flow, run lint/tests, review Git diff, and create the backend-foundation checkpoint.

---

# PHASE 10 — POSTGRESQL AND FULL-STACK DATA FOUNDATION
## Steps 154–171

### Step 154
Create `DATA_MODEL.md` v0.1.

### Step 155
Review and approve the initial data model before creating persistent application tables.

### Step 156
Add SQLAlchemy 2.x, Alembic, and Psycopg.

### Step 157
Create the local PostgreSQL Docker Compose service.

### Step 158
Connect to PostgreSQL directly and verify database access using SQL.

### Step 159
Add database settings to backend configuration.

### Step 160
Create the synchronous SQLAlchemy engine/session foundation.

### Step 161
Configure SQLAlchemy model metadata and Alembic.

### Step 162
Create the first controlled database migration.

### Step 163
Practice and verify migration upgrade and downgrade.

### Step 164
Confirm which information genuinely belongs in PostgreSQL and which remains source-controlled.

### Step 165
Create the initial approved knowledge-document / application metadata table without embeddings.

### Step 166
Create the simplest appropriate persistence access boundary.

### Step 167
Write database integration tests.

### Step 168
Create a controlled script that inserts approved public document metadata.

### Step 169
Inspect and verify persisted data directly through PostgreSQL/SQL.

### Step 170
Implement graceful handling for database-dependent non-critical functionality.

### Step 171 — M2 FULL-STACK GATE
Explain connection/session/migration/data flow, run backend/database tests, and approve the full-stack foundation.

---

# PHASE 11 — AI SYSTEM DESIGN AND BASIC LLM INTEGRATION
## Steps 172–185

### Step 172
Create `AI_SYSTEM_DESIGN.md` v0.1.

### Step 173
Define the first AI feature's boundaries, prompt responsibilities, data flow, failure modes, and provider abstraction.

### Step 174
Create the initial `SECURITY_PRIVACY.md` covering AI secrets, public-data boundaries, input limits, logging, and truthfulness requirements.

### Step 175 — LLM PROVIDER DECISION GATE
Evaluate current providers/models based on capability, structured output, tool-calling support, cost, latency, limits, and developer experience; select one initial provider.

### Step 176
Create the minimal LLM provider interface/adapter.

### Step 177
Implement the selected provider client.

### Step 178
Configure provider secrets entirely on the backend.

### Step 179
Create chat request and response schemas.

### Step 180
Implement the simple configuration/feature-flag mechanism required to independently enable or disable the AI assistant, Semantic Search, Job Matcher, and future experimental AI features.

### Step 181
Create the first `/api/v1/ai/chat` endpoint.

### Step 182
Create the scoped portfolio-assistant system prompt.

### Step 183
Build the basic Ask My Portfolio frontend experience.

### Step 184
Create fake-provider tests, provider-error tests, and frontend unavailable states.

### Step 185 — BASIC LLM GATE
Run one controlled real-provider smoke test, explain the request/token/provider flow, verify no secret reaches the browser, and create the AI-foundation checkpoint.

---

# PHASE 12 — PROMPT ENGINEERING AND STRUCTURED OUTPUT
## Steps 186–193

### Step 186
Choose the first AI use case that benefits from structured output.

### Step 187
Create the corresponding Pydantic structured-output schema.

### Step 188
Implement structured generation through the provider boundary.

### Step 189
Implement validation and controlled retry/fallback behaviour.

### Step 190
Create a versioned prompt organization strategy.

### Step 191
Test malformed, incomplete, and invalid model output.

### Step 192
Render validated structured AI results in the frontend where relevant.

### Step 193 — STRUCTURED OUTPUT GATE
Create baseline prompt-regression examples and explain why requested JSON is not trusted until validated.

---

# PHASE 13 — EMBEDDINGS AND SEMANTIC SEARCH
## Steps 194–206

### Step 194 — EMBEDDING MODEL DECISION GATE
Evaluate and select the embedding provider/model.

### Step 195
Record embedding dimensionality and related architectural consequences.

### Step 196
Enable pgvector in the development PostgreSQL environment.

### Step 197
Design and migrate the vector-enabled knowledge-chunk schema.

### Step 198
Create the initial chunking utility.

### Step 199
Create source normalization logic.

### Step 200
Create the private developer-only ingestion CLI/script.

### Step 201
Create the embedding-provider adapter.

### Step 202
Generate and store embeddings with approved source metadata.

### Step 203
Implement vector similarity search.

### Step 204
Create the Semantic Search service and API endpoint.

### Step 205
Create the semantic project/portfolio search frontend.

### Step 206 — SEMANTIC SEARCH GATE
Create representative retrieval tests, inspect top-k results manually, explain vector similarity, and approve retrieval before RAG.

---

# PHASE 14 — RETRIEVAL-AUGMENTED GENERATION
## Steps 207–221

### Step 207
Create `RAG_DESIGN.md` v0.1.

### Step 208
Review and approve the RAG pipeline before implementation.

### Step 209
Create the authoritative approved RAG corpus manifest.

### Step 210
Add source versioning/metadata required to identify outdated embedded content.

### Step 211
Implement retrieval configuration including filters and top-k behaviour.

### Step 212
Create the RAG context builder.

### Step 213
Create the grounded RAG system/prompt template.

### Step 214
Implement the RAG application service.

### Step 215
Create the grounded portfolio-answer API endpoint.

### Step 216
Map retrieved evidence into user-visible answer references.

### Step 217
Implement explicit no-evidence behaviour.

### Step 218
Test conflicting and superseded professional information.

### Step 219
Create the first hallucination/grounding test set.

### Step 220
Compare raw Semantic Search results against generated RAG answers.

### Step 221 — M3 AI-ENHANCED GATE
Run retrieval/grounding tests, verify unsupported professional claims are refused or qualified, explain retrieval vs generation, and approve M3.

---

# PHASE 15 — JOB DESCRIPTION MATCHER
## Steps 222–230

### Step 222
Define the Job Matcher product and API contract.

### Step 223
Define privacy, retention, and input-size rules for pasted job descriptions.

### Step 224
Create the structured job-requirement extraction schema.

### Step 225
Implement requirement extraction.

### Step 226
Map job requirements to approved portfolio evidence through retrieval.

### Step 227
Implement deterministic Demonstrated / Partially Demonstrated / Not Demonstrated classification.

### Step 228
Add an optional LLM-generated explanation based only on resulting evidence.

### Step 229
Build the Job Matcher frontend experience.

### Step 230 — JOB MATCHER GATE
Test relevant/missing skills, unsupported claims, long input, error states, and ensure any numerical score is clearly labelled an estimate rather than hiring probability.

---

# PHASE 16 — GITHUB INTEGRATION
## Steps 231–238

### Step 231
Define exactly which GitHub information provides recruiter or technical value.

### Step 232
Create the GitHub REST integration using HTTPX.

### Step 233
Implement GitHub timeout, error, and rate-limit handling.

### Step 234
Normalize GitHub responses into application-owned schemas.

### Step 235
Implement the simplest appropriate caching strategy for stable GitHub metadata.

### Step 236
Expose approved GitHub information through the backend API.

### Step 237
Display live GitHub enrichment while preserving stored project fallbacks.

### Step 238 — GITHUB INTEGRATION GATE
Simulate GitHub failure/rate limits, verify fallback behaviour, and explain the external-API request lifecycle.

---

# PHASE 17 — AI TOOL CALLING
## Steps 239–248

### Step 239
Define the public AI tool-security policy.

### Step 240
Define the common tool contract/schema.

### Step 241
Create the explicit allowlisted tool registry.

### Step 242
Implement `search_portfolio`.

### Step 243
Implement `get_project`.

### Step 244
Implement `get_skills`.

### Step 245
Implement `get_github_project` using the existing GitHub service.

### Step 246
Implement tool argument validation, timeouts, and controlled tool errors.

### Step 247
Integrate the selected provider's native function/tool-calling flow.

### Step 248 — TOOL CALLING GATE
Test valid, invalid, invented, and unauthorized tool requests and verify that the public model has no unrestricted system capability.

---

# PHASE 18 — CONTROLLED AGENTIC WORKFLOW
## Steps 249–259

### Step 249
Select one genuine multi-step workflow that may benefit from model-driven decisions.

### Step 250
Write the deterministic non-agent baseline for comparison.

### Step 251
Document specifically what uncertainty/branching would justify an agent.

### Step 252
Define the workflow-state schema.

### Step 253
Define maximum steps and overall execution timeout.

### Step 254
Implement controlled next-action selection.

### Step 255
Implement the tool-execution/update-state loop.

### Step 256
Implement explicit stop conditions.

### Step 257
Add workflow trace/observability information.

### Step 258
Expose the useful workflow result through the relevant frontend experience.

### Step 259 — M4 AGENT WORKFLOW GATE
Test success, tool failure, model failure, maximum-step termination, and loop prevention; compare the agentic result against the deterministic baseline.

---

# PHASE 19 — LANGGRAPH DECISION GATE
## Steps 260–264

### Step 260
Create an ADR describing whether the implemented workflow actually requires graph orchestration.

### Step 261
If justified, create a minimal isolated LangGraph prototype using existing services/tools.

### Step 262
Compare the custom controlled workflow with the LangGraph implementation.

### Step 263 — LANGGRAPH DECISION
Record ADOPT or REJECT based on clarity, state handling, reliability, maintainability, and learning value.

### Step 264
If adopted, integrate the smallest production graph and add tests; if rejected, remove unnecessary prototype code and preserve the ADR explaining why.

---

# PHASE 20 — MCP DECISION GATE
## Steps 265–270

### Step 265
Study MCP client/server/tool/resource concepts using the existing portfolio architecture as the example.

### Step 266
Create an MCP ADR/prototype plan defining one genuine use case.

### Step 267
Expose selected read-only portfolio services through a minimal MCP server.

### Step 268
Verify access through a compatible MCP client.

### Step 269
Test MCP permissions, scope, errors, and public-data boundaries.

### Step 270 — MCP DECISION
Record whether MCP should remain in production, remain a learning prototype, or be removed; document the engineering reason.

---

# PHASE 21 — AI EVALUATION, SECURITY, PRIVACY, AND OBSERVABILITY
## Steps 271–286

### Step 271
Create `TESTING_EVALUATION.md` v0.1.

### Step 272
Expand and finalize the production-oriented `SECURITY_PRIVACY.md`.

### Step 273
Create a representative portfolio AI evaluation dataset.

### Step 274
Define and measure Semantic Search retrieval quality.

### Step 275
Define and run RAG grounding evaluation.

### Step 276
Define and run Job Matcher evidence evaluation.

### Step 277
Evaluate tool-selection correctness.

### Step 278
Evaluate agent/workflow completion and failure behaviour.

### Step 279
Create prompt-injection and malicious-instruction test cases.

### Step 280
Implement server-side AI rate limiting.

### Step 281
Enforce AI input, context, and output/token limits.

### Step 282
Add model/token/cost usage tracking.

### Step 283
Improve structured AI/retrieval/tool/workflow logging.

### Step 284
Implement privacy-aware log redaction and retention rules.

### Step 285
Add dependency/security scanning appropriate to the stack.

### Step 286 — AI PRODUCTION SAFETY GATE
Run the full AI evaluation/security suite and prohibit production release if professional-truthfulness or tool-boundary failures remain unresolved.

---

# PHASE 22 — PRODUCTION ENGINEERING, DOCKER, CI/CD, AND FULL DEPLOYMENT
## Steps 287–302

### Step 287
Create `DEPLOYMENT.md` v0.1.

### Step 288 — BACKEND HOSTING DECISION
Evaluate and select the backend production host.

### Step 289 — DATABASE HOSTING DECISION
Evaluate and select a managed PostgreSQL provider with required pgvector support.

### Step 290
Finalize production provider/model/environment configuration for AI services.

### Step 291
Create the production backend Dockerfile.

### Step 292
Create/complete Docker Compose for reproducible local backend/database development.

### Step 293
Add container/application health checks.

### Step 294
Configure the frontend production API endpoint/environment strategy.

### Step 295
Configure production secret management.

### Step 296
Create frontend GitHub Actions CI.

### Step 297
Create backend GitHub Actions CI.

### Step 298
Add database/integration testing to CI where practical.

### Step 299
Create an explicit/manual live-AI evaluation workflow if valuable; keep it separate from ordinary required CI.

### Step 300
Deploy the backend application.

### Step 301
Provision the production database, apply migrations, and verify pgvector.

### Step 302 — FULL PRODUCTION INTEGRATION GATE
Connect the deployed frontend, backend, database, and approved AI services; run end-to-end production smoke tests.

---

# PHASE 23 — PRODUCTION HARDENING AND OPTIONAL VISUAL ENHANCEMENT
## Steps 303–314

### Step 303
Configure the final custom domain and verify HTTPS.

### Step 304
Lock production CORS to approved origins.

### Step 305
Configure appropriate production security headers/platform protections.

### Step 306
Verify database backup/recovery capabilities.

### Step 307
Evaluate dedicated production monitoring/error tracking and configure it if it provides clear value.

### Step 308
Run the complete Playwright production smoke suite.

### Step 309
Perform Safari, iOS Safari, Android Chrome, Chrome, Edge, and Firefox QA.

### Step 310
Run final Lighthouse/Core Web Vitals analysis and address major issues.

### Step 311
Perform the final accessibility audit.

### Step 312 — ADVANCED VISUAL DECISION GATE
Decide whether GSAP, Three.js/R3F, or another advanced visual enhancement would materially improve the production portfolio.

### Step 313
If justified, build one isolated advanced-visual prototype with mobile, performance, reduced-motion, and non-WebGL fallbacks.

### Step 314
Accept or reject the prototype based on measurable UX/professional value and record the final decision.

---

# PHASE 24 — FINAL DOCUMENTATION AND CAREER PRESENTATION
## Steps 315–328

### Step 315
Rewrite `README.md` as the final public repository README.

### Step 316
Update `ARCHITECTURE.md` to reflect the actual production system.

### Step 317
Finalize Technology Decisions and all important ADRs.

### Step 318
Finalize `DATA_MODEL.md` and `API_CONTRACT.md`.

### Step 319
Finalize AI System Design, RAG Design, Security & Privacy, Testing & Evaluation, and Deployment documentation.

### Step 320
Create/finalize `CHANGELOG.md`.

### Step 321
Create `LEARNING_INTERVIEW_GUIDE.md`.

### Step 322
Write the complete AI-Powered Developer Portfolio case study.

### Step 323
Create final architecture diagrams, selected screenshots, and technical visual evidence.

### Step 324
Perform final GitHub repository cleanup and professional-presentation review.

### Step 325
Write recruiter-friendly and ATS-friendly resume project bullets based only on implemented functionality.

### Step 326
Create the final LinkedIn project entry and supporting professional update.

### Step 327
Perform the final professional truthfulness and cross-platform consistency audit across Portfolio, Resume, LinkedIn, GitHub, and AI knowledge sources.

### Step 328 — M5 PRODUCTION v1.0 GATE
Run the final acceptance checklist, confirm all critical requirements, documentation, tests, security checks, professional content, and deployment; create the Production v1.0 release/tag when authorized and officially complete the initial project.

---

# Milestone Mapping

**M0 — Foundation Complete**  
Round 1 documentation complete before execution.

**M1 — Portfolio MVP**  
Step 135

**M2 — Full-Stack Portfolio**  
Step 171

**M3 — AI-Enhanced Portfolio**  
Step 221

**M4 — Advanced AI Portfolio**  
Step 259

LangGraph and MCP remain decision-gated and do not block M4.

**M5 — Production v1.0**  
Step 328

---

# Change Control

This Build Order may evolve.

If implementation reveals a better sequence:

1. Identify the problem.
2. Explain the reason.
3. Check architecture impact.
4. Check requirements impact.
5. Update ADR if necessary.
6. Revise the Build Order.
7. Increment document version.
8. Continue from the approved revision.

Do not silently skip or reorder major steps.

---

# Final Build Order Principle

The correct unit of progress is:

**Understood + Implemented + Tested + Reviewed + Documented where needed + Professionally defensible.**
