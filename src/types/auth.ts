import { User } from "./user";

type LoginReq = {
  email: string,
  password: string,
};

type LoginRes = {
  access_token: string,
  refresh_token: string,
};


type AuthReducerInitialState = {
  user: User | null,
};

export type {
  LoginReq,
  LoginRes,
  AuthReducerInitialState,
};
