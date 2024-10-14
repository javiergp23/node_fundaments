const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) =>{
    res.send('Respuesta del server')
})
app.get('/servicio', (req, res) =>{
    res.send('Respuesta del server en la pagina de servicios')
})

app.use(express.static(__dirname + '/public'))

app.listen(port, () => {
    console.log('Server running on port', port)
})