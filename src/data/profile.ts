import type { Profile } from './types'
import resumePdf from '../assets/Kyle_Wen_AIEngineer_Resume.pdf'

export const profile: Profile = {
  name: 'Sheng-Kai (Kyle) Wen',
  shortName: 'Kyle Wen',
  headline: 'Software Engineer, Hockey Operations · Detroit Red Wings',
  previously: 'Previously founder of PuckAI · MS CS, UMass Amherst',
  valueProp:
    'I like solving real-world problems. I build LLM and retrieval products end to end, and I benchmark every change before it ships.',
  about: [
    "I'm an AI/ML engineer. I recently joined the Detroit Red Wings as a software engineer in Hockey Operations. My last project was PuckAI, an NHL analytics site I founded for fans and scouts.",
    'I finished my MS in Computer Science at UMass Amherst in 2026. During the program I did research with Honda Research Institute & 99P Labs on whether a knowledge graph can help an LLM understand a large codebase. Our system, Hindsight, combines BM25 with graph traversal over the repository and builds on LocAgent.',
    'My first degrees were in electrical engineering and physics, and I co-founded Fan2see, a video platform, while studying in Taiwan. I live in Amherst, MA.',
  ],
  location: 'Amherst, MA',
  email: 'gorowen56@gmail.com',
  resumeUrl: resumePdf,
  socials: [
    { label: 'GitHub', href: 'https://github.com/shigenogoro', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sheng-kai-wen/',
      icon: 'linkedin',
    },
    {
      label: 'LeetCode',
      href: 'https://leetcode.com/u/gorowen56/',
      icon: 'code',
      iconSrc: `${import.meta.env.BASE_URL}leetcode.svg`,
    },
    { label: 'Email', href: 'mailto:gorowen56@gmail.com', icon: 'envelope' },
  ],
}
