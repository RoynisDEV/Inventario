const express = require('express');
const router = express.Router();

router.get('/user/signin', (req,res)=>{
    res.send('Ingresando a la app');
});

router.get('/user/registro', (req,res)=>{
    res.send('formulario de registro');
});



module.exports = router;

