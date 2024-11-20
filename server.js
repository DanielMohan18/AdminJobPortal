import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('data.json'); 
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);


const PORT = process.env.PORT || 3040;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});