import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-20 lg:scroll-mt-24 border-t border-line/10 py-12 md:py-16 lg:py-24">
      <div className="section-shell">
        <Reveal>
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">Featured projects</h2>
        </Reveal>

        <div className="mt-8 md:mt-12 space-y-8">
          {projects.map((project) => (
            <Reveal key={project.name}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
