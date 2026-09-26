# Project Media Convention

**Status:** APPROVED / BASELINE

**Scope:** Public portfolio project media

**Evidence authority:** [Professional Evidence Register](11-professional-evidence-register.md)

## Purpose and storage

This document defines where approved project visuals go and how they are named and described. It does not approve a new screenshot, export a plot, or assert that a visual asset already exists. Check each proposed asset against the Professional Evidence Register before publishing it.

Store final, approved presentation assets under `frontend/public/media/projects/<project-id>/`. Use the exact stable `id` from `frontend/src/content/projects.ts` as the folder name. Create a project folder only when its first approved asset is added; Git does not track empty directories.

Vite serves files in `frontend/public/` from the browser root. For example:

| Filesystem path | Browser URL and `ProjectMedia.src` |
| --- | --- |
| `frontend/public/media/projects/discipline-system/discipline-system-dashboard-overview.webp` | `/media/projects/discipline-system/discipline-system-dashboard-overview.webp` |

Do not include `/public` in the URL. The URL is a browser path, not a local filesystem path. Vite copies public assets into the production build without importing them through `src/assets/`.

## Folder and filename rules

Use `<project-id>-<descriptive-purpose>.<extension>` for every file. The folder ID must match `projects.ts`; the filename must begin with that same ID. Use lowercase ASCII kebab-case: no spaces, parentheses, timestamps added merely for versions, or temporary words such as `final`, `final-final`, `new`, `latest`, and `copy`. Keep names stable when replacing an approved visual. Prefer a meaningful description over an unexplained number; add `-01`, `-02`, and so on only when distinct related images would otherwise collide.

Examples of future names, not files added by this step:

- `discipline-system-dashboard-overview.webp`
- `discipline-system-path-discovery.webp`
- `discipline-system-group-view.webp`
- `epc-project-vendor-management-architecture-flow.svg`
- `market-analysis-banking-spark-scala-output.png`
- `mercedes-benz-greener-manufacturing-feature-importance.webp`
- `real-estate-mortgage-analytics-model-diagnostics.webp`
- `real-estate-mortgage-analytics-model-diagnostics-01.webp` only if another distinct diagnostic needs the same description

Bad names include `Dashboard Final 2.png`, `new_plot(1).png`, `Screenshot 2026-09-26.png`, and `final-final-dashboard.png`.

## Format and presentation

| Format | Use |
| --- | --- |
| WebP | Preferred for ordinary portfolio screenshots when the result stays clear at a smaller file size. |
| PNG | Use for lossless technical detail, especially charts, plots, code or terminal output, and text-heavy screenshots. |
| SVG | Use only for genuine, authored or approved vector diagrams or illustrations after checking for unsafe embedded content. |
| JPEG/JPG | Use mainly for photographs when appropriate. |
| GIF | Avoid by default; if motion is necessary, consider a lightweight accessible web animation during the relevant UI step. |

Do not convert a visual merely to follow a fashion. Legibility and fidelity to the underlying evidence matter more than the smallest possible file. Optimize dimensions for the actual presentation, avoid multi-megabyte screenshots when a smaller export remains legible, and avoid visually duplicate exports. One strong image is better than a weak gallery. Later UI work can decide lazy loading.

Project-card imagery should be understandable and legible at small sizes, with a clean composition and little tiny text. Case-study media can retain detailed plots, diagrams, and test output at a natural aspect ratio. Do not crop technical meaning away to force every image into one aspect ratio. The same approved source may be presented differently in these contexts if each export remains faithful.

## Metadata, evidence, and approval

`ProjectMedia` in `frontend/src/content/types.ts` provides `src`, `alt`, and optional `caption`. Put factual, descriptive alt text in metadata, not the filename. For example, a later approved asset could use:

```ts
{
  src: '/media/projects/discipline-system/discipline-system-dashboard-overview.webp',
  alt: 'Discipline System authenticated dashboard showing player progression, quests, and streak information',
}
```

Avoid vague alt text such as `project screenshot` and keyword stuffing. Use a caption only when it adds useful technical context. Do not repeat the same sentence in the filename, alt text, caption, and project summary.

`ProjectEvidence` is a public source or reference supporting a claim, such as a GitHub source file, test, notebook, or architecture document. `ProjectMedia` is a visual intentionally displayed in the portfolio, such as a screenshot, exported plot, or architecture diagram. An evidence URL does not automatically become media. Selection, privacy and truthfulness review, naming, and public export must happen first. Keep canonical evidence in its project repository or a private working location; `frontend/public/media/projects/` holds only final approved presentation assets, not `.psd`, `.fig`, editable design sources, raw notebooks, private spreadsheets, original private screenshots, working exports, or duplicate files.

Before adding an asset, inspect it for private names, personal email addresses, phone numbers, credentials, secrets, API keys, tokens, private URLs or accounts, misleading localhost details, personal filesystem paths, immigration or employment documents, unrelated browser tabs, misleading test data, and third-party material without republication rights. Redaction must preserve the technical meaning. Never fabricate an unfinished feature's screenshot. A design mockup or architecture diagram must be identified as design evidence, never as implemented UI.

Approved portfolio media may be committed as application assets. Do not commit generated `frontend/dist/`, failed-test screenshots, Playwright reports, temporary browser captures, or debugging images as media without deliberate approval. Do not add Git LFS or image-processing dependencies for this convention.

## Current project map

The following is future media direction from the Step 67 Professional Evidence Register. Filenames are suggestions under this convention, not evidence that an export exists or permission to publish an unreviewed asset.

| Project ID | Approved source and future presentation | Suggested filename |
| --- | --- | --- |
| `discipline-system` | Capture the real implemented authenticated dashboard. Do not imply a verified public live deployment. | `discipline-system-dashboard-overview.webp` |
| `epc-project-vendor-management` | Prefer an architecture or business-workflow diagram derived from existing design documentation until genuine implemented UI exists. Clearly label it as design, not an application screenshot. Use PNG if the approved export is raster. | `epc-project-vendor-management-architecture-flow.svg` |
| `market-analysis-banking` | The existing `docs/images/spark-scala-output.png` in the Banking repository is the approved technical screenshot. No additional screenshot is required for initial presentation. Copy it only in a later media step after review. | `market-analysis-banking-spark-scala-output.png` |
| `mercedes-benz-greener-manufacturing` | Export the existing executed Random Forest feature-importance output. PNG is acceptable if chart text is clearer. Do not present feature importance as validated model performance. | `mercedes-benz-greener-manufacturing-feature-importance.webp` |
| `real-estate-mortgage-analytics` | Export the executed predicted-vs-actual/residual diagnostic output from the modernized notebook. PNG is acceptable for lossless chart detail. A Tableau screenshot is optional only if captured from the genuine workbook or dashboard; do not advertise the historical Tableau Public URL as an active demo. | `real-estate-mortgage-analytics-model-diagnostics.webp` |
| `ai-powered-developer-portfolio` | No separate project-card screenshot is currently required. The application may become evidence after meaningful recruiter-facing implementation exists; do not create an image merely to fill a slot. | None currently |

When later ProjectCard or case-study steps need an approved visual, export it to the project's folder, set `ProjectMedia.src` to its root-relative public URL, and write factual alt text and any useful caption. Do not populate project `media` arrays until those presentation steps require the reviewed assets.

