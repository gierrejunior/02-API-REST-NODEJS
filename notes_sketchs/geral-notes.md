necessário instalar o type script:

    npm i -D typescript   ou  npm install --save-dev typescript

"
O comando "npm i -D" é uma abreviação de "npm install --save-dev", que é usado no Node.js e no gerenciamento de pacotes npm para instalar um pacote como uma dependência de desenvolvimento em um projeto.

Quando você usa "npm install --save-dev", o pacote é listado no arquivo "package.json" sob a seção de "devDependencies". Isso significa que o pacote é necessário apenas durante o desenvolvimento do projeto, e não é necessário para a execução do projeto em produção. Geralmente, pacotes de desenvolvimento incluem ferramentas de teste, linters, bundlers e outras dependências que auxiliam no processo de desenvolvimento, mas que não afetam diretamente o código em produção.
"


    npx tsc --init   ou ./node_modules.bin/tsc

"
O comando "npx tsc --init" é usado para inicializar um projeto TypeScript. Vamos quebrar a explicação em partes:

npx: É uma ferramenta que permite executar pacotes do npm que não estão instalados globalmente. Ele também é útil para executar comandos de pacotes temporários sem a necessidade de instalá-los globalmente ou localmente.

tsc: É o compilador TypeScript. Ele converte o código TypeScript em código JavaScript que pode ser executado no navegador ou em ambientes Node.js.

--init: É uma opção que indica ao compilador TypeScript para criar um arquivo de configuração chamado "tsconfig.json". Este arquivo contém várias opções de configuração para o compilador, permitindo personalizar como o TypeScript será compilado e comportará no projeto.

Portanto, quando você executa o comando "npx tsc --init", você está instruindo o compilador TypeScript a criar um arquivo de configuração "tsconfig.json" no diretório atual do projeto. Esse arquivo pode ser posteriormente editado para ajustar as configurações de compilação de acordo com as necessidades do projeto.
"


  No arquivo tsconfig.json, alterar:

    "target": "ES2016" -> "target": "ES2020"

  Assim poderemos usar as funcionalidades atuaius do NODEJS

"
No arquivo tsconfig.json do TypeScript, a opção "target" especifica para qual versão do ECMAScript (ES) o código TypeScript deve ser compilado. O ECMAScript é o padrão no qual o JavaScript é baseado e é atualizado periodicamente com novas funcionalidades e melhorias.

No caso específico de "target": "ES2020", isso significa que o compilador TypeScript irá gerar código JavaScript compatível com o padrão ECMAScript 2020. Isso inclui todas as funcionalidades e sintaxes introduzidas até a versão ES2020. Qualquer recurso ou sintaxe introduzida em versões posteriores do ECMAScript não será incluído no código gerado.

Ao definir o "target" para uma versão específica do ECMAScript, você está controlando o nível de compatibilidade do código gerado, garantindo que o JavaScript resultante seja executado corretamente nos ambientes que suportam essa versão do ECMAScript.
"


Para compilar um arquivo typescript(.ts) -> para javascript(.js) usamos o comando

    npx tsc "caminho/arquivo.ts"  ex: npx tsc src/index.ts

após o comando acima, será criado um arquivo .js, oq ual podemos executar, através co comando

    node "caminho/arquivo.js"   ex: node src/index.js



para instalar o framework fastify:

    npm i fastify 

"
O Fastify é um framework web de alto desempenho para Node.js, projetado para construir APIs e aplicativos web 
de forma rápida e eficiente, com baixa sobrecarga e suporte a recursos assíncronos.
"


instalar pacote @types/node, para poder utilizar sem problemas o typescript no node -> Deve ser instalado como dependecia de desenvolvimento


    npm install -D @types/node    ou    npm i --save-dev @types/node


"
O comando "npm install -D @types/node" instala os tipos de declaração (definições de tipos) para o Node.js como uma dependência de desenvolvimento em um projeto TypeScript.

O pacote "@types/node" contém as definições de tipos que permitem ao TypeScript entender e verificar corretamente os tipos associados às APIs e funcionalidades do Node.js. Isso é especialmente importante quando se trabalha com TypeScript em projetos Node.js, pois permite que o compilador entenda as estruturas de dados, métodos e outras características do Node.js, melhorando a verificação de tipos e a detecção de erros durante o desenvolvimento.

Ao usar essas definições de tipos, você obtém sugestões de código mais precisas, detecção de erros em tempo de desenvolvimento e um desenvolvimento mais suave ao lidar com as bibliotecas e módulos do Node.js no ambiente TypeScript.
"

O tsx ele é uma ferramenta que facilita o desenvolvimento, e é recomendado que seja usado somente em desenvolvimento, até pq é menos performatico

    npm install tsx -D

ele serve para executar um arquivo .ts de forma direta, sem a necessidade de converter antes e depois executar (apesar de por trás dos panos, ser isso que ele faz),
em vez de usar:

    npx tsc "caminho/arquivo.ts" 
    npx tsc src/index.ts -> converte (cria um novo arquivo .js)

    node "caminho/arquivo.js"   
    node src/index.js -> executa

usa somente o:

    npx tsx "caminho/arquivo.ts"  

    npx tsx src/index.ts -> converte e executa de uma só vez (não cria um novo arquivo .js)


assim como o existe o comando node --watch "caminho/arquivo.js" que reinicia os ervido aplicando qualquer nova alteração, o tsx tambem possui o comando watch:

    npx tsx watch "caminho/arquivo.ts"

    npx tsx watch "src/index.ts"

como medir o tempo de execução de um comando, coloca o comando time na frende do comando que será executado. Exs: 

    time node src/server.js

    time npx tsx src/server.ts


comando para fazer requisições simples, direto do terminal usando o httpie ex:

    http "metodo http" "URL"

    http GET localhost:3333/hello


ESlint

O ESLint é uma ferramenta amplamente utilizada no desenvolvimento de JavaScript para ajudar a identificar e corrigir problemas no código-fonte. Ele funciona analisando o código-fonte para detectar padrões e práticas que possam ser problemáticos, violações de estilo, erros potenciais e outros problemas que possam afetar a qualidade, legibilidade e manutenção do código.

O principal objetivo do ESLint é automatizar a revisão do código, ajudando os desenvolvedores a seguir as melhores práticas e a manter um código mais consistente e livre de erros. Ele pode ser configurado com regras personalizadas para se adequar ao estilo de codificação e aos padrões específicos de um projeto.

Alguns exemplos de coisas que o ESLint pode verificar incluem:

Uso adequado de variáveis e escopo.
Espaços em branco e formatação.
Uso de ponto e vírgula.
Uso de declarações não utilizadas.
Uso de recursos obsoletos.
Convenções de nomenclatura.
E muitos outros aspectos do código.
Os resultados do ESLint são normalmente exibidos no terminal ou integrados diretamente em ambientes de desenvolvimento, como editores de código ou IDEs, facilitando a correção de problemas conforme o código é escrito. O uso do ESLint ajuda a melhorar a qualidade do código, a produtividade da equipe e a manutenção a longo prazo do software.


    npm i eslint -D

    npm i eslint @rocketseat/eslint-config -D

npm i eslint @rocketseat/eslint-config -D essecomando serve para utilizar uma configuração padrão criada pela própria rocketseat
depois criamos um arquivo e nomeamos como:

    .eslintrc.json

e colamos dentro dele o objeto abaixo

    {
    "extends" :[
        "@rocketseat/eslint-config/node"
    ]
    }

comoe stamos usando o node ficará /node, se fosse react, seria /react e asism por diante

depois instalamos o plugin      ESLint       no VScode
abre o settings.json no VScode e colamos o código abaixo

    "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }

outros comandos eslint

    npx eslint src --ext .ts

vai verificar se á algum erro de padronização nos arquivos com exttensão .ts

    npx eslint src --ext .ts --fix

vai verificar se á algum erro de padronização nos arquivos com exttensão .ts
e corrigilos automaticamente

o npx pois fois instalado como dependencias de desenvolvimento

