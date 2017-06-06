var express = require('express');
var app = express();

var http = require('http').Server(app);
var port = process.env.PORT || 8080;

var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var dataBase = require('./config/database');

// Establecer la carpeta para las vistas y el engine para las mismas.
app.set("views", __dirname + "/app/views");
app.set("view engine", "jade");

// Se le indica a express que debe utilizar el directorio public.
app.use(express.static(__dirname + "/public"));

// Conectarse a la base de datos.
mongoose.connect(dataBase.url);

require("./config/connect")(passport);

app.use(logger("dev"));
app.use(cookieParser());

app.use(bodyParser.urlencoded({
  extended:true
}));

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: "1nY0urR00m$#!"
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// Carga de rutas.
require("./config/routes")(app, passport);

http.listen(port);
console.log("SGRT por el puerto *:8080...");
