import type { Profile } from './types'
import resumePdf from '../assets/Kyle_Wen_AIEngineer_Resume.pdf'

export const profile: Profile = {
  name: 'Sheng-Kai (Kyle) Wen',
  shortName: 'Kyle Wen',
  headline: 'AI/ML Engineer · MS Computer Science, UMass Amherst',
  typewriter: [
    'an AI/ML Engineer',
    'building PuckAI',
    'a RAG & LLM systems builder',
    'ex-Honda Research Institute',
  ],
  valueProp:
    'I build LLM and retrieval systems, measure them, and run them in production. I like taking an idea from a research prototype to something people actually use.',
  about: [
    "I'm an AI/ML engineer, and most of my time goes into PuckAI, a hockey analytics platform I founded to give fans and scouts one place to research NHL players and prospects. I build and run it end to end: a RAG chatbot over 7,643 scouting reports, a three-stage XGBoost model that scores prospects, and a LangGraph agent that can search the web and pull highlight videos.",
    'I finished my MS in Computer Science at UMass Amherst in 2026. While there, I joined the Hindsight team at Honda Research Institute & 99P Labs, where we built a codebase understanding system that pairs BM25 with knowledge-graph retrieval so a model can follow code across files.',
    'Before CS, I studied electrical engineering and physics, and co-founded Fan2see, a video platform, in Taiwan. What I enjoy most is shipping something useful, measuring what works, and improving it from there.',
  ],
  quickFacts: [
    'Amherst, MA',
    'MS CS, UMass Amherst (2026)',
    'ML/AI Engineer · Data Scientist · SWE',
  ],
  location: 'Amherst, MA',
  email: 'gorowen56@gmail.com',
  phone: '(413) 362-0001',
  resumeUrl: resumePdf,
  socials: [
    { label: 'GitHub', href: 'https://github.com/shigenogoro', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sheng-kai-wen/',
      icon: 'linkedin',
    },
    { label: 'Email', href: 'mailto:gorowen56@gmail.com', icon: 'envelope' },
  ],
}
