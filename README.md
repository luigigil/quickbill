<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Quickbill</h3>

  <p align="center">
    An awesome Billing Management Tool
    <br />
    <a href="https://github.com/luigigil/quickbill"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#folder-structure">Folder Structure</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#project-folder">Project Folder</a></li>
        <li><a href="#infra-folder">Infra Folder</a></li>
        <li><a href="#architecture">Architecture</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This project is a simple bill and invoice management application. The main goal of this project is to explore the AWS CDK and its capabilities, as well as AWS Services. The application will be built using the following technologies:

Besides technical goals and challenges, this projects aims to provide a simple and easy to use tool for small business owners and freelancers to manage their bills and invoices.

Here's why:
* Managing bills and invoices can be overwhelming and time consuming, especially for small business owners and freelancers
* Having a simple and easy to use tool can help them save time and focus on their business
* Customize bills and engage clients with a professional yet personal approach, enhancing your brand.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Folder Structure

```
/quickbill
|-- /project
|   |-- /controllers     # Controller files (for MVC architecture)
|   |-- /models          # Data models (for database interactions)
|   |-- /routes          # Route definitions
|   |-- /services        # Business logic
|   |-- /tests           # Unit and integration tests
|   |-- Dockerfile       # Dockerfile for containerizing the application
|   `-- index.ts         # Entry point of your Node.js application
|
|-- /infra               # AWS CDK Infrastructure as code
|   |-- /lib             # CDK stacks
|   |-- cdk.json         # CDK configuration
|   `-- tsconfig.json    # TypeScript config for CDK
|
`-- /scripts             # Scripts for deployment, DB migrations, etc.
```

<!-- GETTING STARTED -->
## Getting Started

Clone the project and follow the instructions below to get started with Quickbill.


### Project Folder

This folder contains the main application. It is a Node.js application that uses Express.js as the web framework. It contains a simple REST API that will be used by the frontend application to manage bills and invoices.
The API can also be used by third-party applications to integrate with Quickbill.

It also contains event-driven services that will be used to send notifications to clients and users, as well as to manage the billing process and all associated events.

#### Installation

Follow the steps below to get started with the project:

1. Clone the repo
```sh
git clone https://github.com/luigigil/quickbill.git
```
2. Install packages
```sh
yarn install
```
3. Start the application
```sh
yarn dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Infra Folder

This folder contains the AWS CDK project that will be used to deploy the application to the cloud. It contains the infrastructure as code for the application with the AWS services that will be used by the application.

#### installation

Follow the steps below to get started with the project:

1. Clone the repo

2. Install packages
```sh
yarn install
```
3. Deploy the application
```sh
cdk deploy
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Architecture

#### Description

The architecture will be described in details here later.

#### Strategies

The project can be deployed to AWS using different strategies:
- AWS ECS w/ Fargate
  - The application can be deployed to AWS ECS using Fargate. This is a serverless container service that allows you to run containers without managing the infrastructure.
  - The following strategies can be used to deploy the application to AWS ECS:
    - API is deployed as a container that scales based on demand
    - Event-driven services are deployed as containers that are triggered by events
- AWS Lambda
  - The application can be deployed to AWS Lambda using the serverless framework. This is a serverless compute service that allows you to run code without managing the infrastructure.
  - The following strategies can be used to deploy the application to AWS Lambda:
    - API is deployed as a serverless function that scales based on demand
      - Some experimentation will be needed here, since we can deploy the API as a single serverless function or as a group of serverless functions divided by domain or resource
      - The idea is to avoid cold starts and to provide a scalable and cost-effective solution for the application
      - Also, the size of the serverless function will be a challenge, since we need to keep it small to avoid cold starts, but we also need to keep it large enough to handle the application and avoid code starts as well.
      - A mechanism to break the application up and deploy smaller units of code will be needed
    - Event-driven services are deployed as serverless functions that are triggered by events
- AWS EKS
  - The application can be deployed to AWS EKS. This is a managed Kubernetes service that allows you to run Kubernetes. It's a different approach than ECS.
  - The following strategies can be used to deploy the application to AWS EKS using the same strategies as ECS.

Each strategy has its own pros and cons. The idea is to explore each one and understand the best approach for the application. This step is a learning process and will help to understand different strategies and their trade-offs.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

This project is still in its early stages. The following is a list of tasks that need to be completed to get the project to a production-ready state:

- [x] Create the project structure
- [x] Add the main application
- [x] Add the AWS CDK project
- [ ] Add Jest and supertest
- [ ] Add the tests
- [ ] Add CI/CD to automate testing, building, and deployment processes with GitHub Actions
- [ ] Add Logging and Monitoring with AWS CloudWatch
- [ ] Add API Documentation with Swagger
- [ ] Improve Project README
- [ ] Improve Infra README
- [ ] Add the authentication and authorization with AWS Cognito
- [ ] Add the billing and invoicing process with AWS Step Functions
- [ ] Add the notifications with AWS SNS
- [ ] Add the frontend application with Next.js

The order of the tasks is not final and may change as the project evolves.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
