type UserBase = {
  email: string,
  password: string,
  name: string,
  avatar: string,
}

type User = UserBase & {
  id: number,
  role: 'customer' | 'admin',
}