import { skills } from '../data/skills'
import Reveal from '../components/Reveal'

const Skills = () => (
  <section id="skills" className="scroll-mt-20 lg:scroll-mt-24 border-t border-line/10 py-12 md:py-16 lg:py-24">
    <div className="section-shell">
      <Reveal>
        <p className="section-kicker">Skills</p>
        <h2 className="section-title">Tech stack</h2>
      </Reveal>

      <Reveal delay={0.05}>
        <dl className="mt-8 md:mt-12 divide-y divide-line/10 border-y border-line/10">
          {skills.map((group) => (
            <div
              key={group.category}
              className="grid gap-3 py-4 md:py-6 sm:grid-cols-[13rem_1fr] sm:gap-8"
            >
              <dt className="pt-1 font-display text-lg font-bold text-fg">
                {group.category}
              </dt>
              <dd className="flex flex-wrap gap-2 md:gap-2.5">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  </section>
)

export default Skills
