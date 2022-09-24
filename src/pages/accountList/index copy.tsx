import Button from 'components/Button/Button';
import PageNation from 'components/Pagenation/Pagenation';
import { useState } from 'react';
// import ListTable from 'container/ListTable/Table';

const AccountListPage = () => {
  const [page, setPage] = useState(1);

  return (
    <div>
      <h1>accountlist Page</h1>
      <PageNation page={page} totalPage={16} limit={10} setPage={setPage} />
    </div>
  );
};
export default AccountListPage;
