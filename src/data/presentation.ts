type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "jonathanrodenaslopez1@gmail.com",
  title: "Hi, I’m Jonathan 👋",
  // profile: "/profile.webp",
  description:
    "Hello, I'm a *spanish DevOps Cloud Engineer* with over *3 years* of experience. I am currently working with *AWS and Terraform*. Outside of work, I collect mechanical keyboards, play the guitar, learn about cloud technologies and exercise.",
  socials: [
    {
      label: "X",
      link: "https://x.com/AAAAAGGHHHH/status/1732182521696182364?s=20",
    },
    {
      label: "Bento",
      link: "https://bento.me/baronhez",
    },
    {
      label: "Github",
      link: "https://github.com/Baronhez",
    },
  ],
};

export default presentation;
