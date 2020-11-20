//requerimos objetos de los modulos
const express = require('express');
const router = express.Router();

//configuramos la rutas de vistas 
router.get('/', (req, res) =>{
    res.send('Index');
});


router.get('/About',(req, res)=>{
    res.send('About');
});

module.exports = router;