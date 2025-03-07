const jsonServer = require("json-server");
const cors = require("cors"); // Import CORS
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Enable CORS for all routes
server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Start JSON Server
const PORT = process.env.PORT || 3000;
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
