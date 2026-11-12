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
    'I earned my MS in Computer Science from UMass Amherst in 2026. At Honda Research Institute & 99P Labs I worked with Prof. Andrew McCallum on code retrieval for large repositories: a knowledge graph built from the AST, searched together with BM25, so a model can find code across files.',
    'Right now I am building PuckAI, a live hockey analytics product I built and run on my own. It tiers and projects NHL skaters across five decades (6,184 players, 54,933 scored prospects), publishes 7,643 scouting reports that each pass a deterministic validator, and answers questions through a hybrid RAG chat I measured end to end. This fall I turned that chat into a LangGraph agent that can search the web and pull highlight videos. Before PuckAI I co-founded Fan2see, a video platform built on PERN and AWS, and at UMass I built a multi-agent RAG filtering pipeline and a timestamp-aligned summarization pipeline.',
    'My path is a little unusual: an MS in Physics and a BS in Electrical Engineering before CS.',
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
