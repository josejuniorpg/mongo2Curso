"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _expressHandlebars = require("express-handlebars");

var _index_routes = _interopRequireDefault(require("./routes/index_routes"));

//es un midle
var app = (0, _express["default"])(); // settings

app.set("port", process.env.PORT || 3000); //Le digo que o lo mando al process porto(variable) oh al 3000

app.set("views", _path["default"].join(__dirname, "views"));
app.engine(".hbs", (0, _expressHandlebars.create)({
  layoutsDir: _path["default"].join(app.get("views"), "layouts"),
  partialsDir: _path["default"].join(app.get("views"), "partials"),
  defaulLayout: "main",
  extname: ".hbs"
}).engine);
app.set("view engine", ".hbs"); //middleware
//sirven para antes de que llegue las rutas de mi peticion

app.use((0, _morgan["default"])('dev')); //Al ejecutarlo recibe la propiedad dev

app.use(_express["default"].urlencoded({
  extended: false
})); // Trasforma a objeyo json
// use es de usar

/*import express from "express";
import exphbs from "express-handlebars"; //Condifuro expres para que sepa que uso handel
import indexRoutes from "./routes/index_routes"; //lo importo con un nombre
import path from "path"; //Modulo para concatenar directorios
const app = express(); //app es la aplicacion del servidor

app.set("views", path.join(__dirname, "views"));
app.engine(".hbs",
    exphbs({
        layoutsDir: path.join(app.get("views"), "layouts"),
        defaultLayout: "main",
        extname: ".hbs",
    })
);
app.set("view engine", ".hbs");

/*app.set('views', path.join(__dirname, 'views'));//Esto es porque expres no sabe donde esta la carpeta views
//dirname, sirve para acortar direcciones de carpetas
app.engine(
    ".hbs",
    exphbs({ //Aqui digo que motor de plantilla uso. Cambio el html por hbs
   layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",  //Aqui digo el modulo. para que sepa que termina en hbs
}));*/
//Routes

app.use(_index_routes["default"]); //static files  //Son los que puede acceder el buscador

app.use(_express["default"]["static"](_path["default"].join(__dirname, "public"))); //Estoy uniendo 2 directorios
//Con esto express sabe que la carpeta public se puede leer

var _default = app; //Exporto por defercto el objeto app
//!Este es codigo de applicacion!

exports["default"] = _default;