import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

// GET, POST, PUT, PATCH, DELETE
/*
  app.get()
  app.post()
  app.put()
  app.patch()
  app.delete()
*/

// Criando uma primeira rota -> http://localhost:3333/hello

// -> "/hello" é o recurso é o que vem depois do endereço
app.get('/hello', async () => {
  const tables = await knex('sqlite_schema').select('*') // tabela universal que vem em todo bd sqlite
  return tables
})

// passa um objeto, com o atributo port: e o numero da porta para ouvir
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server Running!')
  })
// quando a promises tiver terminado, ele segue o comando após o then q no caso é o console.log
