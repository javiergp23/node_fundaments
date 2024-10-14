const express = require('express');
const app = express();

const port = 3000;

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname +'/views');

//midleware
app.use(express.static(__dirname + '/public'))

// app.use((req, res, next) => {
//     // res.status(404).sendFile(__dirname + "/public/404.html")
// })

app.get('/', (req, res) =>{
    res.render("index", {titulo: 'Ejemplo de Node JS'})
})
app.get('/servicio', (req, res) =>{
    res.send('Respuesta del server en la pagina de servicios')
})


app.listen(port, () => {
    console.log('Server running on port', port)
})