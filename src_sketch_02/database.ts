import { knex as setupKnex, Knex } from 'knex'

export const config: Knex.Config = {
  // com esse comando, o objeto config precisa seguir o formato de configurações do Knex
  client: 'sqlite',
  connection: {
    filename: './db/app.db', // O path começa d eonde ta aaplicação e não de onde está o database.ts
  },
  useNullAsDefault: true, // sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning. (see docs https://knexjs.org/guide/query-builder.html#insert).
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
