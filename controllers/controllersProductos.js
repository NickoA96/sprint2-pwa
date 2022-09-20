
const conexion = require ('../db/db');

// renderizar get producto
const productos = (req, res) => {
    res.render('productos', {
        titulo: 'Agregar producto',
})
    }




    
// renderizar post producto
const productosPost = (req, res) => {
    const {nombre, marca, precio} = req.body;

    
        if(nombre == '' || marca == '' || precio == ''){
            let validacion = 'Rellene los campos correctamente..';
            res.render('productos', {
                titulo: 'Agregar producto',
                validacion
        })
        }else{
            let confirmacion = 'Producto agregado correctamente..';
            conexion.query('INSERT INTO m67m8dht55xhkbmc.productos SET ?', {nombre, marca, precio}, 
    (error, results) => {
            res.render('productos', {
                titulo: 'Agregar producto',
                confirmacion
            })
        }
    )}
    }



            
        



module.exports = {
    productos,
    productosPost,
}


