import knex from 'knex';
import db from '@config/database';
import { Invoice, InvoiceItem } from '@/models/invoice.model';
import { v4 as uuidv4 } from 'uuid';

export class InvoiceService {
  private db: knex.Knex;

  constructor(db: knex.Knex) {
    this.db = db;
    console.log('Invoice Service constructor');
  }

  async fetchInvoices(): Promise<Invoice[]> {
    try {
      const invoices = await this.db.select<Invoice[]>('*').from('invoices');
      return invoices;
    } catch (error) {
      throw new Error(`Error fetching invoices: ${error}`);
    }
  }

  async fetchInvoiceById(id: string): Promise<Invoice | null> {
    try {
      const invoice = await this.db
        .select<Invoice>('*')
        .from('invoices')
        .where('id', id)
        .first();

      if (invoice == null) {
        return null;
      }

      const invoiceItems = await this.db
        .select<InvoiceItem[]>('description', 'price', 'quantity')
        .from('invoice_items')
        .where('invoiceId', id);

      const invoiceWithItems: Invoice = {
        ...invoice,
        items: invoiceItems
      }

      return invoiceWithItems;
    } catch (error) {
      throw new Error(`Error fetching invoice: ${error}`);
    }
  }

  async deleteInvoice(id: string): Promise<string | null> {
    try {
      const invoice = await this.db.select<Invoice>('*').from('invoices').where('id', id).first();

      if (invoice == null) {
        return null;
      }

      await this.db.table('invoices').where('id', id).del();
      return invoice.id as string;
    } catch (error) {
      throw new Error(`Error deleting invoice: ${error}`);
    }
  }

  async createInvoice(invoice: Invoice): Promise<Invoice | null> {
    try {
      const newInvoice = await this.db
        .table('invoices')
        .insert<Invoice>({
          id: uuidv4(),
          number: invoice.number,
          dueDate: invoice.dueDate,
          status: invoice.status,
          createdBy: 'admin',
          updatedBy: 'admin'
        })
        .returning('*');

      const itemsToCreate = invoice.items.map((item) => {
        return {
          invoiceId: newInvoice[0].id,
          description: item.description,
          price: item.price,
          quantity: item.quantity
        };
      });

      const newItems = await this.db
        .table('invoice_items')
        .insert(itemsToCreate).returning(['description', 'price', 'quantity']);

      const newInvoiceWithItems: Invoice = {
        ...newInvoice[0],
        items: newItems
      }

      return newInvoiceWithItems;
    } catch (error) {
      throw new Error(`Error creating invoice: ${error}`);
    }
  }

  async updateInvoice(invoice: Invoice): Promise<Invoice> {
    try {
      const updatedInvoice = await this.db
        .table('invoices')
        .update<Invoice>({
          number: invoice.number,
          dueDate: invoice.dueDate,
          status: invoice.status,
          updatedBy: 'admin',
          updatedAt: new Date()
        })
        .where('id', invoice.id)
        .returning('*');

      return updatedInvoice[0];
    } catch (error) {
      throw new Error(`Error updating invoice: ${error}`);
    }
  }
}

// Singleton
const $InvoiceService = new InvoiceService(db);

export { $InvoiceService };
