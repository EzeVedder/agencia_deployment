const Testimonial = require('../models/Testimoniales')
exports.mostrar = async (req, res) => {
    const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
}

exports.agregar = async (req, res) => {
    // Validar que los campos esten completos
    let { nombre, correo, mensaje } = req.body;

    let errores = [];
    if (!nombre) {
        errores.push({ 'mensaje': 'Agrega tu Nombre' })
    }
    if (!correo) {
        errores.push({ 'mensaje': 'Agrega tu Correo' })
    }
    if (!mensaje) {
        errores.push({ 'mensaje': 'Agrega tu Mensaje' })
    }

    // Revisar errores
    if (errores.length > 0) {
        // arrojar errores 
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            testimoniales,
            errores,
            nombre,
            correo,
            mensaje
        })
    } else {
        // Almacenar en bd
        Testimonial.create({
            nombre,
            correo,
            mensaje
        }).then(testimonial => res.redirect('/testimoniales'))
            .catch(error => console.log(error));
    }

}


/** TRABAJANDO CON PROMISES */

// exports.mostrar = (req, res) => {
//     Testimonial.findAll()
//         .then(testimoniales => res.render('testimoniales', {
//             pagina: 'Testimoniales',
//             testimoniales
//         }))
// }

// exports.agregar = (req, res) => {
//     // Validar que los campos esten completos
//     let { nombre, correo, mensaje } = req.body;

//     let errores = [];
//     if (!nombre) {
//         errores.push({ 'mensaje': 'Agrega tu Nombre' })
//     }
//     if (!correo) {
//         errores.push({ 'mensaje': 'Agrega tu Correo' })
//     }
//     if (!mensaje) {
//         errores.push({ 'mensaje': 'Agrega tu Mensaje' })
//     }

//     // Revisar errores
//     if (errores.length > 0) {
//         // arrojar errores 
           Testimonial.findAll()
//              .then(testimoniales => res.render('testimoniales', {
//             testimoniales: '',
//             errores,
//             nombre,
//             correo,
//             mensaje
//         })
//     } else {
//         // Almacenar en bd
//         Testimonial.create({
//             nombre,
//             correo,
//             mensaje
//         }).then(testimonial => res.redirect('/testimoniales'))
//             .catch(error => console.log(error));
//     }

// }