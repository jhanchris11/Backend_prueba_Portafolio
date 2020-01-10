const express = require('express');
const Users = require('./routes');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');
const port =  5000;

//Conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/pruebaPortafolio', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})

//Crear el servidor
const app = express();

//Habiliar bodyparser
app.use(bodyParser.json());
//Para leer los valores que son leidos por postman
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

//Rutas de la app
app.use('/', Users());

//Puerto
app.listen(port, () => {
    console.log('Server is running on port '+port);
});