export interface UserRegistrationInterface {
  type: 'reg';
  data: {
    name: string;
    password: string;
  };
  id: 0;
}

export interface RegistrationResponse {
  type: 'reg';
  data: string;
  id: 0;
}
