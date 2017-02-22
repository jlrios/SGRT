var express = require("express");
var app = express();
var http = require("http").Server(app);

var port = process.env.PORT || 8080;

// Establecer la carpeta para las vistas y el engine para las mismas.
app.set("views", __dirname + "/app/views");
app.set("view engine", "jade");

// Se le indica a express que debe utilizar el directorio public.
app.use(express.static(__dirname + '/public'));

// Carga de rutas.
require("./app/routes")(app);

http.listen(port, function() {
  console.log("SGRT por el puerto *:8080...");
});
