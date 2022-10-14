
const express = require('express');
require ('dotenv').config();
const path = require('path');
const hbs = require('hbs');
const methodOverride = require('method-override');


const app = express();
const PORT = process.env.PORT || 8080;




//Configurar Middelwares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

//Configuración del Motor de plantillas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));






//configuracion rutas
var indexRouter = require('./routes/principal');
var productoRouter = require('./routes/productos');
var consultasRouter = require('./routes/consultas');
var eliminarRouter = require('./routes/eliminar');
var actualizarRouter = require('./routes/actualizar');



app.use('/', indexRouter);
app.use ('/productos', productoRouter);
app.use ('/consultas', consultasRouter);
app.use ('/eliminar', eliminarRouter);
app.use ('/actualizar', actualizarRouter);


module.exports = app;




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



