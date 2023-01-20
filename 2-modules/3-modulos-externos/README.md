# Módulos externos

* Módulos externo podem ser instalados via npm, para instalar é necessário iniciar um projeto com: `npm init`.
* Com o projeto iniciado pasta instalar os módulos com `npm install <nome_do_modulo>`.
* Todos os módulos externos são salvos na pasta **node_modules**.

No exemplo em index.js foi instalado módulo [minimist](https://www.npmjs.com/package/minimist). Com esse módulo obtemos argumentos digitados no console.
Ao digitar no console `node index.js --nome=Thiago --profissao=Dev` será exibido **thiago Dev**.