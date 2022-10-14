
const MongoClient = require('mongodb').MongoClient;



// renderizar get producto
const productos = (req, res) => {
    res.render('productos', {
        titulo: 'Agregar producto',
})
    }




    
// conectar a mongo y agregar producto
const productosPost = (req, res) => {

    MongoClient.connect(process.env.MONGOATLAS, (err, db) => {
        const database =db.db(process.env.DATABASE)
        
        if (err) {
            console.log("Error al conectar a la base de datos", err);
        } else {
            let confirmacion = "Producto agregado con éxito"
            const {nombre, marca, precio}= req.body;

            database.collection ('productos').insertOne({nombre, marca, precio}, (err, result) => {
                if (err) {
                    console.log("Error en la conexión")
                } else {
                    res.render('productos', {
                        titulo: 'Agregar producto',
                        confirmacion
                    })
                }
            })
        }
    })
}




module.exports = {
    productos,
    productosPost,
}


