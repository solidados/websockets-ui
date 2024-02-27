import WebSocket, { WebSocketServer } from 'ws';
import { regUser } from '../../controllers/user/userRegistration.controller';

const WSS_PORT = 3000;

const wss = new WebSocketServer({ port: WSS_PORT });

wss.on('connection', (ws: WebSocket): void => {
  ws.on('message', (message): void => {
    try {
      const data = JSON.parse(message.toString());
      if (data.type === 'reg') {
        regUser(ws, data);
      }
    } catch (err) {
      console.error(err instanceof Error ? err.message : err);
    }
  });
});
