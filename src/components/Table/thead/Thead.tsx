import { ACCOUNT_TITLE, USER_TITLE } from 'libs/consts/tableTitle';

export interface TableType {
  type: 'account' | 'user';
}

const Thead = ({ type }: TableType) => {
  return (
    <thead>
      <tr>
        {type === 'user'
          ? USER_TITLE.map((title, index) => <th key={index}>{title}</th>)
          : ACCOUNT_TITLE.map((title, index) => <th key={index}>{title}</th>)}
      </tr>
    </thead>
  );
};
export default Thead;
