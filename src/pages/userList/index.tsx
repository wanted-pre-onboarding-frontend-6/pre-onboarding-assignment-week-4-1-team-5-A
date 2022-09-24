import useListUser from 'queries/user/useListUser';
import { UserList } from 'types/user';
import Thead from 'components/Table/thead/Thead';
import TBody from './components/TBody';
import styled from 'styled-components';

const UserListPage = () => {
  const { data: listData } = useListUser({
    _page: 1,
    _limit: 10,
    _sort: 'desc',
  });

  const userList: UserList[] = listData?.data;

  return (
    <>
      <Container>
        <Table>
          <Thead type="user" />
          <tbody>
            {userList && userList.map((detail, key) => <TBody key={key} user={detail} />)}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
export default UserListPage;

const Table = styled.table`
  background: ${({ theme }) => theme.palette.subColor};
  width: calc(100% - 380px);
  text-align: center;
  border: 1px solid;
`;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: center;
  height: 80%;
`;
