"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.MONGODB_URI = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)(); //Esto hace que cuando llame al archivo estp lea en .env

var MONGODB_URI = "mongodb://localhost:27017/crud-mongo" || 'mongodb://localhost/test'; //console.log(process.env.MONGODB_URI);
// se cambia el mongodb
//proces, sirve para acceder a variable en el proceso principal. Que es mi computador

exports.MONGODB_URI = MONGODB_URI;
var PORT = process.env.PORT || 4000;
exports.PORT = PORT;