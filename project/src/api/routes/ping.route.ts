import { FastifyInstance } from 'fastify'
import { getPingHandler } from '@controllers/ping.controller'

function pingRoute(server: FastifyInstance) {
  server.get('/ping', getPingHandler)
}

export { pingRoute }
