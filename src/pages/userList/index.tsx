import { Dispatch, useEffect, useRef, useState } from 'react';
import PageNation from 'components/Pagenation/Pagenation';
import ListTable from 'container/ListTable/Table';
import useGetUserList from 'queries/user/useGetUserList';
import * as Styled from './Style';
import UserListFilter from './components/Filter/Filter';
import Search from 'components/Search/Search';
import useQueryString from 'hooks/useQureyString';
import UserAddModal from './components/Modal/Modal';
import dayjs from 'dayjs';
import { AccountService, UserService } from 'apis';
import { Userinfo } from 'types/api/userApi.type';

const UserListPage = () => {
  // qs
  const qs = useQueryString();
  const q = qs.get('q');
  const limit = parseInt(qs.get('limit') as string) || 10;
  const page = parseInt(qs.get('page') as string) || 1;
  const sort = qs.get('sort') || 'createdAt';
  const order = qs.get('order') || 'desc';
  const is_staff = qs.get('staff') || undefined;
  const is_active = qs.get('active') || undefined;

  // state
  const [userList, setUserList] = useState<Userinfo[]>([]);

  // pagenation
  const pageLimt = useRef(5);
  const [totalPage, setTotalPage] = useState(0);

  // addmodal state
  const [addUserModal, setAddUserModal] = useState(false);

  // get User List
  const userListQurey = useGetUserList({
    params: {
      _page: page,
      _limit: limit,
      _sort: sort,
      _order: order,
      q,
    },
  });

  // get ALL User List
  const allUserListQuerty = useGetUserList({
    params: {
      q,
    },
  });

  useEffect(() => {
    if (!userListQurey.data) return;
    if (userListQurey.data?.data.length === 0) return setUserList([]);
    const userIdList: number[] = [];
    const userUUIDList: string[] = [];
    const userFullList: Userinfo[] = [];
    const userListResponse = userListQurey.data.data;

    for (const user of userListResponse) {
      userUUIDList.push(user.uuid);
    }

    UserService.getUserSetting({ params: { uuid: userUUIDList, is_staff, is_active } })
      .then(async (res) => {
        const userSetting = res.data;
        if (userSetting.length === 0) return setUserList([]);
        for (const setting of userSetting) {
          const user = userListResponse.find((user: any) => user.uuid === setting.uuid);
          user.setting = setting;
          user.account = 0;
          userFullList.push(user);
        }

        for (const user of userFullList) {
          userIdList.push(user.id);
        }

        const accunt = await AccountService.getAccountList({ params: { user_id: userIdList } });
        const accountList = accunt.data;

        for (const account of accountList) {
          const user = userFullList.find((user: Userinfo) => user.id === account.user_id);
          user!.account += 1;
        }
        setUserList(userFullList);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [userListQurey.data, is_staff, is_active]);

  // totalPage
  useEffect(() => {
    if (!allUserListQuerty.data?.data) return;
    setTotalPage(Math.ceil(allUserListQuerty.data?.data.length / limit));
  }, [allUserListQuerty.data, limit, userList]);

  // open addModalUser
  const onOpenAddUserModal = () => {
    setAddUserModal(true);
  };

  // close addModalUser
  const onCloseAddUserModal = () => {
    setAddUserModal(false);
  };

  // edit user
  const onEditUser = async ({
    editName,
    userinfo,
    setEdit,
  }: {
    editName: string;
    userinfo: Userinfo;
    setEdit: Dispatch<React.SetStateAction<boolean>>;
  }) => {
    if (editName === userinfo.name) return setEdit(false);
    const userId = userinfo.id;
    const data = {
      id: userId,
      name: editName,
      email: userinfo.email,
      password: '1234',
      age: userinfo.age,
      photo: userinfo.photo,
      gender_origin: userinfo.gender_origin,
      uuid: userinfo.uuid,
      birth_date: userinfo.birth_date,
      phone_number: userinfo.phone_number,
      address: userinfo.address,
      detail_address: userinfo.detail_address,
      last_login: userinfo.last_login,
      created_at: userinfo.created_at,
      updated_at: dayjs().format(),
    };

    await UserService.updateUser({ data, userId })
      .then((res) => {
        const { data } = res;
        const newUserList = [...userList];
        const user: Userinfo | undefined = newUserList.find(
          (user: Userinfo) => user.id === data.id,
        );
        if (!user) return;
        user.name = data.name;
        setEdit(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // delete user
  const onDeleteUser = async ({
    userId,
    userSettingId,
  }: {
    userId: number | undefined;
    userSettingId: string | undefined;
  }) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    await UserService.deleteUserSetting({ userSettingId }).then(async () => {
      await UserService.deleteUser({ userId }).then(() => {
        const newUserList = userList.filter((user: Userinfo) => user.id !== userId);
        setUserList(newUserList);
      });
    });
  };

  return (
    <>
      {addUserModal && (
        <UserAddModal
          onCloseAddUserModal={onCloseAddUserModal}
          userList={userList}
          setUserList={setUserList}
        />
      )}
      <Styled.Wrapeer>
        <Styled.Header>
          <Search />
          <Styled.Filter>
            <button onClick={onOpenAddUserModal}>신규유저 추가</button>
            <UserListFilter />
          </Styled.Filter>
        </Styled.Header>
        <ListTable
          type="user"
          list={userList}
          onEditUser={onEditUser}
          onDeleteUser={onDeleteUser}
        />
        <PageNation page={page} totalPage={totalPage} limit={pageLimt.current} />
      </Styled.Wrapeer>
    </>
  );
};
export default UserListPage;
