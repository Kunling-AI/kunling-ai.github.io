export type ResearchProject = {
  index: string;
  name: string;
  shortName: string;
  subtitle: string;
  overview: string;
  question: string;
  methods: string[];
};

export const researchProjects: ResearchProject[] = [
  {
    index: '01',
    name: 'TectonOS',
    shortName: 'AI Geodynamics Assistant',
    subtitle: 'An AI-driven research assistant for geodynamic simulation.',
    overview:
      'TectonOS connects LLM agents, scientific computing, geodynamic solvers, automated visualization, and reproducible workflows. A researcher describes a scientific question; the system helps decompose it, select a physical model, generate parameters, run simulations, and interpret the results.',
    question: 'Can AI help scientists complete the full geodynamic simulation workflow?',
    methods: ['LLM agents', 'ASPECT · LaMEM · goSPL', 'Docker · HPC', 'PyVista · ParaView'],
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
