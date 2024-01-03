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
  try {
    const invoices = await $InvoiceService.fetchInvoices()
    reply.send(invoices)
  } catch (error) {
    console.error('Error fetching invoices:', error)
    reply.status(500).send() 
  }
}

const getInvoiceByIdHandler = async (request: RequestWithParams, reply: FastifyReply) => {
  try {
    const response = await $InvoiceService.fetchInvoiceById(request.params.invoiceId)

    if(response == null) {
      reply.status(404).send()
      return
    }

    reply.send(response)
  } catch (error) {
    console.error('Error fetching invoice:', error)
    reply.status(500).send() 
  }
}

const createInvoiceHandler = async (request: RequestWithBody, reply: FastifyReply) => {
  try {
    const response = await $InvoiceService.createInvoice(request.body)
    reply.status(201).send(response)
  } catch (error) {
    console.error('Error creating invoice:', error)
    reply.status(500).send() 
  }
}

const deleteInvoiceHandler = async (request: RequestWithParams, reply: FastifyReply) => {
  try {
    const response = await $InvoiceService.deleteInvoice(request.params.invoiceId)
    reply.send(response)
  } catch (error) {
    console.error('Error deleting invoice:', error)
    reply.status(500).send() 
  }
}

const editInvoiceHandler = async (request: RequestWithParams, reply: FastifyReply) => {
  try {
    //const response = await $InvoiceService.echoResponse(request.body)
    //reply.send(response)
    // not implemented
    reply.status(501)
  } catch (error) {
    console.error('Error editing invoice:', error)
    reply.status(500).send() 
  }
}

export {
  getInvoicesHandler,
  getInvoiceByIdHandler,
  createInvoiceHandler,
  deleteInvoiceHandler,
  editInvoiceHandler
}
