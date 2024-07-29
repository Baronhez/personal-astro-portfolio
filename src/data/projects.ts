export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Portfolio",
    techs: ["Docker", "Traefik", "ArgoCD", "Ansible", "Kubernetes"],
    link: "https://flame.jonthan.xyz/",
  },
  {
    title: "Personal Blog about tech",
    techs: ["Publii CMS", "Github Pages"],
    link: "https://blog.jonthan.xyz/",
  },
  {
    title: "Based Cart",
    techs: ["React Native", "Expo", "Github Actions", "Supabase"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
