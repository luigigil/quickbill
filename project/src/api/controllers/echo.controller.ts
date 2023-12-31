import { $PingService } from "@/services/ping.service"
import { FastifyReply, FastifyRequest } from "fastify"

const echoHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  const response = $PingService.echoResponse(request.body)
  reply.send(response)
}

export { echoHandler }
