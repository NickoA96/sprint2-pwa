

const MongoClient = require('mongodb').MongoClient;
const mongodb = require('mongodb');


const eliminar = (req, res) => {
    MongoClient.connect(process.env.MONGOATLAS, (err, db) => {
        const database = db.db(process.env.DATABASE)
        if (err) {
            console.log("Error al conectar a la base de datos", err);
        }
        else {
            const id = req.params.id;
            const ObjectId = mongodb.ObjectId;

            database.collection('productos').deleteOne({ _id: ObjectId(id) }, (err, result) => {
                if (err) {
                    console.log("Error en la conexión")
                }
                else {
                    res.redirect('/consultas')
                }
            })
        }
    })
}

module.exports = {
    eliminar,
}
