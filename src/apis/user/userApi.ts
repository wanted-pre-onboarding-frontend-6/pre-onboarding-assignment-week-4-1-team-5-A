import { AxiosResponse } from 'axios';
import { UserApiImpl, UserApiParamType } from './userImpl';

class UserApi implements UserApiImpl {
  baseHttp: any;
  private path = '/users';

  constructor(http: any) {
    this.baseHttp = http;
  }

  public addUser({ data }: UserApiParamType): Promise<AxiosResponse<any>> {
    return this.baseHttp.post(this.path, data);
  }

  public addUserSetting({ data }: UserApiParamType): Promise<AxiosResponse<any>> {
    return this.baseHttp.post('/userSetting', data);
  }

  public getUserDetail({ userId }: UserApiParamType): Promise<AxiosResponse<any>> {
    return this.baseHttp.get(`${this.path}/${userId}`);
  }

  public getUserList({ params }: UserApiParamType): Promise<AxiosResponse<any>> {
    return this.baseHttp.get(this.path, { params });
  }

  public getUserSetting({ params }: UserApiParamType): Promise<AxiosResponse<any>> {
    return this.baseHttp.get('/userSetting', { params });
  }

  public updateUser({ userId, data }: UserApiParamType): Promise<AxiosResponse<any>> {
    return this.baseHttp.put(`${this.path}/${userId}`, data);
  }

  public deleteUser({ userId }: UserApiParamType): Promise<AxiosResponse<any>> {
    return this.baseHttp.delete(`${this.path}/${userId}`);
  }

  public deleteUserSetting({ userSettingId }: UserApiParamType): Promise<AxiosResponse<any>> {
    return this.baseHttp.delete(`/userSetting/${userSettingId}`);
  }
}
export default UserApi;
