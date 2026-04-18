# Littlelink

A responsive personal links page for Olamilekan Bakare, built with React, Vite, and Tailwind CSS.

## Live Site

- GitHub Pages: https://bakareolamilekan365-tech.github.io/littlelink/

## Features

- Multiple design presets with a preset selector
- Light and dark mode toggle with local persistence
- Brand-colored social cards
- Custom icon treatments for X, Instagram, Facebook, Gmail, and Snapchat
- Portfolio button with a professional under-construction notice
- Responsive 3-column card layout

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 3
- PostCSS + Autoprefixer
- Font Awesome (CDN)

## Project Structure

```text
littlelink/
  .github/workflows/deploy-pages.yml
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  vite.config.js
  src/
    App.jsx
    main.jsx
    index.css
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build locally:

```bash
npm run preview
```

## Deployment

Deployment is configured with GitHub Actions and GitHub Pages.

- Workflow file: .github/workflows/deploy-pages.yml
- Trigger: push to main
- Build output: dist

## Updating Profile Content

Edit the following in src/App.jsx:

- Display name and bio
- Social links
- Brand colors per card
- Icons and icon rendering behavior

## License

MIT
