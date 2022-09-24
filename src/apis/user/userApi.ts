import Http from 'apis/coreApi';
import TokenService from 'services/TokenService';

interface ParamsType {
  params?: string | object;
  data?: any;
  userId?: number | undefined;
  id?: number;
  name?: string;
}

class UserApi {
  http: any;
  path: string;
  token: string | null | undefined;

  constructor(token: string | null | undefined) {
    this.http = new Http(process.env.REACT_APP_API_URL, token ? token : undefined);
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

  public getUserSetting(uuid: string) {
    return this.http.get(`/userSetting/?uuid=${uuid}`);
  }

  public deleteUser(id: number) {
    return this.http.delete(`/users/${id}`);
  }

  public updateUser({ id, newName }: { id: number; newName: string }) {
    return this.http.put(`/users/${id}`, {
      newName,
    });
  }
}
export default new UserApi(TokenService.getToken(process.env.REACT_APP_TOKEN_KEY as string));
