# Servidor WEB com node

* [Documentação](https://nodejs.org/api/http.html)

* A função `createServer()` recebe uma função de callback que conterá dois parâmetros (request e response), esses parâmetros são responsáveis por receber as solicitações de acesso às páginas web e de enviar respostas;

* `request.headers` / `request.method` / `request.url` recebem as propriedades da requisição.

* `if(request.url == '/teste')` permite apenas que localhost:3000/teste receba uma resposta do servidor

* `response.setHeader('Content-type', 'text/html')` configura a resposta do servidor no formato HTML;

* `response.end('<h1>Olá mundo</h1>')` é a resposta que o servidor deverá enviar;

* A função `listen()` recebe a porta que o servidor irá rodar;
