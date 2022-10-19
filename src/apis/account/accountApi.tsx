import { AxiosResponse } from 'axios';
import { AccountApiImpl, AccountApiParamType } from './accountImpl';

class AccountApi implements AccountApiImpl {
  baseHttp: any;
  private path = '/accounts';

  constructor(http: any) {
    this.baseHttp = http;
  }

  public getAccountList({ params }: AccountApiParamType): Promise<AxiosResponse<any>> {
    return this.baseHttp.get(this.path, { params });
  }

  public getAccountDetail({ accountId, params }: AccountApiParamType): Promise<AxiosResponse<any>> {
    return this.baseHttp.get(`${this.path}/${accountId}`, params);
  }
}
export default AccountApi;
