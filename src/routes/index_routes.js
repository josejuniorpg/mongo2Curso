import {Router} from 'express' //Router sirve para separar rutas en otro archivo
const router =  Router() //Guardo el objeto que devuelve en una costante
//import moduleName from '../models/Task';
//import Task from "../models/Task";
import {renderTasks, createTask, editTask, deleteTask, toogleTask} from "../controllers/tasks_controller";
import {renderTaskEdit} from "../controllers/tasks_controller";

//import req from "express/lib/request";
//import res from "express/lib/response";



//GET
router.get("/", renderTasks);//Aqui digo que cuando visiten la ruta inicial.
router.get("/edit/:id",  renderTaskEdit);
router.get("/delete/:id", deleteTask);
router.get('/toggleDone/:id', toogleTask);
//POST
router.post("/tasks/add", createTask);
router.post("/edit/:id", editTask);


//Get es para splicitar infromacion
//Post es para guardar datos
//put es para actualizar datos
export default router;