import Http from 'apis/coreApi';

interface ParamsType {
  params?: string | object;
  data?: any;
  userId?: number | undefined;
}

class UerApi {
  http: any;
  path: string;

  constructor() {
    this.http = new Http(process.env.REACT_APP_API_URL);
    this.path = '/users';
  }

  public addUser({ data }: ParamsType) {
    return this.http.post(this.path, data);
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

  public loginUser({ data }: ParamsType) {
    return this.http.post('/login', data);
  }

  public getUserSetting({ params }: ParamsType) {
    return this.http.get('/userSetting', params);
  }
}
export default new UerApi();
