//requerimos objetos de los modulos
const express = require('express');
const router = express.Router();

//configuramos la rutas de las vistas 

router.get('/inv/add',(req, res)=>{
    res.render('invent/new-invent.hbs')
});
router.post('/inv/new-item',(req, res)=>{
    console.log(req.body);
    res.send('ok');
});

module.exports = router;