# Portfolio + Littlelink Monorepo

This repository now separates the personal portfolio and the React littlelink app into dedicated folders.

## Live Portfolio

- GitHub Pages (portfolio): https://bakareolamilekan365-tech.github.io/littlelink/

## Repository Structure

```text
.
  .github/
    workflows/
      deploy-pages.yml
  portfolio/
    index.html
    page2.css
    profile-photo.png
    assets/
  littlelink/
    index.html
    package.json
    package-lock.json
    postcss.config.js
    tailwind.config.js
    vite.config.js
    styles.css
    src/
      App.jsx
      main.jsx
      index.css
```

## What Deploys to GitHub Pages

The GitHub Pages workflow deploys the `portfolio/` folder directly.

- Workflow: `.github/workflows/deploy-pages.yml`
- Trigger: push to `main`
- Published path: `portfolio`

## Local Development (Littlelink App)

From the `littlelink/` folder:

```bash
cd littlelink
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## License

MIT
