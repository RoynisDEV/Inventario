const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/inventario-db',{
   useCreateIndex: true,
   useNewUrlParser: true,
   useFindAndModify: false,
   useUnifiedTopology: true
}) 
    .then(db => console.log('la base de datos esta conectada'))
    .catch(err => console.error(err));
