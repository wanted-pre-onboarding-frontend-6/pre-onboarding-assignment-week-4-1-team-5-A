import { AxiosResponse } from 'axios';

export type AccountApiParamType = {
  paramsSerializer?: any;
  params?: any;
  data?: any;
  accountId?: number;
};

export interface AccountApiImpl {
  getAccountList: ({ data }: AccountApiParamType) => Promise<AxiosResponse<any>>;
  getAccountDetail: ({ accountId }: AccountApiParamType) => Promise<AxiosResponse<any>>;
}
