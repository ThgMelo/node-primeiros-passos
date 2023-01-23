# Web Server com Express

Express é um framework que fornece recursos para aplicativos web. 

## Instalando o gerador do Express
`npm i express-generator -g`
Com a flag **-g** o módulo será instalado globalmente, sem a necessidade de fazer o download para cada novo projeto.

## Diretório para o servidor web
Ao digitar no terminal `express app` será criada a pasta **app** contendo os arquivos necessários.
Entrando na pasta /app (`cd app`) vemos que o arquivo **package.json** foi gerado. Agora é necessário fazer o download de todas as dependências do projeto com o comando `npm i`.

## Executando o projeto.
Para executar basta digitar no terminal: `npm start`. O servido está sendo executado na porta 3000.

## Instalando o nodemon
Antes de instalar o nodemon é necessário derrubar o servidor *(ctrl+c - no windows)*.
`npm i --save-dev nodemon` 

## Mudança do arquivo de entrada padrão
**Alteração do arquivo package.son**
```json
"scripts": {
    "start": "node ./server"
  }
```
Isso fará com que o arquivo **server.js** se torne a porta de entrada da aplicação.
Após isso, retirar o arquivo **www** da pasta */bin* (a pasta /bin deve ser deletada), colocá-lo na pasta raiz do projeto e renomeá-lo para **server.js**
Após isso, subir novamento o servidor digitando no terminal: `npx nodemon`