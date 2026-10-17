# Talentrack — AI Content Marketplace

A responsive static landing page for an AI content marketplace, built with semantic HTML, CSS, and vanilla JavaScript. No package installation or build step is required.

## Run locally

Open `index.html` in a browser, or serve the project root with VS Code Live Server. Keep the `public/assets` and `src` folders alongside `index.html` so the relative asset and stylesheet paths resolve.

## Interactions

- Responsive header navigation and Services dropdown; the dropdown supports outside-click and Escape dismissal.
- Use-case tabs expose the selected state.
- Talent carousel controls scroll through the creator cards.
- The proposal button dispatches a `proposal:request` custom event, providing an integration hook for a future form or CRM.

## Engineering and accessibility notes

- Dependency-free HTML/CSS/JavaScript keeps the payload and setup simple.
- Responsive layout uses CSS breakpoints and flexible sizing.
- Landmarks, descriptive image alternatives, button labels, and expanded/selected states support assistive technology.
- The use-case tablist supports arrow keys, Home, and End; the Services popover uses normal links so keyboard users can tab through it.
- Decorative images intentionally use empty alternative text to prevent redundant announcements.
- Offscreen photography is lazy-loaded; the hero image is prioritized, and fonts use `font-display: swap` with a preconnected font origin.
- Reduced-motion preferences are respected in CSS and scripted carousel scrolling.

## Deployment

The project is ready for static hosting. Publish the project root (including `index.html`, `src/`, and `public/`) using a static host such as Netlify or GitHub Pages. No deployed URL has been created yet; add the public URL here after publishing.
