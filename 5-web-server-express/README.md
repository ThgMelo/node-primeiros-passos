# Web Server com Express

Express é um framework que fornece recursos para aplicativos web. 

## Primeiros Passos com Express
1. Instalando o gerador do Express
`npm i express-generator -g`
Com a flag **-g** o módulo será instalado globalmente, sem a necessidade de fazer o download para cada novo projeto.

2. Diretório para o servidor web
Ao digitar no terminal `express app` será criada a pasta **app** contendo os arquivos necessários.
Entrando na pasta /app (`cd app`) vemos que o arquivo **package.json** foi gerado. Agora é necessário fazer o download de todas as dependências do projeto com o comando `npm i`.

3. Executando o projeto.
Para executar basta digitar no terminal: `npm start`. O servido está sendo executado na porta 3000.

4. Instalando o nodemon
Antes de instalar o nodemon é necessário derrubar o servidor *(ctrl+c - no windows)*.
`npm i --save-dev nodemon` 

5. Mudança do arquivo de entrada padrão
**Alteração do arquivo package.son**
```json
"scripts": {
    "start": "node ./server"
  }
```
Isso fará com que o arquivo **server.js** se torne a porta de entrada da aplicação.
Após isso, retirar o arquivo **www** da pasta */bin* (a pasta /bin deve ser deletada), colocá-lo na pasta raiz do projeto e renomeá-lo para **server.js**
Após isso, subir novamento o servidor digitando no terminal: `npx nodemon`

## Template Engine - [nunjucks](https://www.npmjs.com/package/express-nunjucks)

Template engine serve para facilitar a criação de páginas HTML dinâmicas. Com template engine podemos utilizar recursos das linguagens de programação (for, if, case...).
O **Nunjucks** é um template engine que precisamos instalar os módulos de configuração digitando no terminal o comando `npm i nunjucks express-nunjucks -save`
O módulo do nunjucks deve ser importado no arquivo **app.js**.
