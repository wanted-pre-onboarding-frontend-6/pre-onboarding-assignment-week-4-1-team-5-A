import Http from 'apis/coreApi';
import TokenService from 'services/TokenService';

interface ParamsType {
  params?: string | object;
  data?: any;
  userId?: number | undefined;
}

class AccountApi {
  http: any;
  path: string;
  token: any;

  constructor() {
    this.token = TokenService.getToken(process.env.REACT_APP_TOKEN_KEY as string);
    this.http = new Http(process.env.REACT_APP_API_URL, this.token ? this.token : undefined);
    this.path = '/account';
  }

  public getList({ params }: ParamsType) {
    return this.http.get(this.path, params);
  }

  public getListALL() {
    return this.http.get(this.path);
  }

  public getInfo({ params }: ParamsType) {
    return this.http.get(this.path, params);
  }
}
export default new AccountApi();
