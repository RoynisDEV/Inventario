const express = require('express');
const router = express.Router();

router.get('/inventario',(req, res)=>{
    res.send('producto de inventario de la base de datos')
});

module.exports = router;