/* eslint-disable prettier/prettier */
import { table } from 'console'
import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('transactions', (table) => { // usa o alterTable para alterar a tabela transactions
    table.uuid('session_id').after('id').index() // cria uma coluna chamada session_id como uuid, e posiciona após a coluna id, com o comando after('id')e cria um indice
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('transactions', (table) => { // usa o alterTable para alterar a tabela transactions
    table.dropColumn('session_id') // dar Drop na coluna session_id criada no up
  })
}
