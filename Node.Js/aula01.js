//importando o modulo path nativo do Node.js
// require vem do commonJs, como importar e exportar módulos... (Arquivos)

var path = require('path');

var filename = path.basename('/teste/test.js');

console.log('Nome do Arquivo: ', filename);

var folder = path.dirname('./teste.js');

console.log('Nome do Arquivo: ', folder);

var fs = require('fs');

