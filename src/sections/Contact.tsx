import { profile } from '../data/profile'
import SocialLinks from '../components/SocialLinks'
import Reveal from '../components/Reveal'

const Contact = () => (
  <section id="contact" className="scroll-mt-20 lg:scroll-mt-24 border-t border-line/10 py-12 md:py-16 lg:py-24">
    <div className="section-shell text-center">
      <Reveal>
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">Let&apos;s talk</h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-body lg:text-lg">
          Open to conversations about ML/AI engineering and software roles or
          collaborations. Email is the fastest way to reach me.
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block rounded-full bg-accent px-7 py-3 text-base font-semibold text-ink-950 transition hover:bg-accent-soft"
        >
          {profile.email}
        </a>
      </Reveal>

      <Reveal delay={0.1}>
        <SocialLinks className="mt-10 justify-center" size="lg" />
      </Reveal>
    </div>
  </section>
)

export default Contact
