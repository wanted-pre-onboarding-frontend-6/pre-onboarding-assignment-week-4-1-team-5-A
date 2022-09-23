import { userAtom, userListAtom } from 'atom/user/atom';
import useListUser from 'queries/user/useListUser';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { UserList, UserSetting } from 'types/user';
import useUserSetting from 'queries/user/useUserSetting';
import ListTable from 'container/ListTable/Table';
import accountApi from 'apis/account/accountApi';
import axios from 'axios';

const UserListPage = () => {
  const userLists = useListUser({
    _page: 1,
    _limit: 10,
    _sort: 'desc',
  });
  const { data } = useUserSetting({
    _page: 1,
    _limit: 10,
    _sort: 'desc',
  });

  // const getAccountCount = async (id: number) => {
  //   const res = await axios.get(`/?user_id=${id}`);
  //   const array = res.data;
  //   const count = array.length;
  //   res &&
  //     res.forEach((item: any) => {
  //       item.name = id;
  //       item.count = count;
  //     });
  // };

  console.log(data);

  const userSetting = data?.data;
  const [userList, setUserList] = useRecoilState<any>(userListAtom);
  const [userAll, setUserAll] = useRecoilState<any>(userAtom);

  // const mergeArrayObjects = (userList: UserList[], userSetting: UserSetting[]) => {
  //   return (
  //     userSetting &&
  //     userSetting.map((item, i) => {
  //       const data = getAccountCount(item.id);
  //       if (item.uuid === userList[i]?.uuid ===) {
  //         const newArray = Object.assign({}, item, userList[i]);
  //         return newArray
  //       }
  //     })
  //   );
  // };

  // const userAllData = mergeArrayObjects(userList, userSetting);

  // useEffect(() => {
  //   setUserList(userLists.data?.data);
  // }, [userLists, setUserAll]);

  return (
    <div>
      <ListTable type="user" />
    </div>
  );
};
export default UserListPage;
