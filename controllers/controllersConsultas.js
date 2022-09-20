

const conexion = require ('../db/db');



const consultas = (req, res) => {
     let sql = 'SELECT * FROM m67m8dht55xhkbmc.productos ';

     conexion.query(sql,  (err, result) => {
         if (err) throw err;
    res.render('consultas', {
        titulo: 'Listado de Producto',
        result
    })
    })
}



module.exports = {
    consultas
};


const conexion = require ('../db/db');



 consultas = (req, res) => {
     let sql = 'SELECT * FROM productos ';

     conexion.query(sql,  (err, result) => {
         if (err) throw err;
    res.render('consultas', {
        titulo: 'Listado de Producto',
        result
    })
    })
}



module.exports = {
    consultas
};

