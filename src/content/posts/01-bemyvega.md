---
title: "DevOps Cloud Engineer"
publishedAt: 2023-02-01
description: "I'm currently working as a DevOps Cloud Engineer at Bemyvega"
slug: "bemyvega"
isPublish: true
---

## Projects

During my time at Bemyvega, I have learned a lot of useful skills and have been given the opportunity to manage the entire infrastructure of the company. I have always been able to make the decisions that I felt were right. This has resulted in a total restructuring of the company's infrastructure to a fully efficient and cost-effective serverless model, as opposed to the inefficient and costly infrastructure previously deployed.

While managing and fixing the infrastructure left behind by the company's previous DevOps (_let's be honest: it was disastrous, expensive, not secure, not scalable, not documented and a disgrace to every industry professional at every level_) I was able to learn a multitude of skills.

Among my roles and milestones during this time are:

- Deploying and managing a kubernetes cluster at Linode and Digital Ocean implementing GitOps methodology with ArgoCD, ensuring that the solution delivered to customers was now scalable and cost-efficient.

- Deployed infrastructure at Hetzner using Terraform and Gitlab CI pipelines.

- Optimize the docker images we use in-house to reduce resource consumption and increase performance and the number of concurrent users supported by the infrastructure, from 15 to 800 concurrent users per host.

- Collaborate with the whole company in the migration of all our product websites, to not only redo from scratch all our wordpress sites, but later migrate them to a new hosting and replace wordpress to use Astro instead.

- Create a backup policy for all our code stored in a self-hosted instance of Gitlab and perform backups using Restic.

- I fixed the organizational mess of the company's web domains in Cloudflare and deployed various Cloudflare products using Cloudflare Pages, Github Actions and Cloudflare Wrangler.

The complete restructuring of the infrastructure that I undertook resulted not only in increased scalability and reliability, but also in increased security and reduced costs. The savings were up to 850€ per month in miscellaneous expenses.

During this new phase, my company contracted AWS Professional Service (https://aws.amazon.com/es/professional-services/), so I was able to work closely with qualified and experienced AWS personnel, as well as learn and become familiar with their work methodology and infrastructure best practices (https://aws.amazon.com/architecture/well-architected).

Among the functions I performed and milestones I achieved were:

- I worked closely with the AWS team to ensure best practice compliance and cost optimization in cloud infrastructure, following the AWS Well-Architected Framework.

- I designed the cloud architecture of one of our two products and the first versions of the other.

- I collaborated in the planning and creation of a Landing Zone on AWS to ensure a secure and scalable infrastructure.

- I coordinated the setup of various development, pre-production and production environments on AWS, ensuring separation and resource optimization, using Blue-Green Deployments with canary releases.

- I designed the entire backup part of my company with AWS Backup, policies and deployed daily, weekly and monthly backups.

- I collaborated on the design of a microservices architecture on AWS that enabled the implementation of video calling using Amazon Chime and the creation of an accessibility widget with AWS Lambdas, Lambda Layers, S3, DynamoDB and CloudFront.

- I designed and deployed multiple codePipeline pipelines, AWS Lambda Alias and Github Actions to create Blue-Green deployments and canary releases in the main projects of our company, ensuring seamless and risk-free transitions between different application versions.

Ok, now that I've talked in broad strokes about my tasks during the deployment of the company's new serverless infrastructure, I want to talk about my role in the integration of one of the company's main products into the AWS Marketplace.

Long story short, my company wanted to integrate the web widget we developed (https://www.goviewser.com/) into the AWS Marketplace. Since I am the AWS manager at my company, I was in charge of developing all the necessary documentation for our indicated incorporation into the FTR (https://aws.amazon.com/marketplace/pp/prodview-knhdb46b4cjrc). Subsequently, once I wrote all the documentation and defined everything necessary (such as the RPO and RTO of our products), I made a multitude of changes to meet the necessary security standards in the SecurityHub service. 

I would emphasize that I am a polite, but sincere person. If I see that there is something that can be improved or is inefficient in the work environment, I will highlight the negative points and work to improve the situation in the work environment...

During the infrastructure deployment, a series of bad decisions were imposed on me for the first time (and subsequently I had to undo everything, because I was not listened to). Well, **disagree and commit** (https://medium.com/@voicemod/disagree-and-commit-the-importance-of-disagreement-in-decision-making-4c654bb06a) as they say in AWS.

Among the bad decisions that were made against my will are:

**1.** I had to set up the entire infrastructure with Terraform, but instead of using s3 and dynamoDB as backend (option recommended by AWS) I was forced to use Terraform Cloud. Finally, as I already warned, we had to export the state files when we exceeded the free tier.

Finally, as I already warned, we had to export the state files when we exceeded the free tier. Now we use a s3 bucket as backend with dynamoDB table. Both deployed with a cloudformation stack. 

I ended up creating a Github Actions workflow that we used as a template for each infrastructure repository. This workflow deploys the infrastructure using terraform, passing chekov security checks (https://www.checkov.io/) and checking the terraform plans with atlantis (https://www.runatlantis.io/).

**2.** We deployed a whole infrastructure to check the veracity of the requests coming from our clients' frontends. As I already warned, putting security checks in frontend is like _"poner puertas al campo"_ as we say in Spain.

For this purpose, we deployed infrastructure with lambda, lambda layers, a dynamoDB table, and a cloudfront distribution.

This translated into more than 5 seconds of load time each time someone wanted to use the web widget. It was a disastrous user experience, and all for not listening to me and doing what the competition does.


## Technologies used 

In the course of my duties, I have used and continue to use multiple tools at Bemyvega. The most outstanding ones are:
_Kubernetes, Docker, Terraform, CloudFormation, Gitlab CI, Github Actions, AWS_.

## Personal opinion

In my opinion, this is the best company I have ever worked for. I have been able to learn enormously, always accompanied by great friends.

I have been able to learn from AWS professionals with many years of experience.

I have always enjoyed the full confidence of the company's management team. Moreover, I would like to emphasize the good time, vacation and salary conditions that I enjoy in the company. It really stands out from other companies in the sector, and I recognize that I am inclined to want to work in such a healthy environment.

> Rating: **10/10**. I highly recommend working for this company. The conditions are impressive, and the management team is really open-minded and communicative. The work environment is positive, healthy and relaxed.

[https://medium.com/news-uk-technology/c4-model-a-better-way-to-visualise-software-architecture-df41e5ac57b8]: https://medium.com/news-uk-technology/c4-model-a-better-way-to-visualise-software-architecture-df41e5ac57b8

[https://aws.amazon.com/es/professional-services/]: https://aws.amazon.com/es/professional-services/

[https://aws.amazon.com/architecture/well-architected]: https://aws.amazon.com/architecture/well-architected

[https://www.goviewser.com/]: https://www.goviewser.com/

[https://aws.amazon.com/marketplace/pp/prodview-knhdb46b4cjrc]: https://aws.amazon.com/marketplace/pp/prodview-knhdb46b4cjrc