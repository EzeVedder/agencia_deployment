const express = require('express');
const router = express.Router();

/** Controladores */
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController')

module.exports = function () {

    router.get('/', homeController.consultasHomePage);

    router.get('/nosotros', nosotrosController.infoNosotros);

    router.get('/viajes',viajesController.mostrarViajes);

    router.get('/viajes/:id',viajesController.mostrarViaje);

    router.get('/testimoniales', testimonialesController.mostrar);

    // Para llenar el form
    router.post('/testimoniales', testimonialesController.agregar)

    return router;
}