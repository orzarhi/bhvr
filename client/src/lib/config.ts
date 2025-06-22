import { Blocks, BringToFront, GitPullRequest } from 'lucide-react';

import { Brain, BookOpenCheck, Bot, User } from 'lucide-react';

export const CARDS = [
  {
    value: '1',
    icon: Bot,
    title: 'AI Learning Agents',
    description:
      'Receive personalized explanations from visual, verbal, interactive, and adaptive AI agents.',
  },
  {
    value: '2',
    icon: BookOpenCheck,
    title: 'Multi-Modal Answers',
    description:
      'Explore every concept through diagrams, quizzes, and real-world examples tailored to your learning style.',
  },
  {
    value: '3',
    icon: User,
    title: 'Built Around You',
    description:
      'Zarhinio learns how *you* learn — adapting content based on your preferences and feedback.',
  },
  {
    value: '4',
    icon: Brain,
    title: 'Smarter with Every Question',
    description:
      'Every question you ask helps Zarhinio refine future responses for deeper, faster learning.',
  },
];

export const AVATARS = [
  {
    src: 'https://pbs.twimg.com/profile_images/1909615404789506048/MTqvRsjo_400x400.jpg',
    fallback: 'SK',
    tooltip: 'Skyleen',
  },
  {
    src: 'https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg',
    fallback: 'CN',
    tooltip: 'Shadcn',
  },
  {
    src: 'https://pbs.twimg.com/profile_images/1677042510839857154/Kq4tpySA_400x400.jpg',
    fallback: 'AW',
    tooltip: 'Adam Wathan',
  },
  {
    src: 'https://pbs.twimg.com/profile_images/1783856060249595904/8TfcCN0r_400x400.jpg',
    fallback: 'GR',
    tooltip: 'Guillermo Rauch',
  },
  {
    src: 'https://pbs.twimg.com/profile_images/1534700564810018816/anAuSfkp_400x400.jpg',
    fallback: 'JH',
    tooltip: 'Jhey',
  },
];
