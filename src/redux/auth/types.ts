import { ApiParamsT } from '@types';

export interface LogginPayload extends ApiParamsT {
  username: string;
  password: string;
  fcmToken: string | null;
}

export type LoginSuccessPayload = {};

export type UserLogin = {
  data: {
    id: string;
    username: string;
    email: string;
    token: string;
  };
};
