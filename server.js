import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('data.json'); // Path to your data file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.use(jsonServer.bodyParser);
server.put('/candidates/:cid', (req, res) => {
  console.log('Received PUT request:', req.body);
  res.status(200).json(req.body);
});

const PORT = process.env.PORT || 3040;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});