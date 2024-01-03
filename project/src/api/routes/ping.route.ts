import { FastifyInstance } from 'fastify'
import { getPingHandler } from '@controllers/ping.controller'

function pingRoute(server: FastifyInstance) {
  server.get('/ping',{
    schema: {
      description: 'Get ping response',
      tags: ['healthcheck'],
      summary: 'Get ping response',
      response: {
        200: {
          type: 'string',
          description: 'pong'
        }
      }
    }
  }, getPingHandler)
}

export { pingRoute }
