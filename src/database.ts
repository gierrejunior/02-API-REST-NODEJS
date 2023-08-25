import 'dotenv/config' // ler o arquivo .env disponível, (na pasta raiz da aplicação) -> vai expor todos os valores de la em uma variavel global chamada "process.env"
import { knex as setupKnex, Knex } from 'knex'

console.log(process.env) // variavel global com os valores do arquivo .env
console.log(process.env.DATABASE_URL)

if (!process.env.DATABASE_URL) {
  // foi criado pois o typescript estava "reclamando" que a variavel process.env.DATABASE_URL poderia não existir
  throw new Error('DATABASE_URL  env not found')
}

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: process.env.DATABASE_URL, // informação contida no .env
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
