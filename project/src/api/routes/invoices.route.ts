import { FastifyInstance } from 'fastify'
import {
  createInvoiceHandler,
  deleteInvoiceHandler,
  editInvoiceHandler,
  getInvoiceByIdHandler,
  getInvoicesHandler
} from '@controllers/invoices.controller'
import {
  createInvoiceSchema,
  deleteInvoiceSchema,
  getInvoiceByIdSchema,
  getInvoicesSchema,
  updateInvoiceSchema
} from '../validators/invoice.validator'

function invoicesRoute(server: FastifyInstance) {
  server.get(
    '/invoices/:invoiceId',
    {
      schema: {
        description: 'Get invoice by id',
        tags: ['invoices'],
        summary: 'Get invoice by id',
        ...getInvoiceByIdSchema,
      }
    },
    getInvoiceByIdHandler
  )

  server.get(
    '/invoices',
    {
      schema: {
        description: 'Get list of invoices',
        tags: ['invoices'],
        summary: 'Get list of invoices',
        ...getInvoicesSchema,
      }
    },
    getInvoicesHandler
  )

  server.post(
    '/invoices',
    {
      schema: {
        description: 'Create a new invoice',
        tags: ['invoices'],
        summary: 'Create a new invoice',
        ...createInvoiceSchema,
      }
    },
    createInvoiceHandler
  )

  server.delete(
    '/invoices/:invoiceId',
    {
      schema: {
        description: 'Delete an invoice',
        tags: ['invoices'],
        summary: 'Delete an invoice',
        ...deleteInvoiceSchema,
      }
    },
    deleteInvoiceHandler
  )

  server.put(
    '/invoices/:invoiceId',
    {
      schema: {
        description: 'Edit an invoice',
        tags: ['invoices'],
        summary: 'Edit an invoice',
        ...updateInvoiceSchema,
      }
    },
    editInvoiceHandler
  )
}

export { invoicesRoute }
