import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { UserService } from 'apis';
import { AxiosError, AxiosResponse } from 'axios';
import { GET_USER_LIST } from 'libs/consts/querykeys';

type useGetUserListType = {
  data?: any;
  params?: any;
  options?: UseQueryOptions<AxiosResponse<any>, AxiosError<any>, any, [string, any]>;
};

const useGetUserList = <TData = AxiosResponse<any>>({
  params,
  options,
}: useGetUserListType): UseQueryResult<TData, AxiosError<any, any>> =>
  useQuery([GET_USER_LIST, params], () => UserService.getUserList({ params }), {
    ...options,

    retry: false, // // 실패시 재시도 막기
    refetchOnWindowFocus: true, // 브라우저를 다시 눌렀을때 refetch 막기
    refetchOnMount: false, /// Mount 됐을 때 refetch 막기
    refetchOnReconnect: false, // reconnect 됐을 때 막기
    cacheTime: 1000 * 60 * 60, // 1시간
    staleTime: 0, // 0으로 설정하면 캐시를 사용하지 않음
  });
export default useGetUserList;
