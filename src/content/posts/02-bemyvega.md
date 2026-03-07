---
title: "DevOps Cloud Engineer"
publishedAt: 2023-02-01
description: "I have worked as a DevOps Cloud Engineer at Bemyvega"
slug: "bemyvega-devops"
isPublish: true
---

## Projects

During my time at Bemyvega, I have learned many useful skills and had the opportunity to manage the entire company infrastructure. I have always been able to make the decisions I felt were right. This has resulted in a complete restructuring of the company's infrastructure towards a fully efficient and cost-effective serverless model.

While managing and fixing the infrastructure left behind by the company's previous DevOps (_let's be honest: it was disastrous, expensive, insecure, non-scalable, undocumented, and an embarrassment to all professionals in the industry at all levels_), I was able to learn a lot of skills.

My responsibilities and achievements during this time included:

- Implementing and managing a Kubernetes cluster on AWS using the GitOps methodology with ArgoCD, ensuring that the solution offered to customers was now scalable and cost-effective.

- Implementation of infrastructure at Hetzner using Terraform, Ansible and Gitlab CI pipelines.

- Optimization of the Docker images we use internally to reduce resource consumption and increase performance and the number of simultaneous users supported by the infrastructure, from 15 to 800 simultaneous users per host.

- Collaboration with the entire company on the migration of all our product websites, not only to rebuild all our WordPress sites from scratch, but also to subsequently migrate them to new hosting and replace WordPress with Astro.

- Creation of a backup policy for all our code stored on a self-hosted Gitlab instance and performing backups using Restic.

- I fixed the organizational mess of the company's web domains in Cloudflare and implemented several Cloudflare products using Cloudflare Pages, Github Actions, and Cloudflare Wrangler.

The complete restructuring of the infrastructure that I carried out not only resulted in greater scalability and reliability, but also increased security and reduced costs. The savings amounted to up to €8500 per month in miscellaneous expenses. 

During this new phase, my company contracted the professional services of AWS (https://aws.amazon.com/es/professional-services/), which allowed me to work closely with qualified and experienced AWS staff, as well as learn and familiarize myself with their working methodology and best practices in infrastructure (https://aws.amazon.com/architecture/well-architected).

Among the roles I performed and the milestones I achieved are:

- I worked closely with the AWS team to ensure compliance with best practices and cost optimization in the cloud infrastructure, following the AWS Well-Architected Framework.

- I designed the cloud architecture for all the company products.

- Collaborated on the planning and creation of the landing zone in AWS to ensure a secure and scalable infrastructure.

- Coordinated the configuration of multiple development, dev, staging, and production environments on AWS, ensuring separation and optimization of resources using blue-green deployments and canary releases.

- Designed my company's entire backup system using AWS Backup, policies, and daily, weekly, and monthly backups.

- I collaborated on the design of a microservices architecture on AWS that enabled the implementation of video calls using Amazon Chime and the creation of an accessibility widget with AWS Lambdas, Lambda Layers, S3, DynamoDB, and CloudFront.

- I designed and implemented multiple CodePipeline pipelines, AWS Lambda Aliases, and GitHub Actions to create blue-green deployments and canary releases for our company's main projects, ensuring smooth and risk-free transitions between different application versions.

Now that I have outlined my tasks during the implementation of the company's new serverless infrastructure, I would like to discuss my role in integrating one of the company's main products into AWS Marketplace.

In short, my company wanted to integrate the web widget we developed (https://www.goviewser.com/) into AWS Marketplace. As I am responsible for AWS at my company, I was in charge of developing all the necessary documentation for our inclusion as indicated in the FTR (https://aws.amazon.com/marketplace/pp/prodview-knhdb46b4cjrc). Subsequently, once all the documentation had been drafted and everything necessary had been defined (such as the RPO and RTO of our products), I made a multitude of changes to comply with the necessary security standards in the SecurityHub service. 

I would emphasize that I am a polite, but sincere person. If I see that there is something that can be improved or is inefficient in the work environment, I will highlight the negative points and work to improve the situation in the work environment...

During the implementation of the infrastructure, I was forced to make a series of bad decisions for the first time (and later had to undo everything because no one listened to me). Well, **disagree and commit** (https://medium.com/@voicemod/disagree-and-commit-the-importance-of-disagreement-in-decision-making-4c654bb06a) as they say at AWS.

Among the bad decisions that were made against my will are:

**1.** I had to set up the entire infrastructure with Terraform, but instead of using s3 and dynamoDB as the backend (the option recommended at the time by AWS), they forced me to use Terraform Cloud. 

Finally, as I warned, we had to export the state files when we exceeded the free tier. The company now use an s3 bucket as the backend with a dynamoDB table. Both are deployed with a CloudFormation stack. 

I ended up creating a Github Actions workflow that we use as a template for each infrastructure repository. This workflow deploys the infrastructure using Terraform, passing Chekov security checks (https://www.checkov.io/) and verifying Terraform plans with Atlantis (https://www.runatlantis.io/).

**2.** We implemented an entire infrastructure to verify the authenticity of requests coming from our clients' frontends. As I mentioned earlier, putting security controls on the frontend is like “putting gates on a field,” as we say in Spain.

To do this, we implemented an infrastructure with Lambda, Lambda layers, a DynamoDB table, and a CloudFront distribution.

This resulted in more than 5 seconds of loading time every time someone wanted to use the web widget. It was a disastrous user experience, and all because I didn't listen to myself and did what the competition does.


## Technologies used 

In performing my duties, I have used and continue to use multiple tools at Bemyvega. The most notable ones are:
_Kubernetes, Docker, Terraform, CloudFormation, Gitlab CI, Github Actions, AWS_.

## Personal opinion

In my opinion, this is the best company I have ever worked for. I have been able to learn a lot, always accompanied by great friends.

I have been able to learn from AWS professionals with many years of experience.

I have always had the full confidence of the company's management team. In addition, I would like to highlight the good working hours, vacation time, and salary that I enjoy at the company. It really stands out from other companies in the sector, and I admit that I am inclined to want to work in such a healthy environment.

> Rating: **10/10**. I highly recommend working for this company. The conditions are impressive and the management team is very open and communicative. The work environment is positive, healthy, and relaxed.

[https://medium.com/news-uk-technology/c4-model-a-better-way-to-visualise-software-architecture-df41e5ac57b8]: https://medium.com/news-uk-technology/c4-model-a-better-way-to-visualise-software-architecture-df41e5ac57b8

[https://aws.amazon.com/es/professional-services/]: https://aws.amazon.com/es/professional-services/

[https://aws.amazon.com/architecture/well-architected]: https://aws.amazon.com/architecture/well-architected

[https://www.goviewser.com/]: https://www.goviewser.com/

[https://aws.amazon.com/marketplace/pp/prodview-knhdb46b4cjrc]: https://aws.amazon.com/marketplace/pp/prodview-knhdb46b4cjrc
