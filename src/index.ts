import { httpServer } from './http_server';
import './ws_server';

const HTTP_PORT = 8181;

httpServer.listen(HTTP_PORT, (): void => {
  console.log(`HTTP-server is running on port: ${HTTP_PORT}`);
});
