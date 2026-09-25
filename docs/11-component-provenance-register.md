# Third-Party Component Provenance Register

## 1. Purpose

This register records the origin and usage conditions of externally sourced or adapted production UI components. It supports licensing review, attribution compliance, maintainability, and consistent integration with the project's internal design system.

An external component must be reviewed and recorded here before it is accepted as production code.

## 2. Scope

This register covers production UI components whose code, structure, styling, or interaction design is copied or materially adapted from an external component source, example, template, or repository.

It does not serve as a dependency-license inventory. Normal package dependencies used through their published APIs, including React, React Router, Tailwind CSS, Motion for React, and Lucide React, are not automatically component-provenance entries.

Planning references and research sources are also not adopted components by default. Mentioning shadcn-style patterns, Magic UI, Animata, Skiper UI, Aceternity UI, or Vengeance UI does not create a register entry unless production component code is actually sourced or adapted from them.

## 3. When an Entry Is Required

Create an entry when production UI implementation materially uses an external source, including:

- copied component code or markup;
- adapted component structure, styling, or interaction logic;
- code derived from a documentation example, demo, template, repository, or paid component;
- an external component incorporated through a generator or copy-and-own workflow; or
- a component whose license or attribution terms apply to the resulting production implementation.

An entry is not required for:

- an internally authored component with no externally sourced implementation;
- a normal package dependency used through its documented public API;
- a general UI convention or idea without copied or materially adapted implementation; or
- a source considered only during research and not adopted in production code.

When the boundary is uncertain, record the component provisionally and complete the licensing review before production acceptance.

## 4. Required Provenance Fields

| Field                   | Required information                                                                                              |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Component               | Internal component name and, where useful, its project path.                                                      |
| Source                  | Name of the external library, site, author, repository, or template.                                              |
| Source URL              | Direct URL to the exact source or closest authoritative component page.                                           |
| License                 | Applicable license and version, or the result of the license review.                                              |
| Free / paid status      | Whether the source was free, paid, or subject to another access model when adopted.                               |
| Attribution requirement | Required attribution text or a clear statement that none is required.                                             |
| Dependencies            | Packages, assets, fonts, services, or other runtime/build requirements introduced by the component.               |
| Modifications           | Significant accessibility, design-system, responsive, performance, or implementation changes made after adoption. |
| Reason for adoption     | The specific project need the external component met better than the existing internal system.                    |

## 5. Current Production-Component Register

No externally sourced or adapted production UI components have been adopted at this time.

Repository review found internally implemented UI and layout components, with no confirmed external component source or adaptation requiring a provenance entry. Existing framework and package dependencies are outside this register's scope, and potential sources named in planning documents remain research options rather than adopted components.

## 6. Reusable Entry Template

Copy this section for each adopted component:

### `[Component name]`

- **Component:** `[Internal name and project path]`
- **Source:** `[External source, author, library, repository, or template]`
- **Source URL:** `[Direct authoritative URL]`
- **License:** `[License name/version or documented review result]`
- **Free / paid status:** `[Free / paid / other]`
- **Attribution requirement:** `[Required attribution or none]`
- **Dependencies:** `[Packages, assets, services, or none]`
- **Modifications:** `[Significant changes made for this project]`
- **Reason for adoption:** `[Concrete need and adoption rationale]`

## 7. Maintenance Rules

- Review licensing, usage rights, cost status, and attribution requirements before copying or adapting external production code.
- Add or update the provenance entry in the same Build Order step that adopts or materially changes the external component.
- Use the exact authoritative source URL available at the time of adoption.
- Record meaningful modifications, especially accessibility, responsive behavior, dependency removal, and normalization to semantic theme tokens and internal interaction states.
- Re-review the entry when the upstream source, license, attribution terms, dependencies, or local implementation materially changes.
- Remove or mark an entry as retired when its production component is removed, while preserving enough history to explain prior usage when necessary.
- Do not list speculative sources, unadopted research, or ordinary package dependencies merely to populate the register.
- A component is not ready for production acceptance until required provenance information is complete and the relevant third-party component Definition of Done is satisfied.
