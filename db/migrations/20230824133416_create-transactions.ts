/* eslint-disable prettier/prettier */
import { Knex } from 'knex'

// up é o que essa migration vai fazer no nosso BD
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transactions', (table) => {
    table.uuid('id').primary()
    table.text('title').notNullable()
    table.decimal('amount', 10, 2).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })
}

// down faz o contrario do que o up fez (comando chamado no roll back)
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions')
}
