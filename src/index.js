const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const { urlencoded } = require('express');
const methodOverride = require('method-override');
const session = require('express-session');
const Handlebars = require('handlebars');
//nuevo modulo requerido
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

//coreccion del video en el min 1:29

//1:31
//inicializadores 
const app = express();
require('./database');





//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    //correcion del video
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout: 'main' ,
    layotsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials') ,
    extname: '.hbs'
}));
app.set('views engine', '.hbs');

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: true
}));



//global var
//routes 
app.use(require('./routes/index'));
app.use(require('./routes/inventario'));
app.use(require('./routes/user'));


//static files
app.use(express.static(path.join(__dirname, 'public')));

//server en escucha
app.listen(app.get('port'), () =>{
    console.log('El server esta en el puerto',app.get('port'));
});
