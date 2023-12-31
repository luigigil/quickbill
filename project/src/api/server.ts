import fastify from 'fastify'
import { pingRoute } from '@routes/ping.route'
import { echoRoute } from './routes/echo.route'

const startServer = () => {
  const server = fastify()
  const port = parseInt(process.env.PORT || '8080')

  // define routes
  pingRoute(server)
  echoRoute(server)

  server.listen({ port, host: '0.0.0.0' }, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
  })
}

export { startServer }
