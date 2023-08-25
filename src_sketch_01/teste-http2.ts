import fastify from 'fastify'

const app = fastify({
  http2: true,
})

app.get('/', function (request, reply) {
  reply.code(200).send({ hello: 'world' })
})

app.listen({ port: 3000 })

// comando para fazer um get no servidor
// npx h2url http://localhost:3000
// o postman n possui suporte, para hhtp2, é necessário usar o insomnia

// 'use strict'

// const fs = require('fs')
// const path = require('path')
// const fastify = require('fastify')({
//   http2: true,
//   https: {
//     allowHTTP1: true, // fallback support for HTTP1
//     key: fs.readFileSync(path.join(__dirname, '..', 'https', 'fastify.key')),
//     cert: fs.readFileSync(path.join(__dirname, '..', 'https', 'fastify.cert'))
//   }
// })

// // this route can be accessed through both protocols
// fastify.get('/', function (request, reply) {
//   reply.code(200).send({ hello: 'world' })
// })

// fastify.listen(3000)

/*

HTTP/2, também conhecido como HTTP/2.0, é uma versão atualizada e aprimorada do protocolo HTTP (Hypertext Transfer Protocol) usado para a comunicação entre clientes (como navegadores da web) e servidores na internet. Ele foi desenvolvido para superar algumas das limitações e ineficiências do HTTP/1.1, que era a versão predominante antes do HTTP/2.

Algumas das principais melhorias do HTTP/2 incluem:

Multiplexação: No HTTP/1.1, os navegadores podiam abrir apenas um número limitado de conexões simultâneas para baixar recursos de um servidor. O HTTP/2 introduziu a multiplexação, permitindo que vários pedidos e respostas sejam transmitidos simultaneamente através de uma única conexão, reduzindo a latência e melhorando o desempenho.

Compactação de Cabeçalhos: Os cabeçalhos HTTP, que contêm informações sobre a solicitação ou resposta, eram frequentemente repetitivos e consumiam largura de banda. O HTTP/2 usa a compactação de cabeçalhos para reduzir o tamanho dessas informações, melhorando ainda mais a eficiência da transferência de dados.

Priorização de Requisições: No HTTP/2, é possível atribuir prioridades diferentes às solicitações, permitindo que os navegadores e servidores decidam a ordem de entrega mais importante. Isso ajuda a garantir que recursos críticos sejam entregues mais rapidamente.

Server Push: Uma das características marcantes do HTTP/2 é a capacidade do servidor de empurrar recursos ao cliente antes mesmo de serem solicitados. Isso pode melhorar significativamente o desempenho, permitindo que o servidor envie recursos adicionais que ele prevê que o cliente precisará.

TLS (Transport Layer Security) Encorajado: O HTTP/2 encoraja o uso de conexões seguras por meio do protocolo TLS, também conhecido como SSL. Isso garante uma camada adicional de segurança e é necessário para muitos recursos avançados do HTTP/2, como o Server Push.

No geral, o HTTP/2 foi projetado para tornar a navegação na web mais rápida e eficiente, melhorando o desempenho e a segurança das conexões entre clientes e servidores. Ele é amplamente adotado por muitos navegadores, servidores web e aplicativos para oferecer uma experiência melhor aos usuários na internet.

*/
