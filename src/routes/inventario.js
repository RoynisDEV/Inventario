//requerimos objetos de los modulos
const express = require('express');
const router = express.Router();

//configuramos la rutas de las vistas 
router.get('/inventario',(req, res)=>{
    res.send('producto de inventario de la base de datos')
});

module.exports = router;