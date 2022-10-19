import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AccountService } from 'apis';
import AccountApi from 'apis/account/accountApi';
import { AxiosError, AxiosResponse } from 'axios';
import { GET_ACCOUNT_LIST } from 'libs/consts/querykeys';

type useGetAccountListtype = {
  data?: any;
  params?: any;
  options?: UseQueryOptions<AxiosResponse<any>, AxiosError<any>, any, [string, any]>;
};

const useAccountList = <TData = AxiosResponse<any>>({
  params,
  options,
}: useGetAccountListtype): UseQueryResult<TData, AxiosError<any>> =>
  useQuery([GET_ACCOUNT_LIST, params], () => AccountService.getAccountList({ params }), {
    ...options,
    retry: false,
    refetchOnWindowFocus: false,
  });
export default useAccountList;
