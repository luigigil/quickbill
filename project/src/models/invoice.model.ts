import { BaseModel } from "@models/base.model";

export interface InvoiceItem {
  description: string
  price: number
  quantity: number
}

export enum InvoiceStatus {
  Draft = 'draft',
  Sent = 'sent',
  Paid = 'paid',
  Cancelled = 'cancelled'
}

export interface Invoice extends BaseModel {
  number: string;
  dueDate: Date;
  status: InvoiceStatus;
  items: InvoiceItem[]
}
