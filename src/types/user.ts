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
  userNewData: Partial<Omit<User, 'id' | 'role'>>;
};

type UpdateUserInfoFormProps = Omit<User, 'role' | 'password'>;

type UpdateUserPasswordFormProps = Pick<User, 'id'>;

export type {
  User,
  RegisterUserReq,
  UpdateUserInfoFormProps,
  UpdateUserPasswordFormProps,
  UpdateUserReq,
};
