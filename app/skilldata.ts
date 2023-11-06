// skillsData.ts

interface SkillData {
  title: string;
  skillName: string;
  experience: string;
  backgroundImageUrl: string;
}

const skillsData: SkillData[] = [
  {
    title: "CLOUD",
    skillName: "AWS",
    experience: "2 years, Full-time",
    backgroundImageUrl: "/projectimg/aws.jpeg", // Updated to be relative to the public folder
  },
  {
    title: "FRONTEND",
    skillName: "Next.js",
    experience: "1 year, Full-time",
    backgroundImageUrl: "/projectimg/nextjs.jpeg", // Updated to be relative to the public folder
  },
  {
    title: "BACKEND",
    skillName: "Node.js",
    experience: "3 years, Full-time",
    backgroundImageUrl: "/projectimg/node.jpeg", // Updated to be relative to the public folder
  },
  {
    title: "DATABASE",
    skillName: "SQL",
    experience: "4 years, Full-time",
    backgroundImageUrl: "url_to_sql_background_image.jpg",
  },
  {
    title: "FRONTEND",
    skillName: "React",
    experience: "2 years, Full-time",
    backgroundImageUrl: "url_to_react_background_image.jpg",
  },
  {
    title: "PROGRAMMING",
    skillName: "C++",
    experience: "5 years, Full-time",
    backgroundImageUrl: "/projectimg/c++.png", // Updated to be relative to the public folder
  },
  {
    title: "PROGRAMMING",
    skillName: "C",
    experience: "3 years, Full-time",
    backgroundImageUrl: "url_to_c_background_image.jpg",
  },
  {
    title: "PROGRAMMING",
    skillName: "Java",
    experience: "4 years, Full-time",
    backgroundImageUrl: "/projectimg/java.jpeg", // Updated to be relative to the public folder
  },
  {
    title: "DATABASE",
    skillName: "PrismaDB",
    experience: "1 year, Full-time",
    backgroundImageUrl: "url_to_prismadb_background_image.jpg",
  },
  {
    title: "FRONTEND",
    skillName: "CSS",
    experience: "3 years, Full-time",
    backgroundImageUrl: "url_to_css_background_image.jpg",
  },
  {
    title: "PROGRAMMING",
    skillName: "Data Structures and Algorithms",
    experience: "4 years, Full-time",
    backgroundImageUrl: "url_to_ds_algo_background_image.jpg",
  },
  {
    title: "TOOLS",
    skillName: "Git",
    experience: "2 years, Full-time",
    backgroundImageUrl: "url_to_git_background_image.jpg",
  },
];

export default skillsData;
