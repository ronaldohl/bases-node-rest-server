const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');
const bodyParser = require('body-parser');
require('./config/config');

const app = express();
// const port = process.env.PORT || 3000;

// pase application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.use(require('./routes/usuario'));


app.get('/', (req, res) => {
    res.json('Hola Mundo')
});



//Conexion a db mongo
//Nuevos argumentos que pide para quitar warnings, video107
mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err, res) => {
    if (err) throw err;
    console.log("Base de datos Mongo Online".green);
});




//Iniciando el servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto: ${process.env.PORT}`.green);
})