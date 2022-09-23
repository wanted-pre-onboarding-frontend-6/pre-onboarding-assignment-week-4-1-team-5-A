import Http from 'apis/coreApi';
import TokenService from 'services/TokenService';

interface ParamsType {
  params?: string | object;
  data?: any;
  userId?: number | undefined;
}

class UserApi {
  http: any;
  path: string;
  token: string | null | undefined;

  constructor(token: string | null | undefined) {
    this.token = token;
    this.http = new Http(process.env.REACT_APP_API_URL, this.token ? this.token : undefined);
    this.path = '/users';
  }

  public addUser({ data }: ParamsType) {
    return this.http.post(this.path, data);
  }

  public getList({ params }: ParamsType) {
    console.log(params);
    return this.http.get(this.path, params);
  }

  public getListALL() {
    return this.http.get(this.path);
  }

  public getInfo({ params }: ParamsType) {
    return this.http.get(this.path, params);
  }

  public loginUser({ data }: ParamsType) {
    return this.http.post('/login', data);
  }

  public getUserSetting({ params }: ParamsType) {
    return this.http.get('/userSetting', params);
  }
}
export default new UserApi(TokenService.getToken(process.env.REACT_APP_TOKEN_KEY as string));
