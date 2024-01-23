//importa o módulo  http
const http = require('http');

const hostname = '127.0.0.1'; //configura o IP
const port = 3001; //configura a porta

//Utiliza o módulo http e chama função createServer
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

//Instancia do createServer e chama o método listens() que sobe o servido em uma ip e porta...
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
