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
  title: "WELCOME",
  //profile: "/picture.jpg",
  description:
    "Hi! My name is *Jonathan Ródenas López*. I'm a *Chief Technology Officer* and *DevOps Cloud Engineer* with over *5 years* of experience. I am currently working with *Terraform, CloudFormation and AWS*. Outside of work, I collect mechanical keyboards, play the guitar, learn about cloud technologies and exercise.",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/jonathanrodenaslopez/",
    },
    {
      label: "Github",
      link: "https://github.com/Baronhez",
    },
    {
      label: "Bento",
      link: "https://bento.me/baronhez",
    },
  ],
};

export default presentation;
