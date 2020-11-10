const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');
require('./config/config');

const app = express();
// const port = process.env.PORT || 3000;

// pase application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.json('Hola Mundo')
});

app.get('/usuario', (req, res) => {
    res.json('getUsuario')
});

app.post('/usuario', (req, res) => {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        })
    } else {
        res.json({ body })
    }
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({ id })
});

app.delete('/usuario', (req, res) => {
    res.json('deleteUsuario')
});

//Iniciando el servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto: ${process.env.PORT}`.green);
})