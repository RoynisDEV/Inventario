//requerimos objetos de los modulos
const express = require('express');
const moment = require('moment');
const { countDocuments } = require('../models/Inventario');
const router = express.Router();


//configuramos la rutas de las vistas 

const Inventario =require('../models/Inventario')
router.get('/inv/add',(req, res)=>{
    res.render('invent/new-invent.hbs');
});
router.post('/inv/new-item', async (req, res)=>{
    const {nombre ,cantidad, peso, costo, costoTotal, description}= req.body;
    const errors =[];
    if(!nombre){
        errors.push({text: 'Debe ingresar el nombre al producto'});
    }
    if(!cantidad){
        errors.push({text: 'debe ingresar el la cantidad '})
    }
    if(!peso){
        errors.push({text: 'Deve ingresar el peso'});
    }
    if(!costo){
        errors.push({text: 'Deve ingresar el costo'});
    }
    if(!costoTotal){
        errors.push({text: 'Deve ingresar el costo total'});
    }
    if(errors.length > 0){
        res.render('invent/new-invent.hbs',{
            errors,
            nombre,
            cantidad,
            peso,
            costo,
            costoTotal
        });
    } else{
        const newInventario = new Inventario({nombre, cantidad, peso, costo, costoTotal, description});
        await newInventario.save();
        res.redirect('/inv')
    }
    //console.log(req.body);
    
});
router.get('/inv',  async (req, res)=> {
    const inventa = await Inventario.find().sort({date:'desc'});
    res.render('invent/all-invent.hbs',{inventa});
    console.log(inventa);
    


});
router.get('/inv/edit/:id', async (req, res)=>{
    const inv = await Inventario.findById(req.params.id);
    res.render('invent/edit-invent.hbs',{inv});
})
router.put('/invent/edit-invent/:id', async (req, res)=>{
    const {nombre, cantidad, peso, costo,costoTotal} = req.body;
    await Inventario.findByIdAndUpdate(req.params.id,{nombre, cantidad, peso, costo, costoTotal});
    res.redirect('/inv')
})
router.delete('/inv/dlt/:id',async(req, res)=>{
    await Inventario.findByIdAndDelete(req.params.id);
    res.redirect('/inv')
})

module.exports = router;