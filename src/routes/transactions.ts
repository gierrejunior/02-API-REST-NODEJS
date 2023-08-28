import { FastifyInstance } from 'fastify'
import { knex } from '../database'

// Criação de plugin com fastify
export async function transactionsRoutes(app: FastifyInstance) {
  // por regra os plugin do fastify, tem q ser uma função assincrona "async function"
  app.get('/select', async () => {
    const transaction = await knex('transactions').select('*')

    return transaction
  })
}
