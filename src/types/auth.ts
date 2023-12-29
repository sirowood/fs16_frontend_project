import { User, UserRes } from "./user";

type LoginReq = {
  email: string,
  password: string,
};

type LoginRes = {
  token: string,
};

type RegisterUserReq = Omit<User, 'id' | 'addresses'>;

type AuthReducerInitialState = {
  user: UserRes | null,
};

export type {
  LoginReq,
  LoginRes,
  AuthReducerInitialState,
  RegisterUserReq,
};
