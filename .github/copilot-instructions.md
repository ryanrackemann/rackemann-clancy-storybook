# Baby Project Custom Instructions

## Instruction maintenance
- For every project update, review this file (and any other custom-instruction files) in the same work.
- If code, routes, architecture, standards, design rules, tooling workflow, or feature behavior changes, update custom instructions accordingly before considering the task complete.
- Keep custom instructions aligned with the current project state at all times.

## Framework and coding standards
- Target **Angular v22** conventions and syntax.
- In component templates, use Angular control flow blocks like `@if` and `@for` (not legacy `*ngIf` / `*ngFor`).
- Keep implementation straightforward and maintainable.
- Prefer simple, reusable CSS classes and composition over one-off styles.
- Use generic, reusable class names (avoid content-specific or page-specific naming tied to a single piece of text/content).
- Favor `display: grid` and Flexbox for layout.

## Routing architecture
Use simple Angular routing with these primary routes:
- `/` → landing page
- `/library` → library page
- `/registry` → registry page

## Component and file organization
- Keep page features in page-scoped folders:
  - `/src/app/pages/landing/*`
  - `/src/app/pages/library/*`
  - `/src/app/pages/registry/*`
- Use component names and files without `-page` in their names (for example `landing.component.ts` / `LandingComponent`).
- Keep navigation as a shared component under `/src/app/shared/navigation/*`.
- Navigation links should include Library and Registry, while the brand/logo links to `/`.

## Visual direction
- Overall aesthetic: soft, old storybook look (old-school Winnie-the-Pooh-inspired).
- Reuse vignette imagery from `/public/images*` throughout pages.
- For vignettes, use `mix-blend-mode: multiply;`.
- Use nested card motifs and decorative corners using `/public/border.png`.
  - `border.png` is oriented for top-left by default; transform/rotate for other corners.
  - Implement decorative corners via CSS (pseudo-elements/backgrounds), not extra span elements in templates.
  - Show decorative/corner borders on outermost cards only; nested/inner cards should not render border corners.
  - In split-grid layouts, direct card items are considered outermost cards and should keep decorative borders.
- Load typography and iconography via CDN:
  - Google Fonts
  - Google Material Symbols/Icons
- Font preferences:
  - Headings: `"IM Fell English SC"`
  - Body/default text: `"Cormorant Garamond"`

## Page requirements

### Landing page (`/`)
- Keep it simple.
- Provide clear links to the other pages.
- Include brief, helpful summary text for each linked destination.
- Make each destination card itself the link target (clickable card), rather than placing a separate button inside it.
- Include shower invite info text on the page: `Shower invites will be sent via Paperless Post`.
- Include a small mail icon alongside the shower invite text.

### Library page (`/library`)
- Render a list of books from `/public/data/books.json`.
- `coverfilename` in each book entry maps to an image in `/public/images/bookcovers`.
- Build cover image URLs from that folder + filename.
- In each book card, render cover + details in a two-column `.card-inner` layout (`grid-template-columns: auto 1fr`) with details grouped in a dedicated container.
- Apply vignette styling consistently (`mix-blend-mode: multiply` where used).

### Registry page (`/registry`)
- Include a short blurb about the Babylist registry.
- Include a clear button/link to the Babylist registry, and use `/public/babylist.webp` for that link visual.