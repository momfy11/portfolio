# Developer Portfolio

A dark, responsive developer portfolio built with React, TypeScript and Vite.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a GitHub repository for this project (for example `portfolio`).
2. Push the contents of this folder to the repository's `main` branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions**.
5. The workflow in `.github/workflows/deploy.yml` will build and publish the site after each push to `main`.
6. Your site will be available at `https://momfy11.github.io/portfolio/` (if the repository is named `portfolio`).

The Vite config uses a relative base path so it can be hosted under a repository path.

## Before publishing

- Add your professional email in the contact section of `src/App.tsx`.
- Replace the LinkedIn placeholder with your actual profile URL.
- Verify each project description and technology list.
- Add approved screenshots or demo links where available.
- Add a PDF CV under `public/` and link it from the hero or contact section if desired.
- Review the internship description to ensure it does not disclose confidential product information.
