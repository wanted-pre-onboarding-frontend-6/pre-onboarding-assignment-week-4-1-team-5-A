import useListUser from 'queries/user/useListUser';
import { UserList } from 'types/user';
import styled from 'styled-components';
import useSettingUser from 'queries/user/useSettingUser';
import { useEffect, useState } from 'react';
import accountApi from 'apis/account/accountApi';
import userApi from 'apis/user/userApi';
import PageNation from 'components/Pagenation/Pagenation';
import Thead from 'components/Table/thead/Thead';
import Tbody from 'components/Table/tbody/Tbody';
import useInput from 'hooks/useInput';

const UserListPage = () => {
  const [page, onChagePage, setPage] = useInput(1);
  const [limit, onChageLimt, setLimit] = useInput(10);
  const [sort, onChangeSort, setSort] = useInput('createdAt');
  const [order, onChageOrder, setOrder] = useInput('desc');
  const [isStaff, onChageStaff, setIsStaff] = useInput(true); // undefined, true, false
  const [isAtcive, onChagneActive, setIsActive] = useInput(true); // undefined, true, false

  const [pageLimt, setPageLimt] = useState(5);
  const [totalPage, setTotalPage] = useState(0);

  const [userUUIDlist, setUserUUIDlist] = useState<any>([]);
  const [userList, setUserList] = useState<any>([]);

  const userSettingQurey = useSettingUser({
    _page: page,
    _limit: limit,
    _sort: sort,
    _order: order,
    is_staff: isStaff,
    is_active: isAtcive,
  });

  const allUserSettingQuery = useSettingUser({
    is_staff: isStaff,
    is_active: isAtcive,
  });

  // usresetting  성공적으로 불러와졌다면
  /* 
  1. userUUIDlist set // usersetting 값의 uuid 배열 ===> userList와의 foreign key
  2. userList set // userSetting 데이터로 user setting
  */
  useEffect(() => {
    if (!userSettingQurey.data?.data) return;
    const userSettingData = userSettingQurey.data.data;
    const userUUIDlist = [];

    for (const setting of userSettingData) {
      userUUIDlist.push(setting.uuid);
    }

    setUserList(userSettingQurey.data.data);
    setUserUUIDlist(userUUIDlist);
  }, [userSettingQurey.data]);

  // uuid를 바탕으로
  // user list 불러오는 역할
  // 배열을 쿼리스트링 화

  useEffect(() => {
    if (!userUUIDlist) return;
    if (!userList) return;

    // uuid 쿼리 스트링화를 위한 url 객체
    const uuidPramse = new URLSearchParams();

    //id 쿼리 스트링화를 위한 url 객체
    const idParam = new URLSearchParams();
    // userd와 setting data가 담길 배열
    const userWidthSetting: any[] = [];

    // user_id의 배열
    const userIdList: any[] = [];

    // 배열의 쿼리화를 위해 쿼리 객체에 데이터 추가
    for (const uuid of userUUIDlist) {
      uuidPramse.append('uuid', uuid);
    }

    userApi
      // 데이터의 쿼리화 후 api 전송
      .getList({ paramsSerializer: uuidPramse.toString() })
      .then((res: any) => {
        const userListData = res.data;

        // userList => userSetting의 data
        for (const userinfo of userListData) {
          // userListData => uuid를 통해 불러온 실제 db userList의 data
          // 관계역전 ==> 안시켜도됩니다
          // user => [setting: Setting]
          const user = userList.find((user: UserList) => user.uuid === userinfo.uuid);
          user.user = userinfo;
          user.account = 0;
          // user = { ... userList, setting: userSetting }
          userWidthSetting.push(user); // user와 setting 값이 같이 있는 배열
          userIdList.push(user.user.id); // account와 user의 공통점이 uuid가 아니라 id값
        }

        // 배열 쿼리화 위해 추가
        for (const id of userIdList) {
          idParam.append('user_id', id);
        }

        // 이하 동문
        accountApi
          .getList({ paramsSerializer: idParam.toString() })
          .then((res: any) => {
            const accountList = res.data;
            for (const account of accountList) {
              const user = userWidthSetting.find((user: any) => user.user.id === account.user_id);
              user.account += 1;
            }
            setUserList(userWidthSetting);
          })
          .catch((err: any) => {
            console.error(err);
          });
      })

      // 함수화 시켜서 await, promise로 처리 훨씬 더 깔끔한 코드 탄생, 유즈쿼리 화
      .catch((err: any) => {
        console.error(err);
      });
  }, [userUUIDlist]);

  // 토탈페이지 계산
  useEffect(() => {
    if (!allUserSettingQuery.data?.data) return;
    setTotalPage(Math.ceil(allUserSettingQuery.data?.data.length / limit));
  }, [allUserSettingQuery.data, limit]);

  console.log(userList);

  return (
    <>
      <Container>
        <Table>
          <Thead type="user" />
          <tbody>
            {userList.map((user: any) => (
              <tr>
                <td>{user.user?.id}</td>
                <td>{user.user?.id}</td>
                <td>{user.user?.id}</td>
                <td>{user.user?.id}</td>
                <td>{user.user?.id}</td>
                <td>{user.user?.id}</td>
                <td>{user.user?.id}</td>
                <td>{user.user?.id}</td>
                <td>{user.user?.id}</td>
                <td>{user.user?.id}</td>
                <td>{user.user?.id}</td>
                <td>{user.user?.id}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      {/*제가 만든 페이지네이션 page => 현재페이지 totalpage , pageLimt 1~5, 1~10, setPage = 페이지 변경 함수*/}
      <PageNation page={page} totalPage={totalPage} limit={pageLimt} setPage={setPage} />
    </>
  );
};
export default UserListPage;

const Container = styled.section`
  display: flex;
  justify-content: center;
`;

const Table = styled.table`
  background: ${({ theme }) => theme.palette.subColor};
  width: calc(100% - 380px);
`;
