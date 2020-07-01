const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales')
exports.consultasHomePage = async (req, res) => {

        const viajes = await Viaje.findAll({limit: 3})
        const testimoniales = await Testimonial.findAll({limit: 3})

        // cuando la llave (viajes) y el valor (viajes) se llaman igual puedo pasar solamente la llave 
    res.render('index', {
        pagina: 'Próximos Viajes',
        clase: 'home',
        viajes,
        testimoniales
    })

}



/** TRABAJANDO CON PROMISES */

// exports.consultasHomePage = (req, res) => {
//     const promises = [];
//     promises.push(
//         Viaje.findAll({
//             limit: 3
//         }))
//     promises.push(
//         Testimonial.findAll({
//             limit: 3
//         }))

//     // pasar el promise y ejecutarlo
//     const resultado = Promise.all(promises);
    
//     resultado.then(resultado => res.render('index', {
//         pagina: 'Próximos Viajes',
//         clase: 'home',
//         viajes: resultado[0],
//         testimoniales: resultado[1]
//     }))
//     .catch(error => console.log(error))
// }