/**
 * Every string below is transcribed from CV_Renato_Baeza_ENG.pdf.
 * Rarity tiers and stat values are presentation choices layered on top of it.
 */

export type Tier = "common" | "rare" | "epic" | "legendary"

export const player = {
  name: "Renato Baeza",
  handle: "RenatoBaeza",
  title: "Product & Analytics Leader",
  classLabel: "Product / Data / AI",
  location: "Santiago, Chile",
  email: "rntbzbg@gmail.com",
  phone: "(+569) 7667 6748",
  github: "https://github.com/RenatoBaeza",
  linkedin: "https://linkedin.com/in/renatobaeza",
  careerStart: 2016,
  yearsInField: 8,
  bio: "Product and Analytics Leader with over 8 years of experience building digital products for international clients, using data to improve user experiences and drive business impact. Specialized in product management, data engineering, data science, and AI automation. Experienced in designing cloud analytics ecosystems, ELT/ETL pipelines, experimentation strategies, and AI-powered workflows. Advanced proficiency in SQL and Python, with deep technical understanding of software architecture.",
}

/** Self-assessed attribute spread, RPG-style. */
export const stats: { label: string; value: number; note: string }[] = [
  {
    label: "Product Strategy",
    value: 92,
    note: "Roadmaps, P&L ownership, data-informed strategy",
  },
  {
    label: "Data & Analytics",
    value: 95,
    note: "Advanced SQL & Python, full ELT lifecycle on Cloud",
  },
  {
    label: "AI & Automation",
    value: 88,
    note: "Claude Code, Claude Design, local LLM models",
  },
  {
    label: "Engineering",
    value: 82,
    note: "React, NodeJS, FastAPI, software architecture",
  },
  {
    label: "Leadership",
    value: 90,
    note: "KPI ownership, cross-team delivery, mentoring",
  },
  {
    label: "UX & Design",
    value: 78,
    note: "Wireframing in Figma, UX flows in Miro",
  },
]

export type Quest = {
  org: string
  role: string
  period: string
  duration: string
  years: number
  tier: Tier
  summary: string
  objectives: string[]
  loot: string[]
}

export const quests: Quest[] = [
  {
    org: "The LiveOps Guild",
    role: "Product & Analytics Lead",
    period: "Feb '25 – Jul '26",
    duration: "1.5 years",
    years: 1.5,
    tier: "legendary",
    summary:
      "Entrepreneurship. Bringing product and analytics best practices to international clients.",
    objectives: [
      "Define and execute data-informed strategies for international clients",
      "Create business impact through true KPI ownership",
      "Run the full analytics lifecycle with ELT on Cloud",
    ],
    loot: ["ELT on Cloud", "KPI Ownership", "Client Strategy"],
  },
  {
    org: "Gala Games",
    role: "Product Manager",
    period: "Oct '23 – Feb '25",
    duration: "1.5 years",
    years: 1.5,
    tier: "epic",
    summary: "Owned the P&L for multiple digital products.",
    objectives: [
      "Own the P&L across multiple digital products",
      "Use analytics to implement features that improve KPI",
      "Lift user experiences and business outcomes",
    ],
    loot: ["P&L Ownership", "Feature Analytics", "Live Products"],
  },
  {
    org: "Globant",
    role: "Product Manager",
    period: "Oct '20 – Oct '23",
    duration: "3 years",
    years: 3,
    tier: "epic",
    summary:
      "Defined, executed and measured the performance of the content Roadmap for several digital products.",
    objectives: [
      "Own the content Roadmap for DC Legends (WB Games)",
      "Ship content for NFL Clash / NBA Clash (Nifty Games)",
      "Deliver AEW: Figure Fighters (Turner Sports)",
    ],
    loot: ["Content Roadmap", "Live Ops", "AAA Licenses"],
  },
  {
    org: "Globant",
    role: "Data Analyst",
    period: "Aug '18 – Oct '20",
    duration: "2 years",
    years: 2,
    tier: "rare",
    summary:
      "Actively generated actionables for digital products using Data Science tools.",
    objectives: [
      "Turn product data into actionables for digital products",
      "Build analysis with Python and SQL",
    ],
    loot: ["Python", "SQL", "Data Science"],
  },
  {
    org: "Hasbro",
    role: "Commercial Assistant",
    period: "May '16 – May '18",
    duration: "2 years",
    years: 2,
    tier: "rare",
    summary: "Acted as Key Account Manager for department stores.",
    objectives: [
      "Manage the client's sales operations and inventory",
      "Collaborate with Brand Managers on promotional strategies",
      "Cover physical retail points and digital platforms",
    ],
    loot: ["Key Accounts", "Retail Ops", "Brand Strategy"],
  },
]

/** Shipped titles from the Globant roadmap years. */
export const shippedTitles = [
  { title: "DC Legends", studio: "WB Games", tag: "RPG" },
  { title: "NFL Clash", studio: "Nifty Games", tag: "Sports" },
  { title: "NBA Clash", studio: "Nifty Games", tag: "Sports" },
  { title: "AEW: Figure Fighters", studio: "Turner Sports", tag: "Fighting" },
]

export type SkillGroup = {
  id: string
  label: string
  blurb: string
  skills: { name: string; tier: Tier }[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: "data",
    label: "Data",
    blurb: "Warehouse, lakehouse and the pipelines between them.",
    skills: [
      { name: "SQL", tier: "legendary" },
      { name: "Python", tier: "legendary" },
      { name: "ELT / ETL Pipelines", tier: "epic" },
      { name: "BigQuery", tier: "epic" },
      { name: "AWS", tier: "epic" },
      { name: "Microsoft Fabric", tier: "rare" },
      { name: "Looker", tier: "epic" },
      { name: "Power BI", tier: "epic" },
      { name: "Excel & Office Suite", tier: "rare" },
    ],
  },
  {
    id: "ai",
    label: "AI",
    blurb: "State-of-the-art tooling, plus models that run locally.",
    skills: [
      { name: "Claude Code", tier: "legendary" },
      { name: "Claude Design", tier: "epic" },
      { name: "AI-Powered Workflows", tier: "epic" },
      { name: "Local LLM Models", tier: "rare" },
      { name: "AI Automation", tier: "epic" },
    ],
  },
  {
    id: "product",
    label: "Product",
    blurb: "From discovery through to the KPI that proves it worked.",
    skills: [
      { name: "Product Management", tier: "legendary" },
      { name: "Roadmapping", tier: "epic" },
      { name: "Experimentation", tier: "epic" },
      { name: "KPI Ownership", tier: "epic" },
      { name: "Figma", tier: "rare" },
      { name: "Miro", tier: "rare" },
    ],
  },
  {
    id: "engineering",
    label: "Engineering",
    blurb: "Enough depth to build it, not just spec it.",
    skills: [
      { name: "Software Architecture", tier: "epic" },
      { name: "JavaScript", tier: "rare" },
      { name: "React", tier: "rare" },
      { name: "NodeJS", tier: "rare" },
      { name: "FastAPI", tier: "rare" },
    ],
  },
]

export type Achievement = {
  name: string
  detail: string
  source: string
  year: string
  tier: Tier
}

export const achievements: Achievement[] = [
  {
    name: "Academic Excellence Circle",
    detail: "Class of 2017",
    source: "University of Chile",
    year: "2017",
    tier: "legendary",
  },
  {
    name: "Teaching Assistant",
    detail: "Calculus, International Business, Strategic Operations Management",
    source: "University of Chile",
    year: "",
    tier: "epic",
  },
  {
    name: "Bilingual English",
    detail: "TOEFL 105 / 120",
    source: "TOEFL",
    year: "Aug '17",
    tier: "epic",
  },
  {
    name: "SQL & Python for Data Science",
    detail: "Certified",
    source: "DataCamp",
    year: "",
    tier: "epic",
  },
  {
    name: "Full Stack JavaScript",
    detail: "React, NodeJS and FastAPI",
    source: "DesafíoLatam",
    year: "",
    tier: "rare",
  },
]

export type Education = {
  school: string
  program: string
  focus: string
  period: string
  status: string
}

export const education: Education[] = [
  {
    school: "UC Chile",
    program: "MSc in Technology",
    focus: "Artificial Intelligence for Business",
    period: "2025 – 2027",
    status: "Candidate",
  },
  {
    school: "Universidad del Desarrollo",
    program: "Data Science Diploma",
    focus: "Python for Machine Learning",
    period: "Fall 2022",
    status: "Completed",
  },
  {
    school: "University of Chile",
    program: "BSc Business Administration",
    focus: "Academic Excellence Circle, Class of 2017",
    period: "2012 – 2016",
    status: "Completed",
  },
]

export type SideQuest = {
  name: string
  blurb: string
  href?: string
  tier: Tier
  stack: string[]
}

export const sideQuests: SideQuest[] = [
  {
    name: "Dividir.cl",
    blurb:
      "AI web app that automates splitting restaurant checks. Point it at the bill, it works out who owes what.",
    href: "https://dividir.cl",
    tier: "legendary",
    stack: ["AI", "Web App", "Automation"],
  },
]
