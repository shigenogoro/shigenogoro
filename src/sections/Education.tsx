import { education } from '../data/education'
import Reveal from '../components/Reveal'

const Education = () => (
  <section id="education" className="scroll-mt-20 lg:scroll-mt-24 border-t border-line/10 py-12 md:py-16 lg:py-24">
    <div className="section-shell">
      <Reveal>
        <p className="section-kicker">Education</p>
        <h2 className="section-title">Academic background</h2>
      </Reveal>

      <div className="mt-8 md:mt-12 space-y-6">
        {education.map((edu, i) => (
          <Reveal key={edu.school} delay={i * 0.05}>
            <div className="flex items-start gap-4 rounded-2xl border border-line/10 bg-surface p-6 sm:gap-5 sm:p-8">
              {edu.logo && (
                <img
                  src={edu.logo}
                  alt={`${edu.school} logo`}
                  loading="lazy"
                  className="h-12 w-12 shrink-0 rounded-md bg-white/90 object-contain p-1"
                />
              )}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="font-display text-xl font-bold text-fg">{edu.school}</h3>
                  <span className="font-mono text-sm text-muted">{edu.period}</span>
                </div>
                <p className="mt-1 text-base font-medium text-accent2">{edu.degree}</p>
                <ul className="mt-3 hidden max-w-3xl space-y-2 md:block">
                  {edu.details.map((d) => (
                    <li key={d} className="flex gap-2 text-base leading-relaxed text-body">
                      <span className="text-accent" aria-hidden="true">▹</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Education
