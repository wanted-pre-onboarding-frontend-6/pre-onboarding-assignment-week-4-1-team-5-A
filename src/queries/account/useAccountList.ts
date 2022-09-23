import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import AccountApi from 'apis/account/accountApi';
import { AxiosError, AxiosResponse } from 'axios';
import { GET_ACCOUNT_LIST } from 'libs/consts/querykeys';

const useAccountList = <TData = AxiosResponse<any>>(
  { _page, _limit, _sort, _state }: any,
  options?: UseQueryOptions<AxiosResponse<any>, AxiosError<any>, TData, [string, any]>,
): UseQueryResult<TData, AxiosError<any>> =>
  useQuery(
    [GET_ACCOUNT_LIST, { _page, _limit, _sort, _state }],
    () => AccountApi.getList({ params: { _page, _limit, _sort, _state } }),
    {
      ...options,
      retry: false,
      refetchOnWindowFocus: false,
    },
  );
export default useAccountList;
