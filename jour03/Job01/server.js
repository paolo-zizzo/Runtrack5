const http = require('http');
http.createServer((request,response) => {

  response.writeHead(200, {
    'constant-Type': 'text/plain'
  });

  response.write('hello, Word\n');
  response.end();
}).listen(3000);
