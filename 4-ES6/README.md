# ECMASCRIPT2015 - ES6

**ES6** é o padrão de linguagem de programação implementado pelo nova versão do JavaScript. Esse novo padrão adiciona algumas funcionalidades ao JavaScript.
Essas novas funcionalidades podem não funcionar em determinados navegadores ou no Node.js. Para funcionar é necessário um transpiler. 
A função do transpiler é transcrever o código para uma versão anterior.
O [Babel](https://babeljs.io/) é o transpile mais utilizado.

Após instalar as dependências, criamos o arquivo **.babelrc**, esse arquivo é responsável pelas configurações iniciais.
Em **.babelrc** colocamos as configurações:

```json
{
    "presets": ["es2015"]
}
```

O arquivo **main.js** será o arquivo principal que chamará todos os módulos da aplicação. Primeiro importamos o *babel-register* para fazer a transpilação e em seguida importamos os módulos a serem transpilados.

Ao executar no terminal `node main.js` as funções mod1() e mod2() que estão em server.js são executadas sem erro.