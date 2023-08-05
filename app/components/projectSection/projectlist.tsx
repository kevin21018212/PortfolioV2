export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const defaultProjects: Project[] = [
  {id: 1, title: "Project 1", description: "Description for Project 1", image: "project1.jpg"},
  {id: 2, title: "Project 2", description: "Description for Project 2", image: "project2.jpg"},
  {id: 3, title: "Project 3", description: "Description for Project 3", image: "project3.jpg"},
];

export default defaultProjects;
