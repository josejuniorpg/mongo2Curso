import {connect} from "mongoose"; //Aqui importo la funcion
import {MONGODB_URI} from'./config';

(async () => {
    try{ const db = await connect(MONGODB_URI); //llamo al metodo conect de mongo.
//Sempre debo decir porque protocolo se comunica.
//awair le dice que despues de termina de ejecutar haga lo de abajo
//db trae insormacion de la base de datos
        console.log("DB connect to", db.connection.name);}
    catch (e){
        console.error(e);
    }
})()



