# AI-Powered Developer Portfolio
## Definition of Done

**Document Version:** 1.0  
**Status:** APPROVED / BASELINE  
**Snapshot Date:** 2026-08-29  
**Project Phase:** Round 1 — Project Foundation

**Supersedes:** DEFINITION_OF_DONE.md v0.1

---

# 1. Purpose

This document defines what "Done" means for work performed on the AI-Powered Developer Portfolio.

It applies to:

- Build Order steps
- Documentation
- Professional content
- Frontend
- Backend
- Database
- AI
- Retrieval / RAG
- Tool calling
- Agent workflows
- Testing
- Git
- Deployment
- Milestones
- Production releases

Its purpose is to prevent false completion such as:

- "The code exists."
- "Codex said it finished."
- "It works on my machine."
- "The happy path worked once."
- "The model answered correctly once."
- "It looks fine on my screen."

Done requires appropriate evidence.

---

# 2. Core Definition of Done

A Build Order step is Done when all criteria relevant to that step are satisfied.

Typical criteria include:

1. Requested scope is completed.
2. Future/unrequested scope was not introduced.
3. Approved Architecture is respected.
4. Approved Technology Decisions are respected.
5. Relevant automated checks pass.
6. Relevant manual verification passes.
7. Important failure behaviour is checked.
8. Accessibility/responsiveness are considered where applicable.
9. Security/privacy are considered where applicable.
10. Professional truthfulness is verified where applicable.
11. Learning-critical concepts are understood.
12. Documentation is updated where necessary.
13. Git diff is reviewed.
14. No secrets or inappropriate files are present.
15. Repository remains functional.
16. A coherent Git checkpoint is created when appropriate.

Not every step requires all sixteen checks.

Use the checks relevant to the type and risk of the work.

---

# 3. Proportionality Rule

Definition of Done must not create unnecessary ceremony.

Examples:

A Markdown typo fix does not require:
- Playwright
- Lighthouse
- screenshots
- database testing

A visual component may require:
- browser review
- responsive QA
- keyboard review
- screenshot evidence

A database migration may require:
- migration test
- database inspection
- integration test

An AI tool may require:
- schema tests
- permission tests
- failure tests
- security review

Verification effort should match:

Complexity  
+  
Risk  
+  
Professional impact.

---

# 4. Status Vocabulary

## NOT STARTED
Work has not begun.

## IN PROGRESS
Work is currently underway.

## BLOCKED
A known dependency/problem prevents continuation.

The blocker must be recorded.

## IMPLEMENTED — NOT VERIFIED
Implementation exists but verification is incomplete.

Not Done.

## VERIFIED — REVIEW REQUIRED
Technical checks pass but review/understanding is incomplete.

Not Done where review is required.

## DONE
All applicable completion criteria are satisfied.

## NOT REQUIRED
An approved change makes the step unnecessary.

Reason must be recorded.

## REJECTED / NOT ADOPTED
Used for decision gates where evaluation concludes that a technology should not be used.

This may still represent successful completion.

---

# 5. Build Order Step Definition of Done

A normal Build Order step is Done when:

- Exact approved scope is completed.
- Later steps were not silently implemented.
- Relevant files are reviewed.
- Required checks pass.
- Acceptance criteria are met.
- Relevant failure conditions are considered.
- No unexplained changes remain.
- Documentation is updated where required.
- Git state is understood.

For learning-critical steps, the Understanding Requirement also applies.

---

# 6. Understanding Requirement

A learning-critical implementation is not complete merely because it works.

The project owner should be able to explain, at an appropriate level:

- What problem does this solve?
- Why is it needed?
- Which file starts the flow?
- What happens next?
- What input enters?
- What output returns?
- Which dependency is involved?
- What happens when it fails?
- How is it tested?
- Why was this approach chosen?
- What alternative could have been used?

This requirement applies especially to:

- React architecture
- TypeScript
- HTTP
- FastAPI
- Pydantic
- OpenAPI
- SQLAlchemy
- Alembic
- PostgreSQL
- Docker
- LLM APIs
- embeddings
- vector similarity
- semantic search
- RAG
- tool calling
- workflow state
- agents
- LangGraph if adopted
- MCP if implemented
- CI/CD

If the implementation cannot be reasonably explained, review it before advancing.

---

# 7. Documentation Definition of Done

Documentation is Done when:

- Purpose is clear.
- Information is accurate.
- Newer approved facts override older drafts.
- Superseded information is removed or clearly marked.
- Decisions and assumptions are distinguished.
- Provisional decisions are labelled.
- Terminology is consistent.
- No false professional claim exists.
- Sensitive information is excluded.
- Version/status metadata is correct.
- Material cross-document conflicts are resolved.

An approved baseline document must receive explicit review before its status changes from DRAFT to APPROVED / BASELINE.

---

# 8. Professional Content Definition of Done

Professional content is Done when:

- Employment is real and verified.
- Dates/titles are consistent.
- Projects accurately describe actual work.
- Project work is not represented as employment.
- Current development status is accurate.
- Skills have defensible evidence.
- Certifications are presented as learning/credentials, not automatic mastery.
- Planned technology is not described as completed experience.
- Quantified achievements have factual support.
- Sensitive/private content is excluded.
- Wording is recruiter-friendly.
- Portfolio, resume, LinkedIn, and GitHub do not materially contradict each other.

---

# 9. Frontend Component Definition of Done

A reusable frontend component is Done when:

- Responsibility is clear.
- Props/types are understandable.
- It follows the design system.
- Required states work.
- Semantic HTML is appropriate.
- Keyboard behaviour works when interactive.
- Focus is visible.
- Reduced-motion policy is followed where applicable.
- Responsive behaviour is acceptable.
- Loading/error/disabled states exist when necessary.
- Relevant automated tests pass.
- No significant console error/warning remains.

---

# 10. Frontend Page Definition of Done

A page is Done when:

- Required content is present.
- Content hierarchy matches approved strategy.
- Navigation works.
- Links work.
- Desktop layout works.
- Mobile layout works.
- Intermediate layouts remain usable.
- Keyboard navigation works.
- Heading structure is logical.
- Images have appropriate alternative text.
- Relevant loading/error states exist.
- Metadata is appropriate where required.
- Relevant tests/checks pass.

---

# 11. Responsive Definition of Done

Representative review should include:

- Small mobile
- Large mobile
- Tablet
- Laptop
- Desktop

Requirements include:

- No accidental horizontal scrolling.
- Content remains readable.
- Navigation remains usable.
- Touch targets are practical.
- Images/media scale correctly.
- Grids collapse logically.
- Important CTAs remain accessible.
- AI interfaces remain usable where present.

---

# 12. Accessibility Definition of Done

Where applicable, verify:

- Semantic HTML
- Keyboard navigation
- Visible focus
- Contrast
- Logical heading structure
- Form labels
- Associated errors
- Alternative text
- Accessible control names
- Reduced-motion behaviour
- Status announcements where needed

Automated accessibility testing supports—but does not replace—manual review.

Critical accessibility defects block milestone approval.

---

# 13. Animation Definition of Done

Animation is Done when:

- It has a meaningful UX/presentation purpose.
- Content does not depend on the animation.
- It does not delay access.
- Reduced-motion behaviour exists.
- Mobile behaviour is acceptable.
- Performance is acceptable.
- It does not create layout instability.
- It does not reduce readability.

---

# 14. Third-Party UI Component Definition of Done

An adapted external component is Done when:

- Original source is recorded.
- License is reviewed.
- Attribution requirements are known.
- Dependencies are understood.
- Component is normalized to the internal design system.
- Accessibility is reviewed.
- Responsive behaviour is checked.
- Unnecessary implementation complexity is removed.
- Component Provenance Register is updated.

---

# 15. Backend Endpoint Definition of Done

An endpoint is Done when:

- Method/path are correct.
- Request validation exists where applicable.
- Response contract is defined.
- Appropriate status codes are used.
- Routes remain reasonably thin.
- Application logic resides in appropriate services/modules.
- Expected errors are translated safely.
- Raw internals/secrets are not exposed.
- Relevant automated tests pass.
- OpenAPI representation is understandable.
- Request flow can be explained.

---

# 16. Backend Service Definition of Done

A service is Done when:

- Responsibility is clear.
- Dependencies are appropriate.
- Inputs/outputs are understandable.
- UI concerns do not leak into service logic.
- Failure behaviour is known.
- Relevant tests exist.
- External providers can be mocked where appropriate.
- Logic is not unnecessarily duplicated.

---

# 17. Configuration Definition of Done

Configuration work is Done when:

- Environment-specific configuration is separated where required.
- Secrets remain outside source control.
- `.env.example` or equivalent describes expected settings.
- Missing required settings produce understandable failures.
- No server secret enters the frontend bundle.
- Feature flags behave predictably.
- Real secrets are absent from Git.

---

# 18. Database Schema Definition of Done

A schema change is Done when:

- Data model is justified.
- Appropriate types are used.
- Keys/relationships are defined where necessary.
- Constraints reflect real requirements.
- Indexes are justified.
- Migration exists.
- Migration succeeds.
- Database state can be inspected directly.
- Relevant integration tests pass.
- Unnecessary sensitive information is not persisted.

---

# 19. Database Migration Definition of Done

A migration is Done when:

- Migration file is reviewed.
- Upgrade succeeds.
- Expected schema results.
- Downgrade is tested when appropriate.
- Migration behaves correctly on a clean/test database.
- Relevant tests pass.
- No unintended destructive behaviour exists.

---

# 20. API Contract Definition of Done

An API contract is Done when:

- Endpoint purpose is clear.
- Method/path are defined.
- Request format is defined.
- Response format is defined.
- Important errors are documented.
- FastAPI/OpenAPI behaviour matches implementation.
- Frontend expectations match backend output.

---

# 21. Basic LLM Feature Definition of Done

An LLM feature is Done when:

- Calls happen server-side.
- Provider secret is protected.
- Feature scope is defined.
- Input/output limits exist.
- Timeout exists.
- Failure is handled.
- Normal automated tests use fake/mock providers.
- Controlled live smoke test succeeds where required.
- AI outage does not break the core portfolio.
- Public AI claims match implemented capability.

---

# 22. Structured AI Output Definition of Done

Structured model output is Done when:

- Schema exists.
- Output is validated.
- Invalid responses are handled.
- Retry behaviour is bounded.
- Raw model JSON is not blindly trusted.
- Invalid/partial examples are tested.

---

# 23. Embedding Definition of Done

Embedding functionality is Done when:

- Provider/model is documented.
- Vector dimension is known.
- Database schema matches.
- Approved content can be embedded.
- Metadata is retained.
- Embeddings persist correctly.
- Provider errors are controlled.
- Re-embedding implications are understood.
- Embeddings can be explained conceptually.

---

# 24. RAG Ingestion Definition of Done

Ingestion is Done when:

- Corpus sources are approved.
- Sensitive/private documents are excluded.
- Superseded information is excluded.
- Normalization works.
- Chunking works.
- Metadata is attached.
- Embeddings are generated/stored.
- Updated documents can be intentionally re-ingested.
- Ingestion is not an unrestricted public operation.
- Retrieval checks run after major corpus changes.

---

# 25. Semantic Search Definition of Done

Semantic Search is Done when:

- Query embedding works.
- Vector search works.
- Results are ranked.
- Metadata accompanies results.
- Representative queries retrieve useful evidence.
- Retrieval quality is evaluated.
- top-k behaviour is intentional.
- Search works independently from the LLM.

---

# 26. RAG Definition of Done

A RAG answer feature is Done when:

- Input is validated.
- Retrieval occurs.
- Retrieved evidence reaches generation.
- Evidence references are preserved.
- No-evidence behaviour exists.
- Conflicting evidence is handled safely.
- Superseded information remains excluded.
- Grounding/hallucination tests exist.
- Representative questions pass.
- Unsupported professional claims are not presented as fact.

---

# 27. Job Matcher Definition of Done

The Job Matcher is Done when:

- Input limits are enforced.
- Privacy rules are clear.
- Requirements are extracted into structured data.
- Matching uses approved portfolio evidence.
- Demonstrated / Partial / Not Demonstrated classifications are grounded.
- Missing skills remain missing.
- Explanations use real evidence.
- Any percentage is labelled as an estimate.
- Invalid/large input is handled.
- Representative tests pass.

---

# 28. GitHub Integration Definition of Done

GitHub integration is Done when:

- Required data fields are explicit.
- REST requests work.
- Output is normalized.
- Timeout handling exists.
- Rate-limit handling is understood.
- Failure is graceful.
- Caching is used only where justified.
- Stored portfolio content survives GitHub outage.
- External data does not incorrectly override approved professional facts.

---

# 29. AI Tool Definition of Done

An AI tool is Done when:

- Name/purpose are clear.
- Input schema exists.
- Output contract exists.
- Tool is explicitly allowlisted.
- Permissions are documented.
- Timeout exists.
- Invalid arguments fail safely.
- Errors are controlled.
- Relevant tests exist.
- Existing application services are reused where appropriate.
- Tool cannot perform unrestricted system actions.

---

# 30. Agent Workflow Definition of Done

An agent workflow is Done when:

- A real multi-step use case exists.
- State is explicit.
- Tool access is controlled.
- Maximum steps exist.
- Overall timeout exists.
- Stop conditions exist.
- Model/tool failures are handled.
- Loop protection is tested.
- Workflow is observable.
- Deterministic alternative was considered.
- Agentic implementation provides a defensible benefit.

---

# 31. LangGraph Decision Definition of Done

Done when:

- Actual workflow requirements are evaluated.
- Prototype exists if helpful.
- Comparison with simpler implementation is performed.
- Decision is ADOPT or REJECT.
- ADR records reasoning.
- Unnecessary prototype code is removed if rejected.

Rejection is a successful outcome.

---

# 32. MCP Decision Definition of Done

Done when:

- Core MCP concepts are understood.
- A genuine use case is identified.
- Prototype exists if justified.
- Read-only/public-data boundaries are respected.
- Existing application services are reused.
- Compatible-client interaction is verified where implemented.
- ADR records KEEP / PROTOTYPE ONLY / REJECT.

Production MCP is not required for project success.

---

# 33. AI Evaluation Definition of Done

Evaluation is Done when:

- Representative dataset exists.
- Expected behaviour is documented.
- Results are repeatable.
- Retrieval, grounding, tools, and workflows are assessed where applicable.
- Regressions can be detected.
- Paid/live evaluation is separated from mandatory normal CI.
- Results influence release decisions.

---

# 34. Security Definition of Done

Security-sensitive work is Done when applicable checks cover:

- Secret exposure
- Input validation
- Prompt injection
- Tool abuse
- Unauthorized capability
- Excessive input/output
- Rate-limit abuse
- AI cost abuse
- Prohibited RAG sources
- Professional hallucinations

Critical security failures block completion.

---

# 35. Privacy Definition of Done

Privacy-sensitive work is Done when:

- Only necessary visitor data is collected.
- Retention is understood.
- Job descriptions are not permanently stored by default.
- Visitor AI conversations are not permanently stored by default.
- Private professional documents are excluded from RAG.
- Logs minimize sensitive content.
- Public AI output relies on public-safe evidence.

---

# 36. Docker Definition of Done

Container work is Done when:

- Image builds.
- Container starts.
- Configuration is externalized.
- Secrets are not baked into image.
- Networking/ports are understood.
- Required health checks work.
- Application communicates with dependencies.
- Build is reproducible.
- Commands are documented.
- Core container concepts can be explained.

---

# 37. CI Definition of Done

CI is Done when:

- Workflow trigger is understood.
- Dependencies install reproducibly.
- Required lint/check/test/build stages run.
- Failures fail the pipeline.
- Secrets remain protected.
- Paid AI services are not required for standard CI.
- Pipeline works on a clean runner.

---

# 38. Deployment Definition of Done

Deployment is Done when:

- Production build succeeds.
- Correct environment configuration exists.
- Secrets are protected.
- Application starts.
- Public URL works.
- HTTPS works.
- Frontend/backend integration works where applicable.
- Database migrations are applied safely.
- Critical user journey passes.
- Deployment/redeployment process is understood.
- Documentation is current.

---

# 39. Performance Definition of Done

Performance review is Done when:

- Relevant Lighthouse/Core Web Vitals information is reviewed.
- Major images/media are optimized.
- Core content loads promptly.
- Important layout shifts are controlled.
- Heavy AI/visual code is deferred where useful.
- Unnecessary dependencies are avoided.
- No major performance problem blocks recruiter use.

---

# 40. Git Checkpoint Definition of Done

A Git checkpoint is Done when:

- `git status` is reviewed.
- Diff is reviewed.
- No secret/unwanted file is staged.
- No unrelated future work is included.
- Relevant tests pass.
- Commit message describes the coherent change.

Not every micro-step requires a unique commit.

Several tightly related steps may share a commit when together they represent one understandable unit of work.

---

# 41. Screenshot / Visual Evidence Rule

Screenshots are required when they provide useful verification.

Strong candidates:

- Major visual feature
- Responsive layout
- Browser defect/fix
- Project case-study evidence
- Production deployment
- Before/after UI work

Screenshots are normally unnecessary for:

- Internal utility functions
- Documentation-only changes
- Backend-only refactors
- Simple test/configuration changes

Screenshots support verification.

They are not administrative paperwork.

---

# 42. Test Proportionality Rule

Not every code change needs every category of test.

Use the smallest test scope that provides meaningful confidence.

Examples:

Pure utility:
Unit test.

API endpoint:
API/contract test.

Database behaviour:
Integration test.

Critical user journey:
Playwright/E2E.

Visual detail:
Manual browser review may be sufficient.

RAG:
Retrieval/grounding evaluation.

Agent:
Workflow/failure/termination tests.

Do not create brittle tests solely to increase test count.

---

# 43. Bug Fix Definition of Done

A bug fix is Done when:

- Problem is reproduced or clearly understood.
- Root cause is identified where practical.
- Fix addresses the cause.
- Regression test is added where valuable.
- Relevant existing tests pass.
- Manual reproduction no longer fails.
- Unrelated behaviour remains intact.

---

# 44. Refactoring Definition of Done

A refactor is Done when:

- Intended behaviour remains unchanged.
- Reason is clear.
- Structure/maintainability improves.
- Relevant tests pass.
- No unnecessary architecture is introduced.
- Refactor does not silently become feature work.

---

# 45. New Dependency Definition of Done

A new dependency is approved when:

- Real requirement/problem exists.
- Existing stack was considered.
- License is acceptable.
- Maintenance quality is reasonable.
- Runtime/bundle implications are understood.
- Security implications are considered.
- Lockfile is updated.
- It does not unnecessarily duplicate existing capability.

---

# 46. Architecture Change Definition of Done

A major architectural change is Done when:

- Problem is documented.
- Alternatives are considered.
- ADR is created.
- Consequences are understood.
- Architecture is updated.
- Technology Decisions are updated where necessary.
- Build Order is revised.
- Implementation follows the approved decision.
- Relevant tests pass.

---

# 47. Decision Gate Definition of Done

A decision gate is Done when:

- Question/problem is clear.
- Evaluation criteria exist.
- Alternatives are considered.
- Prototype exists when useful.
- Decision is recorded.
- Reason is documented.
- Consequences are understood.
- Build Order is updated where necessary.

Adoption is not required for successful completion.

---

# 48. Defect Severity

## SEV-1 — CRITICAL

Examples:

- Secret exposure
- Severe privacy leak
- Portfolio unavailable
- Destructive production-data issue
- AI/tool security boundary failure
- Materially false professional claim

Blocks release and Done.

## SEV-2 — HIGH

Examples:

- Core navigation broken
- Resume unavailable
- Major project route broken
- Mobile experience unusable
- Important accessibility blocker
- Critical AI/RAG factual behaviour unreliable

Normally blocks milestone/release.

## SEV-3 — MEDIUM

Examples:

- Non-critical UI problem
- Secondary browser issue
- Minor feature degradation
- Recoverable integration issue

May be accepted temporarily if documented and milestone requirements remain satisfied.

## SEV-4 — LOW

Examples:

- Minor spacing
- Small copy refinement
- Cosmetic polish
- Non-blocking enhancement

Does not normally block completion.

---

# 49. Known Issue Rule

A step may be Done with a known issue only when:

- Issue is documented.
- Severity is SEV-3 or SEV-4 unless explicitly approved otherwise.
- Security/privacy/truthfulness are unaffected.
- Critical functionality remains correct.
- Milestone requirements remain satisfied.
- Follow-up work is recorded where warranted.

SEV-1 is never accepted.

SEV-2 normally blocks completion.

---

# 50. Milestone Definition of Done

A milestone is complete when:

- All required prerequisite steps are Done.
- Milestone requirements are satisfied.
- Relevant automated tests pass.
- Relevant manual QA passes.
- No blocking defect remains.
- Professional truthfulness audit passes.
- Required documentation is current.
- Required deployment state exists.
- Major introduced architecture can be explained.

---

# 51. M1 — Portfolio MVP

M1 requires:

- Public deployment
- Clear professional identity
- Featured projects
- Evidence-based skills
- Accurate professional experience
- Data/ML project presentation
- Education
- Selected certifications
- Downloadable resume
- GitHub / LinkedIn
- Contact path
- Working major project links
- Responsive usability
- Accessibility baseline
- Browser baseline
- Performance baseline
- Professional truthfulness
- No AI dependency for recruiter usability

---

# 52. M2 — Full-Stack Portfolio

M2 requires:

- FastAPI foundation
- Stable API structure
- OpenAPI contract
- PostgreSQL integration
- Controlled migrations
- Database tests
- Meaningful persistence
- Graceful failure where architecturally required
- Explainable frontend → backend → database flow

---

# 53. M3 — AI-Enhanced Portfolio

M3 requires:

- Basic LLM functionality
- Validated structured outputs
- Embeddings
- pgvector
- Independent Semantic Search
- Approved RAG corpus
- Grounded RAG answers
- Safe no-evidence behaviour
- Hallucination/grounding tests
- Sensitive sources excluded
- AI feature can be disabled independently

---

# 54. M4 — Advanced AI Portfolio

M4 requires:

- Job Matcher
- GitHub integration
- Allowlisted AI tools
- Validated tool arguments
- Safe tool failure handling
- At least one justified bounded multi-step workflow
- Maximum-step/termination controls
- Explainable workflow architecture

LangGraph and MCP may be adopted or rejected.

Neither blocks M4 solely by being absent.

---

# 55. M5 — Production v1.0

M5 requires:

- Stable production deployment
- Secure production configuration
- Verified database/pgvector
- CI
- Rate limiting
- AI cost controls
- AI evaluation suite
- Security/privacy hardening
- Browser/mobile QA
- Accessibility review
- Performance review
- Final documentation
- Final Architecture matching implementation
- Professional GitHub presentation
- Portfolio case study
- Resume project entry
- LinkedIn project entry
- Final cross-platform truthfulness audit
- Production release/tag
- No known SEV-1 or SEV-2 release blocker

---

# 56. Coding-Agent Completion Rule

A coding agent cannot provide final acceptance.

The agent may report:

- Files changed
- Implementation performed
- Commands executed
- Tests run
- Results
- Remaining uncertainty

Final status is determined through project review against this Definition of Done.

---

# 57. Evidence of Completion

Appropriate evidence may include:

- Passing tests
- Successful build
- Browser verification
- Screenshot
- API response
- OpenAPI output
- SQL query
- Migration result
- Retrieval output
- AI evaluation result
- Tool/workflow trace
- Lighthouse result
- Production URL
- Git diff
- Commit hash
- Updated documentation

Evidence must be appropriate to the task.

---

# 58. Step Review Template

Use where useful:

**Build Order Step:**  
**Goal:**  
**Files Changed:**  
**Implementation:**  
**Commands Run:**  
**Automated Verification:**  
**Manual Verification:**  
**Failure Cases:**  
**Accessibility:**  
**Security / Privacy:**  
**Truthfulness:**  
**Understanding Check:**  
**Documentation Updated:**  
**Git Diff Reviewed:**  
**Known Issues / Severity:**  
**Final Status:** DONE / NOT DONE

Small steps may use a shorter version.

---

# 59. Definition of Done Change Rule

This document may evolve when new categories of work appear.

Change process:

1. Identify the missing quality rule.
2. Explain the reason.
3. Update this document.
4. Increment version.
5. Apply the new requirement to future applicable work.

Do not reduce completion standards solely to increase development speed.

---

# 60. Final Principle

Done means:

Implemented  
+  
Correct  
+  
Appropriately Tested  
+  
Verified  
+  
Reviewed  
+  
Understood where learning-critical  
+  
Secure  
+  
Truthful  
+  
Documented where necessary  
+  
Professionally defensible.

The objective is to create engineering work that can be trusted, demonstrated, and explained.
