import { Invoice } from "@/models/invoice.model"
import { $InvoiceService } from "@/services/invoices.service"
import { FastifyReply, FastifyRequest } from "fastify"

type Request = FastifyRequest
type RequestWithParams = FastifyRequest<{ Params: InvoiceParams }>
type RequestWithBody = FastifyRequest<{ Body: Invoice }>

interface InvoiceParams {
  invoiceId: string
}

const getInvoicesHandler = async (request: Request, reply: FastifyReply) => {
  const invoices = await $InvoiceService.fetchInvoices()

  reply.send(invoices)
}

const getInvoiceByIdHandler = async (request: RequestWithParams, reply: FastifyReply) => {
  const response = await $InvoiceService.fetchInvoiceById(request.params.invoiceId)
  reply.send(response)
}

const createInvoiceHandler = async (request: RequestWithBody, reply: FastifyReply) => {
  const response = await $InvoiceService.createInvoice(request.body)
  reply.send(response)
}

const deleteInvoiceHandler = async (request: RequestWithParams, reply: FastifyReply) => {
  const response = await $InvoiceService.deleteInvoice(request.params.invoiceId)
  reply.send(response)
}

const editInvoiceHandler = async (request: RequestWithParams, reply: FastifyReply) => {
  //const response = await $InvoiceService.echoResponse(request.body)
  //reply.send(response)
  // not implemented
  reply.status(501)
}

export {
  getInvoicesHandler,
  getInvoiceByIdHandler,
  createInvoiceHandler,
  deleteInvoiceHandler,
  editInvoiceHandler
}
