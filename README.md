# Sheng-Kai (Kyle) Wen — Portfolio

A single-page portfolio for an AI/ML Engineer job search, hosted on GitHub Pages:
**https://shigenogoro.github.io/profile/**

## About me

I'm an AI/ML Engineer with an MS in Computer Science from UMass Amherst (2026). I build LLM and
retrieval systems, measure them, and run them in production. Right now I'm building
[PuckAI](https://www.thepuckai.com/), a live NHL analytics product with a RAG scouting chat and a
LangGraph agent on top of it. Before that I worked on code retrieval for large repositories at Honda
Research Institute & 99P Labs with Prof. Andrew McCallum. I came to CS after an MS in Physics and a
BS in Electrical Engineering.

- 📍 Amherst, MA
- 🔗 [LinkedIn](https://www.linkedin.com/in/sheng-kai-wen/) · [GitHub](https://github.com/shigenogoro)
- ✉️ gorowen56@gmail.com

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

- `src/data/` — typed content (profile, skills, projects, experience, education)
- `src/sections/` — page sections (Hero, About, Skills, Projects, Experience, Education, Contact)
- `src/components/` — shared UI (Navbar, ProjectCard, TimelineItem, ThemeToggle, …)

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to
GitHub Pages (Settings → Pages → Source = **GitHub Actions**).
