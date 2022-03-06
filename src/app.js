import path from "path";
import express from "express";
import morgan from "morgan"; //es un midle
import {create} from "express-handlebars";
import indexRoutes from "./routes/index_routes";



const app = express();

// settings
app.set("port", process.env.PORT || 3000);
//Le digo que o lo mando al process porto(variable) oh al 3000
app.set("views", path.join(__dirname, "views"));
app.engine(
    ".hbs",
    create({
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "partials"),
        defaulLayout: "main",
        extname: ".hbs",
    }).engine
);
app.set("view engine", ".hbs");

//middleware
//sirven para antes de que llegue las rutas de mi peticion
app.use(morgan('dev')); //Al ejecutarlo recibe la propiedad dev
app.use(express.urlencoded({extended: false})); // Trasforma a objeyo json
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
app.use(indexRoutes);
//static files  //Son los que puede acceder el buscador
app.use(express.static(path.join(__dirname, "public"))) //Estoy uniendo 2 directorios
//Con esto express sabe que la carpeta public se puede leer
export default app; //Exporto por defercto el objeto app


//!Este es codigo de applicacion!