export interface TableType {
  type: 'account' | 'user';
}
const user_array = [
  {
    id: 9,
    uuid: '9863068c-6df2-41ef-a3ca-46020aca8a10',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/772.jpg',
    name: 'Phillip 김',
    email: '.@naver.com',
    age: 26,
    gender_origin: 2,
    birth_date: '1975-03-17T03:31:34.516Z',
    phone_number: '010-2575-2702',
    address: 'Cuba 고성시',
    detail_address: '34221 방배동 Apt. 799',
    last_login: '2022-06-13T21:25:45.436Z',
    created_at: '2020-10-15T15:47:07.844Z',
    updated_at: '2020-10-15T08:36:39.229Z',
  },
];

const account_array = [
  {
    id: 1,
    user_id: 1,
    uuid: '067d2042-5372-4d50-af98-0b1e5aaa07ae',
    broker_id: '247',
    status: 4,
    number: '567767002143',
    name: 'Savings Account',
    assets: '5600269.58',
    payments: '75725723.84',
    is_active: false,
    created_at: '2019-05-29T16:42:58.816Z',
    updated_at: '2022-01-10T01:55:09.305Z',
  },
];

const Tbody = ({ type }: TableType) => {
  return (
    <tbody>
      <tr>
        <>
          {type === 'user'
            ? user_array.map((content) => (
                <span key={content.id}>
                  <td>X</td>
                  <td>{content.name}</td>
                  <td>{content.id}</td>
                  <td>{content.email}</td>
                  <td>{content.gender_origin}</td>
                  <td>{content.birth_date}</td>
                  <td>{content.phone_number}</td>
                  <td>{content.last_login}</td>
                  <td>{content.id}</td>
                  <td>{content.id}</td>
                  <td>{content.id}</td>
                  <td>{content.created_at}</td>
                </span>
              ))
            : account_array.map((content) => (
                <span key={content.id}>
                  <td>{content.id}</td>
                  <td>{content.id}</td>
                  <td>{content.number}</td>
                  <td>{content.status}</td>
                  <td>{content.name}</td>
                  <td>{content.assets}</td>
                  <td>{content.payments}</td>
                  <td>{content.id}</td>
                  <td>{content.created_at}</td>
                </span>
              ))}
        </>
      </tr>
    </tbody>
  );
};
export default Tbody;
