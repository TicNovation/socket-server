import Server from "./classes/server";
import { SERVER_PORT } from "./global/enviroment";
import router from "./routes/router";
import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server.instance;

//Body parser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

server.app.use(cors({origin: true, credentials: true}));
//Rutas
server.app.use('/', router);

server.start(()=>{
    console.log('Servidor corriendo en el puerto '+SERVER_PORT);
});