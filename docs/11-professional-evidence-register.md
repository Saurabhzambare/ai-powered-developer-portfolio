# Professional Evidence Register

**Status:** INTERNAL / STEP 67 PASS
**Evidence review date:** 2026-09-26

## 1. Purpose and Claim Rules

This internal register defines the approved evidence boundary for portfolio project content. It separates verified implementation from architecture, design, planned work, and unverified deployment claims.

Public portfolio copy does not need completion percentages, internal phase labels, remaining-task counts, roadmap status, or generic "under development" warnings. Those details should appear publicly only when omission would make a specific claim misleading.

Use implementation verbs such as `built`, `implemented`, `integrated`, and `supports` only for repository-verified functionality. Use `designed`, `architected`, `modeled`, and `documented` for genuine design work that is not implemented. Do not create a Demo link without a verified working public deployment.

## 2. Discipline System

- **Canonical project name:** Discipline System
- **GitHub repository:** <https://github.com/Saurabhzambare/discipline-system>
- **Portfolio priority:** Featured
- **Approved short positioning:** Gamified full-stack productivity platform that transforms real-life habits and disciplined actions into quests, EXP, levels, streaks, achievements, and social progression.
- **Verified technologies:** Python; Django; Django REST Framework; Simple JWT; React 19; Vite; Tailwind CSS; Docker and Docker Compose; GitHub Actions; PostgreSQL configuration; SQLite test database.
- **Verified implemented functionality:** Source and tests exist for user authentication; player profiles and progression; quest assignment, completion, EXP, levels, and streaks; five-path discovery and onboarding; path-specific mechanics; friend, feed, and group features; badges and achievement cards; leaderboards; weekly-boss completion; and activity-event notification tracking.
- **Architecture/design work that may be discussed:** Django app boundaries for users, players, quests, paths, social, and core; REST/JWT client-server flow; server-owned EXP rules; timezone-aware quest scheduling; PostgreSQL and Docker deployment direction; and documented game-system design.
- **Approved evidence/media:** Repository source, migrations, focused test modules, CI workflows, architecture/game-design documentation, and the implemented authenticated `/dashboard` view in `frontend/src/pages/DashboardPage.jsx` are approved technical evidence. The running dashboard is the approved source for a later real product screenshot.
- **Screenshot/media still required:** Capture the real authenticated dashboard and copy the approved export into portfolio media assets using the Phase 6 media convention. The final exported filename is not a Step 67 blocker.
- **Verified live-demo URL:** none verified
- **Claims that must NOT be made:** Do not claim a verified public deployment, production PostgreSQL operation, production readiness, completed roadmap, implemented subscription/device/mobile features, or a polished final UI without direct evidence.
- **Future case-study notes:** Center the case study on the gameplay loop, service/domain boundaries, five-path architecture, quest personalization, testing, and bounded social progression. Clearly separate implemented modules from later roadmap ideas without adding a generic unfinished-project badge.

## 3. EPC Project & Vendor Management System

- **Canonical project name:** EPC Project & Vendor Management System
- **GitHub repository:** <https://github.com/Saurabhzambare/epc-vendor-management>
- **Portfolio priority:** Featured
- **Approved short positioning:** Enterprise-style .NET project centered on project/vendor management, relational application design, business workflows, and engineering-oriented software architecture.
- **Verified technologies:** C#; .NET 8; LINQ; async/await; xUnit.
- **Verified implemented functionality:** The repository contains Vendor, Employee, and Project learning-domain models; vendor state encapsulation; LINQ filtering, sorting, projection, grouping, and joins; an asynchronous in-memory vendor registry exercise; and three passing xUnit tests.
- **Architecture/design work that may be discussed:** The repository documents a planned ASP.NET Core MVC application, Controller-to-Service-to-EF Core flow, SQL Server relational model, Identity/role direction, Razor/ViewModel conventions, vendor registration and approval workflows, project assignments, security controls, testing strategy, and UI journeys. These are design artifacts, not implemented application features.
- **Approved evidence/media:** Current source/tests plus `docs/ARCHITECTURE.md`, `docs/DATABASE.md`, `docs/API_AND_WORKFLOWS.md`, and `docs/UI_UX.md` are approved evidence of implemented foundations and design work.
- **Screenshot/media still required:** Use the existing architecture or business-workflow documentation as evidence until a genuine implemented UI is suitable. A later diagram export may follow the Phase 6 media convention; do not fabricate an application screenshot.
- **Verified live-demo URL:** none verified
- **Claims that must NOT be made:** Do not claim that ASP.NET Core MVC, Entity Framework Core, SQL Server persistence, Identity, Razor screens, CRUD workflows, Ajax behavior, reports, Docker deployment, or a finished application UI are implemented. Do not imply affiliation with or use by a real company.
- **Future case-study notes:** Present implemented C# foundations separately from the designed enterprise workflow. Use precise verbs such as `modeled`, `designed`, and `documented` for the application architecture until corresponding code exists.

## 4. Market Analysis in Banking Domain

- **Canonical project name:** Market Analysis in Banking Domain
- **GitHub repository:** <https://github.com/Saurabhzambare/Market-Analysis-in-Banking-Domain>
- **Portfolio priority:** Supporting
- **Approved short positioning:** Scala and Apache Spark analysis of banking campaign data using distributed DataFrame, SQL, aggregation, feature-engineering, and categorical-indexing techniques.
- **Verified technologies:** Scala; Apache Spark; Spark DataFrames; Spark SQL; Spark ML `StringIndexer`.
- **Verified implemented functionality:** Campaign success/failure aggregation; age and balance summaries; successful-subscription analysis by age and marital status; combined grouping; age-category feature engineering with a Spark SQL UDF; and categorical indexing.
- **Architecture/design work that may be discussed:** Dataset ingestion into Spark DataFrames, temporary SQL views/queries, grouped analytical outputs, UDF-based feature engineering, and Spark ML indexing.
- **Approved evidence/media:** `docs/images/spark-scala-output.png` is the approved technical screenshot. The Scala source and attributed dataset provide supporting evidence.
- **Screenshot/media still required:** None required for the initial portfolio presentation.
- **Verified live-demo URL:** none verified
- **Claims that must NOT be made:** Do not claim predictive modeling, model accuracy, production deployment, a modern packaged Spark application, or verified portability to a current Spark runtime.
- **Future case-study notes:** Keep this concise and supporting. Explain the analytical questions, distributed operations, known boundary-age logic, original environment constraints, and dataset attribution.

## 5. Mercedes-Benz Greener Manufacturing

- **Canonical project name:** Mercedes-Benz Greener Manufacturing
- **GitHub repository:** <https://github.com/Saurabhzambare/Mercedes-Benz-Greener-Manufacturing>
- **Portfolio priority:** Supporting
- **Approved short positioning:** Exploratory machine-learning analysis of the Mercedes-Benz Greener Manufacturing dataset, focused on EDA, categorical encoding, and tree-based feature-importance exploration.
- **Verified technologies:** Python; Pandas; NumPy; Matplotlib; Seaborn; Scikit-learn; XGBoost; Jupyter Notebook.
- **Verified implemented functionality:** Dataset inspection; target-distribution and categorical/binary feature analysis; label encoding; XGBoost feature-importance exploration; and Random Forest feature-importance exploration.
- **Architecture/design work that may be discussed:** Notebook flow from ingestion and EDA through encoding and model-based feature-importance comparison. This is exploratory analysis, not a validated prediction pipeline.
- **Approved evidence/media:** The notebook's executed Random Forest feature-importance output (cell 56 in the current notebook) is the preferred visual; the XGBoost feature-importance output is an acceptable alternative.
- **Screenshot/media still required:** Export the selected existing feature-importance visualization into a stable portfolio media asset during Phase 6. Its current notebook source is sufficient for this gate.
- **Verified live-demo URL:** none verified
- **Claims that must NOT be made:** Do not claim validated model performance, cross-validation, final test predictions, a Kaggle submission/score, production use, business impact, or authorship of the competition dataset.
- **Future case-study notes:** Present this as an earlier exploratory learning project. Explain feature importance carefully and do not equate importance with causation or validated predictive quality.

## 6. Real Estate & Mortgage Analytics

- **Canonical project name:** Real Estate & Mortgage Analytics
- **GitHub repository:** <https://github.com/Saurabhzambare/Real_Estate_Capstone>
- **Portfolio priority:** Supporting
- **Approved short positioning:** Exploratory real-estate and mortgage analytics with Tableau evidence and a modernized, leakage-safe Scikit-learn modeling workflow.
- **Verified technologies:** Python; Pandas; NumPy; Matplotlib; Seaborn; Plotly; Scikit-learn; Jupyter Notebook; Tableau; pytest.
- **Verified implemented functionality:** Historical exploratory analytics; geographic and debt analysis; packaged Tableau workbook; modern `Pipeline`/`ColumnTransformer` preprocessing; training-only five-fold cross-validation; baseline/model comparison; Random Forest selection; one final holdout evaluation; residual/error diagnostics; state-level diagnostics; overlap sensitivity analysis; reusable modeling helpers; and focused synthetic-data tests.
- **Architecture/design work that may be discussed:** Leakage-safe preprocessing, fold-local training, model selection before holdout use, explicit target-missingness handling, UID/predictor-overlap audit, interpretability diagnostics, and robustness/sensitivity evaluation.
- **Approved evidence/media:** The executed three-panel predicted-vs-actual/residual output in cell 27 of `notebooks/real_estate_modeling_modernized.ipynb` is the preferred technical visual. Generated CSV reports and the packaged Tableau workbook are supporting evidence. Verified primary holdout metrics are R² approximately 0.841877, RMSE approximately 252.270119, and MAE approximately 177.562609.
- **Screenshot/media still required:** Export the selected modern predicted-vs-actual/residual visual into a stable portfolio media asset during Phase 6. A Tableau dashboard screenshot is optional additional evidence if it can be captured from the actual workbook/dashboard.
- **Verified live-demo URL:** none verified. The historical Tableau Public URL currently resolves to the author's profile rather than a verified active dashboard.
- **Claims that must NOT be made:** Do not advertise the historical Tableau URL as an active demo; claim external validation, production deployment, causal/business outcomes, prediction uncertainty, or absolute holdout independence; or present historical metrics as equivalent to the modern workflow.
- **Future case-study notes:** Lead with the methodological modernization and explain why pipeline-based preprocessing, training-only model selection, one-time holdout evaluation, and sensitivity analysis improve credibility. Keep the remaining data-source and geographic-shift limitations explicit in technical detail.

## 7. AI-Powered Developer Portfolio

- **Canonical project name:** AI-Powered Developer Portfolio
- **GitHub repository:** <https://github.com/Saurabhzambare/ai-powered-developer-portfolio>
- **Portfolio priority:** Not currently displayed
- **Approved short positioning:** Recruiter-first developer-portfolio foundation with controlled architecture documentation and an implemented React design system, routing shell, accessible navigation, and evidence-first content process.
- **Verified technologies:** React; TypeScript; Vite; React Router; Tailwind CSS v4; Motion for React; Lucide React; Vitest; React Testing Library; Playwright configuration; ESLint; Prettier.
- **Verified implemented functionality:** Frontend foundation, routing shell, error boundary, semantic theme/token system, reusable UI primitives, focus-visible states, root reduced-motion policy, responsive desktop/mobile navigation, shared footer, and component-provenance controls.
- **Architecture/design work that may be discussed:** Approved modular-monolith direction, future FastAPI/PostgreSQL/pgvector boundaries, controlled AI learning sequence, RAG and tool security boundaries, deterministic Job Matcher direction, feature criticality, and staged Build Order. These later systems remain design only.
- **Approved evidence/media:** Repository control documents, frontend source, and component tests are approved evidence of the current foundation.
- **Screenshot/media still required:** No separate project-card screenshot is required yet. The portfolio application will serve as its own evidence after meaningful recruiter-facing content exists.
- **Verified live-demo URL:** none verified
- **Claims that must NOT be made:** Do not claim implemented FastAPI, PostgreSQL, pgvector, LLM integration, embeddings, semantic retrieval, RAG, Job Matcher, GitHub integration, tool calling, agents, MCP, production deployment, or a completed recruiter-facing portfolio.
- **Future case-study notes:** Do not feature this as a separate project card before meaningful implementation exists. Later case-study wording must distinguish implemented frontend/product work from approved backend and AI architecture.

## 8. Step 67 Gate Status

### Verified gate evidence

- Canonical GitHub URLs and portfolio priorities are recorded for all six projects.
- Approved positioning and implemented-versus-designed claim boundaries are documented.
- Technology claims were checked against the current public repositories and local portfolio source.
- Available evidence is selected, and remaining media exports are explicitly recorded.
- Every project records `none verified` for live-demo status unless direct verification supports a public deployment.
- No employment claim or invalid Innovation Centre SSM experience is introduced.

### Repository correction status

- **Discipline repository hygiene:** [pull request #39](https://github.com/Saurabhzambare/discipline-system/pull/39) from branch `codex/step-67-repository-hygiene` removes tracked environment files, the local SQLite database, local editor state, generated Graphify artifacts, and the untitled note; adds safe environment examples and ignore rules; and updates setup documentation. Its follow-up commit loads Django's `SECRET_KEY` from the environment, documents the required local value, and makes Docker Compose override `DB_HOST=db` for the backend container. Django's system check, all 322 backend tests, and Docker Compose configuration validation pass. The original correctness review thread is resolved.
- **Discipline historical credential handling:** populated environment files and a literal Django development secret existed in public Git history. Git history has not been rewritten and must not be described as sanitized. Pull request #39 replaces the tracked literal with a required environment value; the historical value must never be reused, and every deployment must provide a new secret. Any database password reused outside local development must be rotated before further use. A key-name audit found a Google OAuth client ID but no OAuth client-secret key; a client ID alone is not a secret. No live deployment is verified, so this repository evidence gate does not claim to validate any external environment's current credentials.
- **Discipline `.gitattributes` correction:** the misleading binary rules for the removed environment-file paths were removed. Normal text normalization remains. This change does not rewrite or sanitize Git history.
- **EPC public presentation:** [pull request #4](https://github.com/Saurabhzambare/epc-vendor-management/pull/4) from branch `codex/step-67-presentation-correction` distinguishes implemented C#/.NET 8 warm-up evidence from planned MVC architecture and now describes Phase 1 as partially complete because the roadmap's interface exercise is outstanding. The build and all three tests pass, and the original review thread is resolved. The GitHub repository description uses accurate implemented/design wording.

### Phase 6 media follow-up

- Discipline System: final recruiter-facing dashboard/product screenshot.
- EPC: architecture or business-workflow diagram preferred until a genuine UI is suitable.
- Mercedes-Benz: export the selected existing feature-importance output.
- Real Estate: export the selected modern predicted-vs-actual/residual output; add a Tableau screenshot if genuinely available.
- AI-Powered Developer Portfolio: no project-card screenshot required yet.

The selected real evidence sources satisfy Step 67. Final copied/exported media filenames will follow the Phase 6 media convention and do not independently block this gate.

**Gate decision:** PASS. Phase 5 — Professional Content and Evidence Preparation is complete. Next is Phase 6 — Professional Content Model and Homepage, Step 68; do not begin Step 68 as part of this gate.
