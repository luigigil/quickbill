import { FastifyInstance } from "fastify"

const swagger = async (server: FastifyInstance) => {
  await server.register(require('@fastify/swagger'), {
    swagger: {
      info: {
        title: 'Quickbill API',
        description: 'API documentation for Quickbill',
        version: '0.1.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      host: 'localhost:8080',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'invoices', description: 'Invoices related end-points' },
        { name: 'healthcheck', description: 'Healtchecking related end-points' },
      ],
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header'
        }
      }
    }
  })

  await server.register(require('@fastify/swagger-ui'), {
    routePrefix: '/api-docs',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false
    },
    uiHooks: {
      // @ts-ignore
      onRequest: function(request, reply, next) { next() },
      // @ts-ignore
      preHandler: function(request, reply, next) { next() }
    },
    staticCSP: true,
    // @ts-ignore
    transformStaticCSP: (header) => header,
    // @ts-ignore
    transformSpecification: (swaggerObject, request, reply) => { return swaggerObject },
    transformSpecificationClone: true
  })
}

export { swagger }
