const fs = require("fs");

function lerArquivo(pathArquivo) {
  //Lendo conteúdo do arquivo..., se não for informado o enconding, será retornado em formato de buffer,
  //inserindo o endoding, 'utf-8'
  fs.readFile(pathArquivo, "utf-8", (err, data) => {
    if (err) {
      console.log("Erro ao ler o arquivo!");
      return;
    }
    console.log("Conteúdo:", data);
  });
}

const data = "O segundo conteúdo";

function escreverArquivo(pathArquivo, conteudo) {
  fs.writeFile(pathArquivo, conteudo, "utf-8", (err) => {
    if (err) {
      console.log("Erro ao escrever no arquivo!", err);
      return;
    }
    console.log("Conteúdo inserido com Sucesso!!!");
  });
}

module.exports = { lerArquivo, escreverArquivo };

