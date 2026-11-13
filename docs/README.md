# Portfolio site: development notes

The portfolio is a single-page site hosted on GitHub Pages:
**https://shigenogoro.github.io/shigenogoro/**

## Tech stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** (dark mode default)
- **Framer Motion** for scroll-reveal animation
- **typewriter-effect** in the hero

## Develop

```bash
npm install
npm run dev        # local dev server
npm run build      # type-check + production build
npm run preview    # preview the production build
npm run lint       # ESLint
```

## Structure

- `src/data/`: typed content (profile, skills, projects, experience, education)
- `src/sections/`: page sections (Hero, About, Skills, Projects, Experience, Education, Contact)
- `src/components/`: shared UI (Navbar, ProjectCard, TimelineItem, ThemeToggle, and so on)

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to
GitHub Pages (Settings → Pages → Source = **GitHub Actions**).
