import { Address } from "./address";

type User = {
  id: string,
  email: string,
  firstName: string,
  lastName: string,
  password: string,
  role: string,
  avatar: string,
  addresses: Address[]
};

type UserRes = Omit<User, 'password'>;

type AddUserReq = {
  email: string,
  firstName: string,
  lastName: string,
  password: string,
  role: string,
  avatar: string,
}

type GetUsersRes = {
  items: UserRes[],
  total: number,
  pages: number,
}

type GetUsersReq = {
  offset?: number,
  limit?: number,
};

type UpdateUserReq = {
  id: string,
  userNewData: Partial<Omit<User, 'id' | 'role' | 'addresses'>>;
};

type ChangePasswordReq = {
  originalPassword: string,
  newPassword: string,
};

type UpdateProfileFormProps = Omit<User, 'role' | 'password' | 'addresses'>;

type UpdateUserPasswordFormProps = Pick<User, 'id'>;

export type {
  User,
  UserRes,
  GetUsersRes,
  GetUsersReq,
  AddUserReq,
  UpdateProfileFormProps,
  UpdateUserPasswordFormProps,
  UpdateUserReq,
  ChangePasswordReq,
};
