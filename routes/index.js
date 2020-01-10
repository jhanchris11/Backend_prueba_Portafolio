const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/userControllers');
module.exports = function () {


    router.post('/users',usuariosController.nuevoUser);
    router.get('/',usuariosController.mostrarUsers);
    router.get('/users/:idUser',usuariosController.mostrarUser);
    router.put('/users/:idUser',usuariosController.actualizarUser);
    router.delete('/users/:idUser',usuariosController.eliminarUser);
    return router;
}