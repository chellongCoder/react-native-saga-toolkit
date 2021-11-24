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

export interface GetUserParams extends ApiParamsT {
  id?: string;
}

export type GetUserSuccessPayload = {
  data: {
    _id: string;
    verified: boolean;
    avatar: string;
    username: string;
    email: string;
    code: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    fullname: string;
    wallet: string;
    wishlist: any[];
    kyc: string[];
    fcmToken: string;
  };
  message: string;
};
