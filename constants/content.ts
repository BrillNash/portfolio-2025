import type { Experience, Hero, Service, Skills } from "./types"

export const tabItems = [
  {
    label: 'Frontend',
  },
  {
    label: 'Backend',
  },
  {
    label: 'Database',
  },
  {
    label: 'Version Control',
  },
]

export const hero: Hero = {
  title_1: "I am Brill Nash",
  title_2: "Software Developer",
  description: "Full-stack developer specializing in Node.js, Java, and Scala. Focused on high-quality apps, faster delivery, and clean code. Agile team player with a track record of optimizing performance.",
  profile_experiece_list: [
    {
      num: "2",
      description: "Years of experience"
    },
    {
      num: "5",
      description: "Projects"
    },
    {
      num: "5",
      description: "Clients"
    }
  ]
}

export const service: Service = {
  title: 'My Quality Services',
  description: "Expert full-stack development with a focus on performance, scalability, and clean architecture. I build robust web and backend solutions using modern frameworks and agile methodologies.",
  services: [
    {
      title: 'Backend Development',
      description: "High-performance APIs and microservices in Node.js, Java, and Scala. Database design (PostgreSQL, MySQL) and ORM integration (Slick, Play Framework). Cloud-ready, scalable architectures with Azure DevOps and GitLab CI/CD.",
    },
    {
      title: 'Frontend Development',
      description: "Dynamic, responsive UIs with Vue, Nuxt, and TailwindCSS/SASS. Type-safe applications using TypeScript and modern build tools (npm/Yarn).",
    },
    {
      title: 'Full-Stack Solutions',
      description: "End-to-end web apps, from RESTful APIs to interactive frontends. Legacy system upgrades (.NET, C#) and performance optimizations.",
    },
    {
      title: 'DevOps & Code Quality',
      description: "Automated pipelines (Git, Azure DevOps) and best-practice testing. Code reviews and refactoring for maintainability.",
    },
  ]
}

export const experience: Experience = {
  title: 'My Experience',
  description: "Full-stack developer specializing in AI-powered solutions, high-performance APIs, and responsive UIs. I build scalable systems with Play Framework, .NET, Vue, and PostgreSQL, while optimizing workflows with Agile, GitLab CI/CD, and testing frameworks.",
  experiences: [
    {
      date: "2024 - Current",
      role: "FULL STACK WEB DEVELOPER",
      company: "Vauldex Technologies",
      job_description: "Developed an AI task suggestion system using OpenAI, enhancing productivity. Built scalable APIs (Play Framework, Slick) and dynamic frontends (Vue 3, Nuxt 3). Ensured reliability with Vitest and optimized PostgreSQL databases."
    },
    {
      date: "2023",
      role: "FULL STACK WEB DEVELOPER",
      company: "Skandenavisk Logistics",
      job_description: "Boosted API performance by refining SQL queries and optimizing .NET backend. Delivered responsive UIs with Vue 2 and streamlined deployments via Azure DevOps."
    },
  ]
}

export const skills: Skills = {
  title: "My Skills",
  description: "Versatile full-stack developer with expertise in JavaScript/TypeScript, Java, Scala, and modern web frameworks like Vue & Nuxt. I build scalable backend systems (Node.js, Play, .NET) and polished frontends (Tailwind, SASS), backed by relational databases (PostgreSQL, MySQL) and CI/CD pipelines (Git, GitHub, Azure DevOps).",
  skills: [
    {
      icon: "devicon:javascript",
      name: "Javascript",
      group: ["Frontend", "Backend"]
    },
    {
      icon: "vscode-icons:file-type-typescript-official",
      name: "Typescript",
      group: ["Frontend", "Backend"]
    },
    {
      icon: "vscode-icons:file-type-html",
      name: "HTML",
      group: ["Frontend"]
    },
    {
      icon: "vscode-icons:file-type-java",
      name: "Java",
      group: ["Backend"]
    },
    {
      icon: "vscode-icons:file-type-scala",
      name: "Scala",
      group: ["Backend"]
    },
    {
      icon: "logos:play",
      name: "Play",
      group: ["Backend"]
    },
    {
      icon: "vscode-icons:file-type-vue",
      name: "Vue",
      group: ["Frontend"],

    },
    {
      icon: "vscode-icons:file-type-nuxt",
      name: "Nuxt",
      group: ["Frontend"],
    },
    {
      icon: "vscode-icons:file-type-tailwind",
      name: "Tailwind",
      group: ["Frontend"],
    },
    {
      icon: "devicon:sass",
      name: "SASS",
      group: ["Frontend"],

    },
    {
      icon: "vscode-icons:file-type-c",
      name: "C",
      group: ["Backend"],

    },
    {
      icon: "vscode-icons:file-type-csharp",
      name: "C#",
      group: ["Backend"],
    },
    {
      icon: "devicon:dotnetcore",
      name: ".NET",
      group: ["Backend"],
    },
    {
      icon: "devicon:mysql-wordmark",
      name: "MYSQL",
      group: ["Database"],
    },
    {
      icon: "devicon:postgresql-wordmark",
      name: "POSTGRESQL",
      group: ["Database"],
    },
    {
      icon: "vscode-icons:file-type-git",
      name: "Git",
      group: ["Version Control"],
    },
    {
      icon: "devicon:github",
      name: "Github",
      group: ["Version Control"],
    },
    {
      icon: "devicon:gitlab",
      name: "Gitlab",
      group: ["Version Control"],
    },
  ]
}