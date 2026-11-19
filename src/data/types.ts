export interface SocialLink {
  label: string
  href: string
  /** Font Awesome 4 icon class suffix, e.g. "github" -> "fa fa-github" */
  icon: string
  /** Image logo used instead of the Font Awesome icon (for brands FA 4 lacks). */
  iconSrc?: string
}

export interface Profile {
  name: string
  shortName: string
  /** Current role, shown under the name in the hero. */
  headline: string
  /** Smaller line under the headline. */
  previously: string
  valueProp: string
  about: string[]
  location: string
  email: string
  resumeUrl: string
  socials: SocialLink[]
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface ProjectShowcase {
  /** Tall full-page screenshot, shown inside a scrollable browser frame. */
  src: string
  alt: string
  /** Rendered in the frame's mock address bar. */
  url: string
  caption?: string
  /** Shown with the caption on every view, e.g. that the live site is gone. */
  note?: string
  /** Button label for the main capture when `features` are present. */
  label?: string
  /** More full-page captures, switchable by buttons under the frame. */
  features?: { label: string; src: string; url: string; alt: string; caption?: string }[]
}

export interface Project {
  name: string
  tagline: string
  /** Why the project exists. */
  description: string
  /** What it led to; shown before the technical highlights. */
  impact?: string
  highlights: string[]
  tech: string[]
  links: { label: string; href: string }[]
  image?: string
  /** Long-scroll product capture; takes the place of `image` when present. */
  showcase?: ProjectShowcase
  featured?: boolean
}

export interface ExperienceItem {
  role: string
  org: string
  location?: string
  period: string
  summary: string
  points: string[]
  tech?: string[]
  logo?: string
  links?: { label: string; href: string }[]
}

export interface EducationItem {
  school: string
  degree: string
  period: string
  details: string[]
  logo?: string
}
