"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

//Las mayuscialas es referencia a modelo de dato
//schema dice que quiero guardar. Campos que quiero guardar
//model coloca nombre a el conjunto de propiedades.NOmbre
var taskSchema = new _mongoose.Schema({
  //Esta funcion recibe un objeto como parametro
  title: {
    // Hago que si o si siempre tenga el titulo. Y le agrego mas propuedades
    type: String,
    require: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    require: true
  },
  done: {
    type: Boolean,
    "default": false // Sirve para decir que si tengo tareas pendientes

  }
}, {
  //MOngose me da este obejto para las fechas
  timestamps: true,
  versionKey: false //Esto es configuracion extra. Es para que no agregue la liene de version

});

var _default = (0, _mongoose.model)('Task', taskSchema); //El nombre del modelo. y lo exporto
//mongo crea la coleccion del nombre, pero en plural, pero es es tasks


exports["default"] = _default;