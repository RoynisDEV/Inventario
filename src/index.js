const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const { urlencoded } = require('express');
const methodOverride = require('method-override');
const session = require('express-session')
//start
const app = express();


//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
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

// minuto 32:32

//global var
//routes 
app.use(require('./routes/index'));
app.use(require('./routes/inventario'));
app.use(require('./routes/user'));


//static files

//server en escucha
app.listen(app.get('port'), () =>{
    console.log('El server esta en el puerto',app.get('port'));
});
