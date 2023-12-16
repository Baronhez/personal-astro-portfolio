export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Portfolio",
    techs: ["Astro"],
    link: "https://github.com/Baronhez/personal-astro-portfolio",
  },
  {
    title: "Personal Blog about tech",
    techs: ["Publii CMS", "Github Pages"],
    link: "https://blog.jonthan.xyz/",
  },
  {
    title: "Bazart",
    techs: ["ReactJS (NextJS)", "Flutter", "Github Actions", "Vercel"],
    link: "/",
    isComingSoon: true,
  },
  {
    title: "Stressify",
    techs: ["Astro", "Go", "Node", "Github Actions", "AWS"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
