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
  role: string,
  company: string,
  job_description: string
}

export type SkillItem = {
  icon: string,
  name: string,
}
// #endregion

// #region Interface
export interface Hero {
  title_1: string,
  title_2: string,
  description: string,
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
// #endregion
