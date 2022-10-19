import { useEffect, useRef, useState } from 'react';
import ListTable from 'container/ListTable/Table';
import * as Styled from './Style';
import Search from 'components/Search/Search';
import AccoutListFilter from './components/Filter/Filter';
import useQueryString from 'hooks/useQureyString';
import useAccountList from 'queries/account/useAccountList';
import PageNation from 'components/Pagenation/Pagenation';
import { UserService } from 'apis';
import { AcouuntInfo } from 'types/api/accountApi.type';

const AccountListPage = () => {
  //qs
  const qs = useQueryString();

  const q = qs.get('q') || undefined;
  const limit = parseInt(qs.get('limit') as string) || 10;
  const page = parseInt(qs.get('page') as string) || 1;
  const sort = qs.get('sort') || 'createdAt';
  const order = qs.get('order') || 'desc';

  const [accountList, setAccountList] = useState<AcouuntInfo[]>([]);
  const pageLimt = useRef(5);
  const [totalPage, setTotalPage] = useState(0);

  const accountListQurey = useAccountList({
    params: {
      _page: page,
      _limit: sort,
      _sort: sort,
      _order: order,
      q,
    },
  });

  const allAccountListQuery = useAccountList({
    params: {
      q,
    },
  });

  // totalPage
  useEffect(() => {
    if (!allAccountListQuery.data?.data) return;
    setTotalPage(Math.ceil(allAccountListQuery.data?.data.length / limit));
  }, [allAccountListQuery.data, limit, accountList]);

  useEffect(() => {
    if (!accountListQurey.data?.data) return;
    if (accountListQurey.data.data === 0) return setAccountList([]);
    let userIdList: number[] = [];
    const accountListResponse = accountListQurey.data.data;

    for (const account of accountListResponse) {
      userIdList.push(account.user_id);
    }

    const setUserIdList = new Set(userIdList);
    userIdList = [...setUserIdList];

    UserService.getUserList({ params: { id: userIdList } }).then((res) => {
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
    <>
      <Styled.Wrapeer>
        <Styled.Header>
          <Search />
          <Styled.Filter>
            <AccoutListFilter />
          </Styled.Filter>
        </Styled.Header>
        <ListTable type="account" list={accountList} />
        <PageNation page={page} totalPage={totalPage} limit={pageLimt.current} />
      </Styled.Wrapeer>
    </>
  );
};
export default AccountListPage;
