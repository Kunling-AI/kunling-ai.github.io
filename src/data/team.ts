export type Link = {
  label: string;
  url: string;
};

export type Member = {
  slug: string;
  name: string;
  role?: string;
  affiliation?: string;
  img: string;
  imagePosition?: string;
  summary?: string;
  interests?: string[];
  bio?: string;
  currentFocus?: string;
  slogan?: string;
  links?: Link[];
};

export const leader = {
  name: 'Ze Liu',
  role: 'Principal Investigator · Associate Professor',
  affiliation: 'Ocean University of China · LSlab',
  img: '/assets/team/liu-ze.png',
  email: 'liuze@ouc.edu.cn',
  officialPage: 'https://cmg.ouc.edu.cn/2024/1227/c30164a492019/page.htm',
  bio: 'Dr. Ze Liu develops intelligent numerical methods for marine geology and deep-time Earth system science. His work combines multiscale numerical modeling, machine learning, and data assimilation to reconstruct paleogeomorphology and paleoenvironmental change.',
  interests: [
    'Multiscale numerical modeling',
    'Cross-sphere Earth system interactions',
    'Intelligent data assimilation',
    'Deep-time reconstruction',
  ],
};

export const team: Member[] = [
  {
    slug: 'zhaorui-jiang',
    name: 'Zhaorui (Elijah) Jiang',
    role: 'MPhil Student',
    affiliation: 'Peking University · Monash University',
    img: '/assets/team/zhaorui-jiang.jpg',
    imagePosition: '64% center',
    summary: 'Developing AI-driven scientific software and algorithms for meaningful problems in life science and geoscience.',
    interests: ['AI for Life Science', 'AI for Geoscience', 'Scientific Software', 'Data-driven Discovery'],
    bio: 'Zhaorui works on computational toolkits and intelligent systems that support scientific discovery across life science and geoscience.',
    slogan: 'AI4Science is All You Need',
    links: [
      { label: 'Website', url: 'https://zhaorui-bi.github.io/' },
      { label: 'GitHub', url: 'https://github.com/zhaorui-bi' },
    ],
  },
  {
    slug: 'liu-hanzhang',
    name: 'Hanzhang Liu',
    role: 'PhD Student',
    affiliation: 'Peking University',
    img: '/assets/team/liu-hanzhang.jpg',
    imagePosition: 'center 35%',
    summary: 'Exploring systems that can plan, reason, and act through agentic AI.',
    interests: ['Agentic AI'],
    slogan: 'deep thinking...',
  },
  {
    slug: 'jinshuo-li',
    name: 'Jinshuo (Jensen) Li',
    role: 'Undergraduate Student',
    affiliation: 'Heriot-Watt University · Ocean University of China',
    img: '/assets/team/jinshuo-li.jpg',
    imagePosition: 'center center',
    summary: 'Interested in AI, machine learning, robotics, natural language processing, and agent frameworks for scientific workflows.',
    interests: ['Artificial Intelligence', 'Machine Learning', 'Robotics', 'Natural Language Processing'],
    bio: 'Jinshuo is pursuing a double degree in Robotics and Computer Science and is exploring intelligent agents for scientific software pipelines.',
    links: [
      { label: 'Website', url: 'https://jinshuoli-jensen.github.io/JinshuoLi-Jensen/' },
      { label: 'GitHub', url: 'https://github.com/JinshuoLi-Jensen' },
    ],
  },
  {
    slug: 'chenyou-guo',
    name: 'Chenyou Guo',
    role: 'Undergraduate Student',
    affiliation: 'Heriot-Watt University · Ocean University of China',
    img: '/assets/team/chenyou-guo.jpg',
    imagePosition: 'center 24%',
    summary: 'Building intelligent systems that reason over scientific domains, with an emphasis on robust multimodal learning.',
    interests: ['Domain-Specific LLMs', 'AI for Science', 'Computer Vision', 'High-Performance Computing'],
    bio: 'Chenyou focuses on domain adaptation, expert-level evaluation, multimodal reasoning, and the research infrastructure needed for reproducible AI experiments.',
    links: [{ label: 'Website', url: 'https://yslcota.github.io/' }],
  },
  {
    slug: 'liu-haoyang',
    name: 'Haoyang Liu',
    role: 'Undergraduate Student',
    affiliation: 'Heriot-Watt University · Ocean University of China',
    img: '/assets/team/liu-haoyang.jpg',
    imagePosition: 'center 28%',
    summary: 'Exploring AI for science, algorithm research, and game development.',
    interests: ['AI for Science', 'Algorithm Research', 'Game Development', 'JEPA'],
    currentFocus: 'Investigating how JEPA architectures can accelerate simulations in the traditional numerical modeling software ASPECT.',
    slogan: 'Per Aspera Ad Astra',
    links: [{ label: 'GitHub', url: 'https://github.com/Fire-Phoenixs' }],
  },
  {
    slug: 'yiran-xu',
    name: 'Yiran Xu',
    role: 'Undergraduate Student',
    affiliation: 'Heriot-Watt University · Ocean University of China',
    img: '/assets/team/yiran-xu.jpg',
    imagePosition: 'center 42%',
    summary: 'Researching intelligent geoscience visualization with AI and high-performance computing.',
    interests: ['Geoscience Visualization', 'Artificial Intelligence', 'High-Performance Computing'],
    bio: 'Yiran studies how complex Earth science data can be represented more clearly and how publication-quality figures can be produced more efficiently.',
  },
];
