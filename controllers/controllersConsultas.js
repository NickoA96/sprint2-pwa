

const conexion = require ('../db/db');



const consultas = (req, res, next) => {
     let sql = 'SELECT * FROM m67m8dht55xhkbmc.productos ';

     conexion.query(sql,  (err, result) => {
         if (err) throw err;
    res.render('consultas', {
        
        result : result
    })
    })
}



module.exports = {
    consultas
};


