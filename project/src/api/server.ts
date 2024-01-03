import fastify from 'fastify'
import { pingRoute } from '@routes/ping.route'
import { invoicesRoute } from '@routes/invoices.route'
import { } from '@fastify/swagger'
import { swagger } from './middlewares/swagger.middleware'

const startServer = async () => {
  const server = fastify()

  const port = parseInt(process.env.PORT || '8080')

  // middlewares
  await swagger(server)

  // define routes
  //echoRoute(server)
  pingRoute(server)
  invoicesRoute(server)


  server.listen({ port, host: '0.0.0.0' }, (err, address) => {
    if (err) {
      console.error(err)
      // process.exit(1)
    }
    server.swagger()
    console.log(`Server listening at ${address}`)
  })
}

export { startServer }
