import type { Experience, Hero, Service, Skills } from "./types"

export const hero: Hero = {
  title_1: "I am Brill Nash",
  title_2: "Software Developer",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam quas, quis labore natus odit sunt dicta est, quia obcaecati nesciunt provident quo. Quos quam ducimus aperiam ipsa dolores reiciendis.",
  profile_experiece_list: [
    {
      num: "3",
      description: "Years of experience"
    },
    {
      num: "50+",
      description: "Projects"
    },
    {
      num: "1.5k",
      description: "Clients"
    }
  ]

}

export const service: Service = {
  title: 'My Quality Services',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam quas, quis labore natus odit sunt dicta est, quia obcaecati nesciunt provident quo. Quos quam ducimus aperiam ipsa dolores reiciendis.",
  services: [
    {
      title: 'Branding Design',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam quas, quis labore natus odit sunt dicta est, quia obcaecati nesciunt provident quo. Quos quam ducimus aperiam ipsa dolores reiciendis.",
    },
    {
      title: 'UI/UX Design',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam quas, quis labore natus odit sunt dicta est, quia obcaecati nesciunt provident quo. Quos quam ducimus aperiam ipsa dolores reiciendis.",
    },
    {
      title: 'Web Design',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam quas, quis labore natus odit sunt dicta est, quia obcaecati nesciunt provident quo. Quos quam ducimus aperiam ipsa dolores reiciendis.",
    },
    {
      title: 'App Design',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam quas, quis labore natus odit sunt dicta est, quia obcaecati nesciunt provident quo. Quos quam ducimus aperiam ipsa dolores reiciendis.",
    },
  ]
}

export const experience: Experience = {
  title: 'My Experience',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam quas, quis labore natus odit sunt dicta est, quia obcaecati nesciunt provident quo. Quos quam ducimus aperiam ipsa dolores reiciendis.",
  experiences: [
    {
      date: "2024 - Current",
      role: "FULL STACK WEB DEVELOPER",
      company: "Vauldex Technologies",
      job_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam quas, quis labore natus odit sunt dicta est, quia obcaecati nesciunt provident quo. Quos quam ducimus aperiam ipsa dolores reiciendis."
    },
    {
      date: "2022 - 2023",
      role: "FULL STACK WEB DEVELOPER",
      company: "Skandenavisk Logistics",
      job_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam quas, quis labore natus odit sunt dicta est, quia obcaecati nesciunt provident quo. Quos quam ducimus aperiam ipsa dolores reiciendis."
    },
  ]
}

export const skills: Skills = {
  title: "My Skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam quas, quis labore natus odit sunt dicta est, quia obcaecati nesciunt provident quo. Quos quam ducimus aperiam ipsa dolores reiciendis.",
  skills: [
    {
      icon: "devicon:javascript",
      name: "Javascript"
    },
    {
      icon: "vscode-icons:file-type-typescript-official",
      name: "Typescript"
    },
    {
      icon: "vscode-icons:file-type-html",
      name: "HTML"
    },
    {
      icon: "vscode-icons:file-type-java",
      name: "Java"
    },
    {
      icon: "vscode-icons:file-type-scala",
      name: "Scala"
    },
    {
      icon: "vscode-icons:file-type-vue",
      name: "Vue"
    },
    {
      icon: "vscode-icons:file-type-nuxt",
      name: "Nuxt"
    },
    {
      icon: "vscode-icons:file-type-tailwind",
      name: "Tailwind"
    },
    {
      icon: "devicon:sass",
      name: "SASS"
    },
    {
      icon: "vscode-icons:file-type-c",
      name: "C"
    },
    {
      icon: "vscode-icons:file-type-csharp",
      name: "C#"
    },
    {
      icon: "devicon:dotnetcore",
      name: ".NET"
    },
    {
      icon: "devicon:mysql-wordmark",
      name: "MYSQL"
    },
    {
      icon: "devicon:postgresql-wordmark",
      name: "POSTGRESQL"
    },
    {
      icon: "vscode-icons:file-type-git",
      name: "Git"
    },
    {
      icon: "devicon:github",
      name: "Github"
    },
  ]
}