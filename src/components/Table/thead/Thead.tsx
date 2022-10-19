import { ACCOUNT_TITLE, USER_TITLE } from 'libs/consts/tableTitle';
import * as Styled from './Style';

export interface TableType {
  type: 'account' | 'user';
}

const Thead = ({ type }: TableType) => {
  return (
    <Styled.Thead type={type}>
      <tr>
        {type === 'user'
          ? USER_TITLE.map((title, index) => <th key={index}>{title}</th>)
          : ACCOUNT_TITLE.map((title, index) => <th key={index}>{title}</th>)}
      </tr>
    </Styled.Thead>
  );
};
export default Thead;
