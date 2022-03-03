import Task from "../models/Task";

export const renderTasks = async (req, res) => {
    //Le digo que quiero que renderice el archivp
    //Ademas es un arreglo de objetos de MOngoDB. Los trafome con el lean
    const tasks = await Task.find().lean() //Busca objetos de la coleccion
    //le agregue la propiedad extra.  Para que devuelva objetos tipicos. Es lean
    //Antes de que se muestre la pagina
    //Es consulta asique es asincrono
    //console.log(tasks);
    res.render('index.hbs', {tasks:tasks}); //
    //Le paso el objeto con la propiedades tareas. Y con valor de tareas, mando las que obtengo de la base de datos
};


export  const createTask = async (req, res) => {
    try{
        //console.log(req.body) //recibo el objeto
        const task = Task(req.body) //Aqui recibo el modelo task. Recibo los datos que se envian

        //console.log(task)
        //const taskSaved= await task.save() //Save permite anñadir a mongodb
        //sabe es asicrono. Asique lleva await
        //al guardarse debuelve el onjeto que se guarda en mongo db.
        await task.save() //Save permite anñadir a mongodb
        res.redirect("/"); //Con esto digo que me redireccione a la pagina proncopal
        //console.log(taskSaved);

        //res.send("add task")
    }catch (e) {
        console.error(e);
    }
};

export const renderTaskEdit =async (req, res) => {
    //Asigno parametro en id, y eso puede cambiar
    try{
        const task =  await Task.findById(req.params.id).lean() //Esto es una consulta del modelo de tareas.
        //Es objeto de mongo asique lo trasformo a java
        //console.log(req.params.id)
        res.render('edit', {task:task})
    }
    catch (e) {
        console.error(e)
    }
};

export  const editTask =async (req,res) =>{
    //Edit recibe de parametro el id del objeto. Un parametro es algo que puede cambiar
    const {id} = req.params;
    await Task.findByIdAndUpdate(id, req.body);//llamdo el id de parametros, y llamo el body, para actualizar
    //como no quiero usar la tarea solo dejo el await
    console.log(req.body);
    console.log(req.params);
    res.redirect("/");
};

export const deleteTask =  async (req, res) =>{
    //Este id esta porque es el nombre que le asigno al parametro
    const {id} = req.params //Aqui digo que lea el id de req.para
    await Task.findByIdAndDelete(id)
    res.redirect("/");
};

export  const toogleTask = async (req, res)=> {
    const {id} = req.params;
    const task = await Task.findById(id);
    task.done = !task.done; //Esto cambia true por false y viceversa
    await task.save();
    //console.log(task);
    res.redirect('/');
}


