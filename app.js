const http = require('node:http');
const server = http.createServer((req, res) => {
    res.end('respues a la solicitud');
})

const puerto = 3000;

server.listen(puerto, () => {
    console.log(`Server running on port ${puerto}`)
})