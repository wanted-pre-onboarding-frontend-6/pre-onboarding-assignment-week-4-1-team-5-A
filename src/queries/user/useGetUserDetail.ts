import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { UserService } from 'apis';
import { AxiosError, AxiosResponse } from 'axios';
import { GET_USER_DETAIL, GET_USER_LIST } from 'libs/consts/querykeys';

type useGetUserDetailType = {
  data?: any;
  userId?: any;
  options?: UseQueryOptions<AxiosResponse<any>, AxiosError<any>, any, [string, any]>;
};

const useGetUserDetail = <TData = AxiosResponse<any>>({
  userId,
  options,
}: useGetUserDetailType): UseQueryResult<TData, AxiosError<any, any>> =>
  useQuery([GET_USER_DETAIL, userId], () => UserService.getUserDetail({ userId }), {
    ...options,
    retry: false, // 실패시 재시도 막기
    refetchOnWindowFocus: false, /// 브라우저를 다시 눌렀을때 refetch 막기
    refetchOnMount: false, /// Mount 됐을 때 refetch 막기
    refetchOnReconnect: false, /// reconnect 됐을 때 막기
  });
export default useGetUserDetail;
