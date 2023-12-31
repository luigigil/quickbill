import { $PingService } from "@/services/ping.service"
import { FastifyReply, FastifyRequest } from "fastify"

const getPingHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  const response = $PingService.getPingResponse()
  reply.send(response)
}

export { getPingHandler }
