// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export interface Project {
  title: string;
  thumbnail: string;
  finished: boolean;
  descriptionEn: string;
  descriptionEs: string;
  skills: Array<string>;
  githubURL: string;
  launchURL: string;
  pageURL: string;
  isProfessional?: boolean;
  isMobileApp?: boolean;
  isWebApp?: boolean;
  /** The live site is down; keep launchURL for reference but don't link to it. */
  offline?: boolean;
  /** Optional archived copy (e.g. Wayback Machine) for offline projects. */
  archiveURL?: string;
}

export type ListProject = Array<Project>;
