type User = {
  id: number,
  email: string,
  name: string,
  password: string,
  role: 'customer' | 'admin',
  avatar: string,
}

type UserRes = User;

type RegisterUserReq = Omit<User, 'id'>;

type UpdateUserReq = {
  id: number,
  userNewData: Partial<Omit<User, 'id' | 'role'>>
};

type CheckEmailReq = {
  email: string,
};

type CheckEmailRes = {
  isAvailable: boolean,
};
