// #region Types
export type ServiceItem = {
  title: string,
  description: string
}

export type ProfileExperienceItem = {
  num: string,
  description: string
}

export type ExperienceItem = {
  date: string,
  epochStart: number,
  epochEnd: number,
  role: string,
  company: string,
  job_description: string
}

export type LinkItem = {
  icon: string,
  link: string
}

export type SkillItem = {
  icon: string,
  name: string,
  group: string[]
}

export type ProjectItem = {
  name: string,
  description: string,
  file: string,
  tech_stack: string,
  features: Feature[],
}

export type Feature = {
  feature_name: string,
  description: string,
  file: string,
}
// #endregion

// #region Interface
export interface Hero {
  title_1: string,
  title_2: string,
  description: string,
  links: LinkItem[],
  profile_experiece_list: ProfileExperienceItem[],
}

export interface Service {
  title: string,
  description: string,
  services: ServiceItem[]
}

export interface Experience {
  title: string,
  description: string,
  experiences: ExperienceItem[]
}

export interface Skills {
  title: string,
  description: string,
  skills: SkillItem[]
}

export interface Projects {
  title: string,
  description: string,
  projects: ProjectItem[]
}
// #endregion
