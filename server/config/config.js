// Puerto

process.env.PORT = process.env.PORT || 3000;

// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//Base de Datos

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb+srv://ronaldohl:I8S1WU34S9NJwZ1p@cluster0.14ckf.mongodb.net/cafe'
}


process.env.URLDB = urlDB;