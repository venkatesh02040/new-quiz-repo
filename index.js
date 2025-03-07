const jsonServer = require("json-server");
const cors = require("cors"); // Import CORS middleware

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; // Choose port like 8080, 3001

server.use(cors()); 
server.use(middlewares);
server.use(router);

server.listen(port)
