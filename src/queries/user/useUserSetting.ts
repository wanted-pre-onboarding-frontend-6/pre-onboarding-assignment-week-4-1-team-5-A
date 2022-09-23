import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import UserApi from 'apis/user/userApi';
import { AxiosError, AxiosResponse } from 'axios';
import { GET_USER_SETTING } from 'libs/consts/querykeys';

const useListUser = <TData = AxiosResponse<any>>(
  { _page, _limit, _sort, _state }: any,
  options?: UseQueryOptions<AxiosResponse<any>, AxiosError<any>, TData, [string, any]>,
): UseQueryResult<TData, AxiosError<any>> =>
  useQuery(
    [GET_USER_SETTING, { _page, _limit, _sort, _state }],
    () => UserApi.getUserSetting({ params: { _page, _limit, _sort, _state } }),
    {
      ...options,
      retry: false,
      refetchOnWindowFocus: false,
    },
  );
export default useListUser;
