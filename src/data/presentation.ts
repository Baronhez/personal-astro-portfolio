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
  mail: "",
  title: "WELCOME",
  //profile: "/picture.jpg",
  description:
    "Hi! My name is *Jonathan Ródenas López*. I'm a *DevOps Cloud Engineer* with over *6 years* of experience. I am currently working with *Terraform, CloudFormation and AWS*. Outside of work, I collect mechanical keyboards, play the guitar, learn about cloud technologies and exercise.",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/jonathanrodenaslopez/",
    },
    {
      label: "Github",
      link: "https://github.com/Baronhez"
    },
  ],
};

export default presentation;
