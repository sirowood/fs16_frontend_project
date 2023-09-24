type LoginReq = {
  email: string,
  password: string,
};

type LoginRes = {
  access_token: string,
  refresh_token: string,
};