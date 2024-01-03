import { FastifySchema } from "fastify"

const invoiceItemBodySchema = {
  type: 'object',
  required: ['description', 'quantity', 'price'],
  properties: {
    description: { type: 'string' },
    quantity: { type: 'integer', minimum: 1 },
    price: { type: 'number', minimum: 0.01 }
  }
}

const createInvoiceBodySchema = {
  type: 'object',
  required: ['number', 'dueDate'],
  properties: {
    number: { type: 'string' },
    dueDate: { type: 'string', format: 'date' },
    status: {
      type: 'string',
      enum: ['draft', 'sent', 'paid', 'cancelled']
    },
    items: {
      type: 'array',
      minItems: 1,
      items: invoiceItemBodySchema
    }
  }
}

const updateInvoiceBodySchema = {
  type: 'object',
  properties: {
    dueDate: { type: 'string', format: 'date' },
    status: {
      type: 'string',
      enum: ['draft', 'sent', 'paid', 'cancelled']
    },
    items: {
      type: 'array',
      minItems: 1,
      items: invoiceItemBodySchema
    }
  }
}

const queryInvoiceSchema = {
  type: 'object',
  properties: {
    number: { type: 'string' },
    dueDateStart: { type: 'string', format: 'date' },
    dueDateEnd: { type: 'string', format: 'date' },
    status: {
      type: 'string',
      enum: ['draft', 'sent', 'paid', 'cancelled']
    }
  }
}

const paramsInvoiceSchema = {
  type: 'object',
  properties: {
    invoiceId: { type: 'string' },
  }
}

const invoiceResponseSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    number: { type: 'string' },
    dueDate: { type: 'string', format: 'date' },
    status: {
      type: 'string',
      enum: ['draft', 'sent', 'paid', 'cancelled']
    },
    items: {
      type: 'array',
      items: {
        type: 'object',
        properties: invoiceItemBodySchema.properties
      }
    }
  }
}

export const getInvoiceByIdSchema: FastifySchema = {
  params: paramsInvoiceSchema,
  response: {
    200: invoiceResponseSchema
  }
}

export const deleteInvoiceSchema = {
  params: paramsInvoiceSchema
}

export const createInvoiceSchema = {
  body: createInvoiceBodySchema,
  response: {
    201: invoiceResponseSchema
  }
}

export const updateInvoiceSchema = {
  params: paramsInvoiceSchema,
  body: updateInvoiceBodySchema,
  response: {
    200: invoiceResponseSchema
  }
}

export const getInvoicesSchema = {
  querystring: queryInvoiceSchema,
  response: {
    200: {
      type: 'array',
      items: invoiceResponseSchema
    }
  }
}
