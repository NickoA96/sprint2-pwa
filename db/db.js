const mysql = require('mysql2');

//conectar con la base de datos
const conexion = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

conexion.connect((error) => {
    if(error){
        console.log(error);
    }else{
        console.log('Conectado a la base de datos');
    }
})

module.exports = conexion;
