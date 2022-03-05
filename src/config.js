import {config} from "dotenv";
config()

//Esto hace que cuando llame al archivo estp lea en .env
export const MONGODB_URI= "mongodb://localhost:27017/crud-mongo" ||'mongodb://localhost/test';
//console.log(process.env.MONGODB_URI);
// se cambia el mongodb
//proces, sirve para acceder a variable en el proceso principal. Que es mi computador

export const PORT = process.env.PORT ||4000;
