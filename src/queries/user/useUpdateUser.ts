import userApi from 'apis/user/userApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { USER } from 'libs/consts/querykeys';

const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(userApi.updateUser, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([USER]);
    },
  });
  return { mutate };
};

export default useUpdateUser;
