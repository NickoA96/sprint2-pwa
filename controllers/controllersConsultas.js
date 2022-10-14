

const { MongoClient } = require( 'mongodb' );



// conectar a mongo y obtener datos
const consultas =  (req, res) => {
 MongoClient.connect(process.env.MONGOATLAS, (err, db) => {
    const database = db.db(process.env.DATABASE)
    if (err) {
        console.log("Error al conectar a la base de datos", err);
    }
    else {
        database.collection('productos').find({}).toArray((err, result) => {
            if (err) {
                console.log("Error en la conexión")
            }
            else {
                res.render('consultas', {
                    result : result
                })
            }
        })
    }
})
}



module.exports = {
    consultas,
}
