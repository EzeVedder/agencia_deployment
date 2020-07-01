// Importar Express
const express = require('express');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');
const configs = require('./config')


require('dotenv').config({path: 'variables.env'})

// db.authenticate()
//     .then(()=> console.log('DB Conectada'))
//     .catch(error => console.log(error))

// Configurar Express
const app = express();

// Habilitar pug
app.set('view engine', 'pug');

// Añadir las vistas
// __dirname retorna la carpeta actual
app.set('views',path.join(__dirname,'./views'));


// Cargar una carpeta estatica llamada public
app.use(express.static('public'));

// Validar si estamos en desarrollo o produccion
const config = configs[app.get('env')];

// Creamos la variable para el sitio web
app.locals.titulo = config.nombresitio;


// Muestra el año actual y genera la ruta
app.use((req,res,next) => {
    // Crear nueva fecha 
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear
    ();
    res.locals.ruta = req.path;
    //console.log(res.locals);
    return next();
})


// Ejecutamos el body-parser
app.use(bodyParser.urlencoded({extended: true}))


// Cargar las rutas
app.use('/', routes());

/** Puerto y host para la app */
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port,host, () => {
    console.log('El servidor esta funcionando');
});
