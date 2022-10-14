const mongodb = require('mongodb');

const MongoClient =mongodb.MongoClient;
// const MONGOLOCAL = process.env.MONGOLOCAL;
const DATABASE = process.env.DATABASE;
const MONGOATLAS = process.env.MONGOATLAS;


//conectar a mongo
const conexion = async () => {
    try {
        const client = await mongodb.connect(MONGOATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        return client.db(DATABASE);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    conexion,
    MongoClient,
    mongodb,
}
