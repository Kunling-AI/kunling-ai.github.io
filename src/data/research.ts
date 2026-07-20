export type ResearchProject = {
  index: string;
  name: string;
  shortName: string;
  subtitle: string;
  overview: string;
  question: string;
  methods: string[];
  githubUrl?: string;
};

export const researchProjects: ResearchProject[] = [
  {
    index: '01',
    name: 'TectonOS',
    shortName: 'AI Co-Scientist Environment for Geodynamics',
    subtitle: 'A harness for AI-assisted geodynamic research.',
    overview:
      'TectonOS is an AI-native research environment that connects scientific questions with agent orchestration, geodynamic solvers, parameter exploration, data processing, visualization, evaluation, and reproducible reporting. The system is being developed around ASPECT, LaMEM, and goSPL, with CLI-first scientific workflows and a supporting web interface.',
    question: 'Can Earth scientists and AI agents work together across the full cycle of geodynamic research—from question formation to simulation, analysis, and reporting?',
    methods: ['Harness Engineering', 'Scientific Agents', 'ASPECT · LaMEM · goSPL', 'Reproducible Workflows'],
    githubUrl: 'https://github.com/Kunling-AI/TectonOS',
  },
  {
    index: '02',
    name: 'GLTitan',
    shortName: 'Global Lithosphere Inversion',
    subtitle: 'Reconstructing global lithospheric thickness through deep time.',
    overview:
      'GLTitan aims to reconstruct a continuous global field of lithospheric thickness from 0–60 Ma. It combines modern geophysical observations, plate boundaries, literature-derived interval constraints, sparse measurements, and geodynamic priors in a physics-aware spatiotemporal inversion framework.',
    question: 'How can local evidence and global physical structure be reconciled in one continuous reconstruction?',
    methods: ['Neural operators', 'Transformers', 'Geophysical inversion', 'Uncertainty modeling'],
  },
  {
    index: '03',
    name: 'Ridge–Climate Coupling',
    shortName: 'Deep Earth–Climate Feedback',
    subtitle: 'Tracing links between sea level, mid-ocean ridges, and climate.',
    overview:
      'This project examines whether glacial sea-level change alters pressure at mid-ocean ridges, mantle melting, volcanism, and hydrothermal circulation—and whether those deep-Earth responses feed back into ocean chemistry, the carbon cycle, and global climate.',
    question: 'Can AI recover deep-Earth process signals from complex and incomplete marine geological records?',
    methods: ['DSDP · ODP · IODP', 'Multimodal learning', 'Time-series analysis', 'Causal inference'],
  },
  {
    index: '04',
    name: 'Eco-Transformer',
    shortName: 'Life–Earth Representation',
    subtitle: 'Learning ecological change across the last 21,000 years.',
    overview:
      'Eco-Transformer brings together Quaternary fossil records, modern biodiversity observations, present-day climate, and paleoclimate simulations. The goal is a unified representation of taxa, time, space, and climate for life–Earth system research.',
    question: 'Can AI learn a continuous representation of how life and environment co-evolved from the Last Glacial Maximum to today?',
    methods: ['Transformers', 'Self-supervised learning', 'Biogeography', 'Paleoecological reconstruction'],
  },
  {
    index: '05',
    name: 'Physics-guided AI Earth Simulator',
    shortName: 'Accelerated Geodynamics',
    subtitle: 'A next-generation simulator for geodynamic evolution.',
    overview:
      'This direction investigates whether AI can replace or accelerate traditional finite-element and finite-difference geodynamic simulations while respecting essential physics. Targets include temperature, velocity, stress, mantle flow, lithospheric deformation, and wave propagation.',
    question: 'How far can a learned Earth simulator accelerate supercomputing without losing physical credibility?',
    methods: ['Neural operators', 'JEPA · Transformers', 'Diffusion models · PINNs', 'Scientific machine learning'],
  },
  {
    index: '06',
    name: 'AI-native Geoscience Visualization',
    shortName: 'Scientific Visual Intelligence',
    subtitle: 'From raw Earth data to publication-quality scientific figures.',
    overview:
      'The platform unifies data input, AI analysis, scientific computing, visualization, and publication-ready output. It is designed to complement established geoscience tools with intelligent workflow orchestration and GPU-accelerated 2D and 3D rendering.',
    question: 'Can a geoscientist move from a scientific instruction to a rigorous, editable, journal-quality figure in one workflow?',
    methods: ['GMT · PyGMT · ParaView', 'Python · C++', 'CUDA · OpenGL · Vulkan', 'LLM-assisted visualization'],
  },
];
