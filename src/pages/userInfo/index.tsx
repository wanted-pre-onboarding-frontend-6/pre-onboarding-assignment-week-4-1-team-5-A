import { UserService } from 'apis';
import PageNation from 'components/Pagenation/Pagenation';
import ListTable from 'container/ListTable/Table';
import useQueryString from 'hooks/useQureyString';
import useAccountList from 'queries/account/useAccountList';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserDetail from './components/Detail/Detail';
import * as Styled from './Style';

const UserInfoPage = () => {
  const qs = useQueryString();
  const { userId } = useParams();
  const limit = parseInt(qs.get('limit') as string) || 10;

  const page = parseInt(qs.get('page') as string) || 1;
  const [accountList, setAccountList] = useState<any>([]);
  const pageLimt = useRef(5);
  const [totalPage, setTotalPage] = useState(0);

  const accountListQurey = useAccountList({
    params: {
      _page: page,
      user_id: userId,
    },
  });

  useEffect(() => {
    if (!accountListQurey.data?.data) return;
    setTotalPage(Math.ceil(accountListQurey.data?.data.length / limit));
  }, [accountListQurey.data, limit, accountList]);

  useEffect(() => {
    if (!accountListQurey.data?.data) return;
    if (accountListQurey.data.data === 0) return setAccountList([]);
    const accountListResponse = accountListQurey.data.data;

    UserService.getUserList({ params: { id: userId } }).then((res) => {
      const userinfo = res.data;

      for (const account of accountListResponse) {
        for (const user of userinfo) {
          if (account.user_id === user.id) {
            account.username = user.name;
          }
        }
      }

      setAccountList(accountListResponse);
    });
  }, [accountListQurey.data]);

  return (
    <Styled.Wrapper>
      <UserDetail />
      <ListTable type="account" list={accountList} />
      <PageNation page={page} totalPage={totalPage} limit={pageLimt.current} />
    </Styled.Wrapper>
  );
};

export default UserInfoPage;
