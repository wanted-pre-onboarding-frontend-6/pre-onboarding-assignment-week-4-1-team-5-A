import { AxiosResponse } from 'axios';

export type UserApiParamType = {
  paramsSerializer?: any;
  params?: any;
  data?: any;
  userId?: number;
  userSettingId?: string;
};

export interface UserApiImpl {
  //create
  addUser: ({ data }: UserApiParamType) => Promise<AxiosResponse<any>>;
  addUserSetting: ({ data }: UserApiParamType) => Promise<AxiosResponse<any>>;
  //read
  getUserList: ({ params }: UserApiParamType) => Promise<AxiosResponse<any>>;
  getUserDetail: ({ userId }: UserApiParamType) => Promise<AxiosResponse<any>>;
  getUserSetting: ({ params, paramsSerializer }: UserApiParamType) => Promise<AxiosResponse<any>>;
  //update
  updateUser: ({ userId, data }: UserApiParamType) => Promise<AxiosResponse<any>>;
  //delete
  deleteUser: ({ userId }: UserApiParamType) => Promise<AxiosResponse<any>>;
  deleteUserSetting: ({ userSettingId }: UserApiParamType) => Promise<AxiosResponse<any>>;
}
