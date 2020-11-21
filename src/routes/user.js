//requerimos objetos de los modulos 
const express = require('express');
const router = express.Router();

// configuracion de la rutas de la vistas 
router.get('/user/signin', (req,res)=>{
    res.render('user/ingresar.hbs');
});

router.get('/user/registro', (req,res)=>{
    res.render('user/registro.hbs');
});



module.exports = router;

