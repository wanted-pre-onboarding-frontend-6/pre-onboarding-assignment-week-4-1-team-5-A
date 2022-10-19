import AccountApi from './account/accountApi';
import AuthApi from './auth/authApi';
import Http from './http/http';
import UserApi from './user/userApi';

const baseHttp = new Http({
  baseURL: process.env.REACT_APP_BASE_URL,
  tokenActive: false,
});

const TokenbaseHttp = new Http({
  baseURL: process.env.REACT_APP_BASE_URL,
  tokenActive: true,
});

export const AccountService = new AccountApi(TokenbaseHttp);
export const AuthService = new AuthApi(baseHttp);
export const UserService = new UserApi(TokenbaseHttp);
