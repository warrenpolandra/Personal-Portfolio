# AGENTS.md

## Project overview

This repository is Warren Gerald Polandra's personal portfolio site. It is a single-page portfolio plus a `/social-media` page, presenting biography, skills, certifications, projects, contact links, CV, and certificates.

It is a **Next.js 15 App Router** application using React 19, TypeScript, Tailwind CSS 3, Framer Motion, and Next's `Image`/`Link` components. The site is intentionally static: `next.config.ts` sets `output: "export"`, writes the production export to `out/`, and disables image optimization. GitHub Actions deploys `out/` to GitHub Pages whenever `main` is pushed.

## Common commands

```bash
npm ci          # install the lockfile-pinned dependencies
npm run dev     # local development server
npm run build   # production/static-export validation; output is out/
npm run start   # serve a Next production build (not the exported out/ directory)
npm run lint    # run ESLint
```

No test suite is currently configured. Run `npm run build` after changes; it performs the most useful type/build validation. The workflow uses Node 20 and `npm ci`.

## Repository map

- `app/layout.tsx` — global metadata, Inter font, and root HTML/body.
- `app/page.tsx` — composition and ordering of the main one-page portfolio.
- `app/social-media/page.tsx` — social-media directory page.
- `app/globals.css` — Tailwind directives and small global styles.
- `components/hero`, `components/nav`, `components/about`, `components/projects` — UI grouped by page section.
- `components/EmailSection.tsx` — contact form UI that opens the visitor's mail client with prefilled fields.
- `data/*.ts` — content/catalog data for navigation, projects, skills, certificates, achievements, and social media. Update these arrays for content changes rather than hard-coding duplicate entries in components.
- `public/images/` — avatar, about, project, icon, and social assets.
- `public/files/` — downloadable CV and certificate PDFs.
- `.github/workflows/nextjs.yml` — GitHub Pages build/deploy workflow.

## Architecture and conventions

- Use the `@/*` import alias for repository-root imports (for example `@/data/projectItems`).
- Components are function components with default exports. Client interactivity/animation components begin with `"use client"`; keep pages and components server-rendered unless hooks, browser APIs, or client-only libraries require otherwise.
- Tailwind utility classes are the styling system. The portfolio uses a dark `#121212` background and orange/red `primary`/`secondary` Tailwind palettes configured in `tailwind.config.ts`.
- Main-page navigation uses fragment IDs: `hero`, `about`, `projects`, and `contact`. Preserve/update the matching IDs in `data/navItems.ts` when changing sections. Global smooth scrolling and fixed-nav offset are in `app/globals.css`.
- Project filters are literal tags from `data/filterItems.ts`; every project in `data/projectItems.ts` must include `"All"` plus any applicable filter tags. Project image filenames map to `public/images/projects/`.
- Skill icon filenames map to `public/images/icons/`; certificate filenames map to `public/files/certificates/`; social image filenames map to `public/images/socials/`.
- The repository currently uses relative asset URLs such as `./images/...` and `./files/...` in several components. Keep asset-path behavior consistent and manually check both `/` and nested routes when altering paths, particularly for GitHub Pages.

## Deployment constraints

`output: "export"` means the deployed site cannot rely on server-only Next.js features (SSR, server actions, dynamic route handlers, or runtime API endpoints). The existing `/api/send` route is only an empty/commented prototype and is not wired to the contact form. Do not enable a mail/API implementation without also changing the hosting/deployment approach or using a browser-compatible external service.

The contact form uses a `mailto:` link, so GitHub Pages does not need a backend. It requires visitors to have a configured mail client. Environment files are ignored by Git; never commit API keys.

## Change checklist

1. Keep portfolio content and its matching public assets in sync.
2. Preserve responsiveness (mobile navigation, grids, and image sizing) and external-link behavior (`target="_blank"` where appropriate).
3. Keep the static-export configuration and workflow artifact path (`./out`) compatible with GitHub Pages.
4. Run `npm run build` before submitting changes. Check `git status` to ensure generated directories (`out/`, `.next/`) are not included.
