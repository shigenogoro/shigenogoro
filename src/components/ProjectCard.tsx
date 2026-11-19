import type { Project } from '../data/types'
import ShowcaseFrame from './ShowcaseFrame'

/** Chips are desktop-only: on phones the card ends at the result and link. */
const Chips = ({ tech }: { tech: string[] }) => (
  <div className="hidden flex-wrap gap-2 md:flex">
    {tech.map((t) => (
      <span key={t} className="chip">
        {t}
      </span>
    ))}
  </div>
)

const Links = ({ links }: { links: Project['links'] }) =>
  links.length > 0 ? (
    <div className="flex flex-wrap gap-x-5 gap-y-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 py-1 text-base font-semibold text-accent2 transition hover:text-accent"
        >
          {link.label}
          <span aria-hidden="true">→</span>
        </a>
      ))}
    </div>
  ) : null

/** Why, result, then the technical bullets: the order every project card reads in. */
const Story = ({ project, bulletsOnPhone }: { project: Project; bulletsOnPhone: boolean }) => (
  <div className="max-w-3xl space-y-4 text-base leading-relaxed text-body">
    <p>{project.description}</p>
    {project.impact && <p>{project.impact}</p>}
    {project.highlights.length > 0 && (
      <ul className={`space-y-2.5 pt-1 ${bulletsOnPhone ? '' : 'hidden md:block'}`}>
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2.5">
            <span className="text-accent" aria-hidden="true">▹</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
)

const cardClass =
  'group overflow-hidden rounded-2xl border border-line/10 bg-surface transition hover:border-accent/40 hover:shadow-glow'

const ProjectCard = ({ project }: { project: Project }) => {
  if (!project.featured) {
    // Full-width row: identity on the left third, the story on the right.
    // On mobile it stacks, with the link moved to the end of the card.
    return (
      <article
        className={`${cardClass} grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_2fr] md:grid-rows-[auto_1fr] md:gap-x-10`}
      >
        <div className="space-y-4">
          <div>
            <h3 className="font-display text-2xl font-bold leading-snug text-fg">{project.name}</h3>
            <p className="mt-2 text-base font-medium leading-snug text-accent2">{project.tagline}</p>
          </div>
          <Chips tech={project.tech} />
        </div>
        <div className="md:col-start-2 md:row-span-2 md:row-start-1">
          <Story project={project} bulletsOnPhone={false} />
        </div>
        <div className="md:col-start-1 md:row-start-2 md:self-end">
          <Links links={project.links} />
        </div>
      </article>
    )
  }

  return (
    <article className={`${cardClass} flex flex-col md:flex-row`}>
      {project.showcase && <ShowcaseFrame showcase={project.showcase} />}

      <div className="flex flex-col gap-5 p-6 sm:p-8 md:w-1/2">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-2xl font-bold text-fg">{project.name}</h3>
            <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-accent">
              Featured
            </span>
          </div>
          <p className="mt-2 text-base font-medium leading-snug text-accent2">{project.tagline}</p>
        </div>
        <Story project={project} bulletsOnPhone />
        <div className="mt-auto pt-1 md:space-y-4">
          <Chips tech={project.tech} />
          <Links links={project.links} />
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
