import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AccountService } from 'apis';
import { AxiosError, AxiosResponse } from 'axios';
import { GET_ACCOUNT_DETAIL } from 'libs/consts/querykeys';

type useGetAccountListtype = {
  data?: any;
  accountId?: any;
  options?: UseQueryOptions<AxiosResponse<any>, AxiosError<any>, any, [string, any]>;
};

const useAccountDetail = <TData = AxiosResponse<any>>({
  accountId,
  options,
}: useGetAccountListtype): UseQueryResult<TData, AxiosError<any>> =>
  useQuery([GET_ACCOUNT_DETAIL, accountId], () => AccountService.getAccountDetail({ accountId }), {
    ...options,
    retry: false,
    refetchOnWindowFocus: false,
  });
export default useAccountDetail;
