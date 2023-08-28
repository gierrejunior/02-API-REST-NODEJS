import 'dotenv/config' // ler o arquivo .env disponível, (na pasta raiz da aplicação) -> vai expor todos os valores de la em uma variavel global chamada "process.env"
import { z } from 'zod'

// process.env é um objeto logo no schema fica "z.object"

const envSchema = z.object({
  // schema é um formato de dado, será um schema pra todas ass variáveis de ambiente
  NODE_ENV: z.enum(['develop', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(), // se essa informação não poder vim vazia, receberia .nullable()
  PORT: z.number().default(3333), // informa q a porta é um número e se não tiver outro valor, o default é 3333
})

// o process. env vai passar pelo schema pra ser validado, se passar a variavel env vai receber process.env, senão dará uma msg de erro
const _env = envSchema.safeParse(process.env)
if (_env.success === false) {
  // Retorna falso se detectar algum erro na validação
  console.error('⚠️ Invalid enviroment variables! ⚠️', _env.error.format()) // mensagem de erro
  throw new Error('Invalid environmet variables!') // se houve algum erro, ele trava o processo e evita q o codigo continue rodando
}

export const env = _env.data // se chegou até aqui é pq passou na validação logo pode ser exportado para o uso
