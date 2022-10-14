
const { MongoClient } = require( 'mongodb' );
const mongodb = require('mongodb');




const actualizar = (req, res) => {
    MongoClient.connect(process.env.MONGOATLAS, (err, db) => {
        const database = db.db(process.env.DATABASE)
        if (err) {
            console.log("Error al conectar a la base de datos", err);
        }
        else {
            const id = req.params.id;
            const ObjectId = mongodb.ObjectId;
            database.collection('productos').findOne({ _id: ObjectId(id) }, (err, result) => {
                if (err) {
                    console.log("Error en la conexión")
                }
                else {
                    const { nombre, marca, precio } = result;
                    res.render('actualizar', {
                        id : id,
                        nombre: nombre,
                        marca: marca,
                        precio: precio
                        
                    })
                }
            })
        }
    })
}


const actualizarPost = (req, res) => {
    MongoClient.connect(process.env.MONGOATLAS, (err, db) => {
        const database = db.db(process.env.DATABASE)
        if (err) {
            console.log("Error al conectar a la base de datos", err);
        }
        else {
            const validacion = "El producto se actualizó correctamente";
            const { nombre, marca, precio } = req.body;
            const id = req.params.id;
            const ObjectId = mongodb.ObjectId;


            database.collection('productos').findOne({ _id: ObjectId(id) }, { $set: { id, nombre, marca, precio } }, (error, result) => {
                error? console.log(error.message) : database.collection('productos').replaceOne({ _id: ObjectId(id) }, {  nombre, marca, precio  });
                res.render('actualizar', {
                validacion
                })
            })
        }
    })
}



module.exports = {
    actualizar,
    actualizarPost
}



