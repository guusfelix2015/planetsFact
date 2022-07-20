const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data/dbcopy.json");
const middlewares = jsonServer.defaults({ static: "./assets" });

server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 3000, () => {
  console.log("JSON Server is running");
});
