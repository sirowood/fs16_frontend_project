type User = {
  id: number,
  email: string,
  name: string,
  password: string,
  role: string,
  avatar: string,
};

type RegisterUserReq = Omit<User, 'id'>;

type UpdateUserReq = {
  id: number,
  userNewData: Partial<Omit<User, 'id' | 'role'>>
};

type CheckEmailRes = {
  isAvailable: boolean,
};

export type {
  User,
  RegisterUserReq,
  UpdateUserReq,
  CheckEmailRes,
};
