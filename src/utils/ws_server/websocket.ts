import WebSocket, { Server as WebSocketServer } from 'ws';
import { UserRegistrationInterface, RegistrationResponse } from '../../interfaces/user/userRegistration.interface';

export default class WebSocketServerClass {
  private server: WebSocketServer;

  constructor(port: number) {
    this.server = new WebSocketServer({ port: port, perMessageDeflate: false });
    this.server.on('connection', this.handleConnection.bind(this));
    this.server.on('listening', this.handleListening.bind(this));
  }

  private handleConnection(wsClient: WebSocket): void {
    wsClient.on('error', console.error);
    wsClient.on('message', (data): void => {
      try {
        const requestData: UserRegistrationInterface = JSON.parse(data.toString());

        if (requestData.type === 'reg') {
          console.log('OK ====== ');
        }

        const responseData: RegistrationResponse = {
          type: 'reg',
          data: {
            name: requestData.data.name,
            index: 1,
            error: false, // Например, результат вашей логики
            errorText: '', // Например, результат вашей логики
          },
          id: 0,
        };

        wsClient.send(JSON.stringify(responseData));
      } catch (err) {
        console.error(err instanceof Error ? err.message : err);
      }
    });
  }

  private handleListening(): void {
    const port = this.server.options.port ?? 'unknown';
    console.log(`WS-server is running on port: ${port}`);
  }
}
