var createError = require('http-errors');
var express = require('express');
var mongodb = require('mongodb');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require ('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");

var app = express();
let MongoClient = mongodb.MongoClient;

app.use('/paletassombrasdeojos', paletassombrasdeojos);//llamamos al objeto paletassombrasdeojos a través de su ruta para su uso
app.use('/ventas', ventas);

app.use(express.static('public'));

MongoClient.connect('mongodb://127.0.0.1:27017', function(err, client) {
    if(err !== null) {
        console.log(err);
    } else {
    app.locals.db = client.db('tiendamaquillaje')//conecto con nuestra base de datos       
}
});

app.listen(3000);//ponemos el servidor a escucha en un puerto
//AQUI INSTALAMOS EL MONGO Y HACEMOS LA CONEXION CON LA BASE DE DATOS----------------------------------------------
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
