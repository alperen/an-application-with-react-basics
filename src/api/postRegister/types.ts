export interface PostRegisterInput {
  clientId: string;
  email: string;
  name: string;
}

export interface PostRegisterResponse {
  meta: {
    request_id: string;
  };
  data: {
    client_id: string;
    email: string;
    sl_token: string;
  };
}
