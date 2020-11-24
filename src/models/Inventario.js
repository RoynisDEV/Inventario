const mongoose = require('mongoose');
const {Schema} = mongoose;

const InventarioSchema = new Schema({
    nombre: {type: String, required: true},
    cantidad: {type: Number, required: true },
    peso: {type: String, required: true},
    costo: {type: Number, required: true},
    costoTotal: {type: Number, required: true},
    descripcion:{type: String, },
    date:{type: Date, default:Date.now}
});
module.exports = mongoose.model('Inventario', InventarioSchema)