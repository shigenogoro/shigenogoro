import type { EducationItem } from './types'
import umassLogo from '../assets/logo/umass_seal.png'
import nthuLogo from '../assets/logo/nthu_logo.png'
import ndhuLogo from '../assets/logo/ndhu_logo.png'

export const education: EducationItem[] = [
  {
    school: 'University of Massachusetts Amherst',
    degree: 'M.S. in Computer Science (GPA 3.83 / 4.0)',
    period: 'Sep 2024 – May 2026',
    details: [
      'Focus: Retrieval-Augmented Generation, LLMs, Information Retrieval.',
      'AI Researcher (Graduate Extern) at Honda Research Institute & 99P Labs, with Prof. Andrew McCallum.',
    ],
    logo: umassLogo,
  },
  {
    school: 'National Tsing Hua University',
    degree: 'M.S. in Physics',
    period: 'Sep 2020 – Jun 2023',
    details: [
      'Thesis: Study of Epitaxial Growth of TiₓAl₍₁₋ₓ₎N by Plasma-Assisted Molecular Beam Epitaxy.',
    ],
    logo: nthuLogo,
  },
  {
    school: 'National Dong Hwa University',
    degree: 'B.S. in Electrical Engineering, minor in Computer Science',
    period: 'Sep 2016 – Jun 2020',
    details: [
      'First author of an IEDMS 2019 paper on a silver-fungus organic resistive-switching memory device.',
      'Award of Outstanding Academic Performance (ranked 3rd in department); President, NDHU Toastmasters Club.',
    ],
    logo: ndhuLogo,
  },
]
