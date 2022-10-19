import Thead from 'components/Table/thead/Thead';
import { lazy, Suspense } from 'react';
import * as Styled from './Style';
const Tdata = lazy(() => import('components/Table/tdata/Tdata'));

export interface TableType {
  type: 'account' | 'user';
  list: any;
  onEditUser?: ({ editName, userinfo, setEdit }: any) => any;
  onDeleteUser?: ({ userId }: any) => void;
}

const ListTable = ({ type, list, onEditUser, onDeleteUser }: TableType) => {
  return (
    <Styled.Table>
      <Thead type={type} />
      <Styled.Tbody>
        <Suspense fallback={<></>}>
          {list &&
            list.map((data: any) => (
              <Tdata
                key={data.uuid}
                type={type}
                data={data}
                onEditUser={onEditUser}
                onDeleteUser={onDeleteUser}
              />
            ))}
        </Suspense>
      </Styled.Tbody>
    </Styled.Table>
  );
};
export default ListTable;
