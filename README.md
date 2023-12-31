# Folder structure

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
