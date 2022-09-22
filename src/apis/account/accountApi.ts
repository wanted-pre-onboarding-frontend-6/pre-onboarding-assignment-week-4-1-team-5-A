import Http from 'apis/coreApi';

interface ParamsType {
  params?: string | object;
  data?: any;
  userId?: number | undefined;
}

class AccountApi {
  http: any;
  path: string;

  constructor() {
    this.http = new Http(process.env.REACT_APP_API_URL);
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
