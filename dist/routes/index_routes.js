"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks_controller = require("../controllers/tasks_controller");

//Router sirve para separar rutas en otro archivo
var router = (0, _express.Router)(); //Guardo el objeto que devuelve en una costante
//import moduleName from '../models/Task';
//import Task from "../models/Task";

//import req from "express/lib/request";
//import res from "express/lib/response";
//GET
router.get("/", _tasks_controller.renderTasks); //Aqui digo que cuando visiten la ruta inicial.

router.get("/edit/:id", _tasks_controller.renderTaskEdit);
router.get("/delete/:id", _tasks_controller.deleteTask);
router.get('/toggleDone/:id', _tasks_controller.toogleTask); //POST

router.post("/tasks/add", _tasks_controller.createTask);
router.post("/edit/:id", _tasks_controller.editTask); //Get es para splicitar infromacion
//Post es para guardar datos
//put es para actualizar datos

var _default = router;
exports["default"] = _default;