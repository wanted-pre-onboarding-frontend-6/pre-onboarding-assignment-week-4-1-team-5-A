import { ACCOUNT_TITLE, USER_TITLE } from 'libs/consts/table';

export interface TableType {
  type: 'account' | 'user';
}

const Thead = ({ type }: TableType) => {
  return (
    <thead>
      <tr>
        <>
          {type === 'user'
            ? USER_TITLE.map((title, index) => (
                <span key={index}>
                  <th>{title}</th>
                </span>
              ))
            : ACCOUNT_TITLE.map((title, index) => (
                <span key={index}>
                  <th>{title}</th>
                </span>
              ))}
        </>
      </tr>
    </thead>
  );
};
export default Thead;
