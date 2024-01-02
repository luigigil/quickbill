import { FastifyInstance } from 'fastify'
import {
  createInvoiceHandler,
  deleteInvoiceHandler,
  editInvoiceHandler,
  getInvoiceByIdHandler,
  getInvoicesHandler
} from '@controllers/invoices.controller'

function invoicesRoute(server: FastifyInstance) {
  server.get('/invoices/:invoiceId', getInvoiceByIdHandler)
  server.get('/invoices', getInvoicesHandler)
  server.post('/invoices', createInvoiceHandler)
  server.delete('/invoices/:invoiceId', deleteInvoiceHandler)
  server.put('/invoices/:invoiceId', editInvoiceHandler)
}

export { invoicesRoute }
