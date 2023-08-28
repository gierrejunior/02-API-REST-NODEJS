Um arquivo .env é um arquivo de configuração usado para armazenar variáveis de ambiente em um projeto. Variáveis de ambiente são valores que o software utiliza para funcionar, como senhas, chaves de API e configurações. O arquivo .env mantém essas informações fora do código-fonte, tornando-o mais seguro e flexível. O software pode ler essas variáveis para se ajustar automaticamente às diferentes situações e ambientes.

As variáveis de ambiente podem ser acessadas pelo código do aplicativo ou script para configurar seu comportamento. No entanto, é importante notar que as variáveis de ambiente armazenadas em um arquivo .env não são carregadas automaticamente. É necessário um processo ou biblioteca para ler essas variáveis e torná-las disponíveis para o código.

Para carregar as variáveis de ambiente de um arquivo .env, muitos projetos utilizam bibliotecas ou pacotes que facilitam esse processo. Alguns exemplos populares incluem o pacote dotenv para JavaScript/Node.js e a ferramenta python-dotenv para Python.

O uso de variáveis de ambiente e arquivos .env é importante por razões de segurança, pois permite que você mantenha informações sensíveis (como chaves de API, senhas de banco de dados etc.) fora do código-fonte, reduzindo o risco de exposição acidental de informações confidenciais. Além disso, ele facilita a configuração do aplicativo em diferentes ambientes (desenvolvimento, teste, produção) sem a necessidade de alterar o código.


-> Criar o arquivo .env

-> Instalar o módulo "DotENV" no VSCode

-> instalar a biblioteca dotenv
    npm i dotenv

no .env vai as variaveis de ambiente, e por conter informações sensiveis, colocamos no .gitignore, porém por convenção, criamos o arquivo .env.example, onde colocamos informaçãoes não sensiveis ou pelo menos os nomes das variaveis utilizadas, facilitando para quem for usar o código futuramente

-> criar .env.example (que pode subir no git)

como estamos trabalhando cm typescript, ele da erro se passarmos as informações do .env de forma direta, por causa da tipagem, logo faremos um procedimento para evitar esse tipo de problema, intalar o ZOD que é uma biblioteca especifica para validação de dados, pode ser usado até para validar dados vindo do frontend.

-> instalar a biblioteca ZOD 'Ajoelhe-se perante zod' kkk

    npm i zod



