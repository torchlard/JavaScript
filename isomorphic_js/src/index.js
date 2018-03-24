import Hapi from 'hapi';

const server = Hapi.server({
  host: 'localhost',
  port: 8000
});

server.route({
  method: 'GET',
  path: '/hello',
  handler: (req, res) => 'hello world'
});

const init = async () => {
  await server.start();
  console.log(`server running at: ${server.info.uri}`);
  
};

init();






