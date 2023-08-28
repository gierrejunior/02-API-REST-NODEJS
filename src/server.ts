import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(transactionsRoutes) // chamando o plugin21

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server Running!')
  })
