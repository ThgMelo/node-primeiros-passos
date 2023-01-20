# NPM (Node Package Managger)

O [NPM](https://www.npmjs.com/) é um gerenciador de pacotes que faz parte do Node.js. Este permite compartilhar e reutilizar módulos desenvolvidos por terceiros.

## package.json
O **package.json** é um arquivo de configuração/informações técnicas para configurar dependências do projeto. Através dele conseguimos deixar calro uma "receita" para executar o projeto.
Ao transferir o projeto para uma outra máquina, não é necessário transportar toda pasta *node_modules*, pois com **package.json** o NPM consegue identificar as dependências do projeto.
Para configurar o projeto pasta digitar no terminal o comando `npm init`. Logo em seguida o assistente apresentará perguntas iniciais sobre o projeto.

## Instalando o módulo [lodash](https://www.npmjs.com/package/lodash)
Para instalar um módulo via NPM pasta digitar no terminal npm i (nome do módulo). Exemplo: `npm i lodash`

## Instalando o módulo [nodemon](https://www.npmjs.com/package/nodemon)
O nodemon é uma ferramenta para os desenvolvedores utilizarem enquanto o projeto estiver em desenvolvimento. O nodemon fica observando toda vez que um arquivo do seu projeto é alterado. Para instalar o nomemon apenas em ambiente de desenvolvimento basta digitar no terminal `npm i --save-dev nodemon`.
Para executar o nodemon basta digitar no terminal `npx nodemon ./index.js`. A partir desse momento o nodemon ficará observando cada alteração do arquivo index.js.