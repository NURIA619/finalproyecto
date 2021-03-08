var createError = require('http-errors');
var express = require('express');
var mongodb = require('mongodb');
var bcrypt = require('bcrypt');


var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require ('cors');



// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var testAPIRouter = require("./routes/testAPI");
var paletas = require('./routes/paletas');

var app = express();
app.use(cors())
let MongoClient = mongodb.MongoClient;
let db;

app.use('/paletas', paletas);//llamamos al objeto paletassombrasdeojos a través de su ruta para su uso
// app.use('/ventas', ventas);


MongoClient.connect('mongodb://127.0.0.1:27017', function(err, client) {
    if(err !== null) {
        console.log(err);
    } else {
    app.locals.db = client.db('tiendamaquillaje')//conecto con nuestra base de datos 
    db = client.db("cifrado");//he puesto esto porque quiero poner una contraseña cifrada cuando se inscriban
}
});

// const app = express();

// app.get("/login/:name/:password", function (req, res){
//     let name= req.params.name;
//     let password= req.params.password;

//     let contraseniaCifrada = bcrypt.hashSync(password, 10);
//     console.log("contraseña cifrada:" + contraseniaCifrada);

//     let coincidencia = bcrypt.compareSync( passsword, contraseniaCifrada );
//     console.log(coincidencia);
//     if(coincidencia){
//         db.collection("usuarios").insertOne({username: name, password:
//         contraseniaCifrada}, function (err, userUpdate) {
//             // console.log(userUpdate);
//             if (err !== null) {
//                 res.send("Ha habido un error");
//             } else {
//                 if (userUpdate.result.n > 0) {
//                     res.send("Usuario creado");
//                 } else {
//                     res.send("El usuario no se ha podido crear" );
//                 }
//             }
//         })
//     }

// })

// app.get("/checkuser/:username/:password", function (req, res) {
//     let username = req.params.username;
//     let password = req.params.password;

//     db.collection("usuarios")
//         .find({ username: username })
//         .toArray(function (err, arrayUsuario) {
//             // console.log(arrayUsuario);
//             if (err !== null) {
//                 res.send("Ha habido un error");
//             } else {
//                 if (arrayUsuario.length > 0) {
//                     if (bcrypt.compareSync(password, arrayUsuario[0].password)
//                     ) {
//                         res.send("Logueado correctamente");
//                     } else {
//                         res.send("Contraseña incorrecta");
//                     }
//                 } else {
//                     res.send("El usuario no existe");
//                 }
//             }
//         });
// });




//--------------------AQUI INSTALAMOS EL MONGO Y HACEMOS LA CONEXION CON LA BASE DE DATOS----------------------------------------------




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

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
