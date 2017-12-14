'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
    host: '127.0.0.1',
    port: 3333
});

// GET http://localhost:3333/api
server.route({
    path: '/api',
    method: 'GET',
    handler: (request, reply) => {
        let result = { message: 'ok' };
        reply(result);
    }
});

server.route({
    path: '/api/path/{name}',
    method: 'POST',
    handler: (request, reply) => {
        reply({ message: `ok ${request.params.name} ${JSON.stringify(request.payload)}` });
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at ' + server.info.uri);
});