import { profile } from '../data/profile'
import Reveal from '../components/Reveal'

const About = () => (
  <section id="about" className="scroll-mt-20 lg:scroll-mt-24 py-12 md:py-16 lg:py-24">
    <div className="section-shell">
      <Reveal>
        <p className="section-kicker">About</p>
        <h2 className="section-title">A bit about me</h2>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 md:mt-12 max-w-3xl space-y-5 text-base leading-relaxed text-body lg:text-lg">
          {profile.about.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
)

export default About
