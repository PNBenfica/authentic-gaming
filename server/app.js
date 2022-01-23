const ws = require('ws');

const wss = new ws.WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
    wss.clients.forEach(function each(client) {
      if (client.readyState === ws.OPEN) {
        client.send(data);
      }
    });
  });
});