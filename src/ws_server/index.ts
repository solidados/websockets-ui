import WebSocket, { WebSocketServer } from 'ws';

const WSS_PORT = 3000;

const wss: WebSocketServer = new WebSocketServer({ port: WSS_PORT, perMessageDeflate: false });

wss.on('connection', (wsClient: WebSocket): void => {
  wsClient.on('error', console.error);
  wsClient.on('message', (data): void => {
    try {
      const stringData: string = data.toString();
      const parsedData = JSON.parse(stringData);
      console.log(parsedData);
    } catch (err) {
      console.error(err instanceof Error ? err.message : err);
    }
  });
});

wss.on('reg', (data) => {
  console.log('ok========================');
  wss.emit('reg', {
    type: 'reg',
    data: {
      name: 'test1',
      index: 1,
      error: 0,
      errorText: '',
    },
    id: 0,
  });
});

wss.on('listening', (): void => {
  const port = wss.options.port ?? 'unknown';
  console.log(`WS-server is running on port: ${port}`);
});
