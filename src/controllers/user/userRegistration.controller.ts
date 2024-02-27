import WebSocket from 'ws';
import { randomUUID } from 'crypto';
import { UserRegistrationInterface, RegistrationResponse } from '../../interfaces/user/userRegistration.interface';

export const regUser = (ws: WebSocket, data: UserRegistrationInterface): void => {
  const userName: string = data.data.name;
  const sessionID: string = randomUUID();

  const regResponse: RegistrationResponse = {
    type: 'reg',
    data: JSON.stringify({
      name: userName,
      index: sessionID,
      error: false,
      errorText: 'some Error:',
    }),
    id: 0,
  };

  ws.send(JSON.stringify(regResponse));
};
