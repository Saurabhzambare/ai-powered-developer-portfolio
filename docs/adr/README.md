# Architecture Decision Records



This directory contains Architecture Decision Records (ADRs) for the AI-Powered Developer Portfolio.



ADRs document significant technical and architectural decisions so that the reasoning behind the project remains visible, reviewable, and professionally defensible.



## Purpose



An ADR should answer:



1. What decision needed to be made?

2. What options were considered?

3. What did we choose?

4. Why did we choose it?

5. What trade-offs did we accept?

6. When should the decision be reconsidered?



ADRs are not used for every small implementation detail.



They are reserved for decisions that materially affect architecture, security, maintainability, deployment, data design, AI behavior, or major development workflows.



## Status Values



Use one of the following statuses:



- **Proposed** - under consideration; not yet approved.

- **Accepted** - approved and currently authoritative.

- **Rejected** - considered but deliberately not adopted.

- **Superseded** - replaced by a newer ADR.

- **Deprecated** - still documented but no longer recommended.

- **Experimental** - temporarily approved for evaluation before a final decision.



## Naming Convention



Use:



`NNNN-short-decision-title.md`



Examples:



- `0001-backend-framework.md`

- `0002-database-platform.md`

- `0003-ai-provider-selection.md`



Numbers are sequential and must not be reused.



## Decision Process



The normal workflow is:



1. Identify a decision that materially affects the system.

2. Review existing approved project documentation.

3. Define the decision drivers.

4. Compare realistic alternatives.

5. Create an ADR with status `Proposed`.

6. Review the decision.

7. Change the status to `Accepted` only after approval.

8. Implement according to the accepted ADR.

9. Revisit the ADR only when a documented trigger occurs.



Implementation must not silently override an accepted ADR.



If the architecture changes, create a new ADR and mark the older ADR as superseded where appropriate.



## Current ADR Register



| ADR | Decision | Status | Date |

|---|---|---|---|

| - | No formal ADRs created yet | - | - |



## Planned ADR Candidates



The following subjects may warrant ADRs when their corresponding Build Order decision points are reached:



- backend architecture;

- PostgreSQL and pgvector;

- synchronous versus asynchronous SQLAlchemy;

- direct LLM-provider integration;

- LLM provider and model selection;

- embedding provider and model selection;

- RAG architecture;

- GitHub integration approach;

- generated TypeScript API client, if adopted;

- LangGraph, if adopted;

- MCP, if adopted;

- deployment architecture;

- monitoring/error-reporting provider;

- advanced frontend technologies when architectural impact justifies an ADR.



A planned candidate is **not an accepted technology decision**.



## Template



Use [`0000-template.md`](./0000-template.md) when creating a new ADR.



