const Users = require('../models/User');

exports.nuevoUser = async (req, res, next) => {

    const user = new Users(req.body);
    try {
        await user.save();
        res.json({
            message: 'Se agrego correctamente un nuevo alumno'
        });
    } catch (error) {
        res.send(error);
        next();
    }
}

exports.mostrarUsers = async (req, res, next) => {
    try {
        const usuarios = await Users.find({});
        res.json(usuarios);
    } catch (error) {
        res.send(error);
        next();
    }
}

exports.mostrarUser = async (req, res, next) => {
    const usuario = await Users.findById(req.params.idUser);
    if (!usuario) {
        res.json({ mensaje: 'El usuario no existe' });
    }
    res.json(usuario);
}

exports.actualizarUser = async (req, res, next) => {
    try {
        const usuario = await Users.findByIdAndUpdate({ _id: req.params.idUser },
            req.body, {
            new: true
        });
        res.json(usuario);
    } catch (error) {
        res.send(error);
        next();
    }
}

exports.eliminarUser = async (req, res, next) => {
    try {
        await Users.findOneAndDelete({ _id: req.params.idUser });
        res.json({ mensaje: 'El usuario ha sido eliminado' });
    } catch (error) {
        res.send(error);
    }
}