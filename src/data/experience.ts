import type { ExperienceItem } from './types'
import puckaiLogo from '../assets/logo/puckai_logo.png'
import hriLogo from '../assets/logo/Honda_99PLabs_logo.png'
import fan2seeLogo from '../assets/logo/fan2see_logo.png'
import redWingsLogo from '../assets/logo/red_wings_logo.svg'

export const experience: ExperienceItem[] = [
  {
    role: 'Full-Stack Software Engineer, Hockey Operations',
    org: 'Detroit Red Wings',
    location: 'Detroit, MI · Remote',
    period: 'Nov 2026 – Present',
    logo: redWingsLogo,
    summary: 'Internal software for Hockey Operations.',
    points: [],
  },
  {
    role: 'Founder & AI/ML Engineer',
    org: 'PuckAI',
    location: 'Amherst, MA',
    period: 'May 2025 – Nov 2026',
    logo: puckaiLogo,
    summary:
      'Founded and ran PuckAI, a public NHL analytics site for fans and scouts. I was the only engineer: data, models, product, deployment, and the LLM bill.',
    points: [
      'Prospect model: three-stage XGBoost trained on 481,000 pre-NHL seasons. It scored 54,933 prospects on their odds of reaching the NHL (ROC-AUC 0.977) and the tier they would land in.',
      'Scout Agent: a RAG chat over 7,643 scouting reports that grew into a LangGraph agent with web search and highlight videos. On my benchmarks, ranking quality rose 42% and answers about the wrong player went from 9 to 0.',
      'Player and team pages: era-adjusted tiers for 6,184 NHL skaters, similar-player search, and head-to-head comparison.',
      'Cold-emailed it to the Detroit Red Wings and demoed it in my interviews.',
    ],
    links: [
      {
        label: 'Engineering write-up',
        href: 'https://github.com/shigenogoro/PuckAI-Engineering',
      },
    ],
  },
  {
    role: 'AI Researcher (Extern)',
    org: 'Honda Research Institute (HRI) & 99P Labs',
    location: 'Amherst, MA',
    period: 'Feb 2026 – May 2026',
    logo: hriLogo,
    summary:
      'Graduate externship on Hindsight, a code retrieval layer for large repositories, in a team of four.',
    points: [
      'Hindsight combines BM25 with graph traversal over a repository graph built from the code’s AST. With Qwen3-32B it put the right file first on 53.5% of DeepCodeBench questions, 8.1 points ahead of BM25.',
      'I built the evaluation: Fact Recall, Acc@k at file, module, and function level, and LLM-judged answers. Then I ran the ablations across Llama-3.1-8B, Qwen3-8B, and Qwen3-32B on DeepCodeBench and LocBench.',
      'I also built a LocAgent-based layer that links a failing test to the source code responsible for it.',
    ],
    links: [
      {
        label: 'Blog: Hindsight on 99P Labs',
        href: 'https://medium.com/99p-labs/hindsight-a-knowledge-graph-layer-for-navigating-large-codebases-6acf331c1766',
      },
    ],
  },
  {
    role: 'Co-Founder & Full-Stack Engineer',
    org: 'Fan2see',
    location: 'Taipei, Taiwan',
    period: 'Apr 2021 – Apr 2022',
    logo: fan2seeLogo,
    summary:
      'Co-founded a platform where fans could order personalized video messages from celebrities.',
    points: [
      'Launched the first version on Bubble.io, then rebuilt it on React, Node.js, Express, and PostgreSQL once it outgrew no-code.',
      'Cut media-processing time 25% by moving transforms into an async AWS Lambda/S3 pipeline, and grew to hundreds of active users at about 30% month over month.',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
]
