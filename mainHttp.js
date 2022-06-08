const { sum } = require ('./helper');

const http = require('http');
const res = require('express/lib/response');

const server = http.createServer((req, res) => {
  res.end(`{ "message": "Hello World!",  "sum": ${sum(3,3)} }`);
})

const port = 3001;
console.log(`Service start at port ${port}`)
server.listen(port);
