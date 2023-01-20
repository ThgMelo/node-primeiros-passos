# Exportando e importando módulos com o padrão ES6 (ESM)

A partir do ES6 o JavaScript implementou o suporte real à modularidade como parte da linguagem, usando as palavras-chave import e export.

> Atenção: Para utilizar o ESM é necessário adicionar a propriedade type: module no arquivo package.json

Para criar o packge.json:
```sh
npm init
```

Exemplo de como deve ficar o packge.json
```json
{
  "name": "modulos-es6",
  "version": "1.0.0",
  "description": "Exportando e importando módulos com o padrão ES6 (ESM)",
  "main": "index.js",
  "author": "Thiago Melo <es.thg.melo@gmail.com>",
  "type": "module"
}
```

[Recomendação de Leitura](https://www.alura.com.br/artigos/guia-importacao-exportacao-modulos-javascript)