import { AxiosResponse } from 'axios';
import { AuthApiParamType, AuthAptiImpl } from './autImpl';

class AuthApi implements AuthAptiImpl {
  baseHttp: any;
  private path = '/users';

  constructor(http: any) {
    this.baseHttp = http;
  }

  login({ data }: AuthApiParamType): Promise<AxiosResponse<any>> {
    return this.baseHttp.post('/login', data);
  }

  logout(): Promise<AxiosResponse<any>> {
    return this.baseHttp.post('/logout');
  }

  signup({ data }: AuthApiParamType): Promise<AxiosResponse<any>> {
    return this.baseHttp.post(this.path, data);
  }

  jwtrefresh({ token }: AuthApiParamType): Promise<AxiosResponse<any>> {
    return this.baseHttp.post(this.path + '/jwtrefresh', token);
  }
}
export default AuthApi;
