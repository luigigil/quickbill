import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    // Create the Invoices table
    .createTable('invoices', (table) => {
      table.uuid('id').primary();
      table.string('number').notNullable();
      table.date('dueDate').notNullable();
      table.enum('status', ['draft', 'sent', 'paid', 'cancelled'], {
        useNative: true,
        enumName: 'invoice_status'
      }).notNullable();
      table.timestamps(false, true);
      table.timestamp('deletedAt').nullable();
      table.string('createdBy').notNullable();
      table.string('updatedBy').nullable();
      table.string('deletedBy').nullable();
    })
    // Create the Invoice Items table
    .createTable('invoice_items', (table) => {
      table.increments(); // Primary key
      table.uuid('invoiceId').references('id').inTable('invoices').onDelete('CASCADE');
      table.string('description').notNullable();
      table.decimal('price', 10, 2).notNullable(); // Assuming a maximum of 10 digits and 2 decimal places
      table.integer('quantity').notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTableIfExists('invoice_items')
    .dropTableIfExists('invoices');
}

