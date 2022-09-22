import { useMutation } from '@tanstack/react-query';
import userApi from 'apis/user/userApi';
import TokenService from 'services/TokenService';

type loginDataType = {
  email: string;
  password: string;
};

const useLoginUser = ({ email, password }: loginDataType) => {
  const loginMutaite = useMutation(
    ({ email, password }: loginDataType) => userApi.loginUser({ data: { email, password } }),
    {
      onSuccess: (data: any) => {
        TokenService.setToken({
          key: process.env.REACT_APP_TOKEN_KEY as string,
          token: data.token,
        });
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );
  loginMutaite.mutate;
};
export default useLoginUser;
