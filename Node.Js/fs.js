const fs = require('fs');
const moduloArquivo = require('./exercicio01');

moduloArquivo.lerArquivo('./BackEnd/Node.Js/text.txt');
moduloArquivo.escreverArquivo('./BackEnd/Node.Js/text.txt', 'O segundo conteúdo');

