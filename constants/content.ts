import type { Experience, Hero, Projects, Service, Skills } from "./types"

export const tabItems = [
  {
    label: "Frontend",
  },
  {
    label: "Backend",
  },
  {
    label: "Database",
  },
  {
    label: "Version Control",
  },
]

export const headerItems = [
  {
    label: 'Home',
    icon: 'uil:home-alt',
    id: 'home',
  },
  {
    label: 'Projects',
    icon: 'uil:folder-open',
    id: 'projects',
  },
  {
    label: 'Services',
    icon: 'uil:wrench',
    id: 'services',
  },
  {
    label: 'Experience',
    icon: 'uil:star',
    id: 'experience',
  },
  {
    label: 'Skills',
    icon: 'uil:lightbulb-alt',
    id: 'skills',
  },
]

export const hero: Hero = {
  title_1: "I am Brill Nash",
  title_2: "Software Developer",
  description: "Full-stack developer specializing in Node.js, Java, and Scala. Focused on high-quality apps, faster delivery, and clean code. Agile team player with a track record of optimizing performance.",
  links: [
    {
      icon: "uil:linkedin",
      link: "https://www.linkedin.com/in/brill-nash-piner-a91947235/",
    },
    {
      icon: "uil:facebook",
      link: "https://www.facebook.com/itsmeNash/",
    },
    {
      icon: "uil:instagram",
      link: "https://www.instagram.com/nashthoughts23/",
    },
    {
      icon: "uil:discord",
      link: "https://www.discordapp.com/users/nashqt_",
    },
  ],
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
  title: "My Quality Services",
  description: "Expert full-stack development with a focus on performance, scalability, and clean architecture. I build robust web and backend solutions using modern frameworks and agile methodologies.",
  services: [
    {
      title: "Backend Development",
      description: "High-performance APIs and microservices in Node.js, Java, and Scala. Database design (PostgreSQL, MySQL) and ORM integration (Slick, Play Framework). Cloud-ready, scalable architectures with Azure DevOps and GitLab CI/CD.",
    },
    {
      title: "Frontend Development",
      description: "Dynamic, responsive UIs with Vue, Nuxt, and TailwindCSS/SASS. Type-safe applications using TypeScript and modern build tools (npm/Yarn).",
    },
    {
      title: "Full-Stack Solutions",
      description: "End-to-end web apps, from RESTful APIs to interactive frontends. Legacy system upgrades (.NET, C#) and performance optimizations.",
    },
    {
      title: "DevOps & Code Quality",
      description: "Automated pipelines (Git, Azure DevOps) and best-practice testing. Code reviews and refactoring for maintainability.",
    },
  ]
}

export const experience: Experience = {
  title: "My Experience",
  description: "Full-stack developer specializing in AI-powered solutions, high-performance APIs, and responsive UIs. I build scalable systems with Play Framework, .NET, Vue, and PostgreSQL, while optimizing workflows with Agile, GitLab CI/CD, and testing frameworks.",
  experiences: [
    {
      date: "February, 2024 - Present • (1 yrs 3 mos)",
      role: "FULL STACK WEB DEVELOPER",
      company: "Vauldex Technologies",
      job_description: "Developed an AI task suggestion system using OpenAI, enhancing productivity. Built scalable APIs (Play Framework, Slick) and dynamic frontends (Vue 3, Nuxt 3). Ensured reliability with Vitest and optimized PostgreSQL databases."
    },
    {
      date: "April, 2022 - November, 2022 • (8 mos)",
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

export const projects: Projects = {
  title: "My Projects",
  description: "These represent my key development achievements from recent years. Each project showcases my full-stack capabilities - from AI-powered features to optimized database solutions and responsive interfaces. I've combined cutting-edge technologies with clean architecture principles to deliver robust, scalable applications that solve real-world problems.",
  projects: [
    {
      name: "Clock Me",
      description: "An intelligent time-tracking system featuring AI task suggestions (OpenAI integration), real-time activity monitoring, and customizable task tables. Built with Vue 3, Nuxt 3, and PostgreSQL, optimized with Play Framework for seamless performance.",
      file: "/images/clockme-timestamps.png",
      tech_stack: "Typescript, Nuxt 3, Scala, Play, PostgreSQL",
      features: [
        {
          feature_name: "Ai task suggestion",
          description: "Created Ai task suggestion feature that will suggest new tasks for the user or will remind the user of his tasks that are high in priority and are past due to their end date",
          file: "/images/clockme-ai.png",
        },
        {
          feature_name: "Activity tracker",
          description: "Help develop an inhouse time/activity tracker that helps employees track their time and activities in work hours.",
          file: "/images/clockme-timestamps.png",
        },
        {
          feature_name: "Custom table for user tasks",
          description: "Create a task table feature that can freely edit his/her tasks, set priorities, due dates and others",
          file: "/images/clockme-tasks.png",
        },
      ]
    },
    {
      name: "MPAT SURVEY 2025",
      description: "MPAT Survey 2025 is an event management platform for Japanese students, built with Nuxt 3 (frontend) and Nuxt Nitro (backend API), that verifies attendance, tracks applicant-to-attendee conversion, and collects optional post-event surveys - all powered by a PostgreSQL database for reliable data tracking and analytics.",
      file: "/images/mpat-signup.png",
      tech_stack: "Typescript, Nuxt 3, Nuxt Nitro, PostgreSQL",
      features: [
        {
          feature_name: "User signup",
          description: "This features allows users to register for our application in preparation for their upcoming event",
          file: "/images/mpat-signup.png",
        },
        {
          feature_name: "Statistics graphs",
          description: "This feature allows admins to keep track of the statistics of our application. This includes people who attended the event, who answered our survey and others.",
          file: "/images/mpat-graph.png",
        },
        {
          feature_name: "Applications table",
          description: "This feature allows admin to see data from users who applied, edit their attendance records, show their qr codes.",
          file: "/images/mpat-table.png",
        },
      ]
    },
  ]
}