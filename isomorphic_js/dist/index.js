'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = _hapi2.default.server({
  host: 'localhost',
  port: 8000
});

server.route({
  method: 'GET',
  path: '/hello',
  handler: function handler(req, res) {
    return 'hello world';
  }
});

var init = async function init() {
  await server.start();
  console.log('server running at: ' + server.info.uri);
};

init();
