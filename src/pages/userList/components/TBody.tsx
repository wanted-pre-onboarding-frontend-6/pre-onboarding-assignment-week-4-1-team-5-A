import accountApi from 'apis/account/accountApi';
import userApi from 'apis/user/userApi';
import useUpdateUser from 'queries/user/useUpdateUser';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserList, UserSetting } from 'types/user';
import useDeleteUser from '../../../queries/user/useDeleteUser';

function TBody({ user }: { user: UserList }) {
  const [userSetting, setUserSetting] = useState<UserSetting>();
  const [userAccount, setUserAccount] = useState();
  const [isEditMode, setIsEditMode] = useState(false);
  const [newName, setNewName] = useState(user.name);

  const { mutate: deleteUser } = useDeleteUser();
  const { mutate: updateUser } = useUpdateUser();

  const getUserSettingHandler = async (uuid: any) => {
    try {
      const res = await userApi.getUserSetting(uuid);
      setUserSetting(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getAccountCount = async (userId: number) => {
    try {
      const res = await accountApi.getCount(userId);
      setUserAccount(res.data.length);
    } catch (error) {
      console.log(error);
    }
  };

  const userGenderHandler = (genderNum: number) => {
    if (genderNum === 1 || genderNum === 3) {
      return 'male';
    } else {
      return 'female';
    }
  };

  const deleteUserHandler = async (id: number) => {
    deleteUser(id);
  };

  const updateUserHandler = async (id: number) => {
    await updateUser({ id, newName });
    setIsEditMode(false);
  };

  useEffect(() => {
    getUserSettingHandler(user.uuid);
    getAccountCount(user.id);
  }, []);

  return (
    <tr>
      <td>
        <button type="button" onClick={() => userApi.deleteUser(user.id)}>
          X
        </button>
      </td>
      <td>
        {isEditMode ? (
          <>
            <input value={newName} onChange={(e) => setNewName(e.target.value)} />
            <button onClick={() => updateUserHandler(user.id)}>완료</button>
          </>
        ) : (
          <div>
            <Link to={`/users/user-list/${user.id}`}> {user.name}</Link>
            <button type="button" onClick={() => setIsEditMode(true)}>
              수정
            </button>
          </div>
        )}
      </td>
      <td>{userAccount}</td>
      <td>{user.email}</td>
      <td>{userGenderHandler(user.gender_origin)}</td>
      <td>{user.birth_date}</td>
      <td>{user.phone_number}</td>
      <td>{user.last_login}</td>
      <td>{userSetting?.allow_marketing_push.toString()}</td>
      <td>{userSetting?.is_staff.toString()}</td>
      <td>{userSetting?.is_active.toString()}</td>
      <td>{user.created_at}</td>
    </tr>
  );
}

export default TBody;
