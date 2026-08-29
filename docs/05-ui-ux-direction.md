# AI-Powered Developer Portfolio
## UI / UX Direction

**Document Version:** 1.0  
**Status:** APPROVED / BASELINE  
**Snapshot Date:** 2026-08-29

---

# 1. Purpose

This document defines the visual and interaction direction for the portfolio.

The design should improve professional comprehension rather than distract from it.

---

# 2. UX Priority Order

The project prioritizes:

1. Clarity
2. Recruiter usability
3. Content hierarchy
4. Accessibility
5. Performance
6. Visual polish
7. Motion
8. Experimental effects

Experimental technology must not reduce the quality of the first five priorities.

---

# 3. Design Personality

The portfolio should feel:

- Modern
- Professional
- Technical
- Polished
- Calm
- Slightly futuristic
- Developer-oriented
- Credible

It should not feel:

- Gaming-heavy
- Cyberpunk-heavy
- Hacker-themed
- excessively neon
- visually chaotic
- like a generic template
- like several component libraries were combined without a system

---

# 4. Theme Direction

Primary direction:

**Dark-first neutral technical design**

Preferred visual language:

- Dark neutral surfaces
- High-contrast readable text
- Cool blue → indigo accent
- Optional restrained violet / cyan supporting accents
- Subtle gradients where useful
- Clear borders and surface separation

Light mode:

**SHOULD**

but is not an M1 blocker.

The token system should make a future light theme possible.

---

# 5. Layout Direction

Use a clean centered responsive grid.

Important properties:

- Strong horizontal alignment
- Consistent spacing
- Readable max widths
- Clear section boundaries
- Stable card patterns
- Real project screenshots
- Clean case-study layouts

Avoid content floating randomly across the screen.

---

# 6. Typography

Typography should create obvious hierarchy.

Use:

- Large but controlled hero heading
- Clear section headings
- Strong body readability
- Limited font families
- Consistent line height
- Comfortable reading width

Avoid highly decorative display fonts for important recruiter content.

---

# 7. Navigation

Preferred initial navigation:

**Conventional sticky top navigation**

Why:

- Familiar
- Accessible
- Fast
- Recruiter-friendly
- Mobile-adaptable

Do not begin with a Mac-style dock or hidden experimental navigation.

Potential links:

- Home
- Projects
- About
- Resume
- Contact
- AI Lab later

---

# 8. Hero Direction

The hero should prioritize:

- Name
- Role identity
- Short value statement
- View Projects
- View Resume
- GitHub / LinkedIn / Contact

Initial hero effects should be:

- 2D
- Motion-based
- lightweight
- optional
- non-blocking

Do not make 3D/WebGL required for hero comprehension.

---

# 9. Project Presentation

Project content should use:

- Strong project imagery
- Clear title / purpose
- Technology chips
- Current status
- Simple CTAs
- Detailed case-study routes

The portfolio should look like a developer has built real systems, not merely collected logos.

---

# 10. Case Study Design

Case studies should emphasize:

- Real screenshots
- Architecture diagrams
- Technical decisions
- Testing evidence
- Code / data flow illustrations where useful
- Challenges and lessons

Long pages should use strong section structure and readable spacing.

---

# 11. Internal Design System

Use one coherent internal design system.

External components may be adapted, but the final product should normalize:

- Typography
- Colors
- Borders
- Radius
- Spacing
- Shadows
- Motion
- Interactive states
- Icons

Do not allow each imported component to retain a different design language.

---

# 12. External UI Research Direction

Potential selective sources include:

## Magic UI
Good for restrained backgrounds and micro-interactions.

## Animata
Useful selectively for small animation primitives and showcase effects.

## Skiper UI
Potentially useful for project showcase or later AI-input patterns. Licensing / attribution must be checked.

## Aceternity UI
Selective inspiration for hero/background/card effects.

## Vengeance UI
Primarily experimental / AI Lab inspiration rather than core recruiter UI.

## shadcn-style patterns
Useful for accessible interaction primitives.

These sources are inspiration / component sources, not simultaneous design systems.

---

# 13. Component Provenance Register

Every externally sourced production component should record:

- Component
- Source
- Source URL
- License
- Free / paid status
- Attribution requirement
- Dependencies
- Modifications
- Reason for adoption

No external production UI component should be copied without licensing review.

---

# 14. Motion Strategy

Use three conceptual levels:

## Level 1 — Functional Motion
Buttons, menus, dialogs, hover/focus feedback.

## Level 2 — Section Motion
Subtle reveals, layout transitions, scroll entry.

## Level 3 — Showcase Motion
One or two controlled high-impact moments.

Primary animation technology:

**Motion for React**

GSAP:

Conditional for complex timelines / pinned storytelling only.

---

# 15. Scroll Behaviour

Default:

**Native browser scrolling**

Lenis or another smooth-scroll system:

Conditional only when a real interaction requires it.

Do not add scroll-jacking.

Do not reduce normal browser control merely for style.

---

# 16. 3D Policy

Three.js / React Three Fiber are post-MVP optional technologies.

Production adoption requires:

- Desktop test
- Mobile test
- Reduced-motion fallback
- Accessibility review
- Performance review
- Maintainability review
- Professional-value review

The site must remain usable without WebGL.

---

# 17. Custom Cursor Policy

No custom cursor by default.

Do not use:

- Cursor trails
- particle-following cursor
- click explosions
- hidden native cursor

unless a later isolated experiment proves clear value and preserves accessibility.

---

# 18. Anti-Patterns

Avoid:

- Percentage skill bars
- Rotating job titles
- Typewriter effect everywhere
- Mouse trails
- Constant glowing cards
- Glassmorphism on every surface
- Full-screen cinematic loading screens
- Audio
- Scroll-jacking
- Excessive carousels
- Page transitions that delay access
- Full-screen WebGL dependency
- "hacker terminal" site-wide styling

---

# 19. Accessibility

Accessibility must be embedded in base components.

Support:

- Semantic HTML
- Keyboard interaction
- Focus visibility
- Control labels
- Appropriate alt text
- Reduced motion
- Color contrast
- Status messaging
- Touch targets

Aim for WCAG 2.2 AA where applicable.

---

# 20. Responsive Design

Design mobile and desktop together.

Check:

- Mobile navigation
- Hero wrapping
- Project cards
- Case-study media
- Skills layout
- Resume/contact CTAs
- AI inputs
- Long technical diagrams

Important interactions must not depend on hover.

---

# 21. AI Assistant UX

The AI assistant should be a secondary enhancement.

Potential presentation:

- AI Lab route
- secondary panel
- optional dock
- clearly labelled assistant

Recommended UX includes:

- Suggested questions
- Evidence references
- Loading state
- Error state
- Retry
- Reset
- Clear unavailable state

The assistant should not take over the homepage.

---

# 22. Job Matcher UX

The Job Matcher belongs primarily in:

**AI Lab / Tools**

rather than becoming the main recruiter-facing feature.

The experience should clearly show:

- Requirements extracted
- Demonstrated evidence
- Partial evidence
- Missing evidence
- Explanation
- Disclaimer that match percentages are estimates

---

# 23. Performance Direction

Protect performance through:

- Optimized project imagery
- Lazy loading
- Deferring AI bundles where useful
- Avoiding unnecessary dependencies
- Deferring 3D
- Controlled animation
- Reasonable font loading

Advanced visual technology must earn its cost.

---

# 24. Failure UX

External-service failures should produce calm user-friendly states.

Examples:

GitHub unavailable:
Show stored project content.

AI unavailable:
Show assistant unavailable / retry state.

Semantic Search unavailable:
Do not break normal project browsing.

3D unavailable:
Show 2D/static fallback.

---

# 25. Final UI / UX Principle

The finished design should make technical depth easier to understand.

The strongest visual outcome is not the most animated one.

It is the one where a recruiter can quickly see:

Who this candidate is

→ What they built

→ What they know

→ Why the projects matter

→ Where to inspect deeper evidence.
