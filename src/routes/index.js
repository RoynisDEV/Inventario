//requerimos objetos de los modulos
const express = require('express');
const router = express.Router();

//configuramos la rutas de vistas 
router.get('/', (req, res) =>{
    res.render('index.hbs');
});


router.get('/About',(req, res)=>{
    res.render('about.hbs');
});

module.exports = router;