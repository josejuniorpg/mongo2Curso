//import './config';
import app from './app';
import './database';
import {PORT} from "./config";


app.listen(PORT) //Aqui le digo que escuche que quiero correr codigo.
console.log('server listening on port'.green, PORT)
//!Este es codigo de aranque!


