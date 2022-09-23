import Tbody from 'components/Table/tbody/Tbody';
import Thead from 'components/Table/thead/Thead';
import * as Styled from './Style';

export interface TableType {
  type: 'account' | 'user';
}

function ListTable({ type }: TableType) {
  return (
    <Styled.Table>
      <Thead type={type} />
      <Tbody type={type} />
    </Styled.Table>
  );
}
export default ListTable;
