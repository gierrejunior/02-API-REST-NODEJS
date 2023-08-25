sqlite é um banco relacional.

formas de se comunicar com o BD:

DRIVER NATIVO: 

Algumas linguagens de programação possuem drivers nativos que permitem a comunicação direta com um banco de dados específico. Por exemplo, o MySQL para Node.js possui o pacote mysql2, que é um driver nativo para se comunicar com bancos de dados MySQL. É bem "cru", é o nivel mais baixo de se comunmicar com o BD

ex:

    // get the client
    const mysql = require('mysql2');

    // create the connection to database
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'test'
    });

    // simple query
    connection.query(
      'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
      function(err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
      }
    );

    // with placeholder
    connection.query(
      'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
      ['Page', 45],
      function(err, results) {
        console.log(results);
      }
    );


QUERY BUILDER:

Claro, um Query Builder é uma ferramenta que ajuda a criar consultas de banco de dados de forma programática, sem escrever diretamente SQL. Ele oferece métodos para construir consultas de maneira legível e segura, ajudando a evitar erros e simplificando a manutenção. É útil para lidar com consultas complexas e pode ser usado em várias linguagens de programação.
No caso do Node o knex.js é um dos querybuilders mais famosos, 


ORM (Object-Relational Mapping):

É uma técnica que mapeia objetos de uma aplicação para registros em um banco de dados relacional, permitindo interagir com o banco de dados usando objetos da linguagem de programação.




usaremos o KNEX.JS

instala o knex

    npm install knex

instala o knex junto cxom os drivers do sqlite que será usado nessa aplicação

    npm install knex sqlite3


  MIGRATIONS: (é como se fosse o GIT  para BDs)
  
  Migrações são scripts que descrevem alterações na estrutura de um banco de dados ao longo do tempo. Elas permitem criar, modificar ou excluir tabelas, colunas e outros elementos do banco de dados de maneira controlada e consistente, mantendo um histórico de mudanças. Migrações são essenciais para manter o esquema do banco de dados sincronizado com as evoluções do aplicativo, colaborar em equipe e implantar atualizações de forma segura.


  após a criação do database, criamos um arquivo na raíz do projeto chamado knexfile (por padrão ele é .js), Como criamos o arquivo em .ts em vez de js.
  teremos q usar o código

    npx node --loader tsx ./node_modules/.bin/knex

  com o código acima conseguimos executar os comandos knex, em arquivos .ts usando o tsx.
  sabendo que utilizamos o código abaixo para criar o migrations usando knex

    knex migrate make + "name-table"

    knex migrate:make create-documents

porém pra usarmos o tsx é necessário unir os códigos, ficando como:

    npx node --loader tsx ./node_modules/.bin/knex migrate:make create-documents

também ha sempre a possibilidade de usar um alias, utilizando os scripts no package.json como por exemplo

    "scripts":{
      "knex": "node --loader tsx ./node_modules/.bin/knex"
    }

assim podemos usar  o comando:

    npm run knex -- migrate:make create-documents

uma das vantagens do knex é justamente, conseguir trocar de BD, sem precisar alterar o Código da aplicação


executa a ultima migration em knex (após ter adicionado o scripts acima)

    npm run knex -- migrate:latest
    ou
    npx node --loader tsx ./node_modules/.bin/knex migrate:latest

comando apra desfazer a migration

    npm run knex -- migrate:rollback
    ou
    npx node --loader tsx ./node_modules/.bin/knex migrate:rollback

as migrations podem ser usadas para alterar ou adicionar campos em vez de tabelas inteiras

