const express = require('express');
const app = express();
//Importamos el modelo de usuario, es como una clase con las propiedades extras del moongose.model
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');

app.get('/usuario', (req, res) => {
    res.json('getUsuario')
});

app.post('/usuario', (req, res) => {
    let body = req.body;
    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });
    //Grabando en la bd de mongo
    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        //Para no devolver la contraseña encriptada
        // usuarioDB.password = null;

        //Si no se especifica el status, por defecto es el 200 
        res.json({
            ok: true,
            usuario: usuarioDB
        });

    })

});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;

    //mongoose js Schema
    Usuario.findByIdAndModify(id, body, { new: true, runValidators: true }, (err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            usuario: usuarioDB
        })
    })
});

app.delete('/usuario', (req, res) => {
    res.json('deleteUsuario')
});


module.exports = app;