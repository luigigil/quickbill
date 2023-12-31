import { FastifyInstance } from 'fastify'
import { echoHandler } from '@controllers/echo.controller'

function echoRoute(server: FastifyInstance) {
  server.post('/echo', echoHandler)
}

export { echoRoute }
