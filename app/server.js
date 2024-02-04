const http = require('http')
const querystring = require('querystring');

const Router = require("./core/Router");

const server =  http.createServer((req, res) => {
    const chunks = [];

    req.on('data', (chunk) => {
        chunks.push(chunk);
    })

    req.on('end', () => {
        req.body = Buffer.concat(chunks).toString();
        req.body = querystring.parse(req.body);
        new Router(req, res);
    })
})

app = server.listen(4000);
