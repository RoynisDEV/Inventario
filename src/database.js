//requerimos objeto de los modulos 
const mongoose = require('mongoose')

//configuramos la conneccion a la base de datos y otros configuracion extras 
mongoose.connect('mongodb+srv://root:megaarea321@cluster0.tetst.mongodb.net/inventario?retryWrites=true&w=majority',{
   //mongodb://localhost/inventario-db
   useCreateIndex: true,
   useNewUrlParser: true,
   useFindAndModify: false,
   useUnifiedTopology: true
}) 
    .then(db => console.log('la base de datos esta conectada'))
    .catch(err => console.error(err));
