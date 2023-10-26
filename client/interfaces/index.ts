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
}

export type ListProject = Array<Project>;
