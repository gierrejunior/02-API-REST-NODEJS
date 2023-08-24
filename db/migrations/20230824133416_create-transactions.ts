import { Knex } from 'knex'

// up é o que essa migration vai fazer no nosso BD
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transactions', (table) => {
    table.uuid('id').primary()
    table.text('title').notNullable()
  })
}

// down faz o contrario do que o up fez
export async function down(knex: Knex): Promise<void> {}
